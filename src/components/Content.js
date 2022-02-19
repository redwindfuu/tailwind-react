import React from "react";
import { useSpring, animated } from "react-spring";
import checkIconMobile from "../assets/mobile/checkpoint.svg";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
export default function Content() {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const credit = useSpring({ credits: 4245, from: { credits: 0 } });
  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] rounded-[24px] mr-[54px] text-bold flex flex-col items-center  bg-gradient-to-b from-white/40 to-transparent shadow-md md:w-[20%] ">
        <div className="mt-16 flex gap-8 items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-[26px]">
            <animated.div>
              {customer.customers.to((value) => Math.floor(value))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16">Customer</p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-16">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-26">
          <animated.div>
              {credit.credits.to((value) => Math.floor(value))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16"> Cards Issued </p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:mt-0 md:w-[30%] md:text-16 md:ml-[20%]">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>No external fees</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
}
