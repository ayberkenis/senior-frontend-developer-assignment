import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/auth/actions'; // Assuming you have a logoutUser action

const Logout = ({ logoutUser }) => {
  const handleLogout = async () => {
    try {
      // Make an API request to log out the user
      // This might involve sending a request to invalidate the JWT token

      // Dispatch the logout action
      logoutUser();
      console.log('Logout successful')
      // Redirect the user or perform other actions after logout
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout error, display an error message or perform necessary actions
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log out of your account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <button
              onClick={handleLogout}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { logoutUser })(Logout);
