import React from "react";

const Gallery = ({photos}) => {
//   loader();
  return (
    <div className="columns-2 sm:columns-3 gap-4 my-8">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`bg-slate-${
            200 + index * 100
          } rounded-md relative h-40 mb-4 ${index % 2 === 0 ? "" : "sm:mb-0"}`}
        >
          {/* Replace with your Image component */}
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

/* <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="bg-slate-200 rounded-md relative h-40 mb-4">
          <Image src={jj} alt="my dog JJ" layout="fill" />
        </div>
        <div className="bg-slate-300 rounded-md relative h-80 mb-4 sm:mb-0"></div>
        <div className="bg-slate-400 rounded-md relative h-40 sm:h-80 sm:mb-4"></div>
        <div className="bg-slate-500 rounded-md relative h-40 mb-4 sm:mb-0"></div>
        <div className="bg-slate-600 rounded-md relative h-40 mb-4"></div>
        <div className="bg-slate-700 rounded-md relative h-80"></div>
      </div> */
