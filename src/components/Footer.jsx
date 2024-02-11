import { NAVIGATION } from "@/data/Navigation";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b text-lg py-8 w-full mt-8 from-sonja-orange-300 to-sonja-orange-400 text-white font-cormorant relative flex items-center justify-center">
      <div className="w-11/12 flex items-center justify-between">
        <div>
          <p className="text-3xl font-semibold">About Sonja</p>
          <p>
            Lorem ipsum began as scrambled, nonsensical Latin derived from
            Cicero&apos;s 1st-century BC text De Finibus Bonorum et Malorum.
            CICERO
          </p>
          <p className="font-semibold mt-4">Contact me</p>
          <Link
            href="mailto:sonja.lyubomirsky@ucr.edu"
            className="font-semibold hover:opacity-50"
          >
            sonja.lyubomirsky@ucr.edu
          </Link>
        </div>
        <div className="flex flex-col">
          <Link href="/" className="hover:opacity-50">
            HOME
          </Link>
          {Object.values(NAVIGATION).map(({ header, link }, index) => (
            <Link key={index} href={link} className="hover:opacity-50">
              {header.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
