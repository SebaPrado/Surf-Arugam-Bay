import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section className="heroSeccion ">
        <div className="navbarSpace"></div>
        <div className="columnsFlexContainerHero ">
          <div className="leftColHero col-md-12  ">
            <div className="  ">
              <h1>Best Surfing Lessons & Packages </h1>
            </div>
            <div className="col-md-5 ">
              <p className="heroText">
                Join the vibrant surfing community in Arugam Bay with our
                certified instructors. Choose from tailored packages that suit
                every skill level and make the most of your surfing adventure.
              </p>
            </div>
            <div className="buttonsInHero">
              <button className="button2">
                <p className="parrafo1">Find Your Instructor</p>
              </button>
              <button className="button3">
                <p className="parrafo1">Buy packages </p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="contactInstructorsSection">
        <div className="containerh2a ">
          <h2 className="h2a">
            Contact instructors directly to book your lessons
          </h2>
        </div>

        <div className="row  contentDivSection2 ">
          <div className="col-md-6 columnaIzquierda ">
            <div className="overlay">
              <img
                src="public/sec2-1.png"
                alt="Imagen 2"
                className="overlayImage"
                style={{ width: "45%", height: "50%" }}
              />
              <img
                src="public/sec2-2.png"
                alt="Imagen 1"
                className="overlayImage"
                style={{
                  width: "45%",
                  height: "55%",
                  border: "5px solid white",
                  position: "relative",
                  top: "42px",
                }}
              />
              <img
                src="public/sec2-3.png"
                alt="Imagen 3"
                className="overlayImage"
                style={{ width: "52%", height: "45%", margin: "3px" }}
              />
            </div>
          </div>
          <div className="col-md-6 columnaDerecha ">
            <div className="textSection2 row seccion2Tex ">
              <p>
                Whether you're a complete beginner or an experienced surfer, our
                expert instructors will help you make the most of Arugam Bay’s
                world-class waves. Choose from individual lessons or class
                packages tailored to your level, and start your surfing journey
                today!
              </p>
            </div>
            <div className="buttonsInSection2 row  ">
              <button className=" button4">
                <p>Find Your Instructor</p>
              </button>
              <button className="button5">
                <p>Buy packages</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="h2Section3">
          <h2 className="h2a">Meet Our Surf Instructors</h2>
          <div></div>
        </div>

        <div>
          <div>
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                className="individuo"
                style={{ width: "20%", display: "inline-block" , border: "1px solid white", borderRadius: "4px", margin: "28px", paddingTop: "10px", backgroundColor: "white" }} // {{ edit_1 }}
                key={index}
              >
                <img
                  src="public/instructors123.png"
                  style={{ width: "60%", display: "block", margin: "0 auto", borderRadius: "4px", border: "1px solid #023047" }} // {{ edit_1 }}
                  alt="Instructor"
                />
                <div style={{ display: "flex", flexDirection: "row", padding: " 0 30px" }}>
                  <div style={{ width: "85%" }}>
                    <div>
                      <p style={{ color: "black", fontFamily: "Open Sans", fontSize: "22px", fontWeight: 700, lineHeight: "27.24px", letterSpacing: "-0.02em", textAlign: "left" }}>coming soon</p> 
                    </div>
                    <div>
                      <p style={{ color: "black", fontFamily: "Open Sans", fontSize: "16px", fontWeight: 400, lineHeight: "16.34px", textAlign: "left" }}>certified ISA Instructor</p> 
                    </div>
                  </div>
                  <div style={{ width: "15%" }}>
                    <img
                      src="public/arcticons_srilankan.png"
                      alt="Srilankan Icon"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="divInstructorOfTheMonth ">
            <h6>Instructor of the month</h6>
            <img
              src="public\MonaInstructor.png"
              alt="Mona Instructor"
              className="InstructorOfTheMonth"
            />
            <h5 className="mt-2">Mona</h5>
            <p>Surf Lessons for Women</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
