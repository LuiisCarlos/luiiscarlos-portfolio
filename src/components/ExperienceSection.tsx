import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export type LocalizedExperience = {
  id: string;
  company: string;
  technologies: string[];
  role: string;
  location: string;
  duration: string;
  description: readonly string[];
};

type ExperienceSectionProps = {
  title: string;
  titleAccent: string;
  subtitle: string;
  entries: LocalizedExperience[];
};

function ExperienceSection({ title, titleAccent, subtitle, entries }: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".timeline-line",
          { height: "0%" },
          {
            height: "100%",
            duration: 2,
            scrollTrigger: {
              trigger: ".timeline",
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>(".experience-item").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: 60 },
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
        });
      });
    }, sectionRef);

    // Revierte solo lo creado en este contexto. Nunca ScrollTrigger.getAll().
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-7xl">
            {title} <span className="text-accent">{titleAccent}</span>
          </h2>
          <p className="text-muted text-lg font-semibold sm:text-xl">{subtitle}</p>
        </div>

        {/* Timeline de raíl izquierdo: funciona igual con 1 entrada que con 10
            y no necesita reordenar nada en móvil. */}
        <div className="timeline relative pl-10 sm:pl-14">
          {/* El raíl necesita altura propia (top-0 bottom-0): si no, el 100% al
              que anima `.timeline-line` se resuelve contra un padre de altura 0. */}
          <div
            className="bg-border absolute top-0 bottom-0 left-3 w-px sm:left-5"
            aria-hidden="true"
          >
            <div className="timeline-line bg-accent/40 h-0 w-px" />
          </div>

          {entries.map((entry) => (
            <div key={entry.id} className="experience-item relative mb-16 last:mb-0">
              {/* Centrado sobre el raíl: borde izquierdo = posición del raíl - radio. */}
              <div
                className="bg-background border-accent absolute top-6 -left-9 size-4 rounded-full border-2 sm:-left-11"
                aria-hidden="true"
              />

              <div className="bg-card border-border hover:border-accent/30 rounded-lg border p-6 transition duration-200 sm:p-8">
                <h3 className="text-accent mb-2 text-xl font-bold">{entry.role}</h3>
                <h4 className="mb-3 text-lg font-semibold">{entry.company}</h4>

                <div className="text-muted mb-4 flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} aria-hidden="true" />
                    <span>{entry.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} aria-hidden="true" />
                    <span>{entry.location}</span>
                  </div>
                </div>

                <ul className="mb-6 space-y-2">
                  {entry.description.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <div
                        className="bg-accent mt-2 size-2 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="bg-background border-border text-muted rounded-sm border px-3 py-1 text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
