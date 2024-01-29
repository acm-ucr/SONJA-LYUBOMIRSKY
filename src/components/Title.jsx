const Title = ({ text, icon }) => {
  return (
    <div className="text-2xl font-cormorant flex flex-col items-center justify-center gap-2 font-bold">
      <div className="text-sonja-orange-200 text-4xl">{icon}</div>
      {text}
    </div>
  );
};

export default Title;
