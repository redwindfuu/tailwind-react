import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import useDarkMode from "../../hooks/useDarkMode";
import { FaMoon } from "react-icons/fa";

export default function Navbar(props) {
  const {isMobile} = props;
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [open, setOpen] = React.useState(false);
  const handleOpenMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold">NerdCard</div>
        {isDarkMode ? (
          <BsFillSunFill
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
        
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {open && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={handleOpenMenu}
          />
        ) : !open && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={handleOpenMenu}
          />
        ):(
          <>
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our story</li>
            <li className="btn-hover ml-28">Contact</li>
          </>
        )}
        {open && (
          <div className="absolute right-8 bg-white p-8 z-10 text-black text-center text-13">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">Our story</li>
            <li className="cursor-pointer">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
}
