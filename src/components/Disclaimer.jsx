import NavBar from "../partials/NavBar";
import Footer from "../partials/Footer";

const Disclaimer = () => {
  return (
    <>
    <NavBar />
    <div className="max-w-4xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Disclaimer</h1>
      <p className="text-sm text-gray-500 mb-6">Last Updated: 2024-09-01</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. General Information</h2>
        <p className="text-gray-700">
          The information provided on FTI Nexus (the "Website") is for general informational purposes only. All information on the Website is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.
        </p>
        <p className="text-gray-700 mt-4">
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Website or reliance on any information provided on the Website. Your use of the Website and your reliance on any information on the Website is solely at your own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Investment Risk Disclaimer</h2>
        <p className="text-gray-700">
          The Website does not provide investment advice. The information on this platform is provided for informational purposes only and should not be considered as financial or investment advice. Before making any investment decisions, you should seek the advice of a qualified financial advisor who understands your individual financial situation.
        </p>
        <p className="text-gray-700 mt-4">
          Trading and investment involve significant financial risk. Past performance is not indicative of future results. You should carefully consider your financial goals, investment knowledge, and risk appetite before making any investment. [Your Website Name] will not be responsible for any losses incurred through investment strategies or actions based on the information provided on this platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. No Professional Relationship</h2>
        <p className="text-gray-700">
          The use of our Website does not create any fiduciary or advisory relationship between you and FTI Nexus. The information and resources provided on the Website are for informational purposes only and do not constitute professional, legal, or financial advice. Always consult a professional before making any financial, legal, or trading decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. External Links Disclaimer</h2>
        <p className="text-gray-700">
          The Website may contain links to other websites or content belonging to or originating from third parties, or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>
        <p className="text-gray-700 mt-4">
          We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Website or any website or feature linked in any banner or other advertising. We will not be a party to or in any way responsible for monitoring any transaction between you and third-party providers of products or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Earnings Disclaimer</h2>
        <p className="text-gray-700">
          Any income or earnings examples provided on the Website are estimates or projections of potential earnings and should not be considered as typical, guaranteed, or expected outcomes. Your financial results may vary based on your individual circumstances, market conditions, and other factors outside of our control.
        </p>
        <p className="text-gray-700 mt-4">
          We make no assurance or warranty regarding future earnings or income projections, and you should not rely on such representations as a guarantee of potential earnings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p className="text-gray-700">
          To the maximum extent permitted by law, FTI Nexus will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of, or inability to use, the Website or the information contained on the Website.
        </p>
        <p className="text-gray-700 mt-4">
          This includes, but is not limited to, damages for errors, omissions, interruptions, or delays in service, loss of data, unauthorized access to or alteration of your transmissions or data, and any other tangible or intangible losses.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Changes to This Disclaimer</h2>
        <p className="text-gray-700">
          We reserve the right to modify this Disclaimer at any time. Any changes will be updated on this page, and it is your responsibility to review this Disclaimer periodically for updates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Disclaimer, you can contact us at <a href="mailto:support@ftinexus.com">support@ftinexus.com</a>.
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Disclaimer;
