/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

function RightAlignCard({ captain }) {
  return (
    <Card className="sm:w-[55vw] !grid !grid-cols-[1fr_200px] !border-[var(--brand-blue)] !border-2">
      <Card.Body className="text-right">
        <Card.Title className="font-gamer-font !text-[var(--brand-pink)] !text-2xl border-b-2 border-[var(--brand-blue)]">
          {captain.name}
        </Card.Title>
        <Card.Text>{captain.bio}</Card.Text>
      </Card.Body>
      <Card.Img
        src={captain.pic}
        className="h-full object-cover border-slate-300 border-2"
        alt={`${captain.name}'s photo`}
      ></Card.Img>
    </Card>
  );
}

export default RightAlignCard;
