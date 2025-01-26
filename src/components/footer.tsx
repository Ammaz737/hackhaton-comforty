import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
        <div>
          <div className="flex items-center space-x-2">
            <img src="/Image/comforty.png" alt="Comforty Logo" className="w-20 h-auto" />
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
     
          <div className="flex space-x-4 mt-4">
            {["facebook", "twitter", "instagram", "pinterest", "youtube"].map((icon) => (
              <a key={icon} href="#" className="text-gray-600 hover:text-gray-800">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Category</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Support</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
          <p className="text-gray-600 mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-200 mt-8 pt-4">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2024 Comforty. Designed & Developed by Muhammad Ammaz.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <img
              src="https://w7.pngwing.com/pngs/665/281/png-transparent-logo-computer-icons-paypal-paypal-blue-angle-rectangle.png"
              alt="PayPal"
              className="h-6"
            />
            <img
              src="data:image/jpeg;base64,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"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
              alt="MasterCard"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
