
import Events from './components/Events'
import Hero from './components/Hero'
import { Analytics } from './components/bits/Randoms'
import Mission from './components/Mission'
import {GetInTouch, Hero2 } from './components/bits/Randoms'
import Footer from './components/bits/Footer'
import Carousel from './components/bits/Caurosel'

const App = () => {
  


  return (
    <div>
      <Hero />
      <Analytics />
      <Mission />
      <Events />
      <Carousel />
      <Hero2 />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
