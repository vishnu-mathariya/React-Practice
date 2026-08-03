import React from "react";

export const SignUpForm = () => {
  return (
    <form>
      <h2>SignUp Form</h2>

      <div>
        <input 
        type="text" 
        placeholder="Enter first name..." 
        name="firstName" />
      </div>

      <div>
        <input 
        type="text" 
        placeholder="Enter last name..." 
        name="lastName" />
      </div>

      <div>
        <input 
        type="email" 
        placeholder="Enter valid email..." 
        name="email" />
      </div>

      <div>
        <p>DOB</p>
        <input
        type="date"
        name="dob"/>

      </div>
      <p>Hobbies</p>
      <label>
        <input
        type="checkbox"
        name="hobbies"
        value="Reading"/>
        Reading
      </label>

       <label>
        <input
        type="checkbox"
        name="hobbies"
        value="Cricket"/>
        Cricket
      </label>


       <label>
        <input
        type="checkbox"
        name="hobbies"
        value="Music"/>
        Music
      </label>

       <label>
        <input
        type="checkbox"
        name="hobbies"
        value="Travelling"/>
        Travelling
      </label>
      <div>
        <input
          type="password"
          placeholder="Enter password..."
          name="password"
        />
      </div>

      <div>
        <lebel>Gender</lebel>
        <select>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>


      </div>
    </form>
  );
};
