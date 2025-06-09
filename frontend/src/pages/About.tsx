
import React from 'react';
import Layout from '../components/layout/Layout';
import { Users, Target, Eye, Award } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Netra Bahadur Shrestha',
      position: 'Founder & CEO',
      image: '#',
      description: 'With over 20 years in construction, he leads our vision for excellence.'
    },
    {
      name: 'Nabin Shrestha',
      position: 'Chief Architect',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=300&h=300',
      description: 'Nabin brings innovative design solutions to every project we undertake.'
    },
    {
      name: 'Yunish Shrestha',
      position: 'Project Manager',
      image: '#',
      description: 'Yunish ensures all projects are delivered on time and within budget.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About NBConstruction</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building tomorrow's infrastructure today with innovation, quality, and dedication
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, NBConstruction Pvt Ltd has grown from a small local 
                contractor to one of Nepal's most trusted construction companies. Our 
                journey began with a simple vision: to build structures that stand the 
                test of time while exceeding our clients' expectations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have successfully completed over 150 projects, 
                ranging from residential homes to large commercial complexes. Our 
                commitment to quality, innovation, and customer satisfaction has 
                earned us numerous awards and the trust of our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">14+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600"
                alt="Our Construction Projects"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional construction services that exceed client expectations 
                while maintaining the highest standards of quality, safety, and sustainability.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be Nepal's leading construction company, recognized for innovation, 
                quality, and our contribution to building a better future for communities.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, excellence, innovation, and customer satisfaction guide 
                everything we do. We believe in building lasting relationships through trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced team of professionals is dedicated to bringing your 
              construction vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
