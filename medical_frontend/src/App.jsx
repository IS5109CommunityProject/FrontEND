import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ExamMedical from "./Pages/ExamMedical";
import Guidelines from "./Pages/Guidelines";
import UserLogin from "./Pages/UserLogin";
import AdminLogin from "./Pages/AdminLogin";
const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/" element={<Guidelines />} />
            <Route path="/exams" element={<ExamMedical />} />
            


        </Routes>
    </Router>
);

export default App;
