const Footer = () => {
    return(
        <>
            {/* Footer */}
        <footer className="bg-white py-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8  md:text-left">
                
                {/* Contact Section */}
                <div>
                <h4 className="font-bold text-gray-800 mb-2">Contact</h4>
                <p className="text-gray-600">FTI Nexus Inc.</p>
                <p className="text-gray-600">+2335673747865</p>
                <p className="text-gray-600">support@ftinexus.com</p>
                <p className="text-gray-600">Kumasi - Ghana</p>
                </div>

                {/* Legal Section */}
                <div>
                <h4 className="font-bold text-gray-800 mb-2">Legal</h4>
                <ul>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600">Terms of Use</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600">Twitter</a></li>
                </ul>
                </div>

                {/* Support Section */}
                <div>
                <h4 className="font-bold text-gray-800 mb-2">Support</h4>
                <ul>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600">FAQ</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact Us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a></li>
                </ul>
                </div>

                {/* Trading Resources Section */}
                <div>
                <h4 className="font-bold text-gray-800 mb-2">Trading Resources</h4>
                <ul>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600">Tutorials</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600">Webinars</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-indigo-600">Market Analysis</a></li>
                </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-10 border-t border-gray-200 pt-6 text-center">
                <p className="text-gray-600">&copy; 2024 FTI Nexus. All Copyright reserved.</p>
                <div className="mt-4">
                <a href="#" className="text-gray-600 hover:text-indigo-600 mx-2"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 mx-2"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;