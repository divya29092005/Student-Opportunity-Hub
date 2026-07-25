import "../styles/Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">🚀 Your Career Starts Here</span>

        <h1>
          Discover the Best Student Opportunities
        </h1>

        <p>
          Find scholarships, internships, government schemes,
          hackathons, certifications, and skill development
          programs—all in one place.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Opportunities
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Student" />
      </div>

    </section>
  );
}

export default Hero;