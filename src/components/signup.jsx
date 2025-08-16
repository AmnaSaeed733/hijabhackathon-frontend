
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Use environment variable for API base URL
const API_URL = import.meta.env.VITE_API_URL;

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
  const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/api/auth/signup`, form);
            alert("Signup successful!");
            navigate("/login");
        } catch (error) {
            alert("Signup failed!", error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-poppins">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-200">
                <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
                    Create Account
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-purple-600 font-medium mb-2 tracking-wide">Name</label>
                        <input
                            type="text"
                            name="name"
                            
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-purple-300 focus:border-purple-500 outline-none text-gray-800 placeholder-gray-400 p-1"
                        />
                    </div>
                    <div>
                        <label className="block text-purple-600 font-medium mb-2 tracking-wide">Email</label>
                        <input
                            type="email"
                            name="email"
                            
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-purple-300 focus:border-purple-500 outline-none text-gray-800 placeholder-gray-400 p-1"
                        />
                    </div>
                    <div>
                        <label className="block text-purple-600 font-medium mb-2 tracking-wide">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-purple-300 focus:border-purple-500 outline-none text-gray-800 placeholder-gray-400 p-1"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white p-3 rounded-lg shadow-lg hover:opacity-90 transition duration-200 font-semibold tracking-wide"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-sm text-gray-600 text-center mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-purple-500 font-medium hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}