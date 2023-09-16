import Header from './Components/Header';
import Hero from './Components/Hero';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Footer from './Components/Footer';
import Specials from './Components/Specials';
import Menu from './Components/Menu';

export default function HomePage() {
    return(
        <>
            <Header />
            <Hero />
            <main>
            <Specials />
            <Menu />
            </main>
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}