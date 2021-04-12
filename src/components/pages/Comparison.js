import React from "react";
import "../../App.css";
import CompCards from "../CompCards";
import Footer from "../Footer";

function Comparison() {
  return (
    <>
      <div className="comparison top">
        <CompCards />
      </div>
      <Footer />
    </>
  );
}

export default Comparison;
