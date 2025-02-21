import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">EduSupport</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/scholarships">Scholarships</NavLink>
            <NavLink to="/mentorship">Mentorship</NavLink>
            <Link
              to="/login"
              className="ml-4 px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}

export default Navbar;