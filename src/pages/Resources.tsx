import React, { useState } from 'react';
import { Youtube, BookOpen, Search, Filter } from 'lucide-react';

function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  // Mock data for educational resources
  const resources = [
    {
      id: 1,
      type: 'video',
      title: 'Introduction to Computer Science',
      provider: 'MIT OpenCourseWare',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      url: 'https://youtube.com/watch?v=example1',
      subject: 'computer_science'
    },
    {
      id: 2,
      type: 'course',
      title: 'Advanced Mathematics',
      provider: 'Khan Academy',
      thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904',
      url: 'https://youtube.com/watch?v=example2',
      subject: 'mathematics'
    },
    {
      id: 3,
      type: 'video',
      title: 'Physics Fundamentals',
      provider: 'Coursera',
      thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa',
      url: 'https://youtube.com/watch?v=example3',
      subject: 'physics'
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || resource.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Educational Resources</h1>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="w-full md:w-64">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="all">All Subjects</option>
                <option value="computer_science">Computer Science</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

function ResourceCard({ resource }: { resource: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={resource.thumbnail}
        alt={resource.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-2">
          {resource.type === 'video' ? (
            <Youtube className="w-5 h-5 text-red-600 mr-2" />
          ) : (
            <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
          )}
          <span className="text-sm text-gray-600">{resource.provider}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
        >
          Watch Now
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Resources;