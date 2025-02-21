import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, Youtube } from 'lucide-react';
import type { Education } from '../types';

function Dashboard() {
  const [education, setEducation] = useState<Education>({
    level: '',
    field: '',
    institution: '',
    year: new Date().getFullYear()
  });

  const handleEducationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save education details and fetch recommendations
    console.log('Education details:', education);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Your Dashboard</h1>

      {/* Education Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Educational Details</h2>
        <form onSubmit={handleEducationSubmit} className="space-y-4">
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">
              Education Level
            </label>
            <select
              id="level"
              value={education.level}
              onChange={(e) => setEducation({ ...education, level: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Level</option>
              <option value="high_school">High School</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="phd">Ph.D.</option>
            </select>
          </div>

          <div>
            <label htmlFor="field" className="block text-sm font-medium text-gray-700">
              Field of Study
            </label>
            <input
              type="text"
              id="field"
              value={education.field}
              onChange={(e) => setEducation({ ...education, field: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., Computer Science"
            />
          </div>

          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
              Institution
            </label>
            <input
              type="text"
              id="institution"
              value={education.institution}
              onChange={(e) => setEducation({ ...education, institution: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., University Name"
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              type="number"
              id="year"
              value={education.year}
              onChange={(e) => setEducation({ ...education, year: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Update Profile
          </button>
        </form>
      </div>

      {/* Recommendations Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          icon={<Award className="w-6 h-6" />}
          title="Scholarships"
          description="View scholarships matching your profile"
          link="/scholarships"
        />
        <DashboardCard
          icon={<Youtube className="w-6 h-6" />}
          title="Educational Content"
          description="Access curated video lectures"
          link="/resources"
        />
        <DashboardCard
          icon={<Briefcase className="w-6 h-6" />}
          title="Internships"
          description="Find relevant internship opportunities"
          link="/internships"
        />
        <DashboardCard
          icon={<BookOpen className="w-6 h-6" />}
          title="Study Materials"
          description="Access course materials and guides"
          link="/materials"
        />
      </div>
    </div>
  );
}

function DashboardCard({ 
  icon, 
  title, 
  description, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link}
        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
      >
        Learn More
        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
}

export default Dashboard;