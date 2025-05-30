import React from "react";
import "./styles.css";

function App() {
  return (
    <>
      <header>
        <h1>Welcome to EventPro</h1>
        <p>
          From helping hands to earning plans - Freelance beyond the screens
        </p>
        <p>Unite NGOs, Volunteers, and Event Organizers for impactful change</p>
      </header>

      <main className="roles-container">
        <section className="role-card organizer">
          <h2>Event Organizer</h2>
          <p>Plan and manage events that create a lasting impact.</p>
          <a href="https://3psnlh.csb.app/" className="join-btn">
            Join as Organizer
          </a>
        </section>

        <section className="role-card volunteer">
          <h2>Volunteer</h2>
          <p>Be the helping hand. Support causes and gain experience.</p>
          <a href="https://tkmr2r.csb.app/" className="join-btn">
            Join as Volunteer
          </a>
        </section>

        <section className="role-card ngo">
          <h2>NGO</h2>
          <p>Connect with organizers and volunteers to amplify your mission.</p>
          <a href="https://jz32km.csb.app/" className="join-btn">
            Join as NGO
          </a>
        </section>
      </main>

      <footer>
        <p>© 2025 EventPro. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
