import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitchFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

//to do: make icons functional links. can just use a tags.

function Footer() {
  return (
    <div className="bg-body-light border-t-4 border-[var(--brand-blue)] m-auto pt-4 text-center text-[var(--brand-pink)]">
      <h6>Check out our social media for updates!</h6>
      <div className="flex justify-center gap-2 mb-4">
        <a
          href="https://www.instagram.com/goldengamers_team/"
          className="no-underline text-[var(--brand-pink)] hover:scale-110"
        >
          <RiInstagramFill />
        </a>
        <a
          href="https://www.facebook.com/wcuextralife"
          className="no-underline text-[var(--brand-pink)] hover:scale-110"
        >
          <RiFacebookBoxFill />
        </a>
        <a
          href="https://www.youtube.com/@wcugoldengamers7550"
          className="no-underline text-[var(--brand-pink)] hover:scale-110"
        >
          <RiYoutubeFill />
        </a>
        <a
          href="https://www.twitch.tv/goldengamers_team"
          className="no-underline text-[var(--brand-pink)] hover:scale-110"
        >
          <RiTwitchFill />
        </a>
        <a
          href="https://twitter.com/wcuextralife?lang=en"
          className="no-underline text-[var(--brand-pink)] hover:scale-110"
        >
          <RiTwitterFill />
        </a>
      </div>
      <p className="bg-body-secondary text-stone-400 p-2 mb-0">
        Website created by Ash Martindale &copy; 2023
      </p>
    </div>
  );
}

export default Footer;
