import React, { useState } from "react";
import axios from "axios";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// Use environment variable for API base URL
const API_URL = import.meta.env.VITE_API_URL;
function Hijab() {
  // List of hijab cards
  const hijabCards = [
    { name: "Classic Black", price: "$15", img: "/black.png" },
    { name: "Navy Blue", price: "$18", img: "/navyblue.png" },
    { name: "Rose Dust", price: "$20", img: "/rosedust.png" },
    { name: "Maroon", price: "$17", img: "/maroon.png" },
    { name: "Black Georgette", price: "$16", img: "/blackg.png" },
    { name: "Teal blueGeorgette", price: "$19", img: "/tealblueg.png" },
    { name: "Grapes Georgette", price: "$21", img: "/greeng.png" },
    { name: "GRAPES Georgette", price: "$18", img: "/grapesg.png" },
  ];

  // State for reviews, loading, success, and error per card
  const [reviews, setReviews] = useState(Array(hijabCards.length).fill(""));
  const [loading, setLoading] = useState(Array(hijabCards.length).fill(false));
  const [success, setSuccess] = useState(Array(hijabCards.length).fill(""));
  const [error, setError] = useState(Array(hijabCards.length).fill(""));

  const navigate = useNavigate();

  const handleReviewChange = (idx, value) => {
    const newReviews = [...reviews];
    newReviews[idx] = value;
    setReviews(newReviews);
  };

  const handleSubmitReview = async (idx) => {
    const newLoading = [...loading];
    const newSuccess = [...success];
    const newError = [...error];
    newLoading[idx] = true;
    newSuccess[idx] = "";
    newError[idx] = "";
    setLoading(newLoading);
    setSuccess(newSuccess);
    setError(newError);
    try {
      await axios.post(`${API_URL}/api/reviews`, {
        review: reviews[idx],
      });
      newSuccess[idx] = "Review submitted!";
      newLoading[idx] = false;
      newError[idx] = "";
      const newReviews = [...reviews];
      newReviews[idx] = "";
      setReviews(newReviews);
    } catch (error) {
      newError[idx] = "Failed to submit review";
      newLoading[idx] = false;
    }
    setLoading([...newLoading]);
    setSuccess([...newSuccess]);
    setError([...newError]);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 font-poppins">
      {/* Navbar */}
      <nav className="bg-white shadow-lg py-4 px-6 flex items-center justify-between sticky top-0 z-10 w-full">
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide text-center">
            MODESATTIRE
          </h1>
        </div>
        <div className="flex items-center space-x-6 absolute right-6 top-1/2 -translate-y-1/2 md:static md:translate-y-0">
          <MdOutlineManageAccounts className="text-2xl md:text-3xl text-purple-600 hover:text-pink-500 transition cursor-pointer" />
          <AiOutlineShoppingCart className="text-2xl md:text-3xl text-purple-600 hover:text-pink-500 transition cursor-pointer" />
          <FaSearch className="text-2xl md:text-3xl text-purple-600 hover:text-pink-500 transition cursor-pointer" />
          <button
            onClick={handleLogout}
            className="ml-4 px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-lg font-semibold shadow hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Shop by Collection Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Shop by Collection
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-pink-200">
            <div className="relative h-56 w-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="/chiffon.png"
                alt="Fabric 1"
                className="h-44 w-44 object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
            <div className="px-5 py-4 text-center bg-gradient-to-r from-purple-50 to-pink-50">
              <span className="text-xl font-extrabold text-purple-700 tracking-wide">
                Chiffon
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-pink-200">
            <div className="relative h-56 w-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="/crimped.png"
                alt="Fabric 2"
                className="h-44 w-44 object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
            <div className="px-5 py-4 text-center bg-gradient-to-r from-purple-50 to-pink-50">
              <span className="text-xl font-extrabold text-purple-700 tracking-wide">
                Silk
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-pink-200">
            <div className="relative h-56 w-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="/georgette.png"
                alt="Fabric 3"
                className="h-44 w-44 object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
            <div className="px-5 py-4 text-center bg-gradient-to-r from-purple-50 to-pink-50">
              <span className="text-xl font-extrabold text-purple-700 tracking-wide">
                Cotton
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-pink-200">
            <div className="relative h-56 w-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="/silk.png"
                alt="Fabric 4"
                className="h-44 w-44 object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
            <div className="px-5 py-4 text-center bg-gradient-to-r from-purple-50 to-pink-50">
              <span className="text-xl font-extrabold text-purple-700 tracking-wide">
                Jersey
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-pink-200">
            <div className="relative h-56 w-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="/plain viscose.png"
                alt="Fabric 5"
                className="h-44 w-44 object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
            <div className="px-5 py-4 text-center bg-gradient-to-r from-purple-50 to-pink-50">
              <span className="text-xl font-extrabold text-purple-700 tracking-wide">
                Georgette
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-pink-200">
            <div className="relative h-56 w-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="/turkish viscose.png"
                alt="Fabric 6"
                className="h-44 w-44 object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
            <div className="px-5 py-4 text-center bg-gradient-to-r from-purple-50 to-pink-50">
              <span className="text-xl font-extrabold text-purple-700 tracking-wide">
                Linen
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* My Hijab Collection Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          My Hijab Collection
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {hijabCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col">
              <div className="relative h-48 w-full">
                <img
                  src={card.img}
                  alt={card.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-purple-700 mb-1">{card.name}</h3>
                <span className="text-pink-500 font-semibold mb-2">{card.price}</span>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm resize-none mb-2"
                  rows="2"
                  placeholder="Write a review..."
                  value={reviews[idx]}
                  onChange={(e) => handleReviewChange(idx, e.target.value)}
                ></textarea>
                <button
                  className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition font-semibold disabled:opacity-50"
                  onClick={() => handleSubmitReview(idx)}
                  disabled={loading[idx] || !reviews[idx]}
                >
                  {loading[idx] ? "Submitting..." : "Submit Review"}
                </button>
                {success[idx] && (
                  <div className="text-green-600 text-sm mt-2">{success[idx]}</div>
                )}
                {error[idx] && (
                  <div className="text-red-500 text-sm mt-2">{error[idx]}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 mt-12">
        Hijab Styles. All rights reserved.
      </footer>
    </div>
  );
}

export default Hijab;
