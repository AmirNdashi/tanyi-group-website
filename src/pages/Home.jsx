import { Link } from "react-router-dom"
import Container from "../components/Container"

// IMPORT IMAGES
import containerImg from "../assets/images/container-truck.jpg"
import warehouseImg from "../assets/images/warehouse-interior.jpg"
import heroImg from "../assets/images/hero-port.jpg"


export default function Home() {
  return (
    <>
     {/* HERO */}
<section
  className="relative text-white py-40 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <Container>
    <div className="relative text-center max-w-3xl mx-auto">
      <h1 className="text-6xl font-bold mb-6 leading-tight">
        Integrated Logistics <br /> & Trade Solutions
      </h1>

      <p className="mb-10 text-lg text-gray-100">
        Delivering optimized and innovative logistics solutions across
        maritime, air, and road transportation.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/services"
          className="bg-accent text-black text-lg px-8 py-3 font-semibold rounded transition hover:scale-105"
        >
          Our Services
        </Link>

        <Link
          to="/contact"
          className="border border-white text-lg px-8 py-3 rounded transition hover:bg-white hover:text-primary"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </Container>
</section>


      {/* WELCOME */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-semibold mb-6 text-primary">
              Welcome to TANYI Group
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              TANYI Group is a diversified logistics and commercial enterprise
              providing end-to-end solutions in warehousing, import/export,
              transit, customs clearance, and cargo groupage. Our objective is to
              deliver reliable, compliant, and efficient logistics services
              tailored to modern business needs.
            </p>
          </div>
        </Container>
      </section>

      {/* OPERATIONS IN ACTION */}
      <section className="py-28 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div>
              <h2 className="text-4xl font-semibold text-primary mb-6">
                Our Operations in Action
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We manage real-world logistics operations, from port handling to
                final delivery. Our expertise spans bonded warehousing, cargo
                consolidation, customs processing, and international transit
                across Douala, Kribi, and global trade routes.
              </p>

              <ul className="space-y-4 text-gray-700 text-lg">
                <li>• Bonded warehouse facilities exceeding 5,000 m²</li>
                <li>• Import & export transit management</li>
                <li>• End-to-end customs clearance</li>
                <li>• Air and maritime cargo groupage</li>
              </ul>
            </div>

            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={containerImg}
                alt="Container transport and import export operations"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section className="py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10">

             {/* TALL EMPHASIS CARD */}
       <div className="bg-primary text-white p-14 mx- min-h-[380px] rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col">
         <div>
           <h3 className="text-3xl font-semibold mb-6">
             Import & Export
           </h3>
           <p className="text-gray-200 text-lg leading-relaxed">
             Comprehensive management of international trade operations, ensuring
             compliance, efficiency, and timely movement of goods across borders.
           </p>
         </div>

         <Link
           to="/services/import-export"
           className="text-accent font-semibold text-lg mt-8 inline-block"
         >
           Learn more →
         </Link>
       </div>

            {/* LARGE FEATURE CARD */}
            <div className="lg:col-span-1 bg-gray-50 p-14 min-h-[300px] rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-primary">
                  Warehousing & Groupage
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Secure bonded warehouses for cargo storage, consolidation, and
                  distribution. We support groupage operations for goods moving
                  across local and international markets.
                </p>
              </div>

              <Link
                to="/services/warehousing"
                className="text-primary font-semibold text-lg mt-8 inline-block hover:underline"
              >
                Learn more →
              </Link>
            </div>

            {/* IMAGE CARD */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src={warehouseImg}
                alt="Warehouse storage and bonded facility"
                className="w-full h-full object-cover"
              />
            </div>

            {/* STANDARD CARD */}
            <div className="bg-primary text-white p-12 min-h-[320px] rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Customs Clearance
                </h3>
                <p className="text-gray-200 text-lg">
                  Clearance of all types of goods at Douala and Kribi ports, from
                  declaration to on-site delivery.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* VALUE / CREDIBILITY */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-14 bg-white rounded-2xl shadow hover:-translate-y-1 transition pd-200">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Experience
              </h4>
              <p className="text-gray-900">
                Proven expertise in logistics operations, compliance, and
                international trade.
              </p>
            </div>

            <div className="p-14 bg-white rounded-2xl shadow hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Reliability
              </h4>
              <p className="text-gray-900">
                Consistent service delivery backed by real infrastructure.
              </p>
            </div>

            <div className="p-14 bg-white rounded-2xl shadow hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Regional Expertise
              </h4>
              <p className="text-gray-900">
                Deep operational knowledge of Central African trade routes.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
