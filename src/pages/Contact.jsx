import { useState } from "react"
import PageHeader from "../components/PageHeader"
import Container from "../components/Container"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.")
      return
    }

    setLoading(true)
    setStatus("")

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus("Message sent successfully. We will get back to you shortly.")
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      console.error(error)
      setStatus("Failed to send message. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let’s discuss how we can support your logistics and trade needs"
      />

      <section className="py-24 bg-gray-50">
        <Container>
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
                    <p className="text-gray-600">Douala, Cameroon</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">
                      +237 676 663 399 / 693 311 406
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">
                      tanyigroup@gmail.com
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

              <form onSubmit={handleSubmit} className="grid gap-6">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we assist you?"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white py-3 rounded-lg font-medium transition hover:bg-secondary hover:scale-[1.02] disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p className="text-sm text-center text-gray-600">
                    {status}
                  </p>
                )}
              </form>
            </div>

          </div>
        </Container>
      </section>
    </>
  )
}
