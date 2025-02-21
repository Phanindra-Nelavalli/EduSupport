import React, { useState } from 'react';
import { Award, Search, Filter, ExternalLink } from 'lucide-react';
import type { Scholarship } from '../types';

function Scholarships() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('all');

  // Mock scholarship data
  const scholarships: Scholarship[] = [
    {
      id: '1',
      title: 'Merit Excellence Scholarship',
      provider: 'National Education Foundation',
      amount: 50000,
      deadline: '2024-06-30',
      eligibility: 'Students with 90% or above in their previous academic year',
      link: 'https://example.com/scholarship1'
    },
    {
      id: '2',
      title: 'STEM Innovation Grant',
      provider: 'Tech Future Foundation',
      amount: 75000,
      deadline: '2024-07-15',
      eligibility: 'Engineering and Computer Science students',
      link: 'https://example.com/scholarship2'
    },
    {
      id: '3',
      title: 'Women in Technology Scholarship',
      provider: 'Women Empowerment Initiative',
      amount: 100000,
      deadline: '2024-08-01',
      eligibility: 'Female students pursuing technology courses',
      link: 'https://example.com/scholarship3'
    }
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAmount = selectedAmount === 'all' || 
      (selectedAmount === 'under50k' && scholarship.amount < 50000) ||
      (selectedAmount === '50k-100k' && scholarship.amount >= 50000 && scholarship.amount <= 100000) ||
      (selectedAmount === 'above100k' && scholarship.amount > 100000);
    return matchesSearch && matchesAmount;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Award className="w-8 h-8 text-blue-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Available Scholarships</h1>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search scholarships..."
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
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(e.target.value)}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="all">All Amounts</option>
                <option value="under50k">Under ₹50,000</option>
                <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                <option value="above100k">Above ₹1,00,000</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Scholarships List */}
      <div className="space-y-6">
        {filteredScholarships.map(scholarship => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </div>
    </div>
  );
}

function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold mb-2">{scholarship.title}</h3>
          <p className="text-gray-600 mb-4">{scholarship.provider}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">₹{scholarship.amount.toLocaleString()}</div>
          <div className="text-sm text-gray-500">Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-1">Eligibility:</h4>
        <p className="text-gray-600 mb-4">{scholarship.eligibility}</p>
      </div>

      <a
        href={scholarship.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
      >
        Apply Now
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}

export default Scholarships;