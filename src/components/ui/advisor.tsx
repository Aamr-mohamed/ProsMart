import React from "react";
import wireCutterLight from "../../images/wirecutterLight.svg";
import advisor from "../../images/advisor.svg";
import sleepolis from "../../images/sleepopolis.svg";
import usaToday from "../../images/usa_today-white.svg";
import { Carousel, Typography } from "@material-tailwind/react";

function Advisors() {
  return (
    <div className="bg-[#0e3739] py-32">
      <section className="flex justify-center">
        <div className="">
          <h1 className="text-center mb-10 text-white font-lato font-bold uppercase text-lg lg:text-xl leading-7 tracking-widest">
            See What the experts say
          </h1>
          <Carousel className="">
            <div className="flex flex-col items-center">
              <img src={wireCutterLight} alt="" className="w-[300px]" />
              <Typography color="white" className="mt-10">
                "[Testers] of the Leesa noted that it was a supportive
                <br />
                mattress with just the right 'sink'—not too soft, not too firm."
              </Typography>
            </div>
            <div className="flex flex-col items-center">
              <img src={advisor} alt="" className="w-[300px]" />
              <Typography color="white" className="mt-10">
                “The Leesa [Original] mattress is a foam mattress that's
                <br />
                designed to offer ideal comfort for all sleeping positions, but
                <br />
                it's especially great for side sleepers because of the pressure
                <br />
                relief it offers and its responsive materials.”
              </Typography>
            </div>
            <div className="flex flex-col items-center">
              <img src={sleepolis} alt="" className="w-[300px]" />
              <Typography color="white" className="mt-10">
                "Made from a blend of proprietary foam, memory foam, and
                <br />
                high-density poly foam, the Leesa [Original] Mattress offers a
                <br />
                softly balanced feel that's great for a wide range of sleepers."
              </Typography>
            </div>
            <div className="flex flex-col items-center">
              <img src={usaToday} alt="" className="w-[300px]" />
              <Typography color="white" className="mt-10">
                "Customers seeking a true hybrid mattress with both
                <br />
                supportive springs and top-quality memory foam should
                <br />
                consider the Leesa Sapira Hybird mattress."
              </Typography>
            </div>
          </Carousel>
          <div className="flex justify-center mx-4">
            <a href="#" className="text-white underline text-center">
              Read more reviews
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Advisors;
