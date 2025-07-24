import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import About from './Components/About';

const App = () => {
  const handleDownloadAndView = (event) => {
    event.preventDefault();

    if (typeof window.sa_event === 'function') {
      window.sa_event('cv_downloaded');
    } else {
      console.error("Simple Analytics isn't loaded");
    }

    const link = document.createElement('a');
    link.href = '/Sankarshan_Sahu_Resume.pdf';
    link.download = 'Sankarshan_Sahu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Navbar handleDownloadAndView={handleDownloadAndView}/>
      <Home />
      <About />
    </>
  )
}

export default App