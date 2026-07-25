import { Link } from "react-router-dom";
import "../styles/OpportunityCard.css";

function OpportunityCard({ opportunity }) {
  return (
    <div className="opportunity-card">
      <img
        src={opportunity.image}
        alt={opportunity.title}
      />

      <div className="card-content">
        <span className="category">
          {opportunity.category}
        </span>

        <h3>{opportunity.title}</h3>

        <p>{opportunity.description}</p>

        <p>
          <strong>Eligibility:</strong> {opportunity.eligibility}
        </p>

        <p>
          <strong>Deadline:</strong> {opportunity.deadline}
        </p>

        <Link to="/details">
          <button className="details-btn">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpportunityCard;