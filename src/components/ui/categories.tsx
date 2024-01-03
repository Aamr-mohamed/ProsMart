import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";

function Categories() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-10">
        <div className="flex flex-col justify-center items-center">
          <Avatar
            placeholder={undefined}
            size="xxl"
            src="https://eg-rv.homzmart.net/catalog/category/Decor-dt_3__2.jpg"
            alt=""
          />
          <Typography placeholder={undefined} variant="h5">
            Home decor
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar
            size="xxl"
            placeholder={undefined}
            src="https://eg-rv.homzmart.net/catalog/category/chairs-dt.jpg"
            alt=""
          />
          <Typography placeholder={undefined} variant="h5">
            Chair
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar
            size="xxl"
            placeholder={undefined}
            src="https://eg-rv.homzmart.net/catalog/category/sofas-dt.jpg"
            alt=""
          />
          <Typography placeholder={undefined} variant="h5">
            Sofas
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar
            size="xxl"
            placeholder={undefined}
            src="https://eg-rv.homzmart.net/catalog/category/buffet-dt.jpg"
            alt=""
          />
          <Typography placeholder={undefined} variant="h5">
            Buffets
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar
            size="xxl"
            placeholder={undefined}
            src="https://eg-rv.homzmart.net/catalog/category/lighting-dt.jpg"
            alt=""
          />
          <Typography placeholder={undefined} variant="h5">
            Lighting
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar
            size="xxl"
            placeholder={undefined}
            src="https://eg-rv.homzmart.net/catalog/category/office_chair.jpg"
            alt=""
          />
          <Typography placeholder={undefined} variant="h5">
            Bathroom
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar
            size="xxl"
            placeholder={undefined}
            src="https://eg-rv.homzmart.net/catalog/category/BATHROOM-dt.jpg"
            alt=""
          />

          <Typography placeholder={undefined} variant="h5">
            Appliances
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Avatar
            size="xxl"
            placeholder={undefined}
            src="https://eg-rv.homzmart.net/catalog/category/app_3.jpg"
            alt=""
          />
          <Typography placeholder={undefined} variant="h5">
            Full Kitchen
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Categories;
