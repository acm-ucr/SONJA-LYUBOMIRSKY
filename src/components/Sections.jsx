import React from "react";
import Section from "./Section";

const Sections = ({ sections }) => {
  return (
    <div className="w-8/12">
      {sections.map((section, index) => {
        return <Section key={index} section={section} />;
      })}
    </div>
  );
};

export default Sections;
