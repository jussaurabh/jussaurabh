import { HeroSection } from './components/HeroSection'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { CertSection } from './components/CertSection'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      <main className="mx-auto flex w-full max-w-[1512px] flex-col gap-12 md:gap-20 px-4 md:px-6 py-10 md:py-16 lg:px-24">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <CertSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
