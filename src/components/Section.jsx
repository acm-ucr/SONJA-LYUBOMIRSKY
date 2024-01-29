import Title from "./Title";
import Document from "./Document";

const Section = ({ section }) => {
  return (
    <section id={section.title} className="w-full">
      <Title text={section.title} icon={section.icon} />
      <div className="divide-y-2 gap-2">
        {section.subTab
          ? Object.entries(section.items)
              .reverse()
              .map(([subTitle, subItems], index) => (
                <section
                  id={subTitle}
                  key={index}
                  className="divide-y-2 gap-2 divide-sonja-orange-200/50"
                >
                  <div className="text-2xl font-bold my-4">{subTitle}</div>
                  <ul className="ps-5 list-disc list-outside text-sm mt-4 divide-y-2">
                    {subItems.map((subItem, index2) => (
                      <Document key={index2} document={subItem} />
                    ))}
                  </ul>
                </section>
              ))
          : section.items.map((item, index) => (
              <Document key={index} document={item} />
            ))}
      </div>
    </section>
  );
};

export default Section;
