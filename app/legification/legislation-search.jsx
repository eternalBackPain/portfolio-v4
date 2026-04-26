"use client";

import { useEffect, useMemo, useState } from "react";

const DATA_URL = "/legification/legislation.json";
const RESULTS_PER_PAGE = 10;
const SEARCH_DEBOUNCE_MS = 150;
const LEGISLATION_TYPES = [
  { value: "Act", label: "Act" },
  { value: "Legislative-instrument", label: "Legislative instrument" },
];

function isSearchableRecord(item) {
  return (
    item &&
    typeof item.id === "string" &&
    typeof item.source === "string" &&
    typeof item.jurisdiction === "string" &&
    typeof item.title === "string" &&
    typeof item.url === "string" &&
    typeof item.type === "string"
  );
}

function getRelevanceScore(normalizedTitle, query) {
  if (normalizedTitle === query) {
    return 0;
  }

  if (normalizedTitle.startsWith(query)) {
    return 1;
  }

  if (normalizedTitle.split(/\s+/).some((word) => word.startsWith(query))) {
    return 2;
  }

  if (normalizedTitle.includes(query)) {
    return 3;
  }

  return 4;
}

function formatType(type) {
  return type === "Legislative-instrument"
    ? "Legislative instrument"
    : type;
}

function getPaginationItems(page, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (page <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (page >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [1, "...", page - 1, page, page + 1, "...", totalPages];
}

export function LegislationSearch() {
  const [legislation, setLegislation] = useState([]);
  const [loadState, setLoadState] = useState("loading");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState(
    () => new Set(LEGISLATION_TYPES.map((type) => type.value))
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let isActive = true;

    async function loadLegislation() {
      try {
        const response = await fetch(DATA_URL, {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to load legislation JSON: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Legislation JSON must be an array.");
        }

        if (!isActive) {
          return;
        }

        setLegislation(
          data.filter(isSearchableRecord).map((item) => ({
            ...item,
            searchTitle: item.title.toLowerCase(),
          }))
        );
        setLoadState("loaded");
      } catch (error) {
        console.error(error);

        if (isActive) {
          setLoadState("error");
        }
      }
    }

    loadLegislation();

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedQuery(query.trim().toLowerCase());
      setCurrentPage(1);
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [query]);

  const results = useMemo(() => {
    if (loadState !== "loaded" || !debouncedQuery) {
      return [];
    }

    return legislation
      .filter(
        (item) =>
          item.jurisdiction === "commonwealth" &&
          selectedTypes.has(item.type) &&
          item.searchTitle.includes(debouncedQuery)
      )
      .sort((left, right) => {
        const scoreDifference =
          getRelevanceScore(left.searchTitle, debouncedQuery) -
          getRelevanceScore(right.searchTitle, debouncedQuery);

        if (scoreDifference !== 0) {
          return scoreDifference;
        }

        return left.title.localeCompare(right.title);
      });
  }, [debouncedQuery, legislation, loadState, selectedTypes]);

  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);
  const pageItems = results.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );
  const paginationItems = getPaginationItems(currentPage, totalPages);

  function toggleType(type) {
    setSelectedTypes((currentTypes) => {
      const nextTypes = new Set(currentTypes);

      if (nextTypes.has(type)) {
        nextTypes.delete(type);
      } else {
        nextTypes.add(type);
      }

      return nextTypes;
    });
    setCurrentPage(1);
  }

  let status = "";

  if (loadState === "loading") {
    status = "Loading legislation...";
  } else if (loadState === "error") {
    status = "Search is unavailable right now.";
  } else if (debouncedQuery && results.length === 0) {
    status = "No legislation found.";
  } else if (results.length > 0) {
    status = `${results.length} result${results.length === 1 ? "" : "s"}.`;
  }

  return (
    <section className="mt-8 mb-4">
      <form
        aria-label="Legislation search"
        className="flex flex-col gap-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          aria-label="Search legislation"
          autoComplete="off"
          autoFocus
          className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-neutral-800 focus:ring-2 focus:ring-neutral-800 dark:border-neutral-700 dark:bg-[#111010] dark:text-white dark:focus:border-neutral-200 dark:focus:ring-neutral-200"
          name="q"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Start typing the name of an Act or Regulation"
          spellCheck="false"
          type="search"
          value={query}
        />

        <fieldset
          aria-label="Legislation type filters"
          className="flex flex-wrap gap-x-4 gap-y-2 border-0 p-0 text-base"
        >
          {LEGISLATION_TYPES.map((type) => (
            <label
              className="inline-flex items-center gap-2"
              key={type.value}
            >
              <input
                checked={selectedTypes.has(type.value)}
                className="h-4 w-4 accent-sky-700"
                name="type"
                onChange={() => toggleType(type.value)}
                type="checkbox"
                value={type.value}
              />
              {type.label}
            </label>
          ))}
        </fieldset>
      </form>

      <p aria-live="polite" className="mt-4 min-h-6 text-sm text-neutral-700 dark:text-neutral-300">
        {status}
      </p>

      {pageItems.length > 0 && (
        <ul
          aria-label="Search results"
          className="mt-2 overflow-hidden rounded-md border border-neutral-300 dark:border-neutral-700"
        >
          {pageItems.map((item) => (
            <li
              className="border-t border-neutral-200 first:border-t-0 dark:border-neutral-800"
              key={item.id}
            >
              <a
                className="block px-4 py-3 transition hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                href={item.url}
                rel="noreferrer"
                target="_blank"
              >
                <span className="block font-medium">{item.title}</span>
                <span className="mt-1 block text-sm text-neutral-700 dark:text-neutral-300">
                  {formatType(item.type)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <nav
          aria-label="Search result pages"
          className="mt-3 flex flex-wrap items-center gap-2"
        >
          <button
            className="min-h-8 rounded-md border border-neutral-300 px-3 py-1 text-sm transition hover:bg-neutral-100 disabled:cursor-default disabled:text-neutral-500 disabled:hover:bg-transparent dark:border-neutral-700 dark:hover:bg-neutral-900 dark:disabled:text-neutral-600"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => page - 1)}
            type="button"
          >
            Prev
          </button>

          {paginationItems.map((page, index) =>
            page === "..." ? (
              <span
                aria-hidden="true"
                className="px-1 text-sm text-neutral-600 dark:text-neutral-400"
                key={`gap-${index}`}
              >
                ...
              </span>
            ) : (
              <button
                aria-current={page === currentPage ? "page" : undefined}
                className="min-h-8 min-w-8 rounded-md border border-neutral-300 px-2 py-1 text-sm transition hover:bg-neutral-100 aria-[current=page]:border-neutral-900 aria-[current=page]:bg-neutral-900 aria-[current=page]:text-white dark:border-neutral-700 dark:hover:bg-neutral-900 dark:aria-[current=page]:border-neutral-100 dark:aria-[current=page]:bg-neutral-100 dark:aria-[current=page]:text-black"
                key={page}
                onClick={() => setCurrentPage(page)}
                type="button"
              >
                {page}
              </button>
            )
          )}

          <button
            className="min-h-8 rounded-md border border-neutral-300 px-3 py-1 text-sm transition hover:bg-neutral-100 disabled:cursor-default disabled:text-neutral-500 disabled:hover:bg-transparent dark:border-neutral-700 dark:hover:bg-neutral-900 dark:disabled:text-neutral-600"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => page + 1)}
            type="button"
          >
            Next
          </button>
        </nav>
      )}
    </section>
  );
}
