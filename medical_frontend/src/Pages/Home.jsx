import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>Hello Home</h1>
            <Link to='/exams'>
            <h1>Exams</h1></Link>

        </div>
    );
};

export default Home;
