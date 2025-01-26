import Footer from "@/components/footer";
import Hero, { Hero2, Hero3, Hero4 } from "@/components/Hero";
import React from "react";
import ProductCards from "@/components/productlisting";

function page() {
  return (
    <div className="container mx-auto px-4 sm:px-2 lg:px-8">

      <div className="space-y-4">
      </div>

     
      <div className="space-y-8">
    <Hero/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <ProductCards/>
      </div>

     
      <Footer />
    </div>
  );
}

export default page;
