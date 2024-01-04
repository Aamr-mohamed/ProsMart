import { Typography } from "@mui/material";
import CarouselDefault from "../../components/ui/Carousel";
import Categories from "../../components/ui/categories";
import Layout from "./layout";
import Product from "../../components/ui/product";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <Layout>
      <div className="w-full relative">
        <img
          src="https://images.contentstack.io/v3/assets/bltdab0c7b06198f4c2/blt4cf813332284e063/656f41a23ed4d58bd801e898/december-deals-sale-homepage-desktop@2x.jpg?format=pjpg&auto=webp&width=1440"
          alt="heroImg"
          className="w-full"
        />
      </div>
      <div className=" absolute top-1/3 right-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="font-lato font-bold uppercase text-xl leading-7 tracking-widest sm:text-[#c2271c] text-[#c2271c] !font-lato-black">
          NEW YEAR SALE
        </h1>
        <h1 className="font-lato font-bold leading-7 text-2xl">
          Up to $700 Off Mattresses!
        </h1>
        <h1 className="font-lato font-bold leading-7 text-2xl">
          + 2 FREE Pillows ($120 Value)Terms
        </h1>
        <Button color="red" className="mt-4">
          Shop Sale
        </Button>
      </div>

      {/* category */}
      <div className="my-16">
        <Typography variant="h2">Shop By category</Typography>
      </div>
      <Categories />
      <div className="w-full flex justify-center items-center my-9">
        <div className=" px-[20px] h-[400px]">
          <CarouselDefault />
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-9">
        <div className=" w-4/5">
          <Product />
        </div>
      </div>
    </Layout>
  );
}
