import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser, storeToken } from "../redux/auth/actions";
import { signInWithEmailAndPassword } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAV5UqzQ7CFpE8yXy2CSMq7L3AujKKolBY",
    authDomain: "dataguess-48c29.firebaseapp.com",
    projectId: "dataguess-48c29",
    storageBucket: "dataguess-48c29.appspot.com",
    messagingSenderId: "190543050721",
    appId: "1:190543050721:web:c1c364cc88767a13b904a0",
    measurementId: "G-YFF3JY97QM"
  };
  



const Login = ({ loginUser }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const auth = getAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      
      // Authenticate the user using Firebase Authentication

      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.username,
        formData.password
      );
        console.log(userCredential)
      // After successful login, you can access the user object like this:
      const user = userCredential.user;

      const token = await user.getIdToken();
      console.log(token)
      if (token) {
        // Store the token in Redux or local storage
        storeToken(token);

        // Redirect the user or perform other actions after login
        console.log("Login successful");
      } else {
        setError(
          "Login error occurred, please check your credentials and try again"
        );
        console.error("Login error: No token in response");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login error occurred, please check your credentials and try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 gap-4">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>

        <form
          className="mt-8 space-y-6 flex flex-col justify-center items-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-4">
            <span className="text-red-500 w-1/2 text-center animate-pulse">
              {error}
            </span>
            <div className="flex flex-row justify-around items-center">
              <input 
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        { loading && <div className="flex flex-row justify-center items-center gap-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <span className="text-gray-900">Logging in...</span>
            </div>

        }
          <button
          {...loading ? { disabled: true, className: 'disabled' } : {}}
            type="submit"
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? "disabled" : ""}`}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { loginUser, storeToken })(Login);
