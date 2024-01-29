import Title from "./Title";
import Document from "./Document";

const Section = ({ title, items }) => {
  return (
    <section id={title} className="w-full">
      <Title text={title} />
      <div className="divide-y-2 gap-2">
        {title === "Publications" || title === "Sample National Broadcast Media"
          ? Object.entries(items)
              .reverse()
              .map(([year, publications], index) => (
                <section
                  id={year}
                  key={index}
                  className="divide-y-2 gap-2 divide-sonja-orange-200/50"
                >
                  <div className="text-2xl font-bold text-sonja-orange-200 my-4">
                    {year}
                  </div>
                  <ul className="ps-5 list-disc list-outside text-sm mt-4 divide-y-2">
                    {publications.map((publication, index2) => (
                      <Document key={index2} document={publication} />
                    ))}
                  </ul>
                </section>
              ))
          : items.map((item, index) => (
              <Document key={index} document={item} />
            ))}
      </div>
    </section>
  );
};

export default Section;
