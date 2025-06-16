import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Barbers = ({ hiddenBarbers, handleBoxClick }) => {
  const barbers = [
    {
      id: 1,
      name: "Arabica",
      image:
        "https://i.pinimg.com/474x/6e/c8/a6/6ec8a6dbf360ca66f9099d1fbb18394f.jpg",
      specialty: "Quality Beans coffee",
      rating: 4,
      backgroundImage:
        "https://i.pinimg.com/736x/d0/ea/36/d0ea360196d1b6285a8b6e3324e219fb.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // ganti dengan video kamu
    },
    {
      id: 2,
      name: "Robusta",
      image:
        "https://i.pinimg.com/474x/e4/6e/5d/e46e5da76a782f944988d09258ed93f1.jpg",
      specialty: "Premium beans coffee",
      rating: 4,
      backgroundImage:
        "https://i.pinimg.com/474x/4a/b9/84/4ab9840280cd950601733dba0f0227ca.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 3,
      name: "Gayo",
      image:
        "https://i.pinimg.com/736x/25/08/b4/2508b47073f1cc63e811dc464ea62642.jpg",
      specialty: "Best seller",
      rating: 5,
      backgroundImage:
        "https://i.pinimg.com/474x/9f/ec/fa/9fecfa7ab52fc238e92e0ad901de3040.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="mt-20 flex flex-wrap justify-center items-center gap-8">
      {barbers.map((barber, index) => (
        <motion.div
          key={barber.id}
          className="relative rounded-3xl shadow-lg overflow-hidden w-72"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: hiddenBarbers[barber.id] ? 0 : 1,
            x: hiddenBarbers[barber.id] ? 100 : 0,
          }}
          transition={{
            delay: 0.2 * index,
            type: "spring",
            stiffness: 100,
            duration: 0.5,
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleBoxClick(barber.id)}
          style={{
            backgroundImage: `url(${barber.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "450px",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
          <div className="relative z-10 p-6 flex flex-col items-center justify-end h-full text-white">
            <motion.img
              src={barber.image}
              alt={barber.name}
              className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-green-400"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3 }}
            />

            <h2 className="text-xl font-semibold text-center">{barber.name}</h2>
            <p className="text-center text-gray-300">{barber.specialty}</p>

            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < barber.rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-20 flex gap-3">
              <a
                href={barber.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 text-sm"
              >
                <FaPlayCircle />
                Play
              </a>
            </div>
            <button className="mt-2 flex items-center gap-2 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-500 text-sm">
              <FaShoppingCart />
              Order Now
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Barbers;
