import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import header from "@/public/publications.webp";
import Content from "@/components/paper-publications/Content";
import Publications from "@/components/paper-publications/Section";
import { SECTIONS } from "@/data/publications/Sections";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-sonja-orange-100 w-full flex justify-evenly items-center">
        <div className="flex flex-col items-end gap-2">
          <Header text="Papers & Publications" />
          <Button
            link="https://scholar.google.com/citations?user=CNFj4ZsAAAAJ&hl=en"
            text="Selected Publications (with PDF)"
          />
          <Button
            link="http://sonjalyubomirsky.com/subjective-happiness-scale-shs"
            text="Subjective Happiness Scale"
          />
        </div>
        <Image src={header} alt="publicatoins" className="w-1/4" />
      </div>
      <div className="w-9/12 flex my-8 justify-evenly">
        <div className="w-8/12">
          {SECTIONS.map((section, index) => {
            return (
              <Publications
                key={index}
                title={section.title}
                items={section.items}
              />
            );
          })}
        </div>
        <Content />
      </div>
    </div>
  );
};

export default page;
