/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SponsorshipTable from "../components/SponsorshipTable";

function Sponsorship() {
  return (
    <>
      <NavBar />
      <section className="bg-amber-50 p-5 text-[var(--brand-pink)]">
        <h1 className="font-gamer-font text-amber-500">
          Sponsorship Opportunities
        </h1>
        <p className="p-1">
          We'd like to thank one of our primary sponsors for 2023,{" "}
          <a
            href="https://www.uplink.gg/home"
            className="text-[var(--brand-blue)] hover:text-[var(--brand-pink)]"
          >
            Uplink Studios,
          </a>{" "}
          for hosting us!
        </p>
        <p className="p-1">
          We are accepting sponsors for 2024! There are a variety of ways that
          you can support our team. Please click each level to see more
          information about the opportunity. If you have any interest in
          sponsoring our team or would like more information, please do not
          hesitate to{" "}
          <Link
            to="/contact"
            className="text-[var(--brand-blue)] hover:text-[var(--brand-pink)]"
          >
            contact us.
          </Link>
        </p>
        <div className="overflow-x-auto pt-5">
          <SponsorshipTable />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sponsorship;
