const Feeds = ({ title, data, roundedType }) => {
  return (
    <div className="mt-8">
      <div className="font-semibold text-xl">{title}</div>
      <div className="cards">
        {data.map((card) => (
          <div className="cards-card">
            <img
              className={`${
                roundedType === "full" ? "rounded-full" : "rounded-lg"
              } w-40 h-40 mx-auto shadow-lg object-cover drop-shadow-md`}
              src={card.img}
              alt=""
            />
            <span>{card.name}</span>
            <span className="font-light -mt-4">{card.owner}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
