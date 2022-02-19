import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import Content from "./components/Content";
function App() {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  React.useEffect(() => {
    console.log(windowSize);
    setIsMobile(windowSize.width < 500 ? true : false);
  }, [windowSize]);

  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500  dark:text-white text-black md:px-20 ">
      <Navbar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
