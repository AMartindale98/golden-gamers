/* eslint-disable react/no-unescaped-entities */

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Border from "../components/Border";
import Progress from "../components/Progress";

function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-amber-50 text-center px-3 font-gamer-font text-[var(--brand-pink)] overflow-clip ">
        <section>
          <h1 className="mt-5 text-amber-500  shimmer-effect text-7xl">
            Welcome!
          </h1>
          <h5 className="sm:w-[35vw] m-auto pt-5 pb-5">
            We are the Golden Gamers, a charity organization that raises money
            for the Children's Miracle Network Hospitals through an annual
            fundraiser called Extra Life.
          </h5>
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
        <Progress />
      </div>
      <Footer />
    </>
  );
}

export default Home;
