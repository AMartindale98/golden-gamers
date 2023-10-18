import { useDonorDrive } from "../contexts/DonorDriveContext";
import { ProgressBar } from "react-bootstrap";

function Progress() {
  const { teamData } = useDonorDrive();
  const percentage = Math.round(
    (teamData.sumDonations / teamData.fundraisingGoal) * 100
  );
  return (
    <section className="pb-5">
      <h1 className="text-amber-500 text-5xl">Our 2023 Progress</h1>
      <h5 className="sm:w-[35vw] m-auto pb-5">
        Thank you to everyone who has donated! Your tax-deductible donations go
        to life-saving treatment and research. You can still donate until the
        end of 2023 by{" "}
        <a
          href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=63882"
          className="text-[var(--brand-blue)] hover:text-[var(--brand-pink)] transition-colors"
        >
          visiting our Extra Life page!
        </a>
      </h5>
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
  );
}

export default Progress;
