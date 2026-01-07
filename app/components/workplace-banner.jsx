import React from "react";

const STYLES = {
  Maddocks: {
    container: "bg-neutral-600 text-white",
    asideAGL: "bg-blue-700 text-white",
    asideCBA: "bg-yellow-300 text-black",
    asideDefault: "bg-neutral-700 text-white",
  },
  Lendlease: {
    container: "bg-lime-200 text-black",
    asideDefault: "bg-neutral-100 text-black",
  },
  "University of Technology Sydney": {
    container: "bg-blue-800 text-white",
    asideDefault: "bg-blue-900 text-white",
  },
};

// Slot component: used only to mark "aside" content in MDX
export const WorkplaceBannerAside = ({ workplace, children }) => (
  <>
    <div className="text-2xl font-medium">{workplace}</div>
    <div>{children}</div>
  </>
);

const WorkplaceBanner = ({ workplace, children }) => {
  const styles = STYLES[workplace] || { container: "" };
  const childrenArray = React.Children.toArray(children);

  const asideChildren = childrenArray.filter(
    (child) => React.isValidElement(child) && child.type === WorkplaceBannerAside
  );

  const mainChildren = childrenArray.filter(
    (child) => !(React.isValidElement(child) && child.type === WorkplaceBannerAside)
  );

  const getAsideClassName = (asideEl) => {
    const asideWorkplace = asideEl?.props?.workplace; // e.g. "AGL"
    const asideKey = asideWorkplace
      ? `aside${String(asideWorkplace).replace(/[^a-z0-9]/gi, "")}` // "asideAGL"
      : null;

    return (asideKey && styles[asideKey]) || styles.asideDefault || "";
  };

  return (
    <div className={`rounded-md p-4 ${styles.container || ""}`}>
      {asideChildren.length > 0 && (
        <div className="float-right w-2/5 space-y-3 overflow-hidden">
          {asideChildren.map((asideEl, idx) => (
            <aside
              key={asideEl.props?.workplace ? `${asideEl.props.workplace}-${idx}` : idx}
              className={`rounded-md p-3 ${getAsideClassName(asideEl)}`}
            >
              {asideEl}
            </aside>
          ))}
        </div>
      )}

      <div className="text-2xl font-medium">{workplace}</div>
      <div>{mainChildren}</div>
    </div>
  );
};

export default WorkplaceBanner;
