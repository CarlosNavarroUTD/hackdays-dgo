import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Sponsors } from "./components/Sponsors"
import { About } from "./components/About"
import { Tracks } from "./components/Tracks"
import { Schedule } from "./components/Schedule"
import { EventInfo } from "./components/EventInfo"
import { Cta } from "./components/Cta"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Sponsors />
        <About />
        <Tracks />
        <Schedule />
        <EventInfo />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
