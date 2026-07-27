import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

type HeroSectionProps = {
  name: string;
  sentences: readonly string[];
  tagline: string;
};

function HeroSection({ name, sentences, tagline }: HeroSectionProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 48rem)",
          motionOk: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { isDesktop, motionOk } = context.conditions as {
            isDesktop: boolean;
            motionOk: boolean;
          };

          // Sin animación el texto debe seguir siendo legible.
          if (!motionOk) {
            gsap.set(".text", { text: sentences[0] ?? "" });
            return;
          }

          gsap.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 });

          // Declarada antes de usarse en onComplete.
          const masterTl = gsap.timeline({ repeat: -1 }).pause();

          sentences.forEach((sentence) => {
            const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
            tl.to(".text", { duration: 1.5, text: sentence });
            masterTl.add(tl);
          });

          const startTypewriter = () => {
            masterTl.play();
          };

          // La barra decorativa solo existe en escritorio: en móvil ocuparía
          // media pantalla sobre el nombre.
          if (isDesktop) {
            gsap
              .timeline()
              .to(".box", { duration: 1, width: "8rem", delay: 0.5, ease: "power4.inOut" })
              .from(".hello", {
                duration: 1,
                y: "4rem",
                ease: "power3.out",
                onComplete: startTypewriter,
              })
              .to(".box", { duration: 1, height: "3rem", ease: "elastic.out" })
              .to(".box", { duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1 });
          } else {
            gsap.from(".hello", {
              duration: 1,
              y: "2rem",
              delay: 0.3,
              ease: "power3.out",
              onComplete: startTypewriter,
            });
          }
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [sentences]);

  return (
    <section ref={rootRef} className="flex min-h-[80vh] items-center px-6 py-20 lg:px-16">
      <div className="mx-auto w-full max-w-6xl space-y-6 text-center md:text-left">
        <h1 className="m-0 flex flex-col items-center gap-2 p-0 text-4xl font-bold sm:text-6xl md:flex-row md:items-baseline lg:text-7xl">
          <span className="bg-accent box hidden h-2 w-0 rounded-full md:block" aria-hidden="true" />
          <span className="hello">{name}</span>
        </h1>

        <h2 className="text-accent min-h-[1.5em] font-mono text-lg font-bold sm:text-2xl lg:text-3xl">
          <span className="text inline whitespace-normal sm:whitespace-nowrap" />
          <span className="cursor inline-block" aria-hidden="true">
            |
          </span>
        </h2>

        <p className="text-muted mx-auto max-w-prose text-base font-semibold md:mx-0">{tagline}</p>
      </div>
    </section>
  );
}

export default HeroSection;
