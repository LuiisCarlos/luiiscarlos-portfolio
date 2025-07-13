import { Award, GraduationCap } from 'lucide-react';
import React from 'react'

interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
  achievements?: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

interface EducationSectionProps {
  education?: Education[];
  certifications?: Certification[];
}


function FormationSection({
  education = [
    {
      degree: "Advanced Technical Program in Cross-Platform Application Development",
      institution: "IES José Luis Martínez Palomo",
      year: "2023 - 2025",
      description:
        "This two-year program focused on software development for desktop, web, and mobile platforms. Key areas of interest included data access and enterprise systems. Throughout the course, I deepened my understanding of backend architecture, clean code practices, and advanced Java programming.",
      achievements: [
        "Final project 'Academ-IQ' received the highest possible grade; it is a fullstack web application focused on tech education with user authentication, course management, and modern deployment strategies.",
        "Scored 9.5/10 on a terminal-based app project involving a custom 2D maze-solving algorithm, authentication system, and data structures like a manually implemented stack.",
        "Consistent top grades in modules related to data persistence and enterprise application integration."
      ]
    }
  ],
  certifications = [
    {
      name: "Spring Core 5 Course",
      issuer: "OpenWebinars",
      year: "2024",
      credentialId: ""
    },
    {
      name: "Professional Git and Git Flow Course",
      issuer: "OpenWebinars",
      year: "2025",
      credentialId: ""
    },
    {
      name: "Spring Security Course",
      issuer: "OpenWebinars",
      year: "2025",
      credentialId: ""
    },
    {
      name: "SOLID Principles and Design Patterns Course",
      issuer: "OpenWebinars",
      year: "2025",
      credentialId: ""
    }
  ]
}: EducationSectionProps) {


  return (
    <div className="max-w-6xl mx-auto h-350">
      <section className="flex flex-col gap-15 py-20 my-10">
        <header className="text-center space-y-5">
          <h1 className="text-7xl font-bold">
            Education & <span className="text-blue-400">Certificates</span>
          </h1>
          <h2 className="text-md text-gray-500 font-semibold">
            Continuous learning and professional development
          </h2>
        </header>
        <main className="flex flex-col 2xl:flex-row text-center justify-center gap-15">

          {/* Education mini section */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center justify-center gap-4">
              <GraduationCap size={32} className="text-blue-400" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/15 border border-blue-500/20 rounded-lg text-left p-4 w-150 hover:border-blue-500/60 transition duration-400 space-y-2">
                <h4 className="text-blue-500 text-xl font-bold">{edu.degree.toUpperCase()}</h4>
                <h5 className="text-white font-semibold">{edu.institution}</h5>
                <p className="text-gray-500">{edu.year}</p>
                <p className="text-gray-500">{edu.description}</p>
                {edu.achievements && (
                  <div className="space-y-2">
                    <h6 className="font-semibold text-md">Key Achievements:</h6>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certificates mini section */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center justify-center gap-4">
              <Award size={32} className="text-blue-400" />
              <h3 className="text-3xl font-bold">Certificates</h3>
            </div>
            {certifications.map((edu, index) => (
              <div key={index} className="bg-gray-800/15 border border-blue-500/20 rounded-lg text-left p-4 w-150 hover:border-blue-500/60 transition duration-400">
                <h4 className="text-blue-500 text-xl font-bold">{edu.name.toUpperCase()}</h4>
                <h5 className="text-white">{edu.issuer}</h5>
                <p className="text-gray-500">{edu.year}</p>
                <p className="text-gray-500">{edu.credentialId}</p>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  )
}

export default FormationSection;
