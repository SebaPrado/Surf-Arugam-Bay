import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
     <Navbar />
      <section className="heroSeccion">
        <div className="navbarSpace"></div>
        <div className="columnsFlexContainerHero ">
          <div className="leftColHero col-md-12  ">
            <div className=" mb-5 ">
              <h1>Best Surfing Lessons & Packages  </h1>
            </div>
            <div className="col-md-5 ">
              <p className="joinTheVibrant">
                Join the vibrant surfing community in Arugam Bay with our
                certified instructors. Choose from tailored packages that suit
                every skill level and make the most of your surfing adventure.
               
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="contactInstructorsSection">
        <div className="contactInstructorsContainer">
        <h1>hola</h1>
        <h4>helo</h4>
        </div>
      </section> */}
    </>
  );
}

export default Home;
