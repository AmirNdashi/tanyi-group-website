// import PageHeader from "../components/PageHeader"
// import Container from "../components/Container"
// import { Link } from "react-router-dom"

// const services = [
//   { name: "Warehousing", path: "/services/warehousing", desc: "Secure and scalable storage solutions." },
//   { name: "Import / Export", path: "/services/import-export", desc: "End-to-end international trade services." },
//   { name: "Transit", path: "/services/transit", desc: "Efficient cargo movement across borders." },
//   { name: "Customs Clearance", path: "/services/customs-clearance", desc: "Fast and compliant customs processing." }
// ]

// export default function Services() {
//   return (
//     <>
//       <PageHeader
//         title="Our Services"
//         subtitle="Comprehensive logistics solutions under one group"
//       />

//       <section className="py-20">
//         <Container>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map(service => (
//               <Link
//                 key={service.name}
//                 to={service.path}
//                 className="border rounded-lg p-6 hover:shadow-lg transition"
//               >
//                 <h3 className="text-xl font-semibold mb-3">
//                   {service.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   {service.desc}
//                 </p>
//               </Link>
//             ))}
//           </div>
//         </Container>
//       </section>
//     </>
//   )
// }

import PageHeader from "../components/PageHeader"
import Container from "../components/Container"
import { Link } from "react-router-dom"

const services = [
  {
    name: "Warehousing",
    path: "/services/warehousing",
    desc: "Secure, scalable, and strategically located storage facilities designed to support modern supply chains.",
    size: "large",
  },
  {
    name: "Import & Export",
    path: "/services/import-export",
    desc: "End-to-end management of international trade operations with precision and regulatory compliance.",
    size: "tall",
  },
  {
    name: "Transit Services",
    path: "/services/transit",
    desc: "Efficient cargo movement across borders using optimized logistics networks.",
    size: "standard",
  },
  {
    name: "Customs Clearance",
    path: "/services/customs-clearance",
    desc: "Fast, transparent, and compliant customs processing handled by experienced professionals.",
    size: "standard",
  },
]

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive logistics and trade solutions under one group"
      />

      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">

            {services.map((service) => {
              const sizeClasses =
                service.size === "large"
                  ? "lg:col-span-2 p-12 rounded-2xl"
                  : service.size === "tall"
                  ? "p-12 rounded-2xl"
                  : "p-8 rounded-xl"

              return (
                <Link
                  key={service.name}
                  to={service.path}
                  className={`group bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${sizeClasses}`}
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {service.desc}
                    </p>

                    <span className="mt-6 inline-flex items-center text-primary font-medium group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
