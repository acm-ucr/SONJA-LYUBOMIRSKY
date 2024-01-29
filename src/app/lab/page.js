import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import header from "@/public/lab.webp";
import { SECTIONS } from "@/data/Documents/Sections";
import Sections from "@/components/Sections";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-sonja-orange-100 w-full flex justify-evenly items-center h-[50vh]">
        <div className="flex flex-col items-end gap-2 w-1/3">
          <Header text="Positive Activities and Well-Being Laboratory" />
          <Button
            link="https://drsonja.net/media/"
            text="Check us out in the news!"
          />
        </div>
        <Image src={header} alt="publicatoins" className="w-1/3" />
      </div>

      <Sections sections={SECTIONS.lab} />
    </div>
  );
};

export default page;
