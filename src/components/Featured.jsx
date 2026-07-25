import "../styles/Featured.css";

function Featured() {
  const opportunities = [
    {
      id: 1,
      title: "National Scholarship",
      category: "Scholarship",
      deadline: "30 Aug 2026",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600"
    },
    {
      id: 2,
      title: "Software Internship",
      category: "Internship",
      deadline: "15 Sep 2026",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
    },
    {
      id: 3,
      title: "Smart India Hackathon",
      category: "Hackathon",
      deadline: "10 Oct 2026",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600"
    }
  ];

  return (
    <section className="featured">

      <h2>Featured Opportunities</h2>

      <div className="featured-container">

        {opportunities.map((item) => (
          <div className="featured-card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <div className="featured-content">

              <span>{item.category}</span>

              <h3>{item.title}</h3>

              <p>Deadline : {item.deadline}</p>

              <button>View Details</button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Featured;