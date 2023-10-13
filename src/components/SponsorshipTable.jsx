//continued work: when you click on a row, modal opens for more info.
//don't love the spacing, maybe even bg coloring?

import { IoCheckmarkDoneOutline } from "react-icons/io5";
import SponsorshipModal from "./SponsorshipModal";
import { useState } from "react";

function SponsorshipTable() {
  const [show, setShow] = useState(false);
  const [copyId, setCopyId] = useState("");

  function handleClose() {
    setShow(false);
  }
  function handleShow(id) {
    setShow(true);
    setCopyId(id);
  }
  return (
    <>
      <table className="table-auto border-separate border-spacing-2 rounded-md !text-[var(--brand-pink)] bg-slate-50 font-gamer-font">
        <thead>
          <tr className="text-lg hover:border-[var(--brand-blue)] hover:bg-white transition-colors  hover:cursor-pointer">
            <th className="p-3 border-2">Sponsorship</th>
            <th className="p-3 border-2">Sponsorship Amount</th>
            <th className="p-3 border-2">Social Media & Website Recognition</th>
            <th className="p-3 border-2">Hourly Stream Shoutout</th>
            <th className="p-3 border-2">Invitation to Event</th>
            <th className="p-3 border-2">Custom Event Recognition</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          <tr
            className="hover:border-[var(--brand-blue)] hover:bg-white transition-colors hover:cursor-pointer"
            onClick={() => handleShow("premiere")}
          >
            <td className="p-3 border-2 font-semibold">Premiere</td>
            <td className="p-3 border-2">$2000</td>
            <td className="border-2  text-green-500">
              <p className="py-3 flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="border-2 text-green-500 ">
              <p className="py-3 flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="border-2  text-green-500 ">
              <p className="py-3 flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="p-3 border-2">
              Logo or name on event merchandise & Twitch stream overlay
            </td>
          </tr>
          <tr
            className="hover:border-[var(--brand-blue)] hover:bg-white transition-colors hover:cursor-pointer"
            onClick={() => handleShow("golden-match")}
          >
            <td className="p-3 border-2 font-semibold">Golden Match</td>
            <td className="p-3 border-2">$1000+</td>
            <td className="border-2  text-green-500">
              <p className="py-3 flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="border-2 text-green-500 ">
              <p className="py-3 flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="border-2  text-green-500 ">
              <p className=" py-3 flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="p-3 border-2">Logo or name on event merchandise</td>
          </tr>
          <tr
            className="hover:border-[var(--brand-blue)] hover:bg-white transition-colors hover:cursor-pointer"
            onClick={() => handleShow("merch-sponsor")}
          >
            <td className="p-3 border-2 font-semibold">Merch Sponsor</td>
            <td className="p-3 border-2">$1000</td>
            <td className="border-2  text-green-500">
              <p className="py-3 flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="border-2 text-green-500 ">
              <p className="py-3 flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="border-2  text-green-500 ">
              <p className="py-3 flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="p-3 border-2">Logo or name on event merchandise</td>
          </tr>
          <tr
            className="hover:border-[var(--brand-blue)] hover:bg-white transition-colors hover:cursor-pointer"
            onClick={() => handleShow("location-sponsor")}
          >
            <td className="p-3 border-2 font-semibold">Location Sponsor</td>
            <td className="p-3 border-2">$2000</td>
            <td className="border-2  text-green-500">
              <p className="flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="border-2 text-green-500 ">
              <p className="flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="border-2  text-green-500 ">
              <p className="flex justify-center">
                <IoCheckmarkDoneOutline size={32} />
              </p>
            </td>
            <td className="p-3 border-2">Logo or name on event merchandise</td>
          </tr>
        </tbody>
      </table>
      <SponsorshipModal show={show} handleClose={handleClose} copyId={copyId} />
    </>
  );
}

export default SponsorshipTable;
