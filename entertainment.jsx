import React, { useState } from "react";
import "./styles.css";

function App() {
  const [venue, setVenue] = useState("");
  const [addressVisible, setAddressVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    budget: "",
    place: "",
    contactNumber: "",
    visitor: "",
    catering: "",
    password: "",
    confirmPassword: "",
    terms: false,
    houseNo: "",
    streetName: "",
    landmark: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];

  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[A-Za-z]+$/.test(value)) error = "Only alphabets allowed.";
        break;
      case "dob":
        if (!value || value < today) error = "Choose a future date.";
        break;
      case "budget":
        if (!value || isNaN(value) || value < 0) error = "Enter valid budget.";
        break;
      case "visitor":
        if (!value || isNaN(value) || value < 1) error = "Minimum 1 visitor.";
        break;
      case "contactNumber":
        if (!/^\d{10}$/.test(value)) error = "Must be 10 digits.";
        break;
      case "password":
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value))
          error = "Minimum 6 chars with letters & numbers.";
        break;
      case "confirmPassword":
        if (value !== formData.password) error = "Passwords must match.";
        break;
      case "terms":
        if (!value) error = "You must accept terms.";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: fieldValue });

    if (name === "place") {
      setVenue(value);
      setAddressVisible(value === "yours");
    }

    validate(name, fieldValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    Object.keys(formData).forEach((key) => {
      validate(key, formData[key]);
      if (
        formData.place !== "yours" &&
        ["houseNo", "streetName", "landmark", "city", "state"].includes(key)
      ) {
        return;
      }
      if (errors[key]) isValid = false;
    });

    if (Object.values(errors).some((err) => err !== "")) {
      alert("Please correct the errors before submitting.");
      return;
    }

    if (formData.place === "ours") {
      alert("We will notify you soon about the fixed location.");
    }

    alert("Form submitted successfully!");
  };

  const renderError = (field) =>
    errors[field] ? <div className="error-message">{errors[field]}</div> : null;

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {renderError("firstName")}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {renderError("lastName")}
          </div>
        </div>

        <div className="form-group">
          <label>Date of Event</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {renderError("dob")}
        </div>

        <div className="form-group">
          <label>Budget</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          />
          {renderError("budget")}
        </div>

        <div className="place-group">
          <label>Place</label>
          <label>
            <input
              type="radio"
              name="place"
              value="ours"
              checked={formData.place === "ours"}
              onChange={handleChange}
            />{" "}
            Ours
          </label>
          <label>
            <input
              type="radio"
              name="place"
              value="yours"
              checked={formData.place === "yours"}
              onChange={handleChange}
            />{" "}
            Yours
          </label>
        </div>

        {addressVisible && (
          <>
            <div className="form-row">
              <div className="form-group">
                <label>House No</label>
                <input
                  type="text"
                  name="houseNo"
                  value={formData.houseNo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Street Name</label>
                <input
                  type="text"
                  name="streetName"
                  value={formData.streetName}
                  onChange={handleChange}
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
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {renderError("contactNumber")}
        </div>

        <div className="form-group">
          <label>Number of Visitors</label>
          <input
            type="number"
            name="visitor"
            value={formData.visitor}
            onChange={handleChange}
          />
          {renderError("visitor")}
        </div>

        <div className="catering-group">
          <label>Catering</label>
          <label>
            <input
              type="radio"
              name="catering"
              value="veg"
              checked={formData.catering === "veg"}
              onChange={handleChange}
            />{" "}
            Veg
          </label>
          <label>
            <input
              type="radio"
              name="catering"
              value="nonveg"
              checked={formData.catering === "nonveg"}
              onChange={handleChange}
            />{" "}
            Non-Veg
          </label>
          <label>
            <input
              type="radio"
              name="catering"
              value="both"
              checked={formData.catering === "both"}
              onChange={handleChange}
            />{" "}
            Both
          </label>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {renderError("password")}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {renderError("confirmPassword")}
        </div>

        <div className="terms-group">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />{" "}
            I agree to the <a href="#">Terms and Conditions</a>
          </label>
          {renderError("terms")}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
