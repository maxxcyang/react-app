import React from "react";
import MainText from "./MainText";
import EmailBox from "./EmailBox";
import Projects from "./Projects";
import Resume from "./Resume";

export default function Main() {   
  return <div className="page">
    <body className="body"> 
      <MainText />
      <Projects />
      <Resume />
      <EmailBox />
    </body>
  </div>;
}