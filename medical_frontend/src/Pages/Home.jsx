import React, {useEffect, useState} from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const COLORS = ["#26F901", "#33AC6B"];

export const Home = () => {
    const navigate = useNavigate();

    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(140% 140% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 16px ${color}`;
    const textcolor = useMotionTemplate`${color}`;
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

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration:10,
            repeat:Infinity,
            repeatType: "mirror"
        })
    }, [])

    return (
        <>
            <motion.section
                style={{
                    backgroundImage,
                }}
                className="relative grid min-h-screen overflow-hidden bg-black px-4 py-8 text-gray-200"
            >
                <div>
                    <div className="relative h-16 flex flex-row justify-between">
                        <img className="h-16 w-auto ml-10 justify-center" src="https://www.sab.ac.lk/computing/sites/default/files/foc-logo-icon_2.png"/>
                        <div className="flex flex-row justify-space gap-10 mr-10">
                            <div className="flex flex-col justify-space">
                                <p className="font-bold text-[#FED600] text-m right-40 hidden md:block">
                                    {greeting}!
                                </p>
                                <p className="font-bold text-m right-40 -mt-1 hidden md:block">
                                    {currentTime.toLocaleDateString()} | {currentTime.toLocaleTimeString()}
                                </p>
                            </div>
                            <motion.button 
                                className="px-8 my-2.5 rounded-full"
                                onClick={() => navigate('/user-login')}
                                whileHover={{
                                    scale:1.015
                                }}
                                style={{
                                    border, boxShadow
                                }}
                            >
                                Login
                            </motion.button>
                        </div>    
                    </div>
                    <motion.hr
                        style={{
                            color:textcolor
                        }}
                    ></motion.hr>
                    <div className="flex flex-col justify-space place-content-center py-28">
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold text-center pb-4"
                            style={{
                                color:textcolor
                            }}
                        >
                            Online Medical System
                        </motion.h1>
                        <h2 className="text-[#fff] text-5xl md:text-7xl text-center pb-4">Faculty of Computing</h2>
                        <h3 className="text-[#fff] text-4xl md:text-6xl text-center pb-4">Sabaragamuwa University of Sri Lanka</h3>
                        <motion.button 
                                className="py-2 my-4 w-36 h-12 m-auto rounded-full"
                                onClick={() => navigate('/user-login')}
                                whileHover={{
                                    scale:1.015
                                }}
                                style={{
                                    border, boxShadow
                                }}
                            >
                                Apply Now
                            </motion.button>
                    </div>
                </div>  
            </motion.section>
            <motion.section
                style={{backgroundColor:'#f4f4f4', marginBottom:-18}}
            >
                <div>
                    <h2 className="text-justify pt-5 pb-2 px-5 ">Welcome to the Online Medical Application System</h2>
                    <p className="text-justify text-xl py-4 px-5">Our platform simplifies the medical application process by allowing students and staff to submit requests online with certified medical records from the university doctor. No more paperwork or long queues—apply from anywhere, track your application status in real time, and experience a faster, more efficient process. Secure, convenient, and hassle-free! </p>
                </div> 
                <motion.footer 
                    classroom="b-0 l-0 w-full"
                    style={{backgroundColor:textcolor}}
                >
                    <p className="text-center p-2 text-[#f4f4f4]">Copyright © 2024</p>
                </motion.footer>  
            </motion.section>
        </>
    );
};