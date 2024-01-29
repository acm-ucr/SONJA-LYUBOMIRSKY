"use client";
import { NAVIGATION } from "@/data/Navigation";
import Link from "next/link";
import { useState } from "react";

const Naviagtion = () => {
  const [dropdown, setDropdown] = useState("");
  const [subSection, setSubSection] = useState("");
  return (
    <div className="fixed w-full z-10 top-0 bg-white text-xl h-12">
      <div className="flex gap-3">
        <Link href="/" className="font-cormorant text-sonja-orange-200">
          Sonja
        </Link>
        {Object.entries(NAVIGATION).map(([page, navigation], index) => (
          <div
            key={index}
            className="relative z-10"
            onMouseEnter={() => {
              setDropdown(page);
            }}
            onMouseLeave={() => setDropdown("")}
          >
            <Link href={navigation.link} className="font-cormorant">
              {navigation.header}
            </Link>
            {dropdown === page && (
              <div className="flex flex-col absolute bg-white font-cormorant w-fit">
                {navigation.sections.map((section, index2) => (
                  <div
                    key={index2}
                    className="relative"
                    onMouseEnter={() => setSubSection(section.title)}
                    onMouseLeave={() => setSubSection("")}
                  >
                    <Link
                      className="whitespace-nowrap"
                      href={`${navigation.link}#${section.title}`}
                    >
                      {section.title}
                    </Link>
                    {section.subTab && subSection === section.title && (
                      <div className="bg-sonja-orange-200 absolute left-[100%] top-0 flex flex-col ">
                        {Object.keys(section.items).map(
                          (subSection, index3) => (
                            <Link
                              className=" whitespace-nowrap"
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
