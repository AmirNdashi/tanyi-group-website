import PageHeader from "../components/PageHeader"
import Container from "../components/Container"

export default function About() {
  return (
    <>
      <PageHeader
        title="About TANYI Group"
        subtitle="A diversified logistics and commercial enterprise"
      />

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To deliver reliable, compliant, and efficient logistics solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
