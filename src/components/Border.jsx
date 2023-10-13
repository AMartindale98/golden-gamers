import { IoLogoGameControllerB } from "react-icons/io";

function Border() {
  return (
    <div className="flex justify-center items-center gap-1 mx-auto my-32 text-[var(--brand-blue)]">
      <div className="border-2 border-dotted border-[var(--brand-blue)] h-fit w-[50px] sm:w-[10vw]"></div>
      <IoLogoGameControllerB size={32} />

      <div className="border-2 border-dotted border-[var(--brand-blue)] h-fit w-[50px] sm:w-[10vw]"></div>
    </div>
  );
}

export default Border;
