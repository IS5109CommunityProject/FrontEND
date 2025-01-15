import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ExamMedical from "./Pages/ExamMedical";
import Guidelines from "./Pages/Guidelines";
import LectureMedical from "./Pages/LectureMedical";
import UserLogin from "./Pages/UserLogin";
import Udashboard from "./Pages/udashboard";
import MedicalFormResponse from "./Pages/response";

const App = () => (
    <Router>
        <Routes>
            <Route path="/lectureMedi" element={<LectureMedical/>}/>
            <Route path ="/" element={<Home />}/>
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/exams" element={<ExamMedical />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/udashboard" element={<Udashboard/>} />
            <Route path="/response" element={<MedicalFormResponse/>} />
        </Routes>
    </Router>
);

export default App;
