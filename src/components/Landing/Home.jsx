import Image from "next/image";
import Profile from "@/public/Profile.webp";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-sonja-orange-300 to-sonja-orange-200 text-white font-cormorant relative w-screen h-screen flex items-center justify-center">
      <div>
        <p className="text-8xl font-semibold my-4">
          SONJA (SOFYA) <br />
          LYUBOMIRSKY
        </p>
        <p className="text-3xl font-semibold text-right">
          Distinguished Professor University of California, Riverside
        </p>
        <p className="font-semibold text-3xl text-right">
          Ph.D. Stanford University, 1994
        </p>
      </div>

      <div className="relative w-1/3">
        <div className="h-[25rem] aspect-square bg-white rounded-full absolute -top-[20%] left-1/2" />
        <Image
          src={Profile}
          alt="Profile Photo"
          className="w-full mx-5 rounded relative"
        />
      </div>
    </div>
  );
};

export default Home;
