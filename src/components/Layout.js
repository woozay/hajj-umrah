import React from "react"
import './all.scss';
import Navbar from "./Navbar";
//import Footer from "./footer";

export default ({ children }) => {
  return <div>    
    <Navbar />
    {children}
    {/* <Footer /> */}
  </div>
}