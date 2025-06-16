
import React from 'react';
import { Award, Clock, Shield, Users, Lightbulb, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Award-winning construction company with 14+ years of industry experience.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We pride ourselves on completing projects on time and within budget.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure the highest construction standards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals including architects, engineers, and craftsmen.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We use cutting-edge technology and sustainable building practices.'
    },
    {
      icon: CheckCircle,
      title: 'Full Service',
      description: 'From design to completion, we handle every aspect of your project.'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">NBConstruction?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We combine years of experience with innovative approaches to deliver 
              construction projects that exceed expectations. Our commitment to quality, 
              safety, and customer satisfaction sets us apart.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-lg p-2 flex-shrink-0">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=800&h=600"
                alt="Construction Team"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">14+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
