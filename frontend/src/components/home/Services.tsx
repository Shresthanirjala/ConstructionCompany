
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, Wrench, PaintBucket, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Modern commercial buildings designed for efficiency and functionality.',
      features: ['Office Buildings', 'Retail Spaces', 'Industrial Facilities']
    },
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes built with attention to detail and quality craftsmanship.',
      features: ['Custom Homes', 'Townhouses', 'Apartments']
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation services.',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Home Extensions']
    },
    {
      icon: PaintBucket,
      title: 'Interior Design',
      description: 'Complete interior solutions that reflect your style and needs.',
      features: ['Space Planning', 'Material Selection', 'Furniture Design']
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery.',
      features: ['Planning & Scheduling', 'Quality Control', 'Budget Management']
    },
    {
      icon: Shield,
      title: 'Maintenance Services',
      description: 'Ongoing maintenance to keep your property in perfect condition.',
      features: ['Preventive Maintenance', 'Emergency Repairs', '24/7 Support']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive construction services to meet all your building needs, 
            from concept to completion with the highest standards of quality and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="p-8">
                <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg p-3 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
