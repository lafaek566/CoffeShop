import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="text-gray-900 ">
      {/* Banner Section */}
      <section className="bg-[url('https://png.pngtree.com/background/20250111/original/pngtree-coffee-plantation-at-sunrise-picture-image_15936309.jpg')] bg-cover bg-center text-white h-screen flex flex-col items-center justify-center text-center p-10 rounde-full">
        <h1 className="text-5xl font-bold mb-4">
          Authentic Green Coffee Beans
        </h1>
        <p className="mb-6 text-lg max-w-xl">
          FnB Coffee – We specialize in high-quality Green Beans, Kopi Luwak,
          and Private Label services.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-600 px-6 py-3 rounded-full hover:bg-green-700">
            Order Now
          </button>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-green-700 transition">
            ▶ Play Video
          </button>
        </div>
      </section>

      {/* Mini Section Links */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Catalog",
            "Flyer",
            "Price List",
            "FAQ",
            "Contract",
            "Distributor",
          ].map((item) => (
            <button
              key={item}
              className="bg-white border rounded-md px-4 py-2 hover:bg-green-100"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Our Speciality */}
      <section className="py-16 px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8">Our Speciality</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            "Green Beans Coffee",
            "Kopi Luwak",
            "Private Label",
            "Distributor",
          ].map((item) => (
            <div
              key={item}
              className="p-6 border rounded-lg shadow hover:shadow-lg"
            >
              <h3 className="font-semibold text-xl mb-2">{item}</h3>
              <p className="text-sm text-gray-600">
                High quality and trusted by many businesses globally.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Favorite Products, Membership & Certification */}
      <section className="py-16 bg-gray-50 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Favorite Product List
        </h2>
        {/* Replace this with product cards or a carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="border p-4 rounded-lg shadow hover:shadow-lg"
            >
              <h3 className="font-semibold mb-2">Product {id}</h3>
              <p className="text-sm text-gray-600">
                Description of product {id}.
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">
            Membership & Certifications
          </h3>
          <p className="text-sm text-gray-600">
            We are certified and trusted by international organizations.
          </p>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="py-16 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">
          Buy Wholesale Coffee
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Why choose FnB Coffee?
            </h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Direct from farmers</li>
              <li>Export quality</li>
              <li>Customizable label & packaging</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-4 py-2 rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full border px-4 py-2 rounded h-32"
              ></textarea>
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-100 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
        <p className="text-sm mb-6">Our office and warehouse location</p>
        <div className="w-full h-64 bg-gray-300">[Google Map Embed Here]</div>
      </section>

      {/* Download Buttons */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Download</h2>
        <div className="flex justify-center gap-4">
          {["Catalog", "Flyer", "Price List"].map((item) => (
            <button
              key={item}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Download {item}
            </button>
          ))}
        </div>
      </section>

      {/* News / Blog Section */}
      <section className="py-16 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div key={id} className="border p-4 rounded shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Blog Title {id}</h3>
              <p className="text-sm text-gray-600">
                Brief description of blog content {id}...
              </p>
              <button className="mt-2 text-green-600 hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {[
            ["What is FnB Coffee?", "We are a supplier of green coffee beans."],
            [
              "How to order?",
              "You can order directly through our contact form or WhatsApp.",
            ],
            [
              "Do you offer private labeling?",
              "Yes, we specialize in private label packaging.",
            ],
          ].map(([q, a], i) => (
            <div key={i} className="border p-4 rounded">
              <h3 className="font-semibold">{q}</h3>
              <p className="text-sm text-gray-600 mt-2">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
