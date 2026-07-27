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

interface FormationSectionProps {
  education?: Education[];
  certifications?: Certification[];
}

// TODO(fase 2): mover a src/data/education.ts y recibirlo siempre por props.
const DEFAULT_EDUCATION: Education[] = [
  {
    degree: "Advanced Technical Program in Cross-Platform Application Development",
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
];

const DEFAULT_CERTIFICATIONS: Certification[] = [
  { name: "Spring Core 5 Course", issuer: "OpenWebinars", year: "2024" },
  { name: "Professional Git and Git Flow Course", issuer: "OpenWebinars", year: "2025" },
  { name: "Spring Security Course", issuer: "OpenWebinars", year: "2025" },
  { name: "SOLID Principles and Design Patterns Course", issuer: "OpenWebinars", year: "2025" },
];

function FormationSection({
  education = DEFAULT_EDUCATION,
  certifications = DEFAULT_CERTIFICATIONS,
}: FormationSectionProps) {
  return (
    <section id="formation" className="mx-auto max-w-6xl px-6 py-20 lg:px-16">
      <div className="flex flex-col gap-15">
        <div className="space-y-5 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
            Education & <span className="text-accent">Certificates</span>
          </h2>
          <p className="text-muted text-lg font-semibold sm:text-xl">
            Continuous learning and professional development
          </p>
        </div>

        <div className="flex flex-col justify-center gap-15 xl:flex-row">
          <div className="flex-1 space-y-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <GraduationCap size={32} className="text-accent" aria-hidden="true" />
              <h3 className="text-2xl font-bold sm:text-3xl">Education</h3>
            </div>

            {education.map((edu) => (
              <article
                key={`${edu.institution}-${edu.year}`}
                className="bg-card border-border hover:border-accent/30 space-y-2 rounded-lg border p-4 text-left transition duration-200"
              >
                <h4 className="text-accent text-xl font-bold">{edu.degree.toUpperCase()}</h4>
                <p className="text-lg font-semibold">{edu.institution}</p>
                <p className="text-muted flex items-center gap-2 text-sm">
                  <Calendar size={16} aria-hidden="true" />
                  {edu.year}
                </p>
                <p className="text-muted mb-3.5">{edu.description}</p>

                {edu.achievements && (
                  <div className="space-y-2">
                    <p className="font-semibold">Key Achievements:</p>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start space-x-2">
                          <div
                            className="bg-accent mt-2 size-1.5 shrink-0 rounded-full"
                            aria-hidden="true"
                          />
                          <span className="text-muted">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <Award size={32} className="text-accent" aria-hidden="true" />
              <h3 className="text-2xl font-bold sm:text-3xl">Certificates</h3>
            </div>

            {certifications.map((cert) => (
              <article
                key={`${cert.name}-${cert.year}`}
                className="bg-card border-border hover:border-accent/30 rounded-lg border p-4 text-left transition duration-200"
              >
                <h4 className="text-accent text-xl font-bold">{cert.name.toUpperCase()}</h4>
                <p>{cert.issuer}</p>
                <p className="text-muted">{cert.year}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormationSection;
