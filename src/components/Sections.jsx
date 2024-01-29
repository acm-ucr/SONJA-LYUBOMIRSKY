import React from "react";
import Section from "./Section";
import Content from "./Content";

const Sections = ({ sections }) => {
  return (
    <div className="w-9/12 flex my-8 justify-evenly gap-8">
      <div className="w-8/12">
        {sections.map((section, index) => {
          return (
            <Section key={index} title={section.title} items={section.items} />
          );
        })}
      </div>
      <Content content={sections} />
    </div>
  );
};

export default Sections;
