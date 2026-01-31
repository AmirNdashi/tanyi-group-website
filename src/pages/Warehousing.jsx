import Container from "../components/Container"
import { Link } from "react-router-dom"

// your local images (add yours here)
import warehouse1 from "../assets/images/warehouse-interior.jpg"
import warehouse2 from "../assets/images/container-truck.jpg"

export default function Warehousing() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative text-white py-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${warehouse1})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <Container>
          <div className="relative max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Warehousing & Storage Solutions
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              Secure bonded warehouses, cargo consolidation, and distribution
              services designed to support efficient and compliant supply chains
              across Douala, Kribi, and international trade routes.
            </p>
          </div>
        </Container>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-primary mb-6">
              Reliable Storage Infrastructure
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our warehousing facilities provide safe, scalable, and strategically
              located storage for importers, exporters, and distributors. We
              combine modern infrastructure with experienced handling teams to
              ensure goods remain protected and efficiently managed from arrival
              to dispatch.
            </p>
          </div>
        </Container>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">

            <img
              src={warehouse1}
              alt="Warehouse interior storage racks"
              className="rounded-2xl shadow-lg object-cover h-72 w-full"
            />

            <img
              src={warehouse2}
              alt="Cargo loading operations"
              className="rounded-2xl shadow-lg object-cover h-72 w-full"
            />

            {/* You can add more local images here */}
            <div className="bg-primary text-white rounded-2xl flex items-center justify-center p-10 shadow-lg">
              <p className="text-center text-lg font-medium">
                5,000+ m² <br /> bonded warehouse capacity
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-28 bg-white">
        <Container>
          <h2 className="text-4xl font-semibold text-center text-primary mb-14">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700">

            {[
              "Bonded warehouse storage",
              "Cargo consolidation & groupage",
              "Inventory management",
              "Short & long term storage",
              "Loading and unloading services",
              "Secure handling with trained staff",
            ].map((item) => (
              <div
                key={item}
                className="p-8 bg-gray-50 rounded-2xl shadow hover:-translate-y-1 transition"
              >
                • {item}
              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl font-semibold text-primary mb-6">
                Why Choose TANYI Warehousing?
              </h2>

              <ul className="space-y-4 text-lg text-gray-600">
                <li>✔ Strategically located near major ports</li>
                <li>✔ Secure & monitored facilities</li>
                <li>✔ Fast cargo handling</li>
                <li>✔ Experienced logistics professionals</li>
                <li>✔ Full customs & transit integration</li>
              </ul>
            </div>

            <img
              src={warehouse1}
              alt="Warehouse operations"
              className="rounded-3xl shadow-2xl object-cover"
            />

          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-primary text-white text-center">
        <Container>
          <h2 className="text-4xl font-semibold mb-6">
            Need secure warehousing today?
          </h2>

          <Link
            to="/contact"
            className="bg-accent text-black px-8 py-3 text-lg rounded font-semibold hover:scale-105 transition"
          >
            Contact Our Team
          </Link>
        </Container>
      </section>
    </>
  )
}
