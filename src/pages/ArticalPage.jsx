import NavBar from "../partials/NavBar";
import Footer from "../partials/Footer";




const ArticalPage = () => {
    return (
        <>
            <div className="bg-gray-100 m-h-screen">
                <NavBar />

                {/* Hero Section */}
                <section style={{backgroundImage: "url('./images/1.jpg')"}} className="bg-cover bg-opacity-20 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4">About FTI Nexus</h1>
                    <p className="text-lg">
                        Your all-in-one platform for freelance services and smart investment trading. We connect freelancers and investors to empower growth and success.
                    </p>
                    </div>
                </section>

      

                <Footer />
            </div>
        </>
    )
}

export default ArticalPage;