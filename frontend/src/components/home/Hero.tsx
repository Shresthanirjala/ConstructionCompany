
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Building Your
                <span className="text-blue-300 block">Dreams</span>
                Into Reality
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                With over 14 years of experience, NBConstruction Pvt Ltd delivers 
                exceptional construction services that exceed expectations. From 
                residential homes to commercial complexes, we build with precision and passion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">150+</div>
                <div className="text-sm text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">14+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">100%</div>
                <div className="text-sm text-blue-100">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600"
                alt="Modern Construction Project"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1" />
                </button>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white text-blue-900 p-4 rounded-lg shadow-lg transform -rotate-6">
              <div className="text-2xl font-bold">2024</div>
              <div className="text-sm">Award Winner</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg transform rotate-6">
              <div className="text-2xl font-bold">A+</div>
              <div className="text-sm">Quality Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
