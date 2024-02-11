import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaEnvelope,
  FaPhoneAlt,
  FaAward,
  FaFile,
} from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import Profile from "@/public/Profile_2.jpeg";
import About1 from "@/public/about_1.jpeg";
import About2 from "@/public/about_2.jpeg";
import ListItems from "./ListItems";
import { history, awards } from "@/data/About";

const About = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <p className="text-6xl text-sonja-orange-200 font-semibold font-cormorant text-center">
        About Sonja Lyubomirsky
      </p>

      <div className="font-cormorant text-2xl flex my-4 flex-wrap">
        <Link
          className="mx-4 flex hover:opacity-50"
          href="https://scholar.google.com/citations?user=CNFj4ZsAAAAJ&hl=en"
          target="_blank"
        >
          <FaGraduationCap className="text-sonja-blue text-4xl mx-2" />
          Google Scholar Page
        </Link>
        <Link
          className="mx-4 flex hover:opacity-50"
          href="mailto:sonja.lyubomirsky@ucr.edu"
          target="_blank"
        >
          <FaEnvelope className="text-sonja-blue text-3xl mx-2" />
          sonja.lyubomirsky@ucr.edu
        </Link>
        <Link
          className="mx-4 flex hover:opacity-50"
          href="tel:9518275041"
          target="_blank"
        >
          <FaPhoneAlt className="text-sonja-blue text-3xl mx-2" />
          (951) 827-5041 (msg only)
        </Link>
        <Link
          className="mx-4 flex hover:opacity-50"
          href="/Lyubomirsky-CV.pdf"
          target="_blank"
        >
          <FaFile className="text-sonja-blue text-3xl mx-2" />
          CV
        </Link>
      </div>

      <p>
        <span className="font-semibold">Office Address:</span> Department of
        Psychology University of California, Riverside, CA 92521
      </p>
      <p>
        <span className="font-semibold">Home Address:</span> Santa Monica,
        California
      </p>

      <div className="flex gap-8 w-8/12 my-8">
        <div className="flex flex-col gap-8">
          <Image src={About1} alt="Sonja with Uplift" />
          <Image src={About2} alt="Sonja with World Knowledge Forum" />
        </div>
        <Image src={Profile} alt="Profile Picture" className="w-1/2 aspect-" />
      </div>

      <div className="flex flex-col items-center bg-sonja-orange-100 w-8/12 p-4">
        <IoMdPerson className="text-sonja-orange-200 text-4xl" />
        <p className="font-semibold font-cormorant text-4xl my-2">
          Biographical Sketch
        </p>
        <p className="font-montserrat text-lg w-11/12">
          Sonja Lyubomirsky, Ph.D., is Distinguished Professor of Psychology at
          the University of California, Riverside and author of The How of
          Happiness and The Myths of Happiness (published in 39 countries). She
          received her B.A. summa cum laude from Harvard University and her
          Ph.D. in social psychology from Stanford University. Lyubomirsky’s
          research—on the possibility of lastingly increasing happiness via
          gratitude, kindness, and connection interventions—have been the
          recipients of many grants and honors, including an Hxonorary Doctorate
          from the University of Basel, the Diener Award for Outstanding
          Midcareer Contributions in Personality Psychology, the Christopher J.
          Peterson Gold Medal, the Distinguished Research Lecturer Award, and a
          Positive Psychology Prize. She lives in Santa Monica, California
          (USA), with her family.
        </p>
      </div>

      <ListItems Icon={FaBookOpen} title="Academic History" items={history} />
      <ListItems
        Icon={FaAward}
        title="Selected Fellowships and Awards"
        items={awards}
      />
    </div>
  );
};

export default About;
