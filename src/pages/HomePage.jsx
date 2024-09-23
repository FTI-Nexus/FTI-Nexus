import NavBar from "../partials/NavBar";
import Footer from "../partials/Footer";


const HomePage = () => {
    return(
    <>
      <NavBar />

      <section style={{ backgroundImage: 'url(/images/2.svg)' }} className="bg-gray-50 py-8 bg-cover">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        {/* Left Content: Heading, Subheading, CTA */}
        <div className=" md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Unlock Your Trading Potential with FTI Nexus
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover our platform for freelance trading, investment opportunities, and much more. Empower your financial future with the tools and insights you need.
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="/get-started"
              className="bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="text-indigo-700 border border-indigo-700 px-6 py-3 rounded-lg hover:bg-indigo-700 hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Content: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="../images/3.png"
            alt="Trading Illustration"
            className="w-90 h-auto"
          />
        </div>
      </div>
    </section>
    
      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Why Choose Us?</h3>
            <p className="text-gray-600 mt-4">Our platform offers unparalleled features for freelance traders and investors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-600 mb-4">Real-Time Data</h4>
              <p className="text-gray-600">Access up-to-the-minute market data and make informed trading decisions instantly.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-600 mb-4">Advanced Tools</h4>
              <p className="text-gray-600">Leverage professional-grade tools designed for both beginners and expert traders.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-600 mb-4">Secure & Compliant</h4>
              <p className="text-gray-600">Your data is fully secure, and we comply with global trading regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-indigo-600 py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Trading?</h3>
          <p className="mb-6">Sign up today and take your trading to the next level.</p>
          <a href="#" className="bg-white text-indigo-600 py-3 px-6 rounded-lg shadow hover:bg-gray-100">Join Now</a>
        </div>
      </section>
      <Footer />

    </>
    )
}

export default HomePage;