// MissionSection.jsx

import "./Mission.css";

const MissionSection = () => {
  return (
    <section className="mission-section">
    
      {/* Content */}
      <div className="mission-container">
        <span className="mission-badge">OUR MISSION</span>

        <h1>We built something different.</h1>

        <p className="mission-text">
          A generation of young men are left alone to wing life in silence.
          No mentorship. No direction. Just pressure to "man up" and figure
          everything out alone.
        </p>

        <p className="mission-text">
          Just Us Boys is more than a community — it's a safe space for
          connection, expression, creativity, and real conversations.
          Through our events and gatherings, we bring young men together
          to learn, grow, have fun, and remind each other that nobody has
          to do life alone.
        </p>

        {/* Cards */}
        <div className="mission-cards">
          <div className="card">
            <div className="icon">🤝</div>
            <h3>Circle</h3>
            <p>Real bonds, real support, built to last.</p>
          </div>

          <div className="card">
            <div className="icon">🎯</div>
            <h3>Accountability</h3>
            <p>We hold each other to a higher standard.</p>
          </div>

          <div className="card">
            <div className="icon">🗨️</div>
            <h3>Real Talk</h3>
            <p>Conversations that actually matter.</p>
          </div>

          <div className="card">
            <div className="icon">📈</div>
            <h3>Growth</h3>
            <p>Becoming better men, together.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;