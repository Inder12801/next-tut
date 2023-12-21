"use client";
// Import necessary dependencies and components
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Define the Signup component
const Signup = () => {
  // const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Function to handle input changes and update the form data state
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  const handleSignupSubmit = async () => {
    try {
    } catch (error) {
      setLoading(true);
      console.log("Error in sign up", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if the form data is valid
    if (formData.username && formData.email && formData.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  // JSX structure of the Signup component
  return (
    <div className="flex-col min-h-screen bg-slate-100 w-full text-center items-center justify-center">
      <h1 className="text-2xl text-green-800">
        {loading ? "Processing..." : "Signup"}
      </h1>

      {/* Username input */}
      <div className="flex-col w-fit text-left">
        <label htmlFor="username">Username</label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Enter your username"
        />
        <p className="mt-1 text-xs text-gray-500">*This field is required</p>
      </div>

      {/* Email input */}
      <div className="flex-col w-fit justify-start text-left">
        <label htmlFor="email">Email</label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
        <p className="mt-1 text-xs text-gray-500">*This field is required</p>
      </div>

      {/* Password input */}
      <div className="flex-col w-fit justify-start text-left">
        <label htmlFor="password">Password</label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
        />
        <p className="mt-1 text-xs text-gray-500">*This field is required</p>
      </div>

      {/* Signup button */}
      <button
        type="button"
        disabled={buttonDisabled ? true : false}
        className={`rounded-full ${
          buttonDisabled ? "bg-gray-500" : "bg-black"
        } bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
        onClick={handleSignupSubmit}
      >
        Signup
      </button>

      {/* Already have an account link */}
      <h3>
        Already have an account?{" "}
        <Link href={"/login"} className="text-purple-600">
          Login
        </Link>
      </h3>
    </div>
  );
};

// Export the Signup component
export default Signup;
