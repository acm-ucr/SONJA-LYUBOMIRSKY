import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import header from "@/public/tv-audio.webp";
import { SECTIONS } from "@/data/Documents/Sections";
import Sections from "@/components/Sections";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-sonja-orange-100 w-full flex justify-evenly items-center h-[50vh]">
        <div className="flex flex-col items-end gap-2">
          <Header text="Media Appearance" />
          <div className="text-right">
            To schedule an interview with Sonja Lyubomirsky, please write to
            &nbsp;
            <Link
              href="mailto:sonja@ucr.edu."
              className="inline text-sonja-blue underline font-bold"
            >
              sonja@ucr.edu.
            </Link>
          </div>
        </div>
        <Image src={header} alt="publicatoins" className="w-1/3" />
      </div>
      <Sections sections={SECTIONS.medias} />
    </div>
  );
};

export default page;
