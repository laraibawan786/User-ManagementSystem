import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    dob: "",
    regDate: "",
    gender: "",
    contact: "",
    address: "",
    grade: "",
    description: "",
    image: null,
    imagePreview: ""
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🚨 Basic validation
    if (!formData.name || !formData.rollNo || !formData.department) {
      alert("⚠ Please fill all required fields!");
      return;
    }
    setStudents([...students, formData]);
    navigate("/students");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-white/20"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-center text-yellow-400 mb-6"
        >
          🎓 Student Registration
        </motion.h1>

     
        <form className="space-y-4" onSubmit={handleSubmit}>
          
       
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm bg-zinc-800 text-white"
              onChange={handleChange}
            />
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Roll Number *
            </label>
            <input
              type="text"
              name="rollNo"
              placeholder="e.g. CS-123"
              className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm bg-zinc-800 text-white"
              onChange={handleChange}
            />
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Department *
            </label>
            <select
              name="department"
              className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm bg-zinc-800 text-white"
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Electrical">Electrical Engineering</option>
              <option value="BBA">BBA</option>
              <option value="Mechanical">Mechanical Engineering</option>
               <option value="Computer Engineering">Computer Engineering</option>
                <option value="Mechanical">Mechanical Engineering</option>
            </select>
          </div>

      
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-zinc-800 text-white"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Registration Date
              </label>
              <input
                type="date"
                name="regDate"
                className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-zinc-800 text-white"
                onChange={handleChange}
              />
            </div>
          </div>

     
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Gender
              </label>
              <select
                name="gender"
                className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-zinc-800 text-white"
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Contact Number
              </label>
              <input
                type="text"
                name="contact"
                placeholder="+92 300 1234567"
                className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-zinc-800 text-white"
                onChange={handleChange}
              />
            </div>
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter full address"
              className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-zinc-800 text-white"
              onChange={handleChange}
            />
          </div>

      
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Grade in Previous Class
            </label>
            <input
              type="text"
              name="grade"
              placeholder="e.g. A+, B, C"
              className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-zinc-800 text-white"
              onChange={handleChange}
            />
          </div>

      
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Description / Notes
            </label>
            <textarea
              name="description"
              placeholder="Write something about the student..."
              rows="3"
              className="w-full p-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-zinc-800 text-white"
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Upload Profile Picture
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full p-2 border border-gray-500 rounded-lg cursor-pointer bg-zinc-800 text-white"
              onChange={handleChange}
            />
          </div>

          {formData.imagePreview && (
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={formData.imagePreview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-full mt-2 shadow-lg mx-auto border border-yellow-400"
            />
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-md"
          >
            ✅ Register Student
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
