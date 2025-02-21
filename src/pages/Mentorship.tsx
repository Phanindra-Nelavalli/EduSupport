import React from 'react';
import { Users, MessageCircle, Calendar, Star } from 'lucide-react';

function Mentorship() {
  // Mock mentors data
  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Professor of Computer Science',
      institution: 'MIT',
      expertise: ['Machine Learning', 'Artificial Intelligence', 'Data Science'],
      rating: 4.9,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      role: 'Senior Research Scientist',
      institution: 'Stanford University',
      expertise: ['Quantum Computing', 'Theoretical Physics', 'Mathematics'],
      rating: 4.8,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      role: 'Industry Expert',
      institution: 'Google Research',
      expertise: ['Software Engineering', 'System Design', 'Cloud Computing'],
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Expert Mentors</h1>
        <p className="text-lg opacity-90 mb-6">Get personalized guidance from industry experts and academics to help you achieve your goals</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard icon={<Users />} label="Active Mentors" value="500+" />
          <StatCard icon={<MessageCircle />} label="Mentoring Sessions" value="10,000+" />
          <StatCard icon={<Star />} label="Average Rating" value="4.8/5" />
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map(mentor => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-4 bg-white bg-opacity-10 rounded-lg p-4">
      <div className="text-white">{icon}</div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm opacity-90">{label}</div>
      </div>
    </div>
  );
}

function MentorCard({ mentor }: { mentor: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-md">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="font-medium">{mentor.rating}</span>
          <span className="text-gray-500 text-sm ml-1">({mentor.reviews})</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
        <p className="text-gray-600 mb-2">{mentor.role}</p>
        <p className="text-gray-500 text-sm mb-4">{mentor.institution}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((skill: string, index: number) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Session
        </button>
      </div>
    </div>
  );
}

export default Mentorship;