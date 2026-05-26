import { FaArrowRight, FaClock, FaInstagram, FaLocationDot, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import './Randoms.css'
import '../Hero.css'
import { FaSms } from 'react-icons/fa'

export const Analytics = () => {

    const analytics = [
        {
            figure: "500+",
            wording: "MEMBERS"
        },
        {
            figure: "40+",
            wording: "EVENTS HELD"
        },
        {
            figure: "3+",
            wording: "YEARS STRONG"
        },
        {
            figure: 1,
            wording: "BROTHERHOOD"
        }
    ]

    return (
        <div className='figures'>
            {analytics.map((analytic, index) => (
                <div className='analytic-item' key={analytic.wording}>

                    <div className='content'>
                        <h2>{analytic.figure}</h2>

                        <span className='wording'>
                            {analytic.wording}
                        </span>
                    </div>

                    {/* Divider */}
                    {index !== analytics.length - 1 && (
                        <div className='divider'></div>
                    )}

                </div>
            ))}
        </div>
    )
}




export const EventsComponent = ({
    month,
    day,
    event_title,
    location,
    time,
    mode_of_entry
}) => {
  return (
    <div className='container'>
        <div className='grouping'>
            <div className='date'>
                <span>{month}</span>
                <span>{day}</span>
            </div>
            <div className='details'>
                <h2>{event_title}</h2>
                <span>
                    <FaLocationDot />
                    {location}
                    {" "}
                    <FaClock />
                    {time}
                </span>
            </div>
        </div>

        <div className='entry'>
            {mode_of_entry}
        </div>
    </div>
  )
}


export const Hero2 = () => {
    return (
      <div className='hero2-screen'>
  
        <div className='hero-content'>
          <h1 className='hero-floating'>JOIN US</h1>
          <div className="hero-title">
            <span>Nobody does life alone here.</span> {""}
          </div>
  
          <div className="hero-description">
            <span>Step into a community pf men who are growing , learning and showing up for each other every day. Drop your email and we&#39;ll reach out.</span>
          </div>
  
          <div className='hero-input'>
            <input
                type="text" 
                name="email"
                className='email-input'
                placeholder='Your email address'
            />
            <button className='join-brotherhood'>Join the Brotherhood <FaArrowRight /></button>
          </div>
        </div>
      </div>
    )
  }





export const GetInTouch = () => {
    const links = [
        {
            social: "Instagram",
            icon: <FaInstagram />,
            url: "https://www.instagram.com/justusboysafrica/"
        },
        {
            social: "Twitter / X",
            icon: <FaXTwitter />,
            url: "#"
        },
        {
            social: "Whatsapp",
            icon: <FaWhatsapp />,
            url: "https://wa.me/+2349036249990"
        },
        {
            social: "Email us",
            icon: <FaSms />,
            url: "mailto:info@justusboysafrica.com"
        },
    ]
  return (
    <div className='get-in-touch'>
        <h5>GET IN TOUCH</h5>

        <h1>Find us everywhere.</h1>
        <span>Follow along, slide in the DMs, or just come through to an event.</span>

        <div className='social-media'>
            {
                links.map((link) => (
                    <a href={link.url}>
                        <button>
                            {link.icon}
                            {link.social}
                        </button>
                    </a>
                ))
            }
        </div>
    </div>
  )
}
