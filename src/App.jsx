import LogoSection from './sections/LogoSection.jsx'
import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import Experience from './sections/Experience.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'

const App = () => {
    return(
    <>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Contact />
    </>
    )
}

export default App