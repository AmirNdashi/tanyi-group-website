import PageHeader from "./PageHeader"
import Container from "./Container"

export default function UnderConstruction({ title }) {
  return (
    <>
      <PageHeader
        title={title}
        subtitle="This section is currently under development"
      />

      <section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              We are actively working on this page. Full details will be available soon.
            </p>
            <p className="text-sm text-gray-400">
              For immediate assistance, please contact our team.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
