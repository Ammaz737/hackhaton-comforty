import React from "react";
import Footer from "@/components/footer";



const FAQPage: React.FC = () => {
  return (
    <div className="text-black text-sm">
  

      <main className="container mx-auto py-10 px-6 sm:py-8 sm:px-4">
    
        <section className="text-center mb-10">
          <h1 className="text-3xl font-semibold mb-6">Questions Look Here</h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the...
          </p>
        </section>

        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-4">
          {[
            { question: "What types of chairs do you offer?", id: 1 },
            { question: "Do your chairs come with a warranty?", id: 2 },
            { question: "Can I try a chair before purchasing?", id: 3 },
            { question: "How can we get in touch with you?", id: 4 },
            { question: "What will be delivered? And when?", id: 5 },
            { question: "How do I clean and maintain my Comforty chair?", id: 6 },
          ].map((faq) => (
            <div
              key={faq.id}
              className="bg-white shadow-sm rounded-lg p-6 border border-gray-200"
            >
              <h2 className="text-lg font-medium mb-2">{faq.question}</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis mollitia quod obcaecati...
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
