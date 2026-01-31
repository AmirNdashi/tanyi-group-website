import { Link } from "react-router-dom";
import { MoveRight, Warehouse, Ship, Truck, FileCheck, Globe } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";

const services = [
  {
    name: "Warehousing",
    path: "/services/warehousing",
    desc: "Secure, scalable, and strategically located storage facilities designed to support modern supply chains. Our facilities feature advanced inventory management and 24/7 security.",
    gridClass: "lg:col-span-4 md:col-span-2", // Large Wide Box
    icon: Warehouse,
    accent: "bg-blue-50",
  },
  {
    name: "Import & Export",
    path: "/services/import-export",
    desc: "End-to-end management of international trade operations with precision and regulatory compliance.",
    gridClass: "lg:col-span-2 md:col-span-1", // Standard Box
    icon: Ship,
    accent: "bg-indigo-50",
  },
  {
    name: "Transit Services",
    path: "/services/transit",
    desc: "Efficient cargo movement across borders using optimized logistics networks and real-time tracking systems.",
    gridClass: "lg:col-span-3 md:col-span-1", // Medium Box
    icon: Truck,
    accent: "bg-slate-50",
  },
  {
    name: "Customs Clearance",
    path: "/services/customs-clearance",
    desc: "Fast, transparent, and compliant customs processing handled by experienced professionals to ensure zero delays at borders.",
    gridClass: "lg:col-span-3 md:col-span-2", // Medium Box
    icon: FileCheck,
    accent: "bg-gray-50",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive logistics and trade solutions tailored for global excellence."
      />

      <section className="py-24">
        <Container>
          {/* Section Introduction */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              What We Do
            </h2>
            <p className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Integrated solutions for a <span className="text-primary underline decoration-blue-200 underline-offset-8">connected world.</span>
            </p>
          </div>

          {/* Combined Professional Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 auto-rows-[340px]">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.name}
                  to={service.path}
                  className={`group relative overflow-hidden bg-white border border-gray-100 rounded-[2rem] p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${service.gridClass}`}
                >
                  {/* Subtle Background Accent (From Code 1) */}
                  <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full transition-transform duration-700 group-hover:scale-[3] ${service.accent} opacity-50`} />
                  
                  {/* Decorative Globe for the widest card */}
                  {service.gridClass.includes('col-span-4') && (
                    <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                      <Globe size={280} />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container (From Code 1) */}
                    <div className="mb-8 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-gray-500 leading-relaxed text-lg flex-grow line-clamp-3 lg:line-clamp-none">
                      {service.desc}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider opacity-80 group-hover:opacity-100">
                      <span>Explore Service</span>
                      <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Clean Professional Bottom CTA (No placeholders) */}
          <div className="mt-20 p-10 md:p-16 rounded-[3rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Ready to optimize your supply chain?</h3>
              <p className="text-slate-400 text-lg max-w-xl">Contact our logistics experts today for a customized consultation and quote.</p>
            </div>
            <Link 
              to="/contact" 
              className="relative z-10 px-10 py-5 bg-primary hover:bg-white hover:text-primary text-white font-bold rounded-2xl transition-all duration-300 whitespace-nowrap shadow-lg shadow-primary/25"
            >
              Get Started Now
            </Link>
            {/* Subtle background decoration for CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          </div>
        </Container>
      </section>
    </div>
  );
}