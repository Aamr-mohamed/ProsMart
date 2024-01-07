import { Button } from "@material-tailwind/react";
import React from "react";

interface CollectionProps {
  img: string;
  title: string;
  description: string;
  btn: string;
}

function Collection({ img, title, description, btn }: CollectionProps) {
  const descriptionLines = description.split("\n");
  return (
    <div className="flex justify-center mt-20">
      <section className="relative">
        <div className="px-auto px-4 sm:px-10 lg:px-16 2xl:px-0">
          <div className="relative">
            <div className=" relative sm:absolute w-full lg:w-max sm:-top-28 lg:top-0 lg:bottom-0 m-auto flex justify-center order-first lg:left-0">
              <div className="max-w-xl maxh-80 w-full object-cover max-h-3/4 my-auto mx-auto sm:mb-4 lg:mb-auto">
                <img src={img} alt="" className="" width="1100" height="717" />
              </div>
            </div>

            <div className="bg-[#faf9f7] lg:flex lg:flex-row-reverse -mt-4 sm:mt-0 ml-32">
              <div className="lg:max-w-[65%]">
                <div className="sm:min-h-[500px] px-4 lg:px-29 sm:flex sm:items-center sm:justify-center">
                  <div className="sm:max-w-[65%] lg:max-w-full mx-auto text-center lg:text-left sm:mt-8 lg:ml-[160px] lg:mr-2 2xl:ml-28">
                    <div className="">
                      <h5 className="inline-block sm:h3 h5 mt-0 sm:mt-1 mb-[1.125rem] font-lato font-bold uppercase text-lg lg:text-xl leading-7 tracking-widest">
                        {title}
                      </h5>
                      <div className="mb-8">
                        {descriptionLines.map((line, index) => (
                          <p
                            key={index}
                            className="font-lato font-bold text-md lg:text-lg"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                      <Button color="red" className="inline-block">
                        {btn}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collection;
