import Link from "next/link";

const Content = ({ content }) => {
  return (
    <div className="flex-grow">
      <ol className="space-y-4 text-gray-500 list-outside">
        {content.map((section, index) => (
          <li key={index}>
            <Link
              className="hover:text-sonja-orange-200 cursor-pointer"
              href={`#${section.title}`}
            >
              {section.title}
            </Link>
            {section.subTab && (
              <ul className="ps-8 mt-2 space-y-1 list-disc list-outside">
                {Object.keys(section.items)
                  .reverse()
                  .map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`#${item}`}
                        className="hover:text-sonja-orange-200 cursor-pointer"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Content;
