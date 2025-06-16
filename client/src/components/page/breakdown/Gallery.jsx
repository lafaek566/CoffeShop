import React, { useState } from "react";
import { motion } from "framer-motion";
import galleryImages from "../dataProduct/galleryData";

const Gallery = ({ activeFilter, setActiveFilter }) => {
  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);

  const [modalImage, setModalImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });

  const closeModal = () => {
    setModalImage(null);
    setDragging(false);
    setImagePos({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      setImagePos({
        x: imagePos.x + dx,
        y: imagePos.y + dy,
      });
      setStartPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => setDragging(false);

  const handleTouchStart = (e) => {
    e.preventDefault();
    setDragging(true);
    setStartPos({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const dx = e.touches[0].clientX - startPos.x;
      const dy = e.touches[0].clientY - startPos.y;
      setImagePos({
        x: imagePos.x + dx,
        y: imagePos.y + dy,
      });
      setStartPos({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
  };

  const handleTouchEnd = () => setDragging(false);

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#00b14f]">
        Product
      </h2>

      <div className="flex justify-center space-x-4 mb-10 rounded-3xl">
        {["all", "popular", "latest", "top-rated"].map((filter) => (
          <motion.button
            key={filter}
            className={`px-3 py-2 rounded-3xl text-xs font-semibold  ${
              activeFilter === filter
                ? "bg-[#00b14f] text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0 } }}
          >
            {filter === "all"
              ? "All"
              : filter === "popular"
              ? "Popular"
              : filter === "latest"
              ? "Latest"
              : "Top Rated"}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredImages.map((image, index) => {
          const imageSources = Array.isArray(image.src)
            ? image.src
            : [image.src];

          return imageSources.map((src, i) => (
            <motion.div
              key={`${index}-${i}`}
              className="relative overflow-hidden rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}-${i + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-3xl"
                onClick={() => setModalImage(src)}
              />
            </motion.div>
          ));
        })}
      </motion.div>

      {modalImage && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90%] overflow-auto rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              cursor: dragging ? "grabbing" : "grab",
              transform: `translate(${imagePos.x}px, ${imagePos.y}px)`,
            }}
          >
            <img
              src={modalImage}
              alt="Zoomed Image"
              className="w-full h-full object-contain rounded-xl transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white rounded-full p-1"
            >
              &#x2715;
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
