import "../styles/SearchFilter.css";

function SearchFilter() {
  return (
    <section className="search-section">

      <h2>Find Your Opportunity</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search scholarships, internships..."
        />

        <button>Search</button>

      </div>

      <div className="filters">

        <button>All</button>
        <button>Scholarships</button>
        <button>Internships</button>
        <button>Government</button>
        <button>Hackathons</button>
        <button>Certifications</button>

      </div>

    </section>
  );
}

export default SearchFilter;