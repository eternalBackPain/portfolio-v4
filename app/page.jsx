import React from "react";
import Image from "next/image";
import headshot from "../public/images/Headshot 1557 × 2054.jpg";
import Link from "next/link";
// import jj from "../public/images/home/JJ-3024 × 4032.png";

const HomePage = ({ photos }) => {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-3xl font-medium mb-10 tracking-tighter">
          John Naoom
        </h1>
        <div id="intro">
          <div id="name and description" className="mb-14">
            <p className="mb-2">
              ⚖️ Australian practicing lawyer (expected date of admission:
              September 2024).
            </p>
            <p className="mb-2"> 📈 Economics graduate.</p>
            <p className="mb-2">💻 Programming hobbyist.</p>
          </div>
          <div id="quote" className="mb-10 p-4 border-l-4 border-gray-300">
            <p className="mb-2 font-medium">
              "In this world, nothing can be said to be certain, except death
              <u>,</u> <s>and</s> taxes<u>, and back pain</u>."
            </p>
            <p className="italic text-sm pl-6">
              – Benjamin Franklin, in a letter to Jean-Baptiste Le Roy, 1789,
              amended by myself
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-medium tracking-tighter mb-10">
          An introduction
        </h2>
        <div className="flex justify-between gap-4">
          <Image
            alt="my headshot"
            src={headshot}
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover w-2/5"
          />
          <div className="flex flex-col justify-top gap-6">
            <p>Hello learned friend.</p>

            <p>
              I've made this website as a space to publish things about my life. I am to update it as life progresses.
            </p>

            <p>
              Have a browse around, and shoot me a message if anything here
              interests you (my contact deets are on the <Link href="/resume" className="text-blue-500">resume</Link> page).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
