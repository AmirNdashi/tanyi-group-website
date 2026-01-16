import PageHeader from "../components/PageHeader"
import Container from "../components/Container"

export default function About() {
  return (
    <>
      <PageHeader
        title="About TANYI Group"
        subtitle="A diversified logistics and commercial enterprise"
      />

      {/* WHO WE ARE */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              TANYI Group is a Cameroon-based logistics and trade services company
              delivering integrated solutions across warehousing, import/export,
              transit operations, customs clearance, and cargo groupage. We
              support businesses by ensuring goods move efficiently, securely,
              and in full compliance with local and international regulations.
            </p>
          </div>
        </Container>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">

            <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide reliable, compliant, and efficient logistics solutions
                that empower our clients to operate confidently across local and
                international markets.
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become a leading logistics and trade facilitation group in
                Central Africa, recognized for operational excellence,
                transparency, and long-term partnerships.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-semibold text-primary text-center mb-12">
              What We Do
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-600">

              <div className="p-8 border rounded-2xl hover:shadow-lg transition">
                Warehousing solutions including bonded storage facilities for
                secure cargo handling, consolidation, and distribution.
              </div>

              <div className="p-8 border rounded-2xl hover:shadow-lg transition">
                Import and export management, supporting international trade
                operations from documentation to final delivery.
              </div>

              <div className="p-8 border rounded-2xl hover:shadow-lg transition">
                Transit services optimized for efficiency, route coordination,
                and cross-border cargo movement.
              </div>

              <div className="p-8 border rounded-2xl hover:shadow-lg transition">
                Customs clearance services covering all types of merchandise at
                Douala and Kribi ports, handled end-to-end.
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="bg-white p-10 rounded-2xl shadow hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-primary mb-3">
                Operational Experience
              </h4>
              <p className="text-gray-600">
                Hands-on expertise in real logistics operations, not theory.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-primary mb-3">
                Compliance & Transparency
              </h4>
              <p className="text-gray-600">
                Full respect of customs regulations and trade laws.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-primary mb-3">
                Client-Focused Approach
              </h4>
              <p className="text-gray-600">
                Tailored logistics solutions aligned with business goals.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* FUTURE EXPANSION NOTICE */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center border border-dashed border-gray-300 p-10 rounded-xl">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              More About TANYI Group
            </h3>
            <p className="text-gray-600">
              Additional information about our group structure, subsidiaries,
              certifications, and leadership team will be available soon.
            </p>
            <p className="mt-4 text-sm text-gray-400 italic">
              This section is currently under construction.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
