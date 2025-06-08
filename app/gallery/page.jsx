import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";

export async function loader() {
  const photosDirectory = path.join(process.cwd(), "public/images/gallery");
  const filenames = fs.readdirSync(photosDirectory);

  const photos = filenames.map((filename) => ({
    src: `/images/gallery/${filename}`, // Path relative to the public directory
    alt: `Photo - ${filename}`,
  }));

  return photos;
}

const GalleryPage = async () => {
  const photos = await loader();
  //   console.log(photos);
  
  // remove unused animation style logic

  return (
    <div>
      <h2 className="text-2xl font-medium mb-8 tracking-tighter">Life vibe</h2>
      <div className="flex justify-normal align-middle flex-wrap gap-y-4 gap-x-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative h-52 w-52 rounded-md bg-gray-200`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
