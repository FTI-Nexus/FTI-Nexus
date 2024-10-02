import Footer from "../partials/Footer";
import NavBar from "../partials/NavBar";

const PrivacyPolicy = () => {
  return (
    <>
    <NavBar />
    <div className="max-w-4xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last Updated: 2024-09-01</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700">
          Welcome to FTI Nexuus. This Privacy Policy explains how we collect, use, and share information when you use our freelance trading and investment platform. By using the Service, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p className="text-gray-700">
          We may collect the following types of information:
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>**Personal Information**: This includes your name, email address, phone number, and payment information when you create an account or make transactions on our platform.</li>
          <li>**Usage Data**: We collect information on how the Service is accessed and used, including your IP address, browser type, and interaction with our platform.</li>
          <li>**Cookies**: We use cookies to enhance your experience and analyze usage patterns. You can control cookie preferences in your browser settings.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p className="text-gray-700">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>To provide and maintain our Service, including facilitating trades and investments.</li>
          <li>To process transactions and send updates related to your account or transactions.</li>
          <li>To personalize and improve your experience on our platform.</li>
          <li>To communicate with you regarding promotions, news, or changes to our Service.</li>
          <li>To analyze and monitor usage trends and enhance platform performance.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. How We Share Your Information</h2>
        <p className="text-gray-700">
          We may share your information in the following circumstances:
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>**Service Providers**: We may share your data with third-party service providers who assist us with payment processing, analytics, and marketing.</li>
          <li>**Legal Requirements**: We may disclose your information if required by law or in response to valid requests by public authorities.</li>
          <li>**Business Transfers**: In the event of a merger, acquisition, or asset sale, your information may be transferred as part of the transaction.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p className="text-gray-700">
          We take reasonable steps to protect your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Your Data Rights</h2>
        <p className="text-gray-700">
          Depending on your location, you may have the following rights regarding your data:
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>**Access**: You can request access to the personal information we hold about you.</li>
          <li>**Correction**: You can request to correct any inaccurate or incomplete personal data.</li>
          <li>**Deletion**: You can request that we delete your personal information, subject to certain legal obligations.</li>
        </ul>
        <p className="text-gray-700">
          To exercise any of these rights, please contact us at <a href="mailto:support@ftinexus.com">support@ftinexus.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Changes are effective when they are posted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@ftinexus.com">support@ftinexus.com</a>.
        </p>
      </section>
    </div>

    <Footer />
    </>
  );
};

export default PrivacyPolicy;
