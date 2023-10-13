import { IoLogoGameControllerB } from "react-icons/io";

function Border() {
  return (
    <div className="flex justify-center items-center mx-auto my-32 text-[var(--brand-blue)]">
      <IoLogoGameControllerB size={18} />

      <div className="border-2 border-dotted border-[var(--brand-blue)] h-fit w-[50px] sm:w-[20vw]"></div>
      <IoLogoGameControllerB size={18} />
    </div>
  );
}

export default Border;
