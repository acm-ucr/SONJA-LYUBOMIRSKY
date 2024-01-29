import { BOOKS } from "@/data/Books";
import { PUBLICATIONS } from "@/data/Publications";
const sections = [
  { title: "Books", items: BOOKS.map((book) => book.title) },
  { title: "Publications", items: Object.keys(PUBLICATIONS).reverse() },
  { title: "Under Review", items: [] },
];
const Content = () => {
  return (
    <div className="w-1/5">
      <ol class="space-y-4 text-gray-500 list-outside dark:text-gray-400">
        {sections.map((section, index) => (
          <li key={index}>
            <a
              className="hover:text-sonja-orange-200 cursor-pointer"
              href={`#${section.title}`}
            >
              {section.title}
            </a>
            <ul class="ps-8 mt-2 space-y-1 list-disc list-outside">
              {section.items.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item}`}
                    className="hover:text-sonja-orange-200 cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Content;
