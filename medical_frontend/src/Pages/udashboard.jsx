
import React, { useState, useEffect } from "react";


const udashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
  <header className="bg-[#33AC6B] text-white p-4 flex justify-between items-center">
    <h1 className="text-lg md:text-2xl font-bold">
      Student Medical System - Faculty of Computing
    </h1>

    <div className="flex flex-grow justify-center items-center text-sm">
      <p className="font-bold">Welcome Again!</p>
    </div>

    <div className="flex items-center ml-auto">
      <p className="font-bold text-sm mr-4">
        {currentTime.toLocaleDateString()} | {currentTime.toLocaleTimeString()}
      </p>
      <a href="#" className="text-black bg-white border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 no-underline">
        Logout
      </a>
    </div>
  </header>



      
      <div className="flex">
        
        <aside className="bg-[#33AC6B] text-white w-1/5 p-4">
          <nav className="space-y-4">
          <p className="block py-2 px-4 rounded-md bg-green-800 hover:bg-green-600 text-white no-underline">
  Dashboard  </p>

  <a href="#" class="block py-2 px-4 rounded-md hover:bg-white no-underline text-black">
  Pending Applications
</a>

            <a href="#" className="block py-2 px-4 rounded-md hover:bg-white no-underline text-black">
              Approved Applications
            </a>
            <a href="#" className="block py-2 px-4 rounded-md hover:bg-white no-underline text-black">
              Rejected Applications
            </a>
            <a href="#" className="block py-2 px-4 rounded-md hover:bg-white no-underline text-black">
              Applications Overview
            </a>
            <a href="#" className="block py-2 px-4 rounded-md hover:bg-white no-underline text-black">
              History
            </a>
            <a href="#" className="block py-2 px-4 rounded-md hover:bg-white no-underline text-black">
              Settings
            </a>
            <a href="/guidelines" className="block py-2 px-4 rounded-md hover:bg-white no-underline text-black bg-white">
              Apply
            </a>
          </nav>
        </aside>

        
        <main className="flex-1 p-6">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-lg font-bold">Total Applications Submitted</h2>
              <p className="text-2xl text-green-600">15</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-lg font-bold">Pending Applications</h2>
              <p className="text-2xl text-yellow-500">5</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-lg font-bold">Approved Applications</h2>
              <p className="text-2xl text-green-500">10</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h2 className="text-lg font-bold">Rejected Applications</h2>
              <p className="text-2xl text-red-500">2</p>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Number of Applications (Bar Chart)</h3>
              <div className="h-48 bg-gray-200 rounded"></div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Number of Applications (Line Chart)</h3>
              <div className="h-48 bg-gray-200 rounded"></div>
            </div>
          </div>

          
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Applications Overview</h3>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-2">Student ID</th>
                  <th className="text-left p-2">Student Name</th>
                  <th className="text-left p-2">Department</th>
                  <th className="text-left p-2">Date Applied</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "20APCXXXX", name: "A.B.C. Perera", dept: "IS", date: "2024/09/10", status: "Approved" },
                  { id: "20APCXXXX", name: "A.B.C. Perera", dept: "DS", date: "2024/09/11", status: "Pending" },
                  { id: "20APCXXXX", name: "A.B.C. Perera", dept: "SE", date: "2024/09/12", status: "Rejected" },
                ].map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{item.id}</td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">{item.dept}</td>
                    <td className="p-2">{item.date}</td>
                    <td className={`p-2 ${item.status === "Approved" ? "text-green-600" : item.status === "Pending" ? "text-yellow-500" : "text-red-600"}`}>
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default udashboard;
