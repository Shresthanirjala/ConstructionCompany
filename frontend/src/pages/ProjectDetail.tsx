
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { ArrowLeft, MapPin, Calendar, User, Clock, CheckCircle } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Project data - in a real app, this would come from an API
  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Commercial',
      location: 'Kathmandu, Nepal',
      year: '2024',
      status: 'Completed',
      client: 'Tech Solutions Pvt Ltd',
      duration: '18 months',
      budget: 'NPR 50,00,000',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&h=800',
      images: [
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&h=600',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600',
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=600'
      ],
      description: 'A state-of-the-art office complex featuring modern architecture and sustainable design elements. This project showcases our expertise in commercial construction with innovative design solutions.',
      fullDescription: 'This modern office complex represents the pinnacle of contemporary commercial architecture. Spanning over 50,000 square feet, the building features cutting-edge sustainable design elements including solar panels, rainwater harvesting systems, and energy-efficient HVAC systems. The structure incorporates local materials and traditional Nepali architectural elements while maintaining a thoroughly modern aesthetic.',
      features: [
        'Sustainable design with LEED certification',
        'Modern HVAC and electrical systems',
        'Spacious parking facilities',
        'High-speed internet infrastructure',
        'Emergency backup systems',
        'Accessibility compliant design'
      ],
      challenges: [
        'Complex foundation work due to soil conditions',
        'Integration of traditional and modern architectural elements',
        'Meeting strict environmental regulations',
        'Coordinating with multiple utility providers'
      ]
    },
    {
      id: 2,
      title: 'Luxury Residential Villa',
      category: 'Residential',
      location: 'Pokhara, Nepal',
      year: '2023',
      status: 'Completed',
      client: 'Mr. & Mrs. Sharma',
      duration: '12 months',
      budget: 'NPR 35,00,000',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&h=800',
      images: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600',
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&h=600',
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=600'
      ],
      description: 'An elegant villa combining traditional Nepali architecture with contemporary luxury amenities.',
      fullDescription: 'This luxury residential villa perfectly blends traditional Nepali architectural elements with modern luxury living. The 4,500 square foot home features hand-carved wooden details, local stone work, and contemporary amenities including a home theater, wine cellar, and infinity pool overlooking the Annapurna mountain range.',
      features: [
        'Traditional Nepali architectural design',
        'Modern luxury amenities',
        'Infinity pool with mountain views',
        'Home automation systems',
        'Custom woodwork and stone details',
        'Landscaped gardens'
      ],
      challenges: [
        'Preserving traditional design while adding modern amenities',
        'Working with steep terrain',
        'Sourcing authentic traditional materials',
        'Weather-related construction delays'
      ]
    },
    {
      id: 3,
      title: 'Shopping Mall Construction',
      category: 'Commercial',
      location: 'Lalitpur, Nepal',
      year: '2023',
      status: 'Completed',
      client: 'Retail Development Corp',
      duration: '24 months',
      budget: 'NPR 1,20,00,000',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&h=800',
      images: [
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=600',
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&h=600',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600'
      ],
      description: 'A multi-story shopping complex with retail spaces, entertainment areas, and parking facilities.',
      fullDescription: 'This comprehensive shopping mall project spans 200,000 square feet across five floors, featuring over 150 retail outlets, a food court, cinema complex, and underground parking for 500 vehicles. The design incorporates natural lighting, efficient crowd flow management, and modern safety systems.',
      features: [
        '150+ retail outlets across 5 floors',
        'Multi-level parking for 500+ vehicles',
        'Cinema complex and entertainment zone',
        'Central air conditioning system',
        'Advanced fire safety systems',
        'Natural lighting and ventilation'
      ],
      challenges: [
        'Complex structural engineering for large spans',
        'Managing construction in busy urban area',
        'Coordinating with numerous retail tenants',
        'Meeting strict safety and accessibility codes'
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link
              to="/projects"
              className="inline-flex items-center text-white mb-4 hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'Completed' ? 'bg-green-600' : 'bg-yellow-600'
              }`}>
                {project.status}
              </span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 mb-8">{project.fullDescription}</p>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Challenges</h3>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium text-gray-900">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-900">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Year Completed</p>
                      <p className="font-medium text-gray-900">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-900">{project.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-bold text-gray-900 mb-4">Interested in a similar project?</h4>
                  <Link
                    to="/contact"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
