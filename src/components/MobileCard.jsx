/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

function MobileCard({ captain }) {
  return (
    <Card className="w-[70vw] !border-[var(--brand-blue)] !border-2 mb-5">
      <Card.Img
        src={captain.pic}
        className="h-[275px] object-cover border-slate-300 border-2"
        alt={`${captain.name}'s photo`}
      />
      <Card.Body>
        <Card.Title className="font-gamer-font !text-[var(--brand-pink)] !text-2xl border-b-2 border-[var(--brand-blue)]>{captain.name}">
          {captain.name}
        </Card.Title>
        <Card.Text>{captain.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MobileCard;
