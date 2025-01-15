import React from "react";



const MedicalFormResponse = () => {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0" }}>
            {/* Header */}
            <header
                style={{
                    backgroundColor: "#4CAF50",
                    padding: "20px 10px",
                    color: "white",
                    textAlign: "left",
                    width: "100%",
                    position: "fixed",
                    top: "0",
                    zIndex: "1",
                   
                }}
            >
                <h1 style={{ margin: "0" }}>Student Medical System - Faculty of Computing</h1>
            </header>

            {/* Logo under the Green Bar */}
            <div
                style={{
                    marginTop: "80px", // Adjusted for header height
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "20px",
                }}
            >
                <img
                    src="./logo.png" 
                    alt="Faculty of Computing Logo"
                    style={{ width: "900px" }}
                />
            </div>

            {/* Main Content */}
            <main
                style={{
                    margin: "30px auto 0", // Space after the logo
                    textAlign: "center",
                    maxWidth: "600px", // Increased width for longer response box
                    padding: "20px",
                    position: "relative",

                   
                }}
            >
                {/* Form Response Box */}
                <div
                    style={{
                        marginTop: "40px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "20px", // Increased padding for a larger box
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#fff",
                        minWidth: "900px",
                       
                    }}
                >
                    <h2 style={{ color: "#333", margin: "10px 0" }}>Medical Form</h2>
                    <p style={{ color: "#666", fontSize: "18px", marginBottom: "20px" }}>Your response has been recorded.</p>
                    <a
                        href="/"
                        style={{
                            display: "inline-block",
                            marginTop: "20px",
                            color: "#4CAF50",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        <u>Submit another response</u>
                    </a>
                </div>
            </main>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: "#4CAF50",
                    padding: "10px",
                    color: "white",
                    textAlign: "center",
                    width: "100%",
                    position: "fixed",
                    bottom: "0",
                }}
            >
                <p style={{ margin: "0" }}>copyrights</p>
            </footer>
        </div>
    );
};

export default MedicalFormResponse;