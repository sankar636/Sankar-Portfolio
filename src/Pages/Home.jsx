import React from "react";
import Squares from "../Components/Square";
import "../App.css";
import Greeting from "../Components/Greeting";

const Home = () => {
  const handleDownloadAndView = (event) => {
    event.preventDefault();

    if (typeof window.sa_event === "function") {
      window.sa_event("cv_downloaded");
    } else {
      console.error("Simple Analytics isn't loaded");
    }

    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1Y-2XmnIxFMG3Qt5pkYXGSPadyKj_45wZ/view";
    link.target = "_blank";
    // link.download = 'https://drive.google.com/file/d/1Y-2XmnIxFMG3Qt5pkYXGSPadyKj_45wZ/view';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="w-full h-screen overflow-hidden">
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#5f5959ff"
      />
      <Greeting handleDownloadAndView={handleDownloadAndView} />
    </div>
  );
};

export default Home;
