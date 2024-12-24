import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ExamMedical from "./Pages/ExamMedical";
const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exams" element={<ExamMedical />} />

        </Routes>
    </Router>
);

export default App;
