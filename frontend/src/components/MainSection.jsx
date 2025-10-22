import React from "react";

const MainSection = () => {
  return (
    <>
    <section className="py-15 bg-gradient-to-l to-green-600 from-yellow-300">
        <div className="  flex flex-col md:flex-row  justify-center items-center px-35 font-sans">
          <div>
            <div className="capitalize text-white text-5xl font-bold">
              <h2 className="mb-2">discover authentic</h2>
              <h2 className="text-yellow-300">Goan Products</h2>
            </div>
            <div className="text-left flex-wrap my-8 pr-20">
              <p className="text-[21px] text-white">
                Connect directly with Self Help Groups across Goa. Support local
                artisans, farmers, and entrepreneurs while discovering unique
                handcrafted products.
              </p>
            </div>
            <div className="flex flex-col md:flex-row  justify-self-start items-center space-x-6 ">
              <button className="bg-white capitalize text-[16px] py-3 px-8 text-green-600 rounded-lg font-bold border border-white">start shopping</button>
              <button className="bg-green-600 capitalize text-[16px] py-3 px-8 text-white rounded-lg font-bold border border-white">
                join as <span className="uppercase">shg</span>
              </button>
            </div>
          </div>
          <div className="pr-25">
            <img className="h-100 w-300"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
              alt=""
            />
          </div>
        </div>
    </section>
    </>
  );
};

export default MainSection;
