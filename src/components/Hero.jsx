import "./../styles/Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Discover Every Student Opportunity in One Place</h1>

        <p>
          Explore scholarships, internships, hackathons,
          government schemes, certifications and skill
          development programs specially curated for students.
        </p>

        <button>Explore Opportunities</button>

      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Student" />
      </div>

    </section>
  );
}

export default Hero;