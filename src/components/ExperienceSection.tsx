import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

interface ExperienceSectionProps {
  experiences?: Experience[];
}

function ExperienceSection({
  experiences = [
    {
      title: "SOFTWARE DEVELOPER",
      company: "Parker Work Systems S.L.",
      location: "Murcia, Spain",
      duration: "Apr 2025 - Present",
      description: [
        "Participated in full development of features, collaborating closely with the team to meet project goals.",
        "Enhanced teamwork and adaptability skills by integrating into an established system without starting from scratch.",
        "Although I didn’t hold leadership roles, my consistent contributions helped progress system updates and improvements.",
        "Gained real-world experience in a professional environment and learned how to work effectively in a collaborative setting."
      ],
      technologies: ["PHP", "Javascript", "JQuery", "SQL", "HTML", "Bootstrap"],
    },
  ],
}: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (section && timeline) {
      const experienceItems = timeline.children;

      // Animate timeline line
      const timelineLine = timeline.querySelector(".timeline-line");
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { height: "0%" },
          {
            height: "100%",
            duration: 2,
            scrollTrigger: {
              trigger: timeline,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );
      }

      // Animate experience items
      Array.from(experienceItems).forEach((item, index) => {
        if (item.classList.contains("experience-item")) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: 100,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-xl text-zinc-500 font-semibold">
            My professional journey in software development
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent/10 h-0" />

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="experience-item relative mb-16 lg:pl-1/2"
            >
              {/* Timeline dot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-2 border-background z-10" />

              <div className="bg-zinc-600/5 border border-zinc-600/20 rounded-lg p-8 relative lg:ml-8 hover:border-accent/30 transition duration-200">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-accent mb-2">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-semibold mb-3">
                    {experience.company}
                  </h4>

                  <div className="flex flex-wrap gap-4 text-zinc-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-zinc-500">{item}</span>
                    </li>
                  ))}
                </ul>

                {experience.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-zinc-600/15 border border-zinc-600/15 text-muted px-3 py-1 rounded-sm text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Arrow pointing to timeline */}
                <div className="absolute top-6 left-0 transform -translate-x-4 w-0 h-0 border-t-4 border-b-4 border-transparent border-r-4 border-r-accent/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}

export default ExperienceSection;
