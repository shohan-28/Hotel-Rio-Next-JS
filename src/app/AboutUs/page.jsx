
export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[url('/images/hotel-lobby.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white tracking-wide">
          About <span className="text-yellow-400">Hotel Rio</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Experience Luxury & Comfort
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to <span className="font-semibold">Hotel Rio</span>, where
            timeless elegance meets modern hospitality. Nestled in the heart of
            the city, we pride ourselves on delivering premium experiences for
            both leisure and business travelers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is simple: to make every stay unforgettable. From
            world-class dining to serene spa retreats, Hotel Rio is more than a
            destination — it’s a lifestyle.
          </p>
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition">
            Explore Our Services
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold text-gray-800">20+ Years</h3>
            <p className="text-gray-500">of Excellence in Hospitality</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">🏆 Premium Service</h4>
            <p className="text-gray-600">
              Personalized care and attention to detail for every guest.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">🍽 Fine Dining</h4>
            <p className="text-gray-600">
              Culinary experiences crafted by world-class chefs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">🌍 Global Standards</h4>
            <p className="text-gray-600">
              International hospitality standards with a local touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}