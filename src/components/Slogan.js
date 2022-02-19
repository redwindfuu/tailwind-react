import React from "react";
import Cards from "../assets/desktop/isocard.svg";
function Slogan() {
  return (
    <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          Earn <span className="text-purple-300">More</span>
        </p>
        <p className="">Pay Less</p>
        <button 
            className="hover:bg-pink-500 text-white transition-all duration-300 text-center text-20 px-6 py-[6px] font-bold mt-[27px] rounded-[14px] bg-purple-500 md:text-24 md:px-8 md:py-[8px] " 
        >
           Start 
        </button>
      </div>
      <div className="mt-[69-px]">
          <img src={Cards} alt="credit card" />
      </div>
    </section>
  );
}

export default Slogan;
