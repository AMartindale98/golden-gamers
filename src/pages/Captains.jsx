import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import LeftAlignCard from "../components/LeftAlignCard";
import RightAlignCard from "../components/RightAlignCard";
import MobileCard from "../components/MobileCard";

function Captains() {
  const captainsInfo = [
    {
      name: "Taylor",
      bio: "Taylor Mattes (she/her) has been participating in Extra Life with the Golden Gamers since 2016, and is very proud to have helped found the organization with her co-captains. Helping to make a positive difference in children's lives while having fun with her friends is something that Taylor cherishes, and is why she continues to play with the Golden Gamers each year. Her favorite games include The Last of Us series, Spiritfarer, and any Kirby title. Outside of gaming, Taylor enjoys theatre, fiber arts, and reading. She works in nonprofit development at Broadway Cares/Equity Fights AIDS in New York City.",
      pic: "/taylor-pic.jpg",
    },
    {
      name: "Celine",
      bio: "Celine is a proud history nerd and fantasy RPG gamer. Her favorite game is Dragon Age: Origins, though she's a sucker for any game with a detailed character creator. When she participated in her first Extra Life event in 2018, she knew that she'd stumbled upon something special. She realized that, when it comes to supporting sick and injured kids in the community, gaming is one of the most powerful and accessible ways to make a difference. Celine is proud to be one of the Golden Gamers' cofounders, and looks forward to the event every year; nowhere else has she seen such a powerful combination of community and caffeine!",
      pic: "/celine-pic.jpg",
    },
    { name: "Max", bio: "Coming soon!", pic: "/coming-soon.jpg" },
    {
      name: "Alex",
      bio: "Coming soon!",
      pic: "/coming-soon.jpg",
    },
    {
      name: "Ryan",
      bio: "Ryan Hayman (he/him) was the Golden Gamers President of 2019-2020. He joined the organization in 2018 because it combined two of his favorite things: video games and charity work. He was glad to be welcomed by a fantastic group of people and has enjoyed working with the team. He loves to play FPS games, RPGs, and slice of life sims such as Stardew Valley. He looks forward to seeing the organization grow, and he feels honored to continue fundraising each year.",
      pic: "/coming-soon.jpg",
    },
    { name: "Darius", bio: "Coming soon!", pic: "/coming-soon.jpg" },
    {
      name: "Ash",
      bio: "Ash Martindale (she/her) joined the Golden Gamers as a player in 2018, then joined the leadership team in 2019 and co-founded the West Chester University iteration of the team. Extra Life has a special place in her heart, as a close family member was treated at one of the Children's Miracle Network Hospitals. Now, she is thrilled to be able to fundraise with her friends and give back. Ash is an avid 'cozy gamer,' and some of her favorite games include Stardew Valley, Wytchwood, Skyrim, and Dragon Age. She is a web developer. (And designed this site!)",
      pic: "/ash-pic.JPG",
    },
  ];
  const width = window.innerWidth;
  const isMobile = width < 640;
  return (
    <>
      <NavBar />
      <section className="bg-amber-50 text-[var(--brand-pink)] p-5">
        <h1 className="font-gamer-font text-amber-500 pb-5">
          Meet Our Captains
        </h1>
        {isMobile && (
          <div className="px-2">
            {captainsInfo.map((captain) => (
              <MobileCard captain={captain} key={captain.name} />
            ))}
          </div>
        )}
        {!isMobile && (
          <>
            <div>
              <LeftAlignCard captain={captainsInfo[0]} />
            </div>
            <div className="w-full flex justify-end py-5">
              <RightAlignCard captain={captainsInfo[1]} />
            </div>
            <div>
              <LeftAlignCard captain={captainsInfo[2]} />
            </div>
            <div className="w-full flex justify-end py-5">
              <RightAlignCard captain={captainsInfo[3]} />
            </div>
            <div>
              <LeftAlignCard captain={captainsInfo[4]} />
            </div>
            <div className="w-full flex justify-end py-5">
              <RightAlignCard captain={captainsInfo[5]} />
            </div>
            <div>
              <LeftAlignCard captain={captainsInfo[6]} />
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Captains;
