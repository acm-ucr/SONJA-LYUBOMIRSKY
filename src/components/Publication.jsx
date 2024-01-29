const Publicatoin = ({ publication }) => {
  return (
    <li className="my-2 py-4">
      <span className="inline font-bold">{publication.author}&nbsp;</span>
      <span className="inline font-bold">({publication.year}).&nbsp;</span>
      <a
        target="_blank"
        href={publication.link}
        className="underline text-sonja-blue inline"
      >
        {publication.title}.
      </a>
      &nbsp;
      <span className="inline">{publication.publisher}.&nbsp;</span>
      {publication.notes && (
        <span className="inline">({publication.notes}).&nbsp;</span>
      )}
      {publication.buttons &&
        publication.buttons?.map((button, index) => (
          <a
            target="_blank"
            key={index}
            href={button.link}
            className="block items-center gap-2 w-fit text-sm px-3 rounded-full  text-sonja-orange-200 cursor-pointer hover:text-white hover:bg-sonja-orange-200 hover:border-sonja-orange-100 duration-300"
          >
            {button.text}
          </a>
        ))}
    </li>
  );
};

export default Publicatoin;
