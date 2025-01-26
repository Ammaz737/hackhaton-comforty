import Footer from "@/components/footer";
import React from "react";
import Image from "next/image"; 

const AboutPage: React.FC = () => {
  return (
    <div>
      

      
      <section className="bg-[#f9f9f9] py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 space-y-6 md:space-y-0 md:space-x-8">
          <div className="bg-teal-600 text-white p-8 rounded-lg md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">About Us - Comforty</h2>
            <p>
              At Comforty, we believe that every chair has a story to tell.
              From the materials to the design, we craft each chair with
              precision and care to ensure that you’ll enjoy a cozy experience.
              Browse our latest collection and find a new story for your living
              room.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-teal-600 font-semibold rounded hover:bg-teal-700 hover:text-white">
              View Collection
            </button>
          </div>

          
          <div className="md:w-1/2">
            <Image
              src="/Image/whair.png"
              alt="Comforty Chair"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

     
      <section className="py-12">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-2xl font-semibold mb-6">
            What Makes Our Brand Different
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚚",
                title: "Next day & standard delivery options",
              },
              {
                icon: "🛠️",
                title: "Made by true artisans, dedicated to comfort",
              },
              {
                icon: "💸",
                title: "Unbeatable prices for premium quality",
              },
              {
                icon: "♻️",
                title: "Recyclable packaging & sustainable materials",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <p>{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="bg-[#f9f9f9] py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-2xl font-semibold mb-6">
            Our Popular Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "The Parker sofa",
                price: "$500.00",
                Image: "/image/Fe.png",
              },
              {
                name: "The Darcy chair",
                price: "$250.00",
                Image: "/Image/chair.png",
              },
              {
                name: "The Cindy chair",
                price: "$200.00",
                Image: "/image/Chair2.png",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <Image
                  src={product.Image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                <p className="text-teal-600 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
