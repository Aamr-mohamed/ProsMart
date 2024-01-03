import { Carousel } from "@material-tailwind/react";

function CarouselDefault() {
  return (
    <Carousel className="rounded-xl" placeholder={undefined}>
      <img
        src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/e/g/egy-main_banner-en-dt_copy_19_12.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/e/g/egy-main_banner-en-dt_copy_19_17.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/e/g/egy-main_banner-en-dt_1__1.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/e/g/egy-main_banner-en-dt_copy_19_12.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
export default CarouselDefault;
