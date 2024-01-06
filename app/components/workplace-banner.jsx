//FOR EACH WORKPLACE, ADD DIFFERENT BACKGROUND COLOUR AND TEXT COLOUR

import React from "react";

const WorkplaceBanner = ({ workplace, children }) => {
  if (workplace == "Maddocks") {
    return (
      <div className="rounded-md p-4 bg-neutral-600 text-white">
        <div className="text-2xl font-medium">{workplace}</div>
        <div>{children}</div>
      </div>
    );
  } else if (workplace == "Lendlease") {
    return (
      <div className="rounded-md p-4 bg-lime-200 dark:text-black">
        <div className="text-2xl font-medium">{workplace}</div>
        <div>{children}</div>
      </div>
    );
  } else if (workplace == "University of Technology Sydney") {
    return (
      <div className="rounded-md p-4 bg-blue-800 text-white">
        <div className="text-2xl font-medium">{workplace}</div>
        <div>{children}</div>
      </div>
    );
  } else {
    return (
      <div className="rounded-md p-4">
        <div className="text-2xl font-medium">{workplace}</div>
        <div>{children}</div>
      </div>
    );
  }
};

export default WorkplaceBanner;
