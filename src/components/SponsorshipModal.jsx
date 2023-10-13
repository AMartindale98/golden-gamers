/* eslint-disable react/prop-types */
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function SponsorshipModal({ copyId, show, handleClose }) {
  let copy;
  const allCopy = [
    `Every cent you contribute supports life-saving equipment, medical research, patient programming, and quality of life care for pediatric hospital patients. Donors at the Premiere level are primary sponsors of the Golden Gamers for 2024. Your gift will be recognized at the top level.`,
    `Every cent you contribute supports life-saving equipment, medical research, patient programming, and quality of life care for pediatric hospital patients. Donors at the Golden Match level can encourage donations by matching gifts made by individuals and other organizations. We will time these donations during our Game Day's primary hours.`,
    `Donors at the Merch Sponsor level help equip our players to be the best they can be. Your logo will be displayed prominently on our merchandise in addition to other recognition opportunities.`,
    `Donors at the Location Sponsor level assist our team by providing a space for our Game Day. We require a space that can accommodate up to 30 players. Your space will be featured prominently in all of our promotional materials on Game Day in addition to other recognition opportunities.`,
  ];

  if (copyId === "premiere") copy = allCopy.at(0);
  else if (copyId === "golden-match") copy = allCopy.at(1);
  else if (copyId === "merch-sponsor") copy = allCopy.at(2);
  else if (copyId === "location-sponsor") copy = allCopy.at(3);

  function formatTitle(id) {
    const uppercase = id.toUpperCase();
    // const capitalize = uppercase.slice(0, 1) + id.slice(1);
    const final = uppercase.split("-").join(" ");
    return final;
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        className="bg-amber-300 text-[var(--brand-pink)] font-gamer-font"
      >
        <Modal.Title>{copyId ? formatTitle(copyId) : ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-amber-50">{copy}</Modal.Body>
      <Modal.Footer className="!bg-amber-50">
        <Link to="/contact">
          <Button variant="warning">Contact us</Button>
        </Link>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SponsorshipModal;
