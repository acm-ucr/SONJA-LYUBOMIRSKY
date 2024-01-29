import Title from "../Title";
import Book from "./Book";
import { BOOKS } from "@/data/Books";

const Books = () => {
  return (
    <section id="Books" className="w-full">
      <Title text="Books" />
      <div className="divide-y-2 gap-2">
        {BOOKS.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
