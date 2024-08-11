import React from "react";
import MainText from "./MainText";
import EmailBox from "./EmailBox";


export default function Main() {  
  return <div className="page">
    <body className="body">
      <MainText />
      <EmailBox />
    </body>
  </div>;
}