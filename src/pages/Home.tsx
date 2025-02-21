import React from 'react';
import { GraduationCap, Award, BookOpen, Users, ArrowRight, Heart, Brain, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-16  ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Education for Everyone
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Access scholarships, mentorship, and resources to achieve your educational goals
          </p>
          <Link
            to="/login"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We believe that financial barriers should never stand in the way of education. 
          Our platform connects students with resources, scholarships, and mentors to help 
          them achieve their academic dreams.
        </p>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How We Help</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<GraduationCap className="w-8 h-8" />}
            title="Free Education"
            description="Access quality educational materials and courses at no cost"
          />
          <FeatureCard
            icon={<Award className="w-8 h-8" />}
            title="Scholarships"
            description="Find and apply for scholarships matching your profile"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Mentorship"
            description="Connect with experienced mentors in your field"
          />
          <FeatureCard
            icon={<BookOpen className="w-8 h-8" />}
            title="Resources"
            description="Access comprehensive study materials and guides"
          />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard number="10,000+" label="Students Supported" />
            <StatCard number="₹50M+" label="Scholarships Awarded" />
            <StatCard number="500+" label="Active Mentors" />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Priya Sharma"
            role="Computer Science Student"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            quote="The scholarship I found through this platform helped me pursue my dream of studying computer science. Now I'm on my way to becoming a software engineer!"
          />
          <TestimonialCard
            name="Rahul Patel"
            role="Medical Student"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            quote="The mentorship program connected me with experienced doctors who guided me through my medical school journey. Their support was invaluable!"
          />
          <TestimonialCard
            name="Anita Kumar"
            role="Engineering Graduate"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            quote="Thanks to the educational resources and financial support, I was able to complete my engineering degree and land my dream job."
          />
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <InvolvementCard
              icon={<Heart className="w-8 h-8" />}
              title="NGOs & Donors"
              description="Partner with us to provide scholarships and support students"
              buttonText="Partner With Us"
            />
            <InvolvementCard
              icon={<Brain className="w-8 h-8" />}
              title="Become a Mentor"
              description="Share your knowledge and guide students in their journey"
              buttonText="Join as Mentor"
            />
            <InvolvementCard
              icon={<Target className="w-8 h-8" />}
              title="Students"
              description="Access resources and apply for scholarships"
              buttonText="Get Started"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already benefited from our platform
          </p>
          <Link
            to="/login"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Sign Up Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function TestimonialCard({ name, role, image, quote }: { name: string; role: string; image: string; quote: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
}

function InvolvementCard({ 
  icon, 
  title, 
  description, 
  buttonText 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  buttonText: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to="/login"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
      >
        {buttonText}
        <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
}

export default Home;