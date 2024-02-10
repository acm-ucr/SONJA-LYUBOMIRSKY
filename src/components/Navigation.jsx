"use client";
import { NAVIGATION } from "@/data/Navigation";
import Link from "next/link";
import { useState } from "react";

const Naviagtion = () => {
  const [dropdown, setDropdown] = useState("");
  const [subSection, setSubSection] = useState("");
  return (
    <div className="fixed w-full z-10 top-0 bg-white text-2xl py-4 px-4">
      <div className="flex gap-3">
        <Link
          href="/"
          className="font-cormorant text-sonja-orange-200 text-4xl"
        >
          Sonja
        </Link>
        {Object.entries(NAVIGATION).map(([page, navigation], index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col justify-center"
            onMouseEnter={() => {
              setDropdown(page);
            }}
            onMouseLeave={() => setDropdown("")}
          >
            <Link href={navigation.link} className="font-cormorant p-2">
              {navigation.header}
            </Link>
            {dropdown === page && (
              <div className="flex flex-col absolute top-12 left-0 bg-white font-cormorant w-fit">
                {navigation.sections.map((section, index2) => (
                  <div
                    key={index2}
                    className="relative px-2 py-1 hover:bg-sonja-orange-200 hover:text-white"
                    onMouseEnter={() => setSubSection(section.title)}
                    onMouseLeave={() => setSubSection("")}
                  >
                    <Link
                      className="whitespace-nowrap w-full"
                      href={`${navigation.link}#${section.title}`}
                    >
                      {section.title}
                    </Link>
                    {section.subTab && subSection === section.title && (
                      <div className="bg-white text-black absolute left-full top-0 flex flex-col text-2xl">
                        {Object.keys(section.items).map(
                          (subSection, index3) => (
                            <Link
                              className="whitespace-nowrap hover:bg-sonja-orange-200 hover:text-white px-2 py-1"
                              href={`${navigation.link}#${subSection}`}
                              key={index3}
                            >
                              {subSection}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Naviagtion;
