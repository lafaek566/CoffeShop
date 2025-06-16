import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Navbar from "./breakdown/Navbar";
import Barbers from "./breakdown/Barber.jsx";
import Gallery from "./breakdown/Gallery";
import Products from "./breakdown/Product.jsx";
import AllReview from "./breakdown/review";
import Footer from "./breakdown/footer";
import PromoPage from "./breakdown/Promo";
import Features from "./breakdown/Features";
import ClientBarbershop from "./breakdown/client";
import Become from "./breakdown/become.jsx";
import HomePage from "./breakdown/HomePage.jsx";
import { Home } from "lucide-react";
import AboutPage from "./breakdown/About.jsx";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hiddenBarbers, setHiddenBarbers] = useState({});
  const [activeFilter, setActiveFilter] = useState("popular");
  const [showScrollNav, setShowScrollNav] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false); // State for showing more or less in About Section

  // Refs untuk navigasi scroll
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const promoRef = useRef(null);
  const galleryRef = useRef(null);
  const reviewRef = useRef(null);
  const clientRef = useRef(null);
  const barbersRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setShowScrollNav(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBoxClick = (id) => {
    setHiddenBarbers((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen p-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar
        refs={{
          homeRef,
          featuresRef,
          promoRef,
          galleryRef,
          reviewRef,
          clientRef,
          barbersRef,
        }}
      />
      {/* Header Section */}
      <div ref={homeRef} className="text-center mb-12 mt-8">
        <h1 className="text-5xl font-bold text-[#00b14f]">Héllo</h1>
        <p className="mt-4 text-lg text-gray-500">
          The Authentic Indonesia Green Coffee Beans Supplier
        </p>
        <p className="mt-2 text-xs text-gray-500">
          The leading supplier of Indonesia coffee beans, with 26 years of
          service excellence delivering the best quality of green coffee beans
          wholesale worldwide.
        </p>
      </div>

      {/* Barbers Section */}
      <div ref={barbersRef}>
        <Barbers
          hiddenBarbers={hiddenBarbers}
          handleBoxClick={handleBoxClick}
        />
      </div>

      {/* About Section */}
      <div ref={barbersRef}>
        <AboutPage preview={!showFullAbout} />
        {!showFullAbout && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowFullAbout(true)}
              className="px-4 py-2 bg-[#00b14f] text-white rounded hover:bg-[#009f45] transition"
            >
              See More
            </button>
          </div>
        )}
      </div>

      {/* Other Sections */}
      <div ref={galleryRef} className="mt-20" data-aos="fade-up">
        <Products
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>

      <div ref={featuresRef}>
        <Features />
      </div>

      <div ref={promoRef}>
        <PromoPage />
      </div>

      <div ref={clientRef}>
        <ClientBarbershop />
      </div>

      <div ref={reviewRef} className="mt-20">
        <AllReview />
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollNav && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-4 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V6M5 13l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS CSS
// import Navbar from "./breakdown/Navbar";
// import Barbers from "./breakdown/Barber.jsx";
// import Gallery from "./breakdown/Gallery";
// import Products from "./breakdown/Product.jsx";
// import AllReview from "./breakdown/review";
// import Footer from "./breakdown/footer";
// import PromoPage from "./breakdown/Promo";
// import Features from "./breakdown/Features";
// import ClientBarbershop from "./breakdown/client";
// import Become from "./breakdown/become.jsx";
// import HomePage from "./breakdown/HomePage.jsx";
// import { Home } from "lucide-react";
// import AboutPage from "./breakdown/About.jsx";

// const Dashboard = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [hiddenBarbers, setHiddenBarbers] = useState({});
//   const [activeFilter, setActiveFilter] = useState("popular");
//   const [showScrollNav, setShowScrollNav] = useState(false);

//   // Refs untuk navigasi scroll
//   const homeRef = useRef(null);
//   const featuresRef = useRef(null);
//   const promoRef = useRef(null);
//   const galleryRef = useRef(null);
//   const reviewRef = useRef(null);
//   const clientRef = useRef(null);
//   const barbersRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });

//     const handleScroll = () => {
//       setShowScrollNav(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleBoxClick = (id) => {
//     setHiddenBarbers((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const scrollToSection = (section) => {
//     section.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div
//       className={`min-h-screen p-10 ${
//         isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <Navbar
//         refs={{
//           homeRef,
//           featuresRef,
//           promoRef,
//           galleryRef,
//           reviewRef,
//           clientRef,
//           barbersRef,
//         }}
//       />
//       {/* Header Section */}
//       <div ref={homeRef} className="text-center mb-12 mt-8">
//         <h1 className="text-5xl font-bold text-[#00b14f]">Héllo</h1>
//         <p className="mt-4 text-lg text-gray-500">
//           The Authentic Indonesia Green Coffee Beans Supplier
//         </p>
//         <p className="mt-2 text-xs text-gray-500">
//           The leading supplier of Indonesia coffee beans, with 26 years of
//           service excellence delivering the best quality of green coffee beans
//           wholesale worldwide.
//         </p>
//       </div>
//       {/* <div ref={barbersRef}>
//         <HomePage
//           hiddenBarbers={hiddenBarbers}
//           handleBoxClick={handleBoxClick}
//         />
//       </div> */}
//       {/* Barbers Section */}

//       <div ref={barbersRef}>
//         <Barbers
//           hiddenBarbers={hiddenBarbers}
//           handleBoxClick={handleBoxClick}
//         />
//       </div>

//       <div ref={barbersRef}>
//         <AboutPage
//           hiddenBarbers={hiddenBarbers}
//           handleBoxClick={handleBoxClick}
//         />
//       </div>

//       {/* Gallery Section
//       <div ref={galleryRef} className="mt-20" data-aos="fade-up">
//         <Gallery
//           activeFilter={activeFilter}
//           setActiveFilter={setActiveFilter}
//         />
//       </div> */}
//       {/* Products Section */}
//       <div ref={galleryRef} className="mt-20" data-aos="fade-up">
//         <Products
//           activeFilter={activeFilter}
//           setActiveFilter={setActiveFilter}
//         />
//       </div>
//       {/* Features Section */}
//       <div ref={featuresRef}>
//         <Features />
//       </div>
//       {/* Become Section */}
//       <div ref={featuresRef}>
//         <Become />
//       </div>
//       {/* Promo Section */}
//       <div ref={promoRef}>
//         <PromoPage />
//       </div>
//       {/* Client Barbershop */}
//       <div ref={clientRef}>
//         <ClientBarbershop />
//       </div>
//       {/* Barbers Review Section */}
//       <div ref={reviewRef} className="mt-20">
//         <AllReview />
//       </div>
//       {/* Footer */}
//       <Footer />
//       {/* Scroll to Top Button */}
//       {showScrollNav && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-10 right-10 p-4 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M12 19V6M5 13l7-7 7 7" />
//           </svg>
//         </button>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
