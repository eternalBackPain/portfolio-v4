import React from "react";

const ResumePage = () => {
  return (
    <>
      <div className="flex justify-between items-center font-medium text-2xl mb-8 tracking-tighter">
        <h1>Resume</h1>
        <h1>John Naoom</h1>
      </div>
      <div className="text-gray-900">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">
          Professional Experience
        </h2>

        <h3 className="font-medium text-l mb-1 tracking-tighter">Lendlease</h3>
        <div className="flex justify-between items-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Automation Paralegal
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            September 2021 – Feburary 2024
          </p>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Education</h2>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Technical Skills
        </h2>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Community/Extra-curricular involvement
        </h2>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Languages</h2>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Referees</h2>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
    </>
  );
};

export default ResumePage;
