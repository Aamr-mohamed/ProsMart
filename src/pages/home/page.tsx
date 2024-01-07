// import { Typography } from "@mui/material";
// import CarouselDefault from "../../components/ui/Carousel";
// import Categories from "../../components/ui/categories";
import Layout from "./layout";
import { useNavigate } from "react-router-dom";
// import Product from "../../components/ui/product";
import heroImage from "../../images/heroImage.webp";
import heroImageSm from "../../images/heroImageSm.webp";
import heroImageMd from "../../images/heroImageMd.jpeg";
import wireCutter from "../../images/Wirecutter.svg";
import stars from "../../images/5stars.svg";
import moon from "../../images/Moon.svg";
import truck from "../../images/Truck.svg";
import shield from "../../images/Shield.svg";
import donation from "../../images/Donation.svg";
import { Button } from "@material-tailwind/react";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="relative">
        <div>
          <img
            src={heroImageSm}
            alt=""
            className="w-full block md:hidden lg:hidden"
          />
          <img
            src={heroImageMd}
            alt=""
            className=" hidden md:block lg:hidden"
          />
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

      {/* testemonies */}
      <div className="my-12">
        <section className=" flex justify-center items-center pt-0 sm:pt-15 pb-22 sm:pb-15 bg-[#ffffff]">
          <div className="flex flex-col ">
            <div className="px-6 sm:px-0">
              <ul className="flex gap-20">
                <li>
                  <div className="lg:max-w-xs">
                    <div className="">
                      <img src={wireCutter} alt="" />
                    </div>
                    <div className="text-center">
                      "Best Hybrid"
                      <br />
                      "Mattress"
                    </div>
                  </div>
                </li>
                <li>
                  <div className="lg:max-w-xs">
                    <div className="">
                      <img src={stars} alt="" />
                    </div>
                    <div className="text-center">
                      20,000+ 5-star
                      <br />
                      customer reviews
                    </div>
                  </div>
                </li>{" "}
                <li>
                  <div className="lg:max-w-xs">
                    <div className="ml-4">
                      <img src={moon} alt="" />
                    </div>
                    <div className="text-center">
                      100-night
                      <br />
                      risk free trial
                    </div>
                  </div>
                </li>{" "}
                <li>
                  <div className="lg:max-w-xs">
                    <div className="ml-5">
                      <img src={truck} alt="" />
                    </div>
                    <div className="text-center">
                      free,no-contact
                      <br />
                      delivery
                    </div>
                  </div>
                </li>{" "}
                <li>
                  <div className="lg:max-w-xs">
                    <div className="ml-6">
                      <img src={shield} alt="" />
                    </div>
                    <div className="text-center">
                      10-year limited
                      <br />
                      warranty
                    </div>
                  </div>
                </li>
                <li>
                  <div className="lg:max-w-xs">
                    <div className="ml-9">
                      <img src={donation} alt="" className="w-[64px]" />
                    </div>
                    <div className="text-center">
                      40,000 mattresses
                      <br />
                      donated
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* category */}
    </Layout>
  );
}
