// import { Link } from "react-router-dom"
// import Container from "../components/Container"

// export default function Home() {
//   return (
//     <>
//       <section className="bg-gradient-to-r from-primary to-secondary text-white py-40">
//         <Container>
//           <div className="text-center max-w-3xl mx-auto">
//             <h1 className="text-6xl font-bold mb-6">
//               Integrated Logistics & Trade Solutions
//             </h1>
//             <p className="mb-10 text-lg">
//               Warehousing, import/export, transit and customs clearance services
//               tailored for modern businesses.
//             </p>
//             <div className="flex justify-center gap-4">
//               <Link to="/services" className="bg-accent text-black text-lg px-8 py-3 font-semibold">
//                 Our Services
//               </Link>
//               <Link to="/contact" className="border border-white text-lg px-8 py-3">
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </section>
//     </>
//   )
// }


import { Link } from "react-router-dom"
import Container from "../components/Container"

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-40">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Integrated Logistics <br /> & Trade Solutions
            </h1>
            <p className="mb-10 text-lg text-gray-100">
              Delivering reliable warehousing, import/export, transit and customs
              clearance services across borders.
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
              offering end-to-end trade and supply chain solutions. With a strong
              focus on compliance, efficiency, and reliability, we support
              businesses in moving goods seamlessly across local and
              international markets.
            </p>
          </div>
        </Container>
      </section>

      {/* SERVICES HIGHLIGHT */}
<section className="py-32 bg-gray-50">
  <Container>
    <div className="grid 1xl:grid-cols-4 md:grid-cols-2 gap-10">

      {/* LARGE FEATURE CARD */}
      <div className="lg:col-span-2 bg-white p-14 min-h-[280px] rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-primary">
            Warehousing Solutions
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Secure, scalable, and strategically located storage facilities
            designed to support modern supply chains, inventory control, and
            distribution efficiency.
          </p>
        </div>

        <Link
          to="/services/warehousing"
          className="text-primary font-semibold text-lg mt-8 inline-block hover:underline"
        >
          Learn more →
        </Link>
      </div>

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

      {/* STANDARD LARGE CARD */}
      <div className="bg-white p-12 min-h-[320px] rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Transit Services
          </h3>
          <p className="text-gray-600 text-lg">
            Reliable cargo movement across borders using optimized routes and
            coordinated logistics planning.
          </p>
        </div>
      </div>

      {/* STANDARD LARGE CARD */}
      <div className="bg-white p-12 min-h-[320px] rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Customs Clearance
          </h3>
          <p className="text-gray-600 text-lg">
            Fast, transparent, and compliant customs processing handled by
            experienced professionals.
          </p>
        </div>
      </div>

    </div>
  </Container>
</section>


      {/* VALUE / CREDIBILITY */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 transition hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Experience
              </h4>
              <p className="text-gray-600">
                Proven expertise in logistics, trade, and regulatory compliance.
              </p>
            </div>

            <div className="p-6 transition hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Reliability
              </h4>
              <p className="text-gray-600">
                Consistent service delivery you can depend on.
              </p>
            </div>

            <div className="p-6 transition hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Regional Expertise
              </h4>
              <p className="text-gray-600">
                Deep understanding of local and international markets.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
