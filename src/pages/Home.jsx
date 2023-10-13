/* eslint-disable react/no-unescaped-entities */
import { ProgressBar } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Border from "../components/Border";
import { useDonorDrive } from "../contexts/DonorDriveContext";

function Home() {
  const { teamData } = useDonorDrive();
  const percentage = Math.round(
    (teamData.sumDonations / teamData.fundraisingGoal) * 100
  );

  //to do: ramp up styling? could add other things to here? idk? animate title maybe?

  return (
    <>
      <NavBar />
      <div className="bg-amber-50 text-center px-3 font-gamer-font text-[var(--brand-pink)] overflow-hidden ">
        <section>
          <h1 className="pt-5 text-amber-500  shimmer-effect text-6xl">
            Welcome!
          </h1>
          <h6 className="sm:w-[35vw] m-auto pt-5 pb-5">
            We are the Golden Gamers, a charity organization that raises money
            for the Children's Miracle Network Hospitals through an annual
            fundraiser called Extra Life.
          </h6>
          <div className="border-8 border-double border-[var(--brand-blue)] rounded-md w-fit m-auto">
            <iframe
              className="m-auto w-[300px] h-[169px] sm:w-[531px] sm:h-[300px]"
              src="https://www.youtube.com/embed/L5mgtynkm4U?si=c9V__3J9tXAgnafJ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <Border />
        <section className="mt-5 pb-5">
          <h1 className="text-amber-500">Our 2023 Progress</h1>
          <p className="sm:w-[35vw] m-auto pb-5">
            Thank you to everyone who has donated! Your tax-deductible donations
            go to life-saving treatment and research. You can still donate until
            the end of 2023 by{" "}
            <a
              href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=63882"
              className="text-[var(--brand-blue)] hover:text-[var(--brand-pink)] transition-colors"
            >
              visiting our Extra Life page!
            </a>
          </p>
          <ProgressBar
            animated
            variant="warning"
            now={percentage}
            label={`${percentage}%`}
            className="sm:w-[70vw] m-auto h-[100px]"
          />
          <div className="sm:flex sm:justify-around mt-2">
            <h4>Raised: ${teamData.sumDonations}</h4>
            <h4>Goal: ${teamData.fundraisingGoal}</h4>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
