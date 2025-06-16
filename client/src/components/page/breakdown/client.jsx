import React, { useState, useEffect } from "react";
import Modal from "react-modal"; // Assuming you're using the 'react-modal' package

const ClientBarbershop = () => {
  const [clients, setClients] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Example data of clients with images from Pinterest
  const clientsData = [
    {
      name: "Luwak Coffee",
      profile_image:
        "https://i.pinimg.com/474x/90/96/45/90964522a2beb51a2185d32903d64037.jpg",
      services: "Specialty Coffee, Espresso",
      location: "Jakarta",
      gallery_images: [
        "https://i.pinimg.com/474x/0d/0b/b3/0d0bb38053b09cbea96565f6e58c74f4.jpg",
        "https://i.pinimg.com/474x/b3/8c/b7/b38cb7c8534a18473d7732ef194c823d.jpg",
        "https://i.pinimg.com/474x/90/37/3e/90373ec5805d3ef2074b81208a9a1608.jpg",
      ],
    },
    {
      name: "OEM",
      profile_image:
        "https://i.pinimg.com/474x/89/14/78/89147842e864e7bb8fd1c7a38d318392.jpg",
      services: "Manufacturing, Custom Products",
      location: "Bandung",
      gallery_images: [
        "https://i.pinimg.com/474x/3c/a6/97/3ca6978a6baa9b5e52873a80c8b41a71.jpg",
        "https://i.pinimg.com/474x/cc/d0/40/ccd04078ef6137420c4ed13e11cbc14c.jpg",
        "https://i.pinimg.com/474x/f7/27/a2/f727a21b1bf2061151499b3b8252c213.jpg",
      ],
    },
    {
      name: "Local",
      profile_image:
        "https://i.pinimg.com/474x/ef/c6/9b/efc69b777e3b73d75427d20013847208.jpg",
      services: "Manufacturing, Custom Products",
      location: "Bandung",
      gallery_images: [
        "https://i.pinimg.com/474x/5a/40/61/5a4061452c0c18d5b42a7e80d6e57398.jpg",
        "https://i.pinimg.com/474x/fd/b4/da/fdb4daf2be121ebebe76f61cdf0f6d24.jpg",
        "https://i.pinimg.com/474x/d9/41/66/d941665bb380d8fbe737383015356d06.jpg",
      ],
    },
  ];

  useEffect(() => {
    // Set the clients data to the state
    setClients(clientsData);
  }, []);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4 my-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Speciality</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white shadow-lg rounded-3xl overflow-hidden transition transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Client Profile */}
            <div className="flex flex-col items-center p-2">
              <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden shadow-md mb-4">
                <img
                  src={client.profile_image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">
                {client.name}
              </h3>
              <p className="text-[#FFB84D] text-sm text-center">
                {client.services}
              </p>
              <p className="text-gray-400 text-xs text-center">
                {client.location}
              </p>
            </div>

            {/* Gallery */}
            {client.gallery_images && client.gallery_images.length > 0 && (
              <div className="mt-4 px-2 pb-6">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">
                  Gallery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {client.gallery_images.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-110 hover:shadow-xl"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal for Zooming Image */}
            {selectedImage && (
              <Modal
                isOpen={!!selectedImage}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
              >
                <div
                  className="relative bg-white p-4 rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                  >
                    ✕
                  </button>
                  <img
                    src={selectedImage}
                    alt="Zoomed"
                    className="max-w-full max-h-[90vh] rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
              </Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientBarbershop;
