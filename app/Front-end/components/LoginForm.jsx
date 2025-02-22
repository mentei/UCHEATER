"use client"; 
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";

const LoginForm = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-blue-500"
      >
        Login to Your Account
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md text-lg font-semibold transition"
        onClick={() => router.push("/login")} 
      >
        Sign In
      </motion.button>
    </div>
  );
};

export default LoginForm;
