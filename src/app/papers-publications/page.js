import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import header from "@/public/publications.webp";
import { SECTIONS } from "@/data/Documents/Sections";
import Sections from "@/components/Sections";

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
      <Sections sections={SECTIONS.publications} />
    </div>
  );
};

export default page;
