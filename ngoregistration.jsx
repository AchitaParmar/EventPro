// App.js
import React, { useState } from "react";
import "./styles.css";

function App() {
  const [venue, setVenue] = useState("");
  const [formData, setFormData] = useState({
    ngoName: "",
    dob: "",
    houseNo: "",
    streetName: "",
    landmark: "",
    city: "",
    state: "",
    contactNumber: "",
    visitor: "",
    projector: "",
    theme: "",
    eventType: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const namePattern = /^[A-Za-z\s]+$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!namePattern.test(formData.ngoName)) {
      alert("NGO name must not contain numbers or special characters.");
      return;
    }
    if (!formData.dob || formData.dob < today) {
      alert("Date of Event must be in the future.");
      return;
    }
    if (parseInt(formData.visitor) < 1) {
      alert("We do not organise event for this much less people.");
      return;
    }
    if (!phonePattern.test(formData.contactNumber)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }
    if (!passwordPattern.test(formData.password)) {
      alert("Password must be at least 6 characters and alphanumeric.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!formData.terms) {
      alert("You must agree to the terms and conditions to proceed.");
      return;
    }

    if (venue === "ours") {
      alert("We will notify you soon about the fixed location");
    }

    alert("Form submitted successfully!");
    // Submit logic here
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ngoName">Name of NGO</label>
          <input
            type="text"
            name="ngoName"
            value={formData.ngoName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Event</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="gender-group">
          <label>Venue</label>
          <div>
            <input
              type="radio"
              id="ours"
              name="venue"
              value="ours"
              onChange={(e) => setVenue(e.target.value)}
            />
            <label htmlFor="ours">Organisers Decided</label>
            <input
              type="radio"
              id="yours"
              name="venue"
              value="yours"
              onChange={(e) => setVenue(e.target.value)}
            />
            <label htmlFor="yours">Your Decided</label>
          </div>
        </div>

        {venue === "yours" && (
          <div id="address-section">
            <div className="form-header-address">Address</div>
            <div className="form-row">
              <div className="form-group">
                <label>House No.</label>
                <input
                  type="text"
                  name="houseNo"
                  value={formData.houseNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Street Name</label>
                <input
                  type="text"
                  name="streetName"
                  value={formData.streetName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Landmark</label>
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="form-group">
          <label>Visitor Number</label>
          <input
            type="number"
            name="visitor"
            value={formData.visitor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="gender-group">
          <label>Projector</label>
          <div>
            <input
              type="radio"
              id="yes"
              name="projector"
              value="yes"
              onChange={handleChange}
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="no"
              name="projector"
              value="no"
              onChange={handleChange}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>

        <div className="form-group">
          <label>Theme</label>
          <input
            type="text"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Type of Event</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Type of Event --</option>
            <option value="Free Health Check-up Camp">
              Free Health Check-up Camp
            </option>
            <option value="Blood Donation Drive">Blood Donation Drive</option>
            <option value="Mental Health Awareness Session">
              Mental Health Awareness Session
            </option>
            <option value="Yoga Day Celebration">Yoga Day Celebration</option>
          </select>
        </div>

        <div className="form-group">
          <label>Create Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="terms-group">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label>
            I agree to the{" "}
            <a href="terms.html" target="_blank">
              Terms and Conditions
            </a>
          </label>
        </div>

        <button className="submit-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
