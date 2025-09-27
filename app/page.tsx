"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  MapPin,
  Calendar,
  Award,
  Camera,
  Phone,
  Mail,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "THE PIVOT",
      subtitle: "Portraying the variety of Kololo as a whole",
      type: "Mixed-use, 2024",
      location: "Kampala, Uganda",
      description:
        "The Pivot is a mixed use building, located in Kololo Precinct in Kampala Town. The main objectives of this project is to foster a sense of community through multiple stakeholders and to have a return on investment. Kampala being a fast growing business town, mixed use building contribute to the urban quality. Hence, the project prime spaces are: A restaurant, office spaces, and residential apartments. These spaces are supported by a gymnasium and retails shops.",
      images: ["/api/placeholder/600/400"],
      award: "2nd Price ACE Award 2024",
      category: "Academic",
    },
    {
      id: 2,
      title: "HILLSIDE HOTEL",
      subtitle: "Journey to a cosy live-in",
      type: "Hospitality, 2023",
      description:
        "With diverse and stunning landscapes, and exhilarating natural beauty, Hillside Hotel perched on the top north of Uganda Martyrs University, is ideal for the university's guests, visiting professors, Long distance students seeking a lifetime of unforgettable experiences around Uganda Martyrs University.",
      images: ["/api/placeholder/600/400"],
      category: "Academic",
    },
    {
      id: 3,
      title: "MAISON DES VACANCES",
      subtitle: "Country house retreat",
      type: "Residential, 2023",
      location: "Kitembo, D.R. Congo",
      description:
        "As part of having a reception and holiday shelter, the client, Mr. Gilbert Mayumbuko, expressed his need of Ideal Construction for the design, design and construction of a country house. The property is located at Centete, in the village of Kitembo, on the Buta Peninsula in South Kivu in the Democratic Republic of the Congo.",
      images: ["/api/placeholder/600/400"],
      category: "Professional",
      team: [
        "Jonas Ahadi - Design/Renders",
        "Jonathan Buya - Construction/Logistics",
        "Elisée Hekima B. - Design/Drawings/Construction",
      ],
    },
  ];

  const photographyWorks = [
    { title: "Uganda Martyrs U Nkozi Hostos 2022", date: "06.06.2022" },
    {
      title: "Anna Marzena Building UMU Elisee Hekima 2022",
      date: "03.07.2024",
    },
    {
      title: "Anna Marzena Building UMU Elisee Hekima 2022",
      date: "21.11.2021",
    },
    {
      title: "I&M Bank Offices",
      location: "Kisaasi, Rwanda",
      date: "06.06.2022",
    },
    {
      title: "Planning Future",
      location: "Buyovu, Uganda",
      date: "03.07.2024",
    },
    {
      title: "Namirembe Cathedral",
      location: "Kampala, Uganda",
      date: "21.11.2021",
    },
  ];

  const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-white" />
    </div>
  );

  interface Project {
    id: number;
    title: string;
    subtitle?: string;
    type: string;
    location?: string;
    description: string;
    images: string[];
    award?: string;
    category: string;
    team?: string[];
  }

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isLoaded ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm opacity-90">{project.type}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-600 font-medium">
            {project.category}
          </span>
          {project.award && (
            <div className="flex items-center text-yellow-600">
              <Award className="w-4 h-4 mr-1" />
              <span className="text-xs">Award Winner</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({
    project,
    onClose,
  }: {
    project: Project;
    onClose: () => void;
  }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10"
          >
            ×
          </button>
          <div className="h-64 bg-gray-200" />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.subtitle}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">{project.description}</p>
              {project.team && (
                <div>
                  <h4 className="font-semibold mb-2">Team:</h4>
                  <ul className="text-sm text-gray-600">
                    {project.team.map((member, idx) => (
                      <li key={idx}>{member}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm">{project.type}</span>
                </div>
                {project.location && (
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                )}
                {project.award && (
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-600" />
                    <span className="text-sm text-yellow-600">
                      {project.award}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Design
              <span className="block text-gray-300">Portfolio</span>
            </h1>
            <div className="w-32 h-1 bg-blue-500 mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-light mb-2">
              ELISEE HEKIMA
            </h2>
            <h3 className="text-xl md:text-2xl font-light text-gray-300">
              BADASHONDERANA
            </h3>
            <p className="text-lg mt-6 opacity-90">
              Architecture • Design • Construction
            </p>
            <div className="text-4xl font-light mt-8 text-blue-400">2025</div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-black">EH</div>
            <div className="hidden md:flex space-x-8 text-black">
              <a
                href="#projects"
                className="hover:text-blue-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#photography"
                className="hover:text-blue-600 transition-colors"
              >
                Photography
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative architectural solutions across residential,
              commercial, and hospitality sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Photography
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600">@hekima_photography on Instagram</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyWorks.map((work, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1">{work.title}</h3>
                  {work.location && (
                    <p className="text-xs text-gray-500 mb-1">
                      {work.location}
                    </p>
                  )}
                  <p className="text-xs text-gray-400">Date: {work.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Photos exhibited at Uganda Society of Architects &apos; AGM 2022
            </p>
            <p className="text-sm text-gray-500">Exhibitor: Cristine Matua</p>
          </div>
        </div>
      </section>

      {/* Construction Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Construction Process
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              From concept to completion - Maison des Vacances project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Planning Future 2023
              </h3>
              <p className="text-gray-600 mb-4">
                4th Construction Phase: Construction of roof frames for the
                Guest House
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                On-site Construction
              </h3>
              <p className="text-gray-600 mb-4">
                Maison de vacances - January 2023, Kitembo, D.R. Congo
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 mb-12 text-lg">
            Ready to bring your architectural vision to life? Let&apos;s discuss
            your next project.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Call</h3>
              <p className="text-gray-300">+256 XXX XXX XXX</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">elisee.hekima@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Linkedin className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect with me</p>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Start a Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">Design Portfolio</h3>
            <p className="text-gray-400">Elisee Hekima Badashonderana</p>
          </div>
          <div className="text-4xl text-blue-400 mb-4">2025</div>
          <p className="text-gray-400 text-sm">
            © 2025 Elisee Hekima Badashonderana. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
