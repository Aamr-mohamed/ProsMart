import React from "react";
import heroImage from "../../images/heroImage.webp";
import heroImageSm from "../../images/heroImageSm.webp";
import heroImageMd from "../../images/heroImageMd.jpeg";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function HeroImage() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div>
        <img
          src={heroImageSm}
          alt=""
          className="w-full block md:hidden lg:hidden"
        />
        <img src={heroImageMd} alt="" className=" hidden md:block lg:hidden" />
        {/* <img
            src={heroImageLg}
            alt=""
            className="min-w-[1024px] hidden md:hidden lg:block"
          /> */}
        <img
          src={heroImage}
          alt=""
          height="639"
          width="2000px"
          className=" hidden md:hidden lg:block"
        />
      </div>
      <div className="flex flex-row items-center absolute lg:top-48 lg:left-32 md:top-32 md:left-24 top-24 left-28">
        <div className="pb-20 ms:pb-0 sm:ml-[8.333%] flex flex-col items-center text-center sm:text-left">
          <div className="w-full">
            <h1 className="font-lato font-bold uppercase text-lg lg:text-xl leading-7 tracking-widest pb-2.5 sm:text-[#c2271c] text-[#c2271c] !font-lato-black">
              NEW YEAR SALE
            </h1>
          </div>
          <div className="mb-2.5 sm:mb-2 w-full">
            <h4 className="font-lato font-bold leading-7 lg:text-[28px] sm:h3 lg:h1 text-[#0e3739]">
              Up to $700 Off Mattresses!
            </h4>
          </div>

          <h1 className="font-lato font-bold leading-7 lg:text-2xl">
            + 2 FREE Pillows ($120 Value)Terms
          </h1>
          <div color="red" className="mt-10 mb-4 lg:mt-7 w-full">
            <Button
              type="button"
              color="red"
              onClick={() => {
                navigate("#");
              }}
            >
              Shop Sale
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
