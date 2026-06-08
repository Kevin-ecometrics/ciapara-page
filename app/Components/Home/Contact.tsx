
export default function Contact() {
    return (
        <div className="bg-[#FAF8F4]">
            <div className="mx-10 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold tracking-[0.2em] uppercase text-primary mt-20">Contact</h1>
                <div className="py-10 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-center">
                        <iframe className="rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.802415530763!2d-117.0391075243073!3d32.531423673767264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949abacce16cf%3A0x19ff5488abe9a837!2sAv.%20Revoluci%C3%B3n%2C%20Tijuana%2C%20B.C.!5e0!3m2!1sen!2smx!4v1780952553811!5m2!1sen!2smx" width="700" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="flex items-center justify-center w-full h-full">
                            <form action="" className="w-full max-w-md">
                                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 text-center">
                                    <h1 className="text-2xl font-bold text-gray-800">Get in Touch</h1>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Full Name *"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone Number *"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message *"
                                        rows={4}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}