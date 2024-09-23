import NavBar from "../partials/NavBar";
import Footer from "../partials/Footer";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <NavBar />

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About FTI Nexus</h1>
          <p className="text-lg">
            Your all-in-one platform for freelance services and smart investment trading. We connect freelancers and investors to empower growth and success.
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At FTI Nexus, we saw a unique opportunity to combine freelance services with smart trading solutions. Our platform connects talented freelancers with clients while providing a secure investment trading environment, making us the perfect hub for those looking to maximize their potential in both fields.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 text-center">
          {/* Mission */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To create a seamless, integrated platform where freelancers and investors thrive. We empower individuals by providing opportunities for freelance work and strategic investment in a single ecosystem.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 border border-gray-200 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To revolutionize the way freelancers and investors work together, creating a future where flexible employment and smart financial growth are within everyone’s reach.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Freelance Services */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Freelance Opportunities</h3>
              <p className="text-gray-600">
                Whether you're a graphic designer, developer, writer, or marketer, FTI Nexus connects you with clients across the globe. Our platform helps you showcase your skills and secure high-paying freelance gigs.
              </p>
            </div>

            {/* Investment Trading */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Investment Trading</h3>
              <p className="text-gray-600">
                Our smart trading platform offers tools and resources for both novice and experienced investors. Trade in various markets, manage your portfolio, and stay informed with real-time insights to maximize your returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Our team consists of industry professionals with a passion for empowering freelancers and investors alike.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
              <img
                className="h-24 w-24 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h4 className="text-lg font-semibold">Herbert</h4>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            {/* Team Member */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
              <img
                className="h-24 w-24 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h4 className="text-lg font-semibold">Eric</h4>
              <p className="text-gray-600">CTO & Co-Founder</p>
            </div>

            {/* Team Member */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
              <img
                className="h-24 w-24 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h4 className="text-lg font-semibold">Bernard</h4>
              <p className="text-gray-600">Head of Trading Operations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default AboutPage;
