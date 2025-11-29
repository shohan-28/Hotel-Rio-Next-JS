
export default function ContactUs() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-[url('/images/hotel-exterior.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white tracking-wide">
          Contact <span className="text-yellow-400">Hotel Rio</span>
        </h1>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Info */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We’re here to help you 24/7. Whether it’s booking inquiries,
            corporate events, or special requests, our team is ready to assist.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-yellow-500 text-2xl">📍</span>
              <p className="text-gray-700">123 Rio Street, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-yellow-500 text-2xl">📞</span>
              <p className="text-gray-700">+880 1234 567 890</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-yellow-500 text-2xl">✉️</span>
              <p className="text-gray-700">info@hotelrio.com</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}