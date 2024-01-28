import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="text-2xl py-1 px-4 border-[1px] border-sonja-black rounded-full font-cormorant hover:text-white hover:bg-sonja-orange-200 hover:border-sonja-orange-100 duration-300"
    >
      {text}
    </Link>
  );
};

export default Button;
