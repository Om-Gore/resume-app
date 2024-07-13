import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Define regex patterns for validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,}$/;

export default () => {
  //   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    if (emailPattern.test(email)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      return true;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      return false;
    }
  };

  const validatePassword = (password) => {
    if (passwordPattern.test(password)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      return true;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character (@, #, $, %, ^, &, *).",
      }));
      return false;
    }
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password === confirmPassword) {
      setFormErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
      return true;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword:
          "Password Field does not match with Confirm Password Field",
      }));
      return false;
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "email") validateEmail(value);

    if (name === "password") {
      validatePassword(value);
    }

    if (name === "confirmPassword")
      validateConfirmPassword(formData.password, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = validatePassword(formData.password);
    const isConfirmPasswordValid = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      // Send form data to the server
      try {
        const response = await fetch("http://localhost:4000/api/v1/sendotp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
          }),
        });

        const data = await response.json();
        alert(data);

        if (response.status === 200) {
          alert("Form submitted successfully!");

          localStorage.setItem("email", formData.email);
          localStorage.setItem("password", formData.password);

          // Clear the form
          setFormData({
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
          });
        } else {
          alert("Failed to submit form. try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred.Please try again.");
      }
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-red-200 ">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 py-12 space-y-4 bg-white p-8 shadow-lg rounded-lg"
      >
        {/* Cadidate Signup Heading*/}
        <h1 className="mb-8 text-xl md:text-2xl font-bold  text-gray-900 ">
          Company Signup
        </h1>
        <div className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-600 text-sm mt-2">{formErrors.email}</p>
            )}
          </div>

          {/* Password Input*/}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-2 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <p className="text-red-600 text-sm mt-2">{formErrors.password}</p>
            )}
          </div>

          {/* Confirm Password Input*/}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="mt-2 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {formErrors.confirmPassword && (
              <p className="text-red-600 text-sm mt-2">
                {formErrors.confirmPassword}
              </p>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </div>

        {/* Redirect to Login */}
        <div className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            className="ml-2 font-bold text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
