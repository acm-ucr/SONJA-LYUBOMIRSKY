import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import header from "@/public/publications.webp";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <Header text="Papers & Publications" />
      <Button
        link="https://scholar.google.com/citations?user=CNFj4ZsAAAAJ&hl=en"
        text="Selected Publications (with PDF)"
      />
      <Image src={header} alt="publicatoins" />
      page
    </div>
  );
};

export default page;
