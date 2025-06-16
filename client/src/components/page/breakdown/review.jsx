import React from "react";
import { motion } from "framer-motion";

const AllReview = () => {
  const reviews = [
    {
      username: "Elveren",
      barberName: "Arabica",
      rating: 4,
      comment: "Kualitas Kopinya premium banget!",
    },
    {
      username: "Bella",
      barberName: "Robusta",
      rating: 5,
      comment: "Local Pride Cofeenya",
    },
    {
      username: "Chandra",
      barberName: "Gayo",
      rating: 3,
      comment: "Tahap - tahap pemilihan kopi dan kualitasnya Beda",
    },
  ];

  return (
    <div className="mt-20 overflow-hidden">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        All Review
      </h2>
      {reviews.length > 0 ? (
        <div className="w-full overflow-x-auto">
          <motion.div
            className="flex space-x-6 w-max px-10"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="p-4 w-72 bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-700 rounded-3xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center text-sm font-semibold mr-3">
                    {review.username
                      ? review.username.charAt(0).toUpperCase()
                      : "A"}
                  </div>
                  <h3 className="text-lg font-medium text-gray-100">
                    {review.username || "Anonymous"}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 mb-1">
                  <strong>Barber:</strong>{" "}
                  {review.barberName || "Tidak tersedia"}
                </p>
                <p className="text-yellow-500 text-sm">
                  ⭐ {review.rating} / 5
                </p>
                <p className="text-gray-300 text-sm">{review.comment}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Tidak ada review.</p>
      )}
    </div>
  );
};

export default AllReview;
