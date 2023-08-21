"use client";
import React, { useEffect, useState } from "react";
import Header from "../Componets/Header";
import "./App.css";
const App = () => {
  const [brand, setbrand] = useState(<i class="bi bi-android"></i>);
  const menu ={
      ul1 : "Google Play",
      ulimg1 : <i class="bi bi-google-play"></i>,
      ul2 :"Windows",
      ulimg2 : <i class="bi bi-windows"></i>,
      ul3 : "Iphone",
      ulimg3 : <i class="bi bi-phone"></i>,
      ul4:"Developer",
      ulimg4: <i class="bi bi-code-slash"></i>,
      ul5: "iso",
      ulimg5: <i class="bi bi-apple"></i>
    }
  return (
    <>
      <div className="container">
        <Header logo={brand} 
          menu={...menu}
        />
      </div> */
      {/* /* container end here */}
     
    </>
  );
};
export default App;
