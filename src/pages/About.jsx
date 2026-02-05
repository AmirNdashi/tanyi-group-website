import PageHeader from "../components/PageHeader"
import Container from "../components/Container"
import {
  Warehouse,
  Ship,
  Truck,
  FileCheck,
  Target,
  Eye,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

import aboutImg from "../assets/images/container-truck.jpg"

export default function About() {
  return (
    <div className="bg-white">
      <PageHeader
        title="About TANYI Group"
        subtitle="Bridging markets with diversified logistics and commercial excellence."
      />

      {/* ================= WHO WE ARE (IMAGE + TEXT) ================= */}
      <section className="py-24 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">
                Our Foundation
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                A Cameroon-based leader in <span className="text-primary">Global Trade.</span>
              </h3>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  TANYI Group stands as a premier logistics and trade services enterprise, 
                  dedicated to delivering integrated solutions across the supply chain.
                </p>
                <p>
                  We ensure goods move efficiently and securely through bonded warehousing, 
                  precise transit operations, and expert customs clearance, fully aligned with 
                  international regulatory standards.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-black text-primary mb-1">10+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-1">100%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Compliance Rate</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[2.5rem] transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
                <img
                  src={aboutImg}
                  alt="Logistics operations"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= MISSION & VISION (ICON CARDS) ================= */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col items-start">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                To deliver reliable, compliant, and efficient logistics solutions 
                that empower our clients to navigate complex global markets with 
                unwavering confidence.
              </p>
            </div>

            <div className="bg-slate-900 p-10 md:p-14 rounded-[3rem] shadow-xl text-white flex flex-col items-start">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8">
                <Eye size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To become the most recognized logistics and trade facilitation group 
                in Central Africa, defined by operational excellence and local expertise.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= WHAT WE DO (REFINED GRID) ================= */}
      <section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 text-center">Core Operations</h2>
            <p className="text-4xl font-extrabold text-slate-900">Expertise where it counts.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={<Warehouse size={28} />} title="Warehousing" text="Bonded and secure storage facilities tailored for modern commerce." />
            <ServiceCard icon={<Ship size={28} />} title="Import & Export" text="Full-scale trade management and international logistics coordination." />
            <ServiceCard icon={<Truck size={28} />} title="Transit" text="Reliable cross-border movement across Central African corridors." />
            <ServiceCard icon={<FileCheck size={28} />} title="Customs" text="Rapid clearance and regulatory compliance handled by specialists." />
          </div>
        </Container>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full -mr-64 -mt-64 blur-3xl" />
        
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Partner With Us</h2>
              <h3 className="text-4xl font-bold mb-8">Committed to excellence in every shipment.</h3>
              <div className="space-y-4">
                {["Operational Experience", "Compliance & Transparency", "Client-Focused Solutions"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    <span className="text-xl text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <WhyCard icon={<TrendingUp />} title="High Growth" text="Hands-on logistics with modern infrastructure." />
              <WhyCard icon={<ShieldCheck />} title="Reliability" text="Full respect of trade laws and customs." />
              <WhyCard icon={<Users />} title="Network" text="Tailored solutions for every business goal." />
              <div className="bg-primary p-8 rounded-3xl flex flex-col justify-center items-center text-center">
                <p className="font-bold text-2xl mb-2">Ready?</p>
                <a href="/contact" className="text-sm font-black uppercase tracking-widest underline underline-offset-4">Get a Quote</a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
              Move your goods with confidence.
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
            >
              Partner with TANYI Group
              <ArrowRight size={20} />
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}

/* ================= REUSABLE COMPONENTS ================= */

function ServiceCard({ icon, title, text }) {
  return (
    <div className="p-8 bg-white border border-gray-100 rounded-[2rem] hover:border-primary/50 hover:shadow-xl transition-all duration-500 group">
      <div className="w-14 h-14 rounded-xl bg-slate-50 text-primary mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-gray-500 leading-relaxed">{text}</p>
    </div>
  )
}

function WhyCard({ icon, title, text }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
      <div className="text-primary mb-4">{icon}</div>
      <h4 className="font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
    </div>
  )
}