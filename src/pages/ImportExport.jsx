import Container from "../components/Container"
import { Link } from "react-router-dom"

// add your images here
import portImg from "../assets/images/container-truck.jpg"
import cargoImg from "../assets/images/warehouse-interior.jpg"

export default function ImportExport() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative text-white py-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${portImg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <Container>
          <div className="relative max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Import & Export Solutions
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              Seamless international trade operations across maritime, air, and
              land borders. We manage your cargo from origin to final delivery
              with compliance, speed, and reliability.
            </p>
          </div>
        </Container>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-primary mb-6">
              End-to-End Trade Management
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              TANYI Group provides comprehensive import and export services for
              businesses moving goods across borders. From documentation and
              customs clearance to warehousing and final delivery, we ensure your
              shipments arrive safely, on time, and fully compliant with
              international regulations.
            </p>
          </div>
        </Container>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-28 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-semibold text-center text-primary mb-14">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              "Sea freight forwarding",
              "Air freight handling",
              "Road & transit logistics",
              "Customs documentation",
              "Cargo consolidation (groupage)",
              "Door-to-door delivery",
            ].map((item) => (
              <div
                key={item}
                className="p-10 bg-white rounded-2xl shadow hover:-translate-y-1 transition"
              >
                <h4 className="text-lg font-semibold text-primary">{item}</h4>
              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-28 bg-white">
        <Container>
          <h2 className="text-4xl font-semibold text-center text-primary mb-14">
            How We Handle Your Shipment
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            {[
              "Booking & documentation",
              "Cargo pickup / port handling",
              "Customs clearance",
              "Final delivery",
            ].map((step, index) => (
              <div key={step} className="p-8">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* ================= IMAGE + TEXT ================= */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <img
              src={cargoImg}
              alt="Cargo handling operations"
              className="rounded-3xl shadow-2xl object-cover"
            />

            <div>
              <h2 className="text-4xl font-semibold text-primary mb-6">
                Regional & Global Coverage
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Operating across Douala, Kribi, and major international trade
                corridors, we connect local businesses to global markets. Our
                strong network of shipping lines, airlines, and transport
                partners guarantees dependable delivery worldwide.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Port & airport operations</li>
                <li>✔ Licensed customs brokers</li>
                <li>✔ Real-time shipment tracking</li>
                <li>✔ Competitive freight rates</li>
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-primary text-white text-center">
        <Container>
          <h2 className="text-4xl font-semibold mb-6">
            Ready to ship internationally?
          </h2>

          <Link
            to="/contact"
            className="bg-accent text-black px-8 py-3 text-lg rounded font-semibold hover:scale-105 transition"
          >
            Get a Quote
          </Link>
        </Container>
      </section>
    </>
  )
}
