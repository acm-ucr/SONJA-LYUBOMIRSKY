import { UNDER_REVIEW } from "@/data/Publications";
import Publicatoin from "../Publication";
import Title from "../Title";

const UnderReview = () => {
  return (
    <section id="Under Review" className="w-full">
      <Title text="Under Review" />
      <ul class="ps-5 list-disc list-outside text-sm mt-4 divide-y-[1px]">
        {UNDER_REVIEW.map((publication, index) => (
          <Publicatoin key={index} publication={publication} />
        ))}
      </ul>
    </section>
  );
};

export default UnderReview;
