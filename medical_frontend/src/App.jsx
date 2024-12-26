import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./Pages/Home";
import ExamMedical from "./Pages/ExamMedical";
import Guidelines from "./Pages/Guidelines";
const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Guidelines />} />
            <Route path="/exams" element={<ExamMedical />} />
            


        </Routes>
    </Router>
);

export default App;
