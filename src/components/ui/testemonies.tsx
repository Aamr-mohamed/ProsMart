import React from "react";
import wireCutter from "../../images/Wirecutter.svg";
import stars from "../../images/5stars.svg";
import moon from "../../images/Moon.svg";
import truck from "../../images/Truck.svg";
import shield from "../../images/Shield.svg";
import donation from "../../images/Donation.svg";

function Testemonies() {
  return (
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
  );
}

export default Testemonies;
