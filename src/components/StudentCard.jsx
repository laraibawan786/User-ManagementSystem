import { motion } from "framer-motion";

export default function StudentCard({ student, onEdit, onDelete }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-800/80 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-zinc-700 hover:shadow-yellow-400/30 transition-all"
    >
  
      <img
        src={student.imagePreview}
        alt={student.name}
        className="w-24 h-24 rounded-full object-cover mx-auto shadow-md mb-4 border-2 border-yellow-400"
      />

   
      <h2 className="text-xl font-bold text-center text-white">
        {student.name}
      </h2>
      <p className="text-center text-gray-300">{student.rollNo}</p>
      <p className="text-center text-gray-400 italic">{student.department}</p>

   
      <div className="flex gap-3 mt-4 justify-center">
        <button
          onClick={onEdit}
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-1 rounded-full font-medium transition duration-300 shadow-md"
        >
          ✏ Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-400 text-white px-4 py-1 rounded-full font-medium transition duration-300 shadow-md"
        >
          🗑 Delete
        </button>
      </div>
    </motion.div>
  );
}
