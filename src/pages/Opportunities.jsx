import { useState } from "react";
import opportunities from "../data/opportunities";
import OpportunityCard from "../components/OpportunityCard";
import "../styles/Opportunities.css";

function Opportunities() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredData = opportunities.filter((item) => {

    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;

  });

  return (
    <section className="opportunities-page">

      <div className="page-header">

        <h1>Explore Opportunities</h1>

        <p>
          Search and filter student opportunities easily.
        </p>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <div className="filter-buttons">

          <button onClick={() => setCategory("All")}>All</button>

          <button onClick={() => setCategory("Scholarship")}>
            Scholarship
          </button>

          <button onClick={() => setCategory("Internship")}>
            Internship
          </button>

          <button onClick={() => setCategory("Government Scheme")}>
            Government
          </button>

          <button onClick={() => setCategory("Hackathon")}>
            Hackathon
          </button>

          <button onClick={() => setCategory("Certification")}>
            Certification
          </button>

          <button onClick={() => setCategory("Skill Development")}>
            Skill Development
          </button>

        </div>

      </div>

      <div className="opportunities-grid">

        {filteredData.map((item) => (
          <OpportunityCard
            key={item.id}
            opportunity={item}
          />
        ))}

      </div>

    </section>
  );
}

export default Opportunities;