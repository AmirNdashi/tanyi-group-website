import PageHeader from "../components/PageHeader"
import Container from "../components/Container"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let’s discuss how we can support your logistics and trade needs"
      />

      <section className="py-24 bg-gray-50">
        <Container>

          {/* GRID */}
          <div className="grid gap-16 lg:grid-cols-2">

            {/* CONTACT INFO */}
            <div>
              <h2 className="text-4xl font-semibold text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-10 max-w-lg">
                Our team is available to answer your questions, provide tailored
                logistics solutions, and support your international trade
                operations.
              </p>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Office Location</h4>
                    <p className="text-gray-600">
                      Douala, Cameroon
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">
                      +237 XXX XXX XXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">
                      info@tanyigroup.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-gray-600">
                      Monday – Friday: 8:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Send Us a Message
              </h3>

              <form className="grid gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="How can we assist you?"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary text-white py-3 rounded-lg font-medium transition hover:bg-secondary hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>

        </Container>
      </section>
    </>
  )
}
