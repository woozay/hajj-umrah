import React from "react"
import './all.scss';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default ({ children }) => {
  return <div>    
    <Navbar />
    {children}
    <Footer />
  </div>
}