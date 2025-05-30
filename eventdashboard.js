import React from "react";
import "./App.css";

const cards = [
  {
    title: "Education",
    links: ["Workshops", "Seminars", "Webinars"],
    background:
      "url('https://st2.depositphotos.com/4105587/42141/i/450/depositphotos_421417712-stock-photo-blur-school-background-university-students.jpg')",
  },
  {
    title: "Entertainment",
    links: [
      "Concerts",
      "Book Signing",
      "Fan Fest",
      "Comedy Shows",
      "Movie Nights",
    ],
    background:
      "url('https://www.britinsurance.com/media/rqigumnv/events_hero_lge.jpg?width=834&height=1100&v=1dad2bd4613b700')",
  },
  {
    title: "Wedding",
    links: [
      "Engagement Ceremony",
      "Haldi Ceremony",
      "Mehndi Ceremony",
      "Sangeet",
      "Bachelorette",
      "Reception",
    ],
    background:
      "url('https://content.jdmagicbox.com/comp/gwalior/h1/9999px751.x751.220905193353.u3h1/catalogue/big-event-wedding-planner-lashkar-city-gwalior-wedding-planning-websites-0e6sbxja60.jpg')",
  },
  {
    title: "Parties",
    links: [
      "Birthdays",
      "Anniversaries",
      "Baby Showers",
      "Kitty Party",
      "Theme Parties",
    ],
    background:
      "url('https://i.pinimg.com/736x/1b/e6/9e/1be69eb6dd4526b3c748b6ac083aed18.jpg')",
  },
  {
    title: "Conference",
    links: ["Business Meet", "Tech Talks", "Product Launch"],
    background:
      "url('https://png.pngtree.com/thumb_back/fw800/background/20221214/pngtree-business-people-in-a-meeting-at-office-meeting-conference-white-photo-image_42378676.jpg')",
  },
];

export default function EventDashboard() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">🎉 EventPro</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact Us</a>
          <a href="#">Query</a>
        </nav>
      </header>

      <main>
        <h1 className="title">Manage Your Events Effortlessly</h1>
        <div className="cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{ backgroundImage: card.background }}
            >
              <div className="info">
                <h2>
                  <a href={`/register?event=${encodeURIComponent(card.title)}`}>
                    {card.title} →
                  </a>
                </h2>
                {card.links.map((link, i) => (
                  <p key={i}>{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 EventPro. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
