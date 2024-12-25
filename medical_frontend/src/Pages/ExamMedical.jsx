import { useState } from "react";
import { ArrowLeft, Cloud, X, ChevronDown } from "lucide-react";
import HeaderBar from "../components/specific/HeaderBar";
import HeroSection from "../components/specific/HeroSection";
import Button from "../components/layout/Button";
const ExamMedical = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const subjectCodes = [
    { code: "CS1023", name: "Introduction to Programming" },
    { code: "CS2012", name: "Data Structures" },
    { code: "CS3042", name: "Database Systems" },
    { code: "CS4002", name: "Machine Learning" },
  ];

  const addSubject = (e) => {
    e.preventDefault();
    const subjectCode = document.getElementById("subjectCode").value;
    const subjectName = document.getElementById("subjectName").value;
    const dateOfAbsent = document.getElementById("dateOfAbsent").value;

    if (subjectCode && subjectName && dateOfAbsent) {
      setSubjects([...subjects, { subjectCode, subjectName, dateOfAbsent }]);
      document.getElementById("subjectCode").value = "";
      document.getElementById("subjectName").value = "";
      document.getElementById("dateOfAbsent").value = "";
    }
  };

  const handleSubjectCodeChange = (e) => {
    const code = e.target.value;
    const subject = subjectCodes.find((s) => s.code === code);
    if (subject) {
      document.getElementById("subjectName").value = subject.name;
    }
  };

  const removeSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <HeaderBar />

      <main className="flex-1 w-full p-6">
          
        <HeroSection />

      

        <div className="flex items-center gap-4 mb-8 mt-[-10px]">
        <button className="flex items-center gap-2 text-[#40B97B]">
            <ArrowLeft className="w-4 h-4 gray-600" />
            <span>Home</span>
          </button>
          <div className="flex gap-4 ml-auto">
            <Button
              text="Exam Medical"
              bgColor="bg-[#393939]"
              textColor="text-white"
              padding="px-6 py-2"
              onClick={() => console.log("Exam Medical button clicked")}
            />

            <button className="border border-[#393939] text-[#393939] px-6 py-2 rounded-full">
              Lecture Medical
            </button>
          </div>
         
        </div>

        <form className="w-full space-y-12 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Student No:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Student No"
              />
            </div>
            
          <div>
  <label className="block mb-2">Academic Year::</label>
  <select                 className="w-full p-2 border rounded"
  >
  <option value="">Select Academic Year</option>
    <option value="IS">2022/23</option>
    <option value="SE">2021/22</option>
    <option value="DS">2020/21</option>
    <option value="SE">2019/20</option>
    <option value="DS">2018/19</option>
  </select>
</div>
            
          </div>

          <div>
            <label className="block mb-2">Student Name (With Initials):</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Student Name"
            />
          </div>

          <div>
  <label className="block mb-2">Department:</label>
  <select className="w-full p-2 border rounded">
  <option value="">Select Department</option>
    <option value="IS">Computing & Information Systems</option>
    <option value="SE">Software Engineering</option>
    <option value="DS">Data Science</option>
  </select>
</div>


          <div>
            <h3 className="font-semibold mb-4">Exam Medical Details:</h3>
            <div className="bg-gray-100 p-4 rounded w-full">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 mt-2">
                <div className="relative">
                  <select
                    id="subjectCode"
                    className="w-full p-2 pr-8 border rounded bg-white appearance-none cursor-pointer"
                    defaultValue=""
                    onChange={handleSubjectCodeChange}
                  >
                    <option value="" disabled>
                      Select Subject Code
                    </option>
                    {subjectCodes.map((subject) => (
                      <option key={subject.code} value={subject.code}>
                        {subject.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                <div className="relative">
                  <select
                    id="subjectName"
                    className="w-full p-2 pr-8 border rounded bg-white appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Subject Name
                    </option>
                    {subjectCodes.map((subject) => (
                      <option key={subject.code} value={subject.name}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                <input
                  id="dateOfAbsent"
                  type="date"
                  className="w-full p-2 border rounded bg-white"
                />
                  <button
                onClick={addSubject}
                className=" ml-5 bg-[#4052B9] text-white px-0 py-2 rounded"
              >
                Add More
              </button>
              </div>
            
            </div>
          </div>

          {subjects.length > 0 && (
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Subject Code</th>
                    <th className="text-left p-2">Subject Name</th>
                    <th className="p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">{subject.dateOfAbsent}</td>
                      <td className="p-2">{subject.subjectCode}</td>
                      <td className="p-2">{subject.subjectName}</td>
                      <td className="p-2">
                        <button
                          type="button"
                          onClick={() => removeSubject(index)}
                          className="text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div>
            <h3 className="font-semibold mb-4">Upload Medical (pdf):</h3>
            <div
              className="w-full border-2 border-dashed rounded-lg p-8 text-center"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Cloud className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="mb-4">Choose a file or drag & drop it here</p>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf"
              />
              <button
                type="button"
                onClick={() => document.getElementById("file-upload").click()}
                className="px-4 py-2 border rounded-full"
              >
                Browse File
              </button>
              {selectedFile && (
                <p className="mt-4 text-sm text-gray-600">
                  Selected file: {selectedFile.name}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="bg-[#40B97B] text-white px-8 py-3 rounded-full text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </main>

      <footer className="w-full bg-[#40B97B] text-white p-4 text-center">
        <p>copyrights</p>
      </footer>
    </div>
  );
};

export default ExamMedical;
