"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Book = ({ book }) => {
  const [showVersions, setShowVersions] = useState(false);
  return (
    <section id={book.title} className="w-full p-4 flex flex-col">
      <div className="gap-2 items-center justify-start w-full grid grid-cols-7">
        <Image src={book.image} alt={book.title} className="col-span-1" />
        <div className="col-span-6 flex flex-col justify-between h-full w-full">
          <div className="text-2xl font-bold text-sonja-orange-200">
            {book.title}
          </div>
          <div className="text-lg font-bold w-full">{book.subtitle}</div>
          <div className="text-sm">
            <span className="">{book.author}</span>
            {book.title}
            {book.subtitle}
            {book.publisher}
          </div>
        </div>
      </div>
      {showVersions && (
        <ul class="ps-5 list-disc list-inside text-sm mt-4">
          {book.versions.map((version, index) => (
            <li key={index}>{version}</li>
          ))}
        </ul>
      )}
      <div
        onClick={() => setShowVersions(!showVersions)}
        className="self-end mt-5 flex items-center gap-2 w-fit text-sm px-3 rounded-full border-[1px] border-sonja-orange-200 text-sonja-orange-200 cursor-pointer hover:text-white hover:bg-sonja-orange-200 hover:border-sonja-orange-100 duration-300"
      >
        {showVersions ? "show less versions" : "show all versions"}
        <FaChevronDown
          className={`${showVersions && "rotate-180"} duration-300`}
        />
      </div>
    </section>
  );
};

export default Book;
