// import { Typography } from "@mui/material";
// import CarouselDefault from "../../components/ui/Carousel";
// import Categories from "../../components/ui/categories";
import Layout from "./layout";
// import Product from "../../components/ui/product";
import HeroImage from "../../components/ui/heroImage";
import Testemonies from "../../components/ui/testemonies";

export default function Home() {
  return (
    <Layout>
      {/* hero image */}
      <HeroImage />

      {/* testemonies */}
      <Testemonies />

      {/* category */}
    </Layout>
  );
}
