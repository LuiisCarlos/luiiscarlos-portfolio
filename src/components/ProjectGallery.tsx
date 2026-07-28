import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryAspect } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export type GalleryImage = { src: string; alt: string };

type ProjectGalleryProps = {
  images: GalleryImage[];
  aspect: GalleryAspect;
  labels: {
    previous: string;
    next: string;
    image: string;
    goTo: string;
    of: string;
  };
};

// Las capturas de escritorio llenan el marco 16:9 recortando lo que sobra; las
// de móvil no se recortan nunca, se centran sobre el fondo. El marco vertical es
// más alto en móvil porque ahí la imagen sí puede aprovechar el ancho.
const SLIDE_STYLES: Record<GalleryAspect, { slide: string; image: string }> = {
  landscape: { slide: "aspect-video", image: "object-cover" },
  portrait: { slide: "aspect-[9/16] sm:aspect-video", image: "object-contain p-2 sm:p-4" },
};

function ProjectGallery({ images, aspect, labels }: ProjectGalleryProps) {
  const styles = SLIDE_STYLES[aspect];
  const [index, setIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  // El contexto se crea una sola vez y se guarda: los tweens del cambio de
  // diapositiva se registran en él con `ctx.add()`. Si cada cambio creara su
  // propio contexto, el `revert()` de su cleanup devolvería el carril a la
  // posición inicial en mitad de la vida del componente.
  const ctxRef = useRef<gsap.Context | null>(null);

  // Sin `prefers-reduced-motion` el salto es instantáneo. matchMedia sustituye
  // esta función por la versión animada cuando corresponde.
  const goToRef = useRef((position: number) => {
    gsap.set(trackRef.current, { xPercent: -100 * position });
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // `from`, no `fromTo`: si el JS falla la galería se ve igual.
        gsap.from(".gallery-frame", {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 90%", once: true },
        });

        goToRef.current = (position) => {
          gsap.to(trackRef.current, {
            xPercent: -100 * position,
            duration: 0.7,
            ease: "power3.inOut",
            overwrite: true,
          });

          gsap.fromTo(
            `.gallery-slide:nth-child(${position + 1}) img`,
            { scale: 1.06 },
            { scale: 1, duration: 0.9, ease: "power2.out", overwrite: true }
          );
        };

        return () => {
          goToRef.current = (position) => {
            gsap.set(trackRef.current, { xPercent: -100 * position });
          };
        };
      });
    }, rootRef);

    ctxRef.current = ctx;

    // Revierte solo lo creado en este contexto. Nunca ScrollTrigger.getAll().
    return () => {
      ctx.revert();
      ctxRef.current = null;
    };
  }, []);

  useEffect(() => {
    ctxRef.current?.add(() => goToRef.current(index));
  }, [index]);

  const move = useCallback(
    (delta: number) => {
      setIndex((current) => (current + delta + images.length) % images.length);
    },
    [images.length]
  );

  const onKeyDown = (event: React.KeyboardEvent) => {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (delta === 0) return;

    event.preventDefault();
    move(delta);
  };

  const hasControls = images.length > 1;

  return (
    <div ref={rootRef}>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={labels.image}
        onKeyDown={onKeyDown}
        className="gallery-frame relative"
      >
        <div className="border-border bg-card overflow-hidden rounded-xl border">
          <ul ref={trackRef} className="flex">
            {images.map((image, position) => (
              <li
                key={image.src}
                className={`gallery-slide w-full shrink-0 ${styles.slide}`}
                aria-hidden={position !== index}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={position === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`size-full ${styles.image}`}
                />
              </li>
            ))}
          </ul>
        </div>

        {hasControls && (
          <>
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label={labels.previous}
              className="bg-background/80 border-border hover:bg-accent hover:border-accent hover:text-background absolute top-1/2 left-3 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border backdrop-blur-md transition-colors"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label={labels.next}
              className="bg-background/80 border-border hover:bg-accent hover:border-accent hover:text-background absolute top-1/2 right-3 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border backdrop-blur-md transition-colors"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {hasControls && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <ul className="flex items-center gap-2">
            {images.map((image, position) => (
              <li key={image.src}>
                <button
                  type="button"
                  onClick={() => setIndex(position)}
                  aria-label={`${labels.goTo} ${position + 1}`}
                  aria-current={position === index}
                  className={`block h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                    position === index ? "bg-accent w-8" : "bg-border hover:bg-muted w-4"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Contador visible que además anuncia el cambio a un lector de pantalla. */}
          <p aria-live="polite" className="text-muted font-mono text-sm">
            <span className="sr-only">{labels.image} </span>
            {index + 1} {labels.of} {images.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
