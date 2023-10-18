/* eslint-disable react/no-unescaped-entities */
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Timeline from "../components/Timeline";
import Border from "../components/Border";

//to do still: probably edit the languaging. can go

//https://www.npmjs.com/package/react-horizontal-timeline

function About() {
  return (
    <>
      <NavBar />
      <section className="bg-amber-50 m-auto pb-10">
        <div className="px-5 pt-5">
          <h1 className="font-gamer-font text-amber-500">About Us</h1>
          <p className="text-[var(--brand-pink)]">
            We are a service organization that fundraises for the Children's
            Miracle Network Hospitals through an annual event called{" "}
            <a
              href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=63882"
              className="text-[var(--brand-blue)]  hover:text-[var(--brand-pink)] "
            >
              Extra Life
            </a>
            . During this marathon event, players game for 24 hours. Our team
            prefers to play for 25 hours - an extra hour for an extra life! We
            have been operating since 2016, and our network has grown to 50+
            members.
          </p>
          <p className="text-[var(--brand-pink)]">
            Extra Life has recognized our innovative, collegiate model. In 2020,
            we were selected as finalists in Extra Life's Hackathon Competition.
            In 2022, we were invited to discuss our model on a "Best Practices"
            panel at Extra Life United.
          </p>
          <p className="text-[var(--brand-pink)] font-semibold">
            Over our 8 years of fundraising, we have raised over $77,000 for the
            Children's Miracle Network Hospitals.
          </p>
        </div>
        <Border />
        <div className="px-5 pb-5">
          <h1 className="font-gamer-font text-amber-500">Our Story</h1>
          <p className="text-[var(--brand-pink)]">
            We've grown from a small group of friends banding together to game
            for good to an organization that spans multiple states with a
            network of 50+ dedicated players. Check out our story throughout the
            years below!
          </p>
        </div>
        <Timeline />
      </section>
      <Footer />
    </>
  );
}

export default About;
