"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Document = ({ document }) => {
  const [showVersions, setShowVersions] = useState(false);
  return document.type === "book" ? (
    <section id={document.title} className="w-full p-4 flex flex-col">
      <div className="gap-2 items-center justify-start w-full grid grid-cols-7">
        <Image
          src={document.image}
          alt={document.title}
          className="col-span-1"
        />
        <div className="col-span-6 flex flex-col justify-between h-full w-full">
          <div className="text-2xl font-bold text-sonja-orange-200">
            {document.title}
          </div>
          <div className="text-lg font-bold w-full">{document.subtitle}</div>
          <div className="text-sm">
            <span className="">{document.author}</span>
            {document.title}
            {document.subtitle}
            {document.publisher}
          </div>
        </div>
      </div>
      {showVersions && (
        <ul className="ps-5 list-disc list-inside text-sm mt-4">
          {document.versions.map((version, index) => (
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
  ) : (
    <li className="my-2 py-4">
      {document.author && (
        <span className="inline font-bold">{document.author}&nbsp;</span>
      )}
      {document.date && (
        <span className="inline font-bold">{document.date}.&nbsp;</span>
      )}
      {document.year && (
        <span className="inline font-bold">({document.year}).&nbsp;</span>
      )}
      {document.link ? (
        <Link
          target="_blank"
          href={document.link}
          className="underline text-sonja-blue inline hover:text-sonja-orange-200 duration-300"
        >
          {document.title}.
        </Link>
      ) : (
        <div className="inline">{document.title}.</div>
      )}
      &nbsp;
      <span className="inline">{document.publisher}.&nbsp;</span>
      {document.notes && (
        <span className="inline">({document.notes}).&nbsp;</span>
      )}
      {document.list?.map((item, index) => (
        <div key={index} className="flex ps-4">
          <div>-{item.text}</div>
          {item.link && (
            <Link
              target="_blank"
              href={item.link}
              className="text-sonja-orange-200 inline ml-2"
            >
              listen
            </Link>
          )}
        </div>
      ))}
      {document.buttons &&
        document.buttons?.map((button, index) => (
          <Link
            target="_blank"
            key={index}
            href={button.link}
            className="block items-center gap-2 w-fit text-sm px-3 rounded-full  text-sonja-orange-200 cursor-pointer hover:text-white hover:bg-sonja-orange-200 hover:border-sonja-orange-100 duration-300"
          >
            {button.text}
          </Link>
        ))}
    </li>
  );
};

export default Document;
