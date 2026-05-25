import { FaArrowRight } from 'react-icons/fa'
import Navbar from './bits/Navbar'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-screen'>
      <Navbar />

      {/* Background Layers */}
      <div className='hero-dots'></div>
      <div className='hero-glow'></div>

      {/* Hero Content */}
      <div className='hero-content'>
        <h1 className='hero-floating'>
          A BROTHERHOOD FOR THE REAL ONES
        </h1>

        <div className='hero-title'>
          <span>No Pressure.</span>{' '}
          <span className='span-white'>
            Just Direction.
          </span>
        </div>

        <div className='hero-description'>
          <span>
            Just men building men. A safe space for connection,
            expression, and conversations that actually matter.
          </span>
        </div>

        <div className='hero-btns'>
          <button className='join-brotherhood'>
            Join the Brotherhood <FaArrowRight />
          </button>

          <button className='our-story'>
            Our Story
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero