import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css"; // Import the slideshow styles
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        // Get the current hour
        const hour = new Date().getHours();

        // Set greeting based on the time of day
        if (hour < 12) {
            setGreeting("Good Morning");
        } else if (hour < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="h-screen w-full">
        {/* header */}
        <div className="bg-[#33AC6B] w-full ">
            <div>
                <div>
                    <img className="absolute ml-10 mt-4 h-16" src="https://www.sab.ac.lk/computing/sites/default/files/foc-logo-icon_2.png"/>
                    <p className="font-bold text-[#FED600] text-m px-20 py-8 absolute right-40 hidden md:block">
                        {greeting}!
                    </p>
                    <p className="font-bold text-m px-20 py-14 absolute right-40 hidden md:block">
                        {currentTime.toLocaleDateString()} | {currentTime.toLocaleTimeString()}
                    </p>
                    <button className="bg-white text-[#000] hover:text-[#33AC6B] px-6 py-2 rounded-full top-8 absolute right-12 border-[#33AC6B] border-solid border-2" onClick={() => navigate('/user-login')}>
                        Login
                    </button>
                </div>

                <div className=" pt-28 md:pt-32 text-center mb-12">
                    <h1 className="text-[#05100A] text-6xl md:text-8xl  font-bold justify-center">Online Medical System</h1>
                    <h2 className="text-[#05100A] text-5xl md:text-7xl">Faculty of Computing</h2>
                    <h3 className="text-[#05100A] text-4xl md:text-6xl">Sabaragamuwa University of Sri Lanka</h3>
                </div>

                <img className="absolute right-10 h-[90%] hidden md:block" src="https://pngimg.com/d/student_PNG124.png"/>

                <div className="md:absolute bg-white sm:h-76 md:h-96 md:w-3/5 md:ml-16 w-full ml-0 md:ml-16 sm:mt-0 md:mt-36 rounded-4 opacity-85 border-[#33AC6B] border-solid border-2">
                    <h2 className="text-justify m-8 md:m-10">Welcome to the Online Medical Application System</h2>
                    <p className="text-justify text-xl m-8 md:m-10">Our platform simplifies the medical application process by allowing students and staff to submit requests online with certified medical records from the university doctor. No more paperwork or long queues—apply from anywhere, track your application status in real time, and experience a faster, more efficient process. Secure, convenient, and hassle-free! </p>
                    <button className="hover:bg-[#33AC6B] text-[#000] hover:text-[#fff] px-6 py-2 rounded-full mb-4 md:mt-4 ml-8 md:ml-10 border-[#33AC6B] border-solid border-2" onClick={() => navigate('/user-login')}>
                        Apply Now
                    </button>
                </div>

                <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#CBCBCB" fill-opacity="1" d="M0,96L24,90.7C48,85,96,75,144,80C192,85,240,107,288,144C336,181,384,235,432,261.3C480,288,528,288,576,245.3C624,203,672,117,720,80C768,43,816,53,864,90.7C912,128,960,192,1008,202.7C1056,213,1104,171,1152,149.3C1200,128,1248,128,1296,149.3C1344,171,1392,213,1416,234.7L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CBCBCB" fill-opacity="1" d="M0,160L18.5,170.7C36.9,181,74,203,111,229.3C147.7,256,185,288,222,277.3C258.5,267,295,213,332,186.7C369.2,160,406,160,443,170.7C480,181,517,203,554,218.7C590.8,235,628,245,665,224C701.5,203,738,149,775,133.3C812.3,117,849,139,886,133.3C923.1,128,960,96,997,74.7C1033.8,53,1071,43,1108,80C1144.6,117,1182,203,1218,234.7C1255.4,267,1292,245,1329,234.7C1366.2,224,1403,224,1422,224L1440,224L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>  

            </div>
            
            <div className="bg-white h-auto w-full pt-12 pb-16">
                <h3 className="mb-8 ml-16">Announcements</h3>
                <div className="mt-4 mb-4">
                    <div className="bg-white h-auto w-4/5 m-auto rounded-4 opacity-85 border-[#33AC6B] border-solid border-2">
                        <h4 className="ml-8 mt-4">Announcement1</h4>
                        <p className="text-justify text-xl m-8">Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las 
                            industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <div className="bg-white h-auto w-4/5 m-auto rounded-4 opacity-85 border-[#33AC6B] border-solid border-2">
                        <h4 className="ml-8 mt-4">Announcement1</h4>
                        <p className="text-justify text-xl m-8">Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las 
                            industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <div className="bg-white h-auto w-4/5 m-auto rounded-4 opacity-85 border-[#33AC6B] border-solid border-2">
                        <h4 className="ml-8 mt-4">Announcement1</h4>
                        <p className="text-justify text-xl m-8">Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las 
                            industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
                    </div>
                </div>
            </div>
             
            <footer classroom="b-0 l-0 w-full bg-[#33AC6B]">
                <p className="text-center p-2 text-[#fff]">Copyright © 2024</p>
            </footer>     
        </div>
    </div>
    
  );
};

export default Home;
