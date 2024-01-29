import { PUBLICATIONS } from "@/data/Publications";
import Title from "../Title";
import Publicatoin from "../Publication";

const Publications = () => {
  return (
    <section id="Publications" className="w-full">
      <Title text="Publications" />
      <div className="divide-y-2 gap-2 divide-sonja-orange-200/50">
        {Object.entries(PUBLICATIONS)
          .reverse()
          .map(([year, publications], index) => (
            <section id={year} key={index}>
              <div className="text-2xl font-bold text-sonja-orange-200 my-4">
                {year}
              </div>
              <ul class="ps-5 list-disc list-outside text-sm mt-4 divide-y-[1px]">
                {publications.map((publication, index2) => (
                  <Publicatoin key={index2} publication={publication} />
                ))}
              </ul>
            </section>
          ))}
      </div>
    </section>
  );
};

export default Publications;
