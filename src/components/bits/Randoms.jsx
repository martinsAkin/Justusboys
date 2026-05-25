import './Randoms.css'

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