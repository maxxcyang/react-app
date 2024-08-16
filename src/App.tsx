import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";



export default function App() {

  const [showMain, setShowMain] = React.useState(true) 

  return <div className="page">
    <Header toggle={setShowMain}/>
    {showMain ? <Main /> : <AboutMe />}
    <Footer />
  </div>;
}