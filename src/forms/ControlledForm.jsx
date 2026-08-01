import React from "react";
import { useState } from "react";

export const ControlledForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleChange = (e) => {
    setFormData(e.target.value);
    setFormData("" + e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Login Form</h2>

      <div className="space-y-3">
        <input
          type="email"
          name="email"
          placeholder="Enter valid email..."
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-0 focus:border-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password..."
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-0 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};
