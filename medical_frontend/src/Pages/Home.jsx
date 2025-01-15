import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import the slideshow styles
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  "https://i1.wp.com/www.sjp.ac.lk/wp-content/uploads/2020/02/DSC_3283.jpg?resize=1141%2C761&ssl=1",
  "https://www.uwu.ac.lk/ans/images/facilities/medical_center.png",
  "https://i1.wp.com/www.sjp.ac.lk/wp-content/uploads/2020/02/DSC_3283.jpg?resize=1141%2C761&ssl=1",
  "https://www.uwu.ac.lk/ans/images/facilities/medical_center.png",
];

const Home = () => {
  return (
    <div style={{ height: "100vh", overflowY: "auto", width:"1535px", boxSizing: "border-box" }}>

      {/* Header */}
      <header style={{ backgroundColor: "#33AC6B", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop:10, paddingBottom:10}}>
        <h1 style={{ margin: 0, textAlign: "left", fontSize: 25 , marginLeft: "2%"}}>
          Student Medical System - Faculty of Computing
        </h1>

        <a href="/user-login" role="button" style={{backgroundColor: "#fff", paddingLeft:"15px", paddingRight:"15px", paddingTop:"5px", paddingBottom:"5px", textDecoration:"none", color:"#33AC6B", borderRadius:25, marginRight: "2%"}}>Login</a>

      </header>

      <div>
        <img 
          src="https://www.sab.ac.lk/computing/sites/default/files/foc-logo-icon_2.png" 
          style={{ height: 50, width: 200, textAlign: "left", marginTop: 10, marginBottom: 10, marginLeft: "2%" }} 
          alt="Logo"
        />
      </div>


      {/* Slideshow */}
      <div style={{ position: "relative" }}>

        <Slide easing="ease" autoplay={true} arrows={false} duration={3000}>
          {images.map((image, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "450px", maxHeight: "500px", maxWidth: "100%" }}
              />
            </div>
          ))}
        </Slide>
        {/*
        <button
          style={{
            position: "absolute",
            top: "75%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(51, 172, 107, 0.8)",
            color: "white",
            padding: "10px 25px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "22px",
            border: "2px solid #ffff",
          }}
        >
          Apply Now
        </button>*/}
      </div>


      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          marginBottom: 50,
          borderRadius: 20
        }}
      >
        <div style={{ flex: 1, margin: "10px", padding: "10px", backgroundColor: "white", wordWrap: "break-word" ,borderRadius: 5}}>
          <h2 style={{fontSize:20,marginBottom:10 }}><b>Main Description</b></h2>
            <p>The Student Medical System is an online platform designed for the students of the Faculty of Computing at Sabaragamuwa University of Sri Lanka. 
               It provides a fast and efficient way for students to submit medical applications for missed exams or lectures due to health-related reasons, eliminating the need for physical visits to the faculty.
            </p>
            <p>To continue to apply medicals click on 'Apply Now' button.</p>
        </div>
        <div style={{ flex: 1, margin: "10px", padding: "10px", backgroundColor: "white", wordWrap: "break-word", borderRadius: 5 }}>
          <h2 style={{fontSize:20,marginBottom:10 }}><b>News/Announcements</b></h2>
          <p>Latest updates and announcements go here.</p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{bottom: 0,left: 0,width: "100%",backgroundColor: "#33AC6B",color: "white",textAlign: "center",padding: "10px",}}>
        <p style={{ margin: 0 }}>Copyright © 2024</p>
      </footer>
    </div>
  );
};

export default Home;
