
import React from 'react';
import Layout from '../components/layout/Layout';
import { Building, Home, Wrench, PaintBucket, Users, Shield, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from concept to completion.',
      features: [
        'Office Buildings',
        'Retail Complexes',
        'Industrial Facilities',
        'Warehouses',
        'Hotels & Restaurants'
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&h=600'
    },
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes and residential complexes built to your exact specifications.',
      features: [
        'Single Family Homes',
        'Luxury Villas',
        'Apartment Complexes',
        'Townhouses',
        'Condominiums'
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600'
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation services.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovation',
        'Home Extensions',
        'Basement Finishing',
        'Structural Modifications'
      ],
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=600'
    },
    {
      icon: PaintBucket,
      title: 'Interior Design',
      description: 'Complete interior design solutions that reflect your style and needs.',
      features: [
        'Space Planning',
        'Material Selection',
        'Furniture Design',
        'Lighting Design',
        'Color Consultation'
      ],
      image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=800&h=600'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Professional project management ensuring timely delivery and quality.',
      features: [
        'Planning & Scheduling',
        'Budget Management',
        'Quality Control',
        'Vendor Coordination',
        'Progress Reporting'
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&h=600'
    },
    {
      icon: Shield,
      title: 'Maintenance Services',
      description: 'Ongoing maintenance services to keep your property in perfect condition.',
      features: [
        'Preventive Maintenance',
        'Emergency Repairs',
        'HVAC Services',
        'Electrical Maintenance',
        'Plumbing Services'
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive construction services delivered with expertise, 
            quality, and professionalism for all your building needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg p-3 mb-6">
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is completed 
              on time, within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to understand your needs and vision' },
              { step: '02', title: 'Planning', description: 'Detailed project planning and design development' },
              { step: '03', title: 'Construction', description: 'Professional construction with regular updates' },
              { step: '04', title: 'Delivery', description: 'Final inspection and project handover' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can 
            bring your construction project to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
