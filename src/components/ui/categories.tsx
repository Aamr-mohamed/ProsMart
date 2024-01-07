import React from "react";
import mattresses from "../../images/shopMattresses.webp";
import bases from "../../images/shopBases.webp";
import bedding from "../../images/shopBedding.webp";

function Categories() {
  return (
    <section className="py-10 lg:py-15 bg-[#faf9f7] flex flex-row items-center justify-center gap-10">
      <div>
        <img src={mattresses} alt="" className="w-[552px] h-[327px] mb-2" />
        <a href="#" className="mt-[20px] text-2xl underline ">
          Shop Mattresses
        </a>
      </div>
      <div>
        <img src={bases} alt="" className="w-[252px] h-[300px] mb-2" />
        <a href="#" className="text-2xl underline">
          Shop Bases
        </a>
      </div>
      <div>
        <img src={bedding} alt="" className="w-[254px] h-[300px] mb-2" />
        <a href="#" className="text-2xl underline">
          Shop bedding
        </a>
      </div>
    </section>
  );
}

export default Categories;
