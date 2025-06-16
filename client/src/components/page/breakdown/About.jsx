import React from "react";
import { motion } from "framer-motion";

const AboutPage = ({ preview }) => {
  return (
    <section
      className="mt-10 p-6 sm:p-10 bg-gray-50 rounded-3xl shadow-lg"
      data-aos="fade-up"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-extrabold text-[#00b14f] drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About FnB Coffee
        </motion.h2>
        <motion.p
          className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Your trusted supplier of authentic Indonesian green coffee beans for
          over 26 years. Established in 1999 in Medan, North Sumatra, now
          shipping to 33+ countries.
        </motion.p>

        {/* Descriptions */}
        <div className="mt-5 text-xs text-center text-gray-700 leading-relaxed">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            We focus on green coffee beans, implementing sustainable farming
            practices like replanting and tree rejuvenation, while supporting
            local communities.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            As a fully integrated coffee producer, FnB Coffee covers the entire
            value chain—from plantations to retail and distribution globally.
          </motion.p>
        </div>
      </div>
      {/* Banner Section */}
      {!preview && (
        <motion.div
          className="relative bg-[#00b14f] text-white p-8 rounded-3xl my-12 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <h3 className="text-2xl font-semibold drop-shadow-sm">
            What FnB Coffee Does
          </h3>
          <p className="mt-2 text-lg opacity-90">
            We offer premium green beans, private labeling, and global
            distribution.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <motion.button
              className="bg-white text-[#00b14f] px-5 py-2.5 rounded-full shadow hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
            >
              Order Now
            </motion.button>
            <motion.button
              className="border border-white px-5 py-2.5 rounded-full hover:bg-white hover:text-[#00b14f] transition"
              whileHover={{ scale: 1.05 }}
            >
              ▶ Watch Video
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Resources Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
        {[
          "Catalog",
          "Flyer",
          "Price List",
          "FAQ",
          "Contract",
          "Distributor",
        ].map((item) => (
          <motion.button
            key={item}
            className="bg-white border p-4 text-sm rounded-2xl shadow-md hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.button>
        ))}
      </div>

      {/* Speciality List */}
      <div>
        <motion.h3
          className="text-2xl font-semibold text-[#00b14f] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Specialties
        </motion.h3>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          {[
            "Green Beans Coffee",
            "Kopi Luwak",
            "Private Label",
            "Distributor",
          ].map((item, i) => (
            <motion.li
              key={item}
              className="hover:text-[#00b14f] transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 + i * 0.2 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
