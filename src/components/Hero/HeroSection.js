import React from "react";
import heroSection from "../../../public/images/HeroText.svg";
import linkArrow from "../../../public/images/LinkArrow.svg";
import regButton from "../../../public/images/RegisterButton.svg";

function HeroSection() {
  return (
    <div className="relative w-full h-[1972px] bg-cover overflow-y-auto" style={{ backgroundImage: "url('/images/HeroSection.svg')" }}>
      <div className="flex flex-col justify-center items-center relative top-[6rem]">
        <div className="flex relative py-8">
          <img src={heroSection.src} alt="#" className="w-70" />
        </div>
        <div className="font-Minecrafter text-6xl font-black flex relative py-8 flex-col justify-center items-center">
          <div className="flex relative">THINK OUTSIDE THE BOX</div>
          <div className="flex relative">HACK INSIDE IT</div>
        </div>
        {/* <div className="font-Minecrafter text-6xl font-black flex relative">HACK INSIDE IT</div> */}
        <div className="flex relative flex-col justify-center items-center">
          <div className="flex relative text-2xl font-bold font-Space-Grotesk">Dig deeper</div>
          <div className="flex relative"><img src={linkArrow.src} alt="#" /></div>
          <div className="flex relative"><img src={regButton.src} alt="#" /></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;