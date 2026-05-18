import { Input } from "postcss";
import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    const { firstName, lastName, phone, email, dob, terms } = formData;

    if (!firstName.trim()) {
      newErrors.firstName = "First name is req";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is req";
    }

    if (!phone.trim()) {
      newErrors.phone = "phone num is req";
    }

    if (!email) {
      newErrors.email = "email is req";
    }

    if (!dob) {
      newErrors.dob = "dob is req";
    }

    if (!phone.trim()) {
      newErrors.phone = "phone num is req";
    } else if (phone.length !== 10 || isNaN(formData.phone)) {
      newErrors.phone = "Enter valid num ";
    }
    if (!terms) {
      newErrors.terms = "terms is req";
    }
    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);

      alert("Form Submitted ");

      setErrors({});

      setFormData({
        firstName: "",

        lastName: "",
        phone: "",
        email: "",
        dob: "",
        gender: "",
        terms: false,
      });
    }
  }

  return (
    <div>
      <h2>Registration Form </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            onChange={handleChange}
          />

          <p>{errors.firstName}</p>
        </div>

        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastNameName}
            placeholder="Last Name"
            onChange={handleChange}
          />

          <p>{errors.lastName}</p>
        </div>

        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Phone Num"
            onChange={handleChange}
          />

          <p>{errors.phone}</p>
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleChange}
          />

          <p>{errors.email}</p>
        </div>

        <div>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            placeholder="Enter DOB"
            onChange={handleChange}
          />

          <p>{errors.dob}</p>
        </div>

        <div>
          <label>Gender</label>

          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <p>{errors.gender}</p>
          </select>
        </div>

        <div>
          <input
            type="checkbox"
            name="dob"
            value={formData.terms}
            placeholder="Enter "
            onChange={handleChange}
          />

          <p>{errors.terms}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
