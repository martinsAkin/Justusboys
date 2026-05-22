import './Randoms.css'

export const Analytics = () => {

    const analytics = [
        {
            figure: "500+",
            wording: "MEMBERS"
        },
        {
            figure: "40+",
            wording: "EVENTS HELD "
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
        {
            analytics.map((analytic) => (
                <ul key={analytic.wording}>
                    <li>
                        {analytic.figure}
                        <span className='wording'>{analytic.wording}</span>
                    </li>
                </ul>
            ))
        }

    </div>
  )
}
