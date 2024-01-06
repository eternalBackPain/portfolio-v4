import React from "react";
import Link from "next/link";

function formatDate(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;
}

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/eternalBackPain/repos"
  );
  const repos = await response.json();

  //sort the repos in order of updated_at
  repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  return repos;
}

//Ill want to bring in:
//* name
//* html_url
//* description
//* created_at
//* updated_at

const ProjectsPage = async () => {
  const repos = await fetchRepos();
  // console.log(repos);

  return (
    <div>
      <h1 className="text-3xl font-medium mb-10 tracking-tighter">
        My Github Repositories
      </h1>
      <p className="mb-8">
        These are coding projects I've worked on in my spare time. They span web
        development, data analysis and creative programming. I try to develop
        apps that play within law and economics.
      </p>
      <ul>
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="mb-4 bg-sky-200 dark:bg-sky-700 border-none rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 dark:hover:bg-sky-800 duration-300"
          >
            <Link href={repo.html_url} target="_blank">
              <div className="p-4">
                <h2 className="text-2xl font-medium tracking-tighter">{repo.name}</h2>
                <p className="mb-2">{repo.description}</p>
                <div className="flex align-bottom justify-between p-2 bg-white dark:bg-[#111010] bg-opacity-60 border-none rounded-md text-xs">
                  <p>Created at: {formatDate(repo.created_at)}</p>
                  <p>Last updated: {formatDate(repo.updated_at)}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
