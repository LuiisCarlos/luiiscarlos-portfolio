import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  PanelsTopLeft,
  Server,
  Terminal,
} from "lucide-react";
import type { ProjectType } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export type LocalizedProject = {
  id: string;
  type: ProjectType;
  tech: string[];
  github?: string;
  demo?: string;
  title: string;
  description: string;
  typeLabel: string;
};

type ProjectsSectionProps = {
  title: string;
  titleAccent: string;
  subtitle: string;
  viewCode: string;
  liveDemo: string;
  of: string;
  entries: LocalizedProject[];
};

const PROJECT_ICONS: Record<ProjectType, typeof Server> = {
  api: Server,
  microservice: Globe,
  database: Database,
  cli: Terminal,
  frontend: PanelsTopLeft,
  fullstack: Code2,
};

function ProjectsSection({
  title,
  titleAccent,
  subtitle,
  viewCode,
  liveDemo,
  of,
  entries,
}: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".project-card",
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".projects-grid",
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    // Revierte solo lo creado en este contexto. Nunca ScrollTrigger.getAll().
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-7xl">
            {title} <span className="text-accent">{titleAccent}</span>
          </h2>
          <p className="text-muted mx-auto max-w-2xl text-lg font-semibold sm:text-xl">
            {subtitle}
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 gap-6 lg:grid-cols-2">
          {entries.map((project) => {
            const Icon = PROJECT_ICONS[project.type];

            return (
              <article
                key={project.id}
                className="project-card group bg-card border-border hover:border-accent/30 rounded-xl border p-6 transition duration-200"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-accent/10 text-accent grid size-10 shrink-0 place-items-center rounded-lg transition-all duration-300">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="group-hover:text-accent text-xl font-bold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-accent/80 text-sm font-medium">{project.typeLabel}</span>
                  </div>
                </div>

                <p className="text-muted mb-6 text-sm leading-relaxed">{project.description}</p>

                <ul className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-background border-border rounded-sm border px-2.5 py-1 text-xs font-medium"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="bg-background border-border hover:bg-accent hover:border-accent hover:text-background flex flex-1 items-center justify-center gap-2 rounded-sm border px-4 py-2 text-sm font-medium transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} aria-hidden="true" />
                      {viewCode}
                      <span className="sr-only">
                        {of} {project.title}
                      </span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      className="bg-accent text-background hover:bg-accent/90 flex flex-1 items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      {liveDemo}
                      <span className="sr-only">
                        {of} {project.title}
                      </span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
