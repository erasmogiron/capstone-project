import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Main from './Components/Main';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Form from './Components/Form';
import Footer from './Components/Footer';



function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Hero />
      <Main />
      <Testimonials />
      <About />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
