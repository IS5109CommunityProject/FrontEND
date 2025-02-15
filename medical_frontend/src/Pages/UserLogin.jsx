import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [regNumber, setRegNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('username:', regNumber);
    console.log('password:', password);
  };

  return (
    <div> 
        <header style={{ backgroundColor: "#33AC6B", color: "white", padding: "10px" ,display: "flex", justifyContent: "space-between", alignItems: "center",paddingTop:10, paddingBottom:10}}>
            <h1 style={{ margin: 0, textAlign: "left", fontSize: 25 , marginLeft: "2%"}}>
            Student Medical System - Faculty of Computing
            </h1>
        </header>
        <div style={{width:'50%',height:'70%',marginLeft:'25%', padding:50, marginTop:'5%',justifyContent: 'center', alignItems: 'center'}}>
            <Link to="/udashboard" style={{ marginBottom: 10, display: 'inline-block', textDecoration:'none', color:'#000' }}>
                &lsaquo;  Back to Home
            </Link>
            <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Student Login</h2>
                <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="regNumber" style={{ display: 'block', marginBottom: '5px' }}>Registration Number</label>
                    <input
                    type="text"
                    id="regNumber"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    placeholder="Enter your registration number"
                    required
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <button
                    type="submit"
                    Link to="/udashboard"
                    style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#33AC6B',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    }}
                >
                    Login
                </button>
                </form>
            </div>
        </div>
    </div>  
  );
};

export default LoginPage;
