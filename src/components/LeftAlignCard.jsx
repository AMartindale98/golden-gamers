/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

function LeftAlignCard({ captain }) {
  return (
    <Card className="sm:w-[55vw] !grid !grid-cols-[200px_1fr] !border-[var(--brand-blue)] !border-2 ">
      <Card.Img
        src={captain.pic}
        className="h-full object-cover border-slate-300 border-2"
        alt={`${captain.name}'s photo`}
      ></Card.Img>
      <Card.Body>
        <Card.Title className="font-gamer-font !text-[var(--brand-pink)] !text-2xl border-b-2 border-[var(--brand-blue)]">
          {captain.name}
        </Card.Title>
        <Card.Text>{captain.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LeftAlignCard;
