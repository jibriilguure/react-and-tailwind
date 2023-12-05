import React from "react";
import Btn from "../components/Btn";
const NewsLeter = () => {
  const title = "Notify Me";
  const color = "gray-800";
  return (
    <div>
      <div>
        <div className="max-w-[1240] text-white grid mx-auto lg:grid-cols-3 px-12 py-8">
          <div className="col-span-2">
            <h1 className="md:text-4xl sm:text-3xl font-bold text-2xl py-2">
              Subscribe To the News leter
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              distinctio consectetur ipsum corporis dolore nam illum voluptate
              libero.
            </p>
          </div>
          <div className="">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-md w-[250px] py-4 mx-0 my-8"
              />

              <Btn title={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLeter;
