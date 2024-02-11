const ListItems = ({ Icon, title, items }) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <Icon className="text-sonja-orange-200 text-4xl" />
      <p className="font-cormorant text-3xl my-4">{title}</p>
      <ul className="list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
