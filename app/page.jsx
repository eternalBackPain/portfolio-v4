import React from "react";
import Image from "next/image";
import Gallery from "./components/gallery";
import fs from "fs";
import path from "path";
// import jj from "../public/images/home/JJ-3024 × 4032.png";

const HomePage = ({ photos }) => {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-3xl font-medium mb-10 tracking-tighter">
          John Naoom
        </h1>
        <div>
          <p className="mb-2">
            ⚖️ Australian practicing lawyer (expected date of admission:
            September 2024).
          </p>
          <p className="mb-2"> 📈 Economics graduate.</p>
          <p className="mb-2">💻 Programming hobbyist.</p>
          <br></br>
          <p className="mb-4">
            Minim tempor veniam quis excepteur non laboris commodo duis Lorem
            excepteur cillum. Adipisicing pariatur duis nostrud esse est est
            esse est id nisi ea. Sunt incididunt cillum ex incididunt elit
            fugiat occaecat ad. Esse amet cillum magna cupidatat id.
            Exercitation irure minim magna fugiat duis non. Culpa eiusmod anim
            Lorem non esse adipisicing cillum magna aliquip veniam.
          </p>
          <p></p>
        </div>
      </section>
      <h2 className="text-xl font-medium tracking-tighter">Life vibe:</h2>

      <section>
        {/* <Gallery photos={photos}/> */}
        <div className="columns-2 sm:columns-3 gap-4 my-8">
          <div className="bg-slate-200 rounded-md relative h-40 mb-4"></div>
          <div className="bg-slate-300 rounded-md relative h-80 mb-4 sm:mb-0"></div>
          <div className="bg-slate-400 rounded-md relative h-40 sm:h-80 sm:mb-4"></div>
          <div className="bg-slate-500 rounded-md relative h-40 mb-4 sm:mb-0"></div>
          <div className="bg-slate-600 rounded-md relative h-40 mb-4"></div>
          <div className="bg-slate-700 rounded-md relative h-80"></div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
