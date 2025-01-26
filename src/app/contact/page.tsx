

const ContactPage = () => {
  return (
    <div>
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Have questions or need assistance? We’d love to hear from you!
          </p>
          <form className="max-w-xl w-full mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="text-left md:text-center">
              <h3 className="text-lg font-bold">📞 Phone</h3>
              <p className="text-gray-600">+1 808-555-0111</p>
            </div>
            <div className="text-left md:text-center">
              <h3 className="text-lg font-bold">✉️ Email</h3>
              <p className="text-gray-600">contact@yourwebsite.com</p>
            </div>
            <div className="text-left md:text-center">
              <h3 className="text-lg font-bold">📍 Address</h3>
              <p className="text-gray-600">
                123 Comfort Street, Interior City, IN 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
