import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import CoreBanking from './components/CoreBanking'
import CoreBankingFeatures from './components/CoreBankingFeatures'
import CTASection from './components/CTASection'
import DigitalBanking from './components/DigitalBanking'
import InsightsSection from './components/InsightsSection'
import CaseStudies from './components/CaseStudies'
import CTASection2 from './components/CTASection2'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions/>
      <CoreBanking/>
      <CoreBankingFeatures/>
      <CTASection/>
      <DigitalBanking/>
      <InsightsSection/>
      <CaseStudies/>
      <CTASection2/>
      <Footer/>
    </>
  )
}
