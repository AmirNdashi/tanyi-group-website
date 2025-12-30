import { Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Warehousing from "./pages/Warehousing"
import ImportExport from "./pages/ImportExport"
import Transit from "./pages/Transit"
import Customs from "./pages/Customs"
import Contact from "./pages/Contact"
import Tracking from "./pages/Tracking"
import Group from "./pages/Group"

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/warehousing" element={<Warehousing />} />
        <Route path="/services/import-export" element={<ImportExport />} />
        <Route path="/services/transit" element={<Transit />} />
        <Route path="/services/customs-clearance" element={<Customs />} />
        <Route path="/group" element={<Group />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
