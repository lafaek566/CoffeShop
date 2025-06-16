// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Gallery = ({ activeFilter, setActiveFilter }) => {
//   const galleryImages = [
//     {
//       src: [
//         "https://i.pinimg.com/474x/c4/92/ba/c492ba241ebe80fbc03250506b73de33.jpg",
//         "https://i.pinimg.com/474x/3c/a6/97/3ca6978a6baa9b5e52873a80c8b41a71.jpg",
//         "https://i.pinimg.com/474x/3a/be/c7/3abec76cfcbb81afaa653476bdfe2604.jpg",
//         "https://i.pinimg.com/474x/fd/b4/da/fdb4daf2be121ebebe76f61cdf0f6d24.jpg",
//         "https://i.pinimg.com/474x/89/14/78/89147842e864e7bb8fd1c7a38d318392.jpg",
//         "https://i.pinimg.com/474x/1c/df/cb/1cdfcbf67c80e06bf3efeadd8e13d6a8.jpg",
//       ],
//       category: "popular",
//     },
//     {
//       src: [
//         "https://i.pinimg.com/474x/2d/b9/7b/2db97b1994473240297f4f297127aba3.jpg",
//         "https://i.pinimg.com/474x/bc/d2/5d/bcd25d2a9a3fa919bee69493f0701e85.jpg",
//         "https://i.pinimg.com/474x/78/4a/a1/784aa108d2ed2dce1d5ff0a6f1bc0f6d.jpg",
//         "https://i.pinimg.com/474x/17/1a/af/171aaffbe870629ac1f86b9dee83e36f.jpg",
//         "https://i.pinimg.com/474x/9b/b5/d6/9bb5d67e93727c9b3841b09d3326ef1b.jpg",
//         "https://i.pinimg.com/474x/b7/b7/21/b7b721c8e784a1111e1dd89364aa9ce5.jpg",
//       ],
//       category: "latest",
//     },
//     {
//       src: [
//         "https://i.pinimg.com/474x/47/2c/ed/472ced1d316ef3d833ec8f067a9df8f8.jpg",
//         "https://i.pinimg.com/474x/f3/61/fe/f361fee8a0c4550f62862e8a63261b88.jpg",
//         "https://i.pinimg.com/474x/51/c6/68/51c66849566e471e62530c0df2777c1b.jpg",
//         "https://i.pinimg.com/474x/46/14/f0/4614f079ac56e5c9d122b9a35b52b496.jpg",
//         "https://i.pinimg.com/474x/0d/14/69/0d146908f04d9141877885af7763c3ea.jpg",
//         "https://i.pinimg.com/474x/c0/3e/7d/c03e7db3c73e87812a12e171bafa248d.jpg",
//       ],
//       category: "top-rated",
//     },
//   ];

//   const filteredImages =
//     activeFilter === "all"
//       ? galleryImages
//       : galleryImages.filter((image) => image.category === activeFilter);

//   // State for handling the modal and image being clicked
//   const [modalImage, setModalImage] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//   const [imagePos, setImagePos] = useState({ x: 0, y: 0 });

//   // Function to handle closing the modal
//   const closeModal = () => {
//     setModalImage(null);
//     setDragging(false);
//   };

//   // Start dragging
//   const handleMouseDown = (e) => {
//     e.preventDefault();
//     setDragging(true);
//     setStartPos({ x: e.clientX, y: e.clientY });
//   };

//   // Handle dragging
//   const handleMouseMove = (e) => {
//     if (dragging) {
//       const dx = e.clientX - startPos.x;
//       const dy = e.clientY - startPos.y;
//       setImagePos({
//         x: imagePos.x + dx,
//         y: imagePos.y + dy,
//       });
//       setStartPos({ x: e.clientX, y: e.clientY });
//     }
//   };

//   // Stop dragging
//   const handleMouseUp = () => {
//     setDragging(false);
//   };

//   // For mobile devices, handle touch events
//   const handleTouchStart = (e) => {
//     e.preventDefault();
//     setDragging(true);
//     setStartPos({
//       x: e.touches[0].clientX,
//       y: e.touches[0].clientY,
//     });
//   };

//   const handleTouchMove = (e) => {
//     if (dragging) {
//       const dx = e.touches[0].clientX - startPos.x;
//       const dy = e.touches[0].clientY - startPos.y;
//       setImagePos({
//         x: imagePos.x + dx,
//         y: imagePos.y + dy,
//       });
//       setStartPos({
//         x: e.touches[0].clientX,
//         y: e.touches[0].clientY,
//       });
//     }
//   };

//   const handleTouchEnd = () => {
//     setDragging(false);
//   };

//   return (
//     <div className="mt-20">
//       <h2 className="text-4xl font-bold text-center mb-10 text-[#00b14f]">
//         Our Product
//       </h2>

//       <div className="flex justify-center space-x-4 mb-10 rounded-3xl">
//         {["all", "popular", "latest", "top-rated"].map((filter) => (
//           <motion.button
//             key={filter}
//             className={`px-3 py-2 rounded-3xl text-xs font-semibold  ${
//               activeFilter === filter
//                 ? "bg-[#00b14f] text-white"
//                 : "bg-gray-300 text-gray-800"
//             }`}
//             onClick={() => setActiveFilter(filter)}
//             whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
//             whileTap={{ scale: 0.95, transition: { duration: 0 } }}
//           >
//             {filter === "all"
//               ? "All"
//               : filter === "popular"
//               ? "Popular"
//               : filter === "latest"
//               ? "Latest"
//               : "Top Rated"}
//           </motion.button>
//         ))}
//       </div>

//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {filteredImages.map((image, index) => {
//           // Handle multiple images if src is an array
//           const imageSources = Array.isArray(image.src)
//             ? image.src
//             : [image.src];

//           return imageSources.map((src, i) => (
//             <motion.div
//               key={`${index}-${i}`} // Ensure unique key for each image
//               className="relative overflow-hidden rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <img
//                 src={src}
//                 alt={`Gallery Image ${index + 1}-${i + 1}`}
//                 className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-3xl"
//                 style={{ objectFit: "cover" }} // Ensures the image covers the box without distortion
//                 onClick={() => setModalImage(src)} // Open the modal with the clicked image
//               />
//             </motion.div>
//           ));
//         })}
//       </motion.div>

//       {/* Modal for zoomed-in image */}
//       {modalImage && (
//         <div
//           className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
//           onClick={closeModal} // Close modal on click outside the image
//         >
//           <motion.div
//             className="relative max-w-4xl max-h-[90%] overflow-auto rounded-xl"
//             whileHover={{ scale: 1.05 }} // Optional zoom effect on hover
//             transition={{ duration: 0.3 }}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//             style={{
//               cursor: dragging ? "grabbing" : "grab",
//               transform: `translate(${imagePos.x}px, ${imagePos.y}px)`, // Move image based on mouse/touch drag
//             }}
//           >
//             <img
//               src={modalImage}
//               alt="Zoomed Image"
//               className="w-full h-full object-contain rounded-xl transition-all duration-300"
//               style={{
//                 objectFit: "contain", // Maintain aspect ratio and fit within the modal
//               }}
//               onClick={(e) => e.stopPropagation()} // Prevent closing the modal if the image is clicked
//             />
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4  text-white rounded-full p-1"
//             >
//               &#x2715; {/* Close button */}
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
