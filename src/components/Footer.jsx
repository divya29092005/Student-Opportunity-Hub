import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-section">
          <h2>Student Opportunity Hub</h2>
          <p>
            One platform to discover scholarships, internships,
            hackathons, government schemes and certifications.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Opportunities</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email : support@studenthub.com</p>
          <p>Phone : +91 9876543210</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Student Opportunity Hub. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;