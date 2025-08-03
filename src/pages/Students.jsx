import { useState, useEffect } from "react";
import StudentCard from "../components/StudentCard";
import { motion } from "framer-motion";

export default function Students() {
  
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");


  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);


  const handleDelete = (index) => {
    const updated = [...students];
    updated.splice(index, 1);
    setStudents(updated);
  };


  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(students[index].name);
  };


  const saveEdit = (index) => {
    const updated = [...students];
    updated[index].name = editName;
    setStudents(updated);
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 p-8 text-white">
      
      {/* ✅ Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-6 text-center tracking-wide"
      >
        📋 Registered Students
      </motion.h1>

      {/* ✅ If no students */}
      {students.length === 0 && (
        <p className="text-center text-gray-400 text-lg">No students registered yet.</p>
      )}

      {/* ✅ Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <div key={index} className="relative">
            
            {/* ✅ Edit Mode */}
            {editIndex === index ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-zinc-700"
              >
              
                <img
                  src={student.imagePreview}
                  alt={student.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto shadow-md mb-4 border-2 border-yellow-400"
                />

              
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="border border-zinc-600 bg-zinc-900 text-white p-2 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

              
                <button
                  onClick={() => saveEdit(index)}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 rounded-full w-full transition duration-300 shadow-md"
                >
                  ✅ Save
                </button>
              </motion.div>
            ) : (
             
              <StudentCard
                student={student}
                onEdit={() => handleEdit(index)}
                onDelete={() => handleDelete(index)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
