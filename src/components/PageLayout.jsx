import Header from "./Header";
import Image from "next/image";
import Sections from "./Sections";
import Button from "./Button";
import { IMAGE } from "@/data/Header";
import Content from "./Content";
import { HEADER, SECTIONS } from "@/data/Documents/Sections";

const PageLayout = ({ header }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-sonja-orange-100 w-full flex justify-evenly items-center h-[50vh]">
        <div className="flex flex-col items-end gap-2">
          <Header text={header} />
          {HEADER[header]?.map((link, index) => (
            <Button text={link.text} link={link.link} key={index} />
          ))}
        </div>
        <Image
          src={IMAGE[header]}
          alt={header}
          className="object-cover w-1/3 h-full"
        />
      </div>
      <div className="w-9/12 flex my-8 justify-evenly gap-8">
        <Sections sections={SECTIONS[header]} />
        <Content content={SECTIONS[header]} />
      </div>
    </div>
  );
};

export default PageLayout;
