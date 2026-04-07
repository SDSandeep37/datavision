import "./card.css";
interface cardDetails {
  title: string;
  desc: string;
  img: string;
  alternativeText: string;
}
const Card = ({ title, desc, img, alternativeText }: cardDetails) => {
  return (
    <div className="card flex-1 flex flex-col justify-center items-center gap-2">
      <h3 className="cardTitle font-bold text-[18px]">{title}</h3>
      <p className="cardDes text-[14px] text-gray-400">{desc}</p>
      <img
        src={img}
        alt={alternativeText}
        className="cardImage hover:bg-(--color-dark) rounded-3xl"
      />
    </div>
  );
};

export default Card;
