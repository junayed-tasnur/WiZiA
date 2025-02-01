const Card = () => {
  const cards = [
    {
      id: 1,
      img: "/Vector3.png",
      title: "You’re in Control",
      description:
        "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      id: 2,
      img: "/Vector2.png",
      title: "Infinitely Scalable",
      description:
        "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      id: 3, // Changed id to 3 to avoid duplicate id
      img: "/Vector.png",
      title: "Incredibly Flexible",
      description:
        "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-[1400px] mx-auto">
      {cards.map((card) => (
        <div key={card.id} className="bg-bgc p-6 rounded-lg shadow-md">
          <img src={card.img} alt={card.title} className=" object-cover my-4" />
          <h3 className="text-[28px] font-semibold my-3 text-white">
            {card.title}
          </h3>
          <p className="text-gray-400 text-[22px] mb-1">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
