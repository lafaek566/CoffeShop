import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaMapMarkerAlt,
  FaRegCreditCard,
  FaUserCheck,
  FaSearchLocation,
} from "react-icons/fa";

// Data untuk fitur-fitur
const featureData = [
  {
    icon: <FaSearchLocation className="text-white text-5xl mb-4 mx-auto" />,
    title: "Roasters and Businesses",
    description:
      "We have a deep appreciation for our customers, especially those home roasters who have transitioned into full-time small business owners or are running cafes, coffee shops, or stands at farmers’ markets.",
    image:
      "https://i.pinimg.com/474x/b7/6a/cb/b76acbe568549aca39ce53340407e683.jpg",
    delay: 0.2,
  },
  {
    icon: <FaRegCreditCard className="text-white text-5xl mb-4 mx-auto" />,
    title: "Exclusive Benefits for Our Wholesale Buyers",
    description:
      "We’ve created a dedicated space for wholesale buyers with unique perks designed just for you. For only $99 a year, you’ll gain access to: Unbeatable savings on our premium wholesale green coffee beans. Less shipping fee on all your orders.",
    image:
      "https://i.pinimg.com/474x/2e/88/44/2e8844fbd177ff92bd36228cf20b5980.jpg",
    delay: 0.4,
  },
  {
    icon: <FaUserCheck className="text-white text-5xl mb-4 mx-auto" />,
    title: "Hassle-Free Ordering and Support",
    description:
      "Have questions? Call our team at +62 811 6171 777, and we’ll walk you through our wholesale program and help with any inquiries you have.",
    image:
      "https://i.pinimg.com/474x/75/e3/c4/75e3c42535c8f0c31558e45e1a3e0ff6.jpg",
    delay: 0.6,
  },
  {
    icon: <FaMapMarkerAlt className="text-white text-5xl mb-4 mx-auto" />,
    title: "Always In Stock and Ready to Ship",
    description:
      "We pride ourselves on keeping a wide range of high-quality green coffee beans consistently in stock and ready to ship. At FNB COFFEE",
    image:
      "https://i.pinimg.com/474x/40/ba/a6/40baa66dde127e62d5c575379b39177c.jpg",
    delay: 0.8,
  },
];

// Komponen kartu fitur
const FeatureCard = ({ icon, title, description, delay, image }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-cover bg-center rounded-3xl shadow-xl overflow-hidden h-[400px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center p-6">
        {icon}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// Komponen utama fitur
const FeaturesSection = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-extrabold text-center text-[#00b14f] mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Wholesale Coffee Subscription
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {featureData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
