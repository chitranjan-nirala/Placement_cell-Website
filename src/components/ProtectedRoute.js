import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, redirectTo }) => {
  const isAuthenticated = !!localStorage.getItem('adminToken') || !!localStorage.getItem('studentToken');

  return (
    <Route
      element={isAuthenticated ? element : <Navigate to={redirectTo || '/'} />} // Using Navigate for redirection
    />
  );
};

export default ProtectedRoute;
