import { motion } from "framer-motion";
import { Scissors, Users, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BarbermanSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-20 text-center bg-cover bg-center rounded-3xl mt-20"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/474x/5a/40/61/5a4061452c0c18d5b42a7e80d6e57398.jpg')",
      }}
    >
      <motion.h2
        className="text-3xl font-bold text-[#00b14f] mb-6"
        style={{ textShadow: "4px 1px 2px rgba(0,0,0,0.3)" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Become Coffee !
      </motion.h2>

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {[
          {
            icon: <Users size={40} />,
            title: "How Make it ?",
            desc: "How to Roast Green Beans: A Step-by-Step Guide to Perfect Flavor",
          },
          {
            icon: <Users size={40} />,
            title: "Community Local",
            desc: "How to Brew Balinese Coffee Like a Local",
          },
          {
            icon: <Users size={40} />,
            title: "Guide",
            desc: "The Complete Guide to Toraja Sulawesi Coffee Beans",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-200 bg-opacity-70 shadow-lg rounded-2xl flex flex-col items-center gap-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-black">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-8 px-6 py-3 bg-[#00b14f] text-white font-semibold rounded-xl shadow-lg hover:bg-orange-500"
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("/register-barber")}
      >
        Join Now
      </motion.button>
    </section>
  );
};

export default BarbermanSection;
