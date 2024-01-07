// import { Typography } from "@mui/material";
// import CarouselDefault from "../../components/ui/Carousel";
// import Categories from "../../components/ui/categories";
import Layout from "./layout";
// import Product from "../../components/ui/product";
import HeroImage from "../../components/ui/heroImage";
import Testemonies from "../../components/ui/testemonies";
import Categories from "../../components/ui/categories";
import Advisor from "../../components/ui/advisor";
import Collection from "../../components/ui/collection";
import chillCollection from "../../images/chill-collection.webp";
import everGreen from "../../images/evergreen-quality.webp";

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
      <Advisor />

      {/* collections */}
      <Collection
        img={chillCollection}
        title="Chill Collection™"
        description="Meet our special line of luxurious quilt-top mattresses featuring cooling top fabrics and comfort options tailored to perfection."
        btn="Shop Sale"
      />

      <Collection
        img={everGreen}
        title="Made to order. Made to last."
        description={`Our sleep essentials are designed for you and built to last. We source the highest-quality materials we can find.
         With impeccable attention to detail, and backed by decades of industry expertise, we craft the perfect mattress
          to suit any sleeper. `}
        btn="See our story"
      />
    </Layout>
  );
}
