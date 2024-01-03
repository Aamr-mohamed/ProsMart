import { Typography } from "@mui/material";
import CarouselDefault from "../../components/ui/Carousel";
import Categories from "../../components/ui/categories";
import Layout from "./layout";
import Product from "../../components/ui/product";

export default function Home() {
  return (
    <Layout>
      <div className="w-full mt-10 flex justify-center items-center">
        <div className="px-[20px] h-[400px]">
          <CarouselDefault />
        </div>
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
