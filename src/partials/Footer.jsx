const Footer = () => {
    return(
        <>
            {/* Footer */}
        <footer className="bg-white py-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8  md:text-left">
                
                {/* Contact Section */}
                <div>
                <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
                <p className="text-gray-600"><i class="fa-solid fa-building text-indigo-600"></i> FTI Nexus Inc.</p>
                <p className="text-gray-600"><i class="fa-solid fa-phone text-indigo-600"></i>+233-56-737-4786</p>
                <p className="text-gray-600"><i class="fa-solid fa-envelope text-indigo-600"></i> support@ftinexus.com</p>
                <p className="text-gray-600"><i class="fa-solid fa-location-dot text-indigo-600"></i> Kumasi - Ghana</p>
                </div>

                {/* Legal Section */}
                <div>
                <h4 className="font-semibold text-gray-800 mb-2">Legal</h4>
                <ul>
                    <li><a aria-description="terms of use" href="/terms-of-use" className="text-gray-600 hover:text-indigo-600 hover:underline">Terms of Use</a></li>
                    <li><a aria-description="privay" href="/privacy" className="text-gray-600 hover:text-indigo-600 hover:underline">Privacy Policy</a></li>
                    <li><a aria-description="disclaimer" href="/disclaimer" className="text-gray-600 hover:text-indigo-600 hover:underline">Disclaimer</a></li>
                    <li><a aria-description="cookies" href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Cookie Policy</a></li>
                </ul>
                </div>

                {/* Support Section */}
                <div>
                <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
                <ul>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">FAQ</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Contact Us</a></li>
                </ul>
                </div>

                {/* Trading Resources Section */}
                <div>
                <h4 className="font-semibold text-gray-800 mb-2">Trading Resources</h4>
                <ul>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Tutorials</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Webinars</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Market Analysis</a></li>
                </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-10 border-t border-gray-200 pt-6 text-center">
                <p className="text-gray-600">&copy; 2024 FTI Nexus. All Copyright reserved.</p>
                <div className="mt-4">
                <a href="#" className="text-gray-600 hover:text-indigo-600 mx-2"><i class="fa-brands fa-square-x-twitter"></i></a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 mx-2"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;