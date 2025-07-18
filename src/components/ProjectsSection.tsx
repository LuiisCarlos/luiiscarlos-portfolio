import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, Server, Database, Code2, Terminal, Globe, PanelsTopLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  type?: 'api' | 'microservice' | 'database' | 'fullstack' | 'cli' | 'frontend';
}

interface ProjectsSectionProps {
  projects?: Project[];
}

export function ProjectsSection({
  projects = [
    {
      title: "Academ-IQ Full Stack Application",
      description: "Developed as my final degree project, this platform delivers a complete e-learning experience with a modular architecture, secure authentication, and systems for course tracking, progress management, and user interaction.",
      tech: ["Java", "Spring", "PostgreSQL", "Docker", "Angular", "Typescript", "Tailwind"],
      // github: "https://github.com/yourusername/microservices",
      type: "fullstack"
    },
    {
      title: "LuiisCarlos Portfolio",
      description: "Built with Astro, React and TypeScript. I’m mainly a backend dev but had to tackle some frontend here, let’s just say it was a “fun” challenge.",
      tech: ["Astro", "React", "GSAP", "Tailwind", "TypeScript"],
      github: "https://github.com/luiiscarlos/luiiscarlos-portfolio",
      type: "frontend"
    },
    {
      title: "Express JS Proxy Server",
      description: " A lightweight API proxy built with Express, designed to handle secure communication between AI services and clients, demonstrating backend expertise.",
      tech: ["Node.js", "Express", "Javascript"],
      github: "https://github.com/luiiscarlos/expressjs-proxy",
      // demo: "https://api.yourproject.com/docs",
      type: "api"
    }
  ]
}: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const projectsContainer = projectsRef.current;

    if (section && projectsContainer) {
      const projectCards = projectsContainer.children;

      gsap.fromTo(projectCards,
        {
          opacity: 0,
          y: 40,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsContainer,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getProjectIcon = (type?: string) => {
    switch (type) {
      case 'api': return <Server size={20} />;
      case 'microservice': return <Globe size={20} />;
      case 'database': return <Database size={20} />;
      case 'cli': return <Terminal size={20} />;
      case 'frontend': return <PanelsTopLeft  size={20}/>;
      default: return <Code2 size={20} />;
    }
  };

  const getProjectTypeLabel = (type?: string) => {
    switch (type) {
      case 'api': return 'REST API';
      case 'microservice': return 'Microservice';
      case 'database': return 'Database';
      case 'cli': return 'CLI Tool';
      case 'fullstack': return 'Full Stack';
      case 'frontend': return 'Frontend';
      default: return 'Backend';
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-7xl font-bold mb-6">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-zinc-500 font-semibold max-w-2xl mx-auto">
            Backend solutions and system architecture projects that solve real-world problems
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-zinc-600/5 border border-zinc-600/20 rounded-xl p-6 hover:border-accent/30 transition duration-200"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 text-accent rounded-lg group-hover:text-primary-foreground transition-all duration-300">
                  {getProjectIcon(project.type)}
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-accent/80 font-medium">
                    {getProjectTypeLabel(project.type)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-500 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-zinc-600/15 border border-zinc-600/15 px-2.5 py-1 rounded-sm text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-600/10 hover:bg-accent rounded-sm transition-all duration-200 text-sm font-medium flex-1 justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-white hover:bg-accent/90 rounded-lg transition-all duration-300 text-sm font-medium flex-1 justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
