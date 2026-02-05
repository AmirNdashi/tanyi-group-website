import { Link } from "react-router-dom"
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Globe, 
  Clock, 
  Box, 
  Truck, 
  Anchor 
} from "lucide-react"
import Container from "../components/Container"

// IMPORT IMAGES
import containerImg from "../assets/images/container-truck.jpg"
import warehouseImg from "../assets/images/warehouse-interior.jpg"
import heroImg from "../assets/images/hero-port.jpg"

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest uppercase">Global Logistics Leader</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Precision Moving <br /> 
              <span className="text-primary italic">Global</span> Commerce.
            </h1>

            <p className="mb-10 text-xl text-gray-300 leading-relaxed max-w-2xl">
              TANYI Group delivers optimized logistics solutions across maritime, 
              air, and road networks, bridging the gap between complexity and efficiency.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/services"
                className="bg-primary text-white text-lg px-10 py-4 font-bold rounded-2xl transition-all hover:bg-white hover:text-primary hover:-translate-y-1 shadow-xl shadow-primary/20 flex items-center gap-2"
              >
                Explore Services <ArrowRight size={20} />
              </Link>

              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg px-10 py-4 rounded-2xl transition-all hover:bg-white hover:text-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS STRIP */}
      <section className="relative z-20 -mt-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Warehousing', value: '5,000m²' },
              { label: 'Experience', value: '10+ Yrs' },
              { label: 'Efficiency', value: '99.9%' },
              { label: 'Partners', value: '250+' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-8 rounded-3xl shadow-xl text-center border border-gray-100 hover:border-primary/20 transition-colors">
                <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[100px]"></div>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                <h2 className="text-sm font-black tracking-[0.3em] text-primary uppercase mb-4">The Tanyi Group Advantage</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                  End-to-end solutions <br />for a <span className="text-gray-400">borderless world.</span>
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                   We manage real-world logistics from port handling to final delivery. Our expertise 
                   spans bonded warehousing, cargo consolidation, and customs processing across Douala, Kribi, and beyond.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><ShieldCheck /></div>
                      <div>
                        <h4 className="font-bold text-slate-900">Compliant</h4>
                        <p className="text-sm text-gray-500">Full regulatory adherence.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><Clock /></div>
                      <div>
                        <h4 className="font-bold text-slate-900">Fast</h4>
                        <p className="text-sm text-gray-500">Time-optimized routes.</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="relative group">
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/10 rounded-[3rem]"></div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                   <img src={containerImg} alt="Logistics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
             </div>
          </div>
        </Container>
      </section>

      {/* MODERN SERVICES GRID */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
              <p className="text-4xl font-extrabold leading-tight">Mastering the art of <br />global movement.</p>
            </div>
            <Link to="/services" className="text-white font-bold flex items-center gap-2 hover:text-primary transition-colors">
              View All Services <ChevronRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* LARGE CARD */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-primary p-12">
               <div className="relative z-10 h-full flex flex-col justify-between">
                  <Anchor size={48} className="text-white/20" />
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Import & Export Transit</h3>
                    <p className="text-white/80 max-w-md mb-6 text-lg">Comprehensive international trade management with regulatory precision.</p>
                    <Link to="/services/import-export" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold">
                      Read Details <ArrowRight size={18} />
                    </Link>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe size={400} className="translate-x-1/4 -translate-y-1/4" />
               </div>
            </div>

            {/* TALL IMAGE CARD */}
            <div className="md:col-span-4 rounded-[2.5rem] overflow-hidden group">
               <img src={warehouseImg} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Warehouse" />
            </div>

            {/* MEDIUM CARD */}
            <div className="md:col-span-6 bg-white text-slate-900 p-10 rounded-[2.5rem] flex flex-col justify-between group">
               <div className="p-4 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-colors">
                 <Box size={32} />
               </div>
               <div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">Warehousing & Groupage</h3>
                  <p className="text-gray-500 text-lg">Secure bonded facilities for cargo consolidation and regional distribution.</p>
               </div>
            </div>

            {/* MEDIUM CARD DARK */}
            <div className="md:col-span-6 bg-slate-800 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-slate-700 transition-colors">
               <div className="p-4 bg-white/5 rounded-2xl w-fit text-primary">
                 <Truck size={32} />
               </div>
               <div>
                  <h3 className="text-2xl font-bold mb-2">Customs Clearance</h3>
                  <p className="text-slate-400 text-lg">Seamless processing at Douala and Kribi ports with zero-delay targets.</p>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 bg-white">
        <Container>
           <div className="bg-primary p-12 md:p-20 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to move with the experts?</h2>
                 <p className="text-xl text-primary-foreground/80 mb-10 opacity-80 leading-relaxed">
                   Contact TANYI Group today for a customized logistics assessment and a competitive quote.
                 </p>
                 <Link to="/contact" className="inline-block bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-900 hover:text-white transition-all hover:scale-105 shadow-xl">
                   Start Your Shipment
                 </Link>
              </div>
           </div>
        </Container>
      </section>
    </div>
  )
}