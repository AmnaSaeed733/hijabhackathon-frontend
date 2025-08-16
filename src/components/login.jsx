
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Use environment variable for API base URL
const API_URL = import.meta.env.VITE_API_URL;

function Login() {

    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/api/auth/login`, form);
            if (res.data && res.data.user) {
                alert("Login successful!");
                localStorage.setItem("userId", res.data.user.id);
                navigate("/hijab");
            } else {
                setError("Login failed! Unexpected response.");
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Login failed!");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-poppins">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-200">
                <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Login
                </h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-purple-600 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-purple-300 focus:border-purple-500 outline-none text-gray-800 p-1"
                        />
                    </div>
                    <div>
                        <label className="block text-purple-600 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-purple-300 focus:border-purple-500 outline-none text-gray-800 p-1"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white p-3 rounded-lg shadow-lg hover:opacity-90 transition duration-200 font-semibold tracking-wide"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-gray-600 text-center mt-6">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-purple-500 font-medium hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
export default Login;