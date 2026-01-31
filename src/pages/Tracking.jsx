import { useState } from "react"
import Container from "../components/Container"
import trackingBg from "../assets/images/container-truck.jpg" // or any logistics image

export default function Tracking() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState(null)

  // TEMP MOCK DATA (Phase 1)
  const mockShipments = {
    TANYI001: {
      status: "In Transit",
      location: "Douala Port",
      eta: "2 days",
    },
    TANYI002: {
      status: "Customs Clearance",
      location: "Kribi Port",
      eta: "1 day",
    },
    TANYI003: {
      status: "Delivered",
      location: "Yaoundé Warehouse",
      eta: "Completed",
    },
  }

  const handleSearch = () => {
    const res = mockShipments[code.toUpperCase()]
    setResult(res || "notfound")
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative text-white py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${trackingBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <Container>
          <div className="relative text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Shipment Tracking</h1>
            <p className="text-gray-200 text-lg">
              Monitor your cargo in real time. Enter your tracking number below.
            </p>
          </div>
        </Container>
      </section>

      {/* ================= TRACKING BOX ================= */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-xl mx-auto bg-gray-50 p-10 rounded-3xl shadow-lg">

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter Tracking Number (e.g. TANYI001)"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                onClick={handleSearch}
                className="bg-primary text-white px-6 rounded-lg font-semibold hover:opacity-90"
              >
                Track
              </button>
            </div>

            {/* RESULT */}
            {result && result !== "notfound" && (
              <div className="mt-8 bg-white border rounded-xl p-6 shadow">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Shipment Status
                </h3>

                <p><strong>Status:</strong> {result.status}</p>
                <p><strong>Current Location:</strong> {result.location}</p>
                <p><strong>Estimated Time:</strong> {result.eta}</p>
              </div>
            )}

            {result === "notfound" && (
              <div className="mt-8 text-red-600 font-medium">
                Tracking number not found. Please check and try again.
              </div>
            )}

          </div>
        </Container>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-semibold text-center text-primary mb-14">
            How Tracking Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-8 bg-white rounded-2xl shadow">
              <h4 className="font-semibold mb-2">1. Book Shipment</h4>
              <p className="text-gray-600">
                Receive a unique tracking number when your cargo is registered.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow">
              <h4 className="font-semibold mb-2">2. Monitor Progress</h4>
              <p className="text-gray-600">
                Track movement across ports, warehouses, and transit routes.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow">
              <h4 className="font-semibold mb-2">3. Delivery</h4>
              <p className="text-gray-600">
                Receive confirmation when goods reach their destination.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </>
  )
}
