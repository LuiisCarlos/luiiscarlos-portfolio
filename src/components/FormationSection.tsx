import { Award, Calendar, GraduationCap } from "lucide-react";

export type LocalizedEducation = {
  id: string;
  institution: string;
  year: string;
  degree: string;
  description: string;
  achievements: readonly string[];
};

export type LocalizedCertification = {
  id: string;
  issuer: string;
  year: string;
  name: string;
};

type FormationSectionProps = {
  title: string;
  titleAccent: string;
  subtitle: string;
  educationHeading: string;
  certificatesHeading: string;
  achievementsHeading: string;
  education: LocalizedEducation[];
  certifications: LocalizedCertification[];
};

function FormationSection({
  title,
  titleAccent,
  subtitle,
  educationHeading,
  certificatesHeading,
  achievementsHeading,
  education,
  certifications,
}: FormationSectionProps) {
  return (
    <section id="formation" className="mx-auto max-w-6xl px-6 py-20 lg:px-16">
      <div className="flex flex-col gap-15">
        <div className="space-y-5 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
            {title} <span className="text-accent">{titleAccent}</span>
          </h2>
          <p className="text-muted text-lg font-semibold sm:text-xl">{subtitle}</p>
        </div>

        <div className="flex flex-col justify-center gap-15 xl:flex-row">
          <div className="flex-1 space-y-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <GraduationCap size={32} className="text-accent" aria-hidden="true" />
              <h3 className="text-2xl font-bold sm:text-3xl">{educationHeading}</h3>
            </div>

            {education.map((edu) => (
              <article
                key={edu.id}
                className="bg-card border-border hover:border-accent/30 space-y-2 rounded-lg border p-4 text-left transition duration-200"
              >
                <h4 className="text-accent text-xl font-bold">{edu.degree.toUpperCase()}</h4>
                <p className="text-lg font-semibold">{edu.institution}</p>
                <p className="text-muted flex items-center gap-2 text-sm">
                  <Calendar size={16} aria-hidden="true" />
                  {edu.year}
                </p>
                <p className="text-muted mb-3.5">{edu.description}</p>

                {edu.achievements.length > 0 && (
                  <div className="space-y-2">
                    <p className="font-semibold">{achievementsHeading}</p>
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
              <h3 className="text-2xl font-bold sm:text-3xl">{certificatesHeading}</h3>
            </div>

            {certifications.map((cert) => (
              <article
                key={cert.id}
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
