import { Award, Calendar, GraduationCap } from "lucide-react";

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
      degree:
        "Advanced Technical Program in Cross-Platform Application Development",
      institution: "IES José Luis Martínez Palomo",
      year: "2023 - 2025",
      description:
        "This two-year program focused on software development for desktop, web, and mobile platforms. Key areas of interest included data access and enterprise systems. Throughout the course, I deepened my understanding of backend architecture, clean code practices, and advanced Java programming.",
      achievements: [
        "Final project 'Academ-IQ' received the highest possible grade; it is a fullstack web application focused on tech education with user authentication, course management, and modern deployment strategies.",
        "Scored 9.5/10 on a terminal-based app project involving a custom 2D maze-solving algorithm, authentication system, and data structures like a manually implemented stack.",
        "Consistent top grades in modules related to data persistence and enterprise application integration.",
      ],
    },
  ],
  certifications = [
    {
      name: "Spring Core 5 Course",
      issuer: "OpenWebinars",
      year: "2024",
    },
    {
      name: "Professional Git and Git Flow Course",
      issuer: "OpenWebinars",
      year: "2025",
    },
    {
      name: "Spring Security Course",
      issuer: "OpenWebinars",
      year: "2025",
    },
    {
      name: "SOLID Principles and Design Patterns Course",
      issuer: "OpenWebinars",
      year: "2025",
    },
  ],
}: EducationSectionProps) {
  return (
    <div id="formation" className="max-w-6xl mx-auto py-20 px-8 xl:px-0">
      <section className="flex flex-col gap-15 py-20 my-10">
        <header className="text-center space-y-5">
          <h1 className="text-7xl font-bold">
            Education & <span className="text-blue-400">Certificates</span>
          </h1>
          <h2 className="text-xl text-zinc-500 font-semibold">
            Continuous learning and professional development
          </h2>
        </header>
        <main className="flex flex-col 2xl:flex-row text-center justify-center gap-15">
          {/* Education mini section */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <GraduationCap size={32} className="text-accent" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-zinc-600/5 border border-zinc-600/20 rounded-lg text-left p-4 space-y-2 hover:border-accent/30 transition duration-200"
              >
                <h4 className="text-accent text-xl font-bold">
                  {edu.degree.toUpperCase()}
                </h4>
                <h5 className="text-white text-lg font-semibold">
                  {edu.institution}
                </h5>
                <p className="flex gap-2 text-zinc-500 text-sm">
                  <Calendar size={16} />
                  {edu.year}
                </p>
                <p className="text-zinc-500 mb-3.5">{edu.description}</p>
                {edu.achievements && (
                  <div className="space-y-2">
                    <h6 className="font-semibold text-md">Key Achievements:</h6>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-zinc-500">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certificates mini section */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <Award size={32} className="text-blue-400" />
              <h3 className="text-3xl font-bold">Certificates</h3>
            </div>
            {certifications.map((edu, index) => (
              <div
                key={index}
                className="bg-zinc-600/5 border border-zinc-600/20 rounded-lg text-left p-4  hover:border-accent/30 transition duration-200"
              >
                <h4 className="text-accent text-xl font-bold">
                  {edu.name.toUpperCase()}
                </h4>
                <h5 className="text-white">{edu.issuer}</h5>
                <p className="text-zinc-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}

export default FormationSection;
