// import { Typography } from "@mui/material";
// import CarouselDefault from "../../components/ui/Carousel";
// import Categories from "../../components/ui/categories";
import Layout from "./layout";
// import Product from "../../components/ui/product";
import HeroImage from "../../components/ui/heroImage";
import Testemonies from "../../components/ui/testemonies";
import Categories from "../../components/ui/categories";
import AnoTestimony from "../../components/ui/advisor";

export default function Home() {
  return (
    <Layout>
      {/* hero image */}
      <HeroImage />

      {/* testemonies */}
      <Testemonies />

      {/* category */}
      <Categories />

      {/* another Testimony */}
      <AnoTestimony />
    </Layout>
  );
}
