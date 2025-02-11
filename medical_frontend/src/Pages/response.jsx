import React from "react";



const MedicalFormResponse = () => {
    return (
        <div className="h-screen w-full overflow-hidden">
            {/* Header */}
            <header style={{ backgroundColor: "#33AC6B", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop:10, paddingBottom:10}}>
                <h1 style={{ margin: 0, textAlign: "left", fontSize: 25 , marginLeft: "2%"}}>
                Student Medical System - Faculty of Computing
                </h1>
                <a href="/udashboard" role="button" style={{backgroundColor: "#fff", paddingLeft:"15px", paddingRight:"15px", paddingTop:"5px", paddingBottom:"5px", textDecoration:"none", color:"#33AC6B", borderRadius:25, marginRight: "2%"}}>Dashboard</a>
            </header>

            <img 
                src="https://www.sab.ac.lk/computing/sites/default/files/foc-logo-icon_2.png" 
                style={{ height: 50, width: 200, textAlign: "left", marginTop: 20, marginBottom: 10, marginLeft: "10%" }} 
                alt="Logo"
            />

            <div style={{marginTop:150, marginBottom:195}}>
                <div style={{marginTop:"51%"}} className="bg-white h-auto w-3/5 m-auto rounded-4 opacity-85 border-t-8 border-[#33AC6B] border-solid ">
                    <div className="bg-white h-auto w-full m-auto rounded-4 opacity-85 border-2 border-[#33AC6B] border-solid ">
                        <h1 className="ml-8 mt-4">Medical Form</h1>
                        <p className="text-justify text-xl m-8">Your response has been recorded</p>
                        <a href="/guidelines" className="text-xl m-8 text-[#33AC6B]">Submit another response</a> 
                        <p></p>          
                    </div>              
                </div>
            </div>
            
            <footer className="w-full b-0 p-1 bg-[#33AC6B] text-white">
                <p className="text-center mt-2">Copyright © 2024</p>
            </footer>
        </div>
    );
};

export default MedicalFormResponse;