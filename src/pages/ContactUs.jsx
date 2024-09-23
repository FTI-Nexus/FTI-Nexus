import NavBar from "../partials/NavBar";
import Footer from "../partials/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-12 text-center">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <p className="text-lg mt-4">We’d love to hear from you. Whether you have a question or need assistance, we're here to help!</p>
      </section>

      {/* Contact Form Section */}
      <section className="flex-grow container mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FTI Nexus. All rights reserved.</p>
          <p className="mt-2">Kumasi, Ghana | support@ftinexus.com | +2335673747865</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
