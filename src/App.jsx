import './App.css'
import Discount from './components/Discount'
import Explore from './components/Explore'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Testimonial from './components/Testimonial'
import TrainerSection from './components/TrainerSection'
import WhyUs from './components/WhyUs'


function App() {
  return (
    <>
      <Menu/>
      <Header/>
      <WhyUs/>
      <Explore/>
      <TrainerSection/>
      <Testimonial/>
      <Discount/>
      <Footer/>
    </>
  )
}

export default App
