// // File: app/gallery/page.jsx

// import React from "react";
// import fs from "fs";
// import path from "path";
// // import Gallery from "./components/Gallery";

// // This function runs on the server side to fetch data
// export async function loader() {
//   const photosDirectory = path.join(process.cwd(), "public/images/home");
//   const filenames = fs.readdirSync(photosDirectory);

//   const photos = filenames.map((filename) => ({
//     src: `../public/images/home/${filename}`, // Path relative to the public directory
//     alt: `Photo - ${filename}`,
//   }));

//   return { photos };
// }

// // Your page component, which receives the data from the loader
// const GalleryPage = ({ photos }) => {
//   return (
//     <div className="columns-2 sm:columns-3 gap-4 my-8">
//       {photos.map((photo, index) => (
//         <div key={index} className={`...`}>
//           <Image src={photo.src} alt={photo.alt} layout="fill" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GalleryPage;


import React from 'react'

const Gallery = () => {
  return (
    <div>Gallery</div>
  )
}

export default Gallery