import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

type HeroSectionProps = {
  name: string;
};

const sentences = [
  "Backend enthusiast at heart.",
  "Music keeps my code alive.",
  "Backend first, frontend maybe.",
  "Always shipping, always learning.",
  "Learning tech like side quests.",
];

function HeroSection({ name }: HeroSectionProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 });

        // Declarada antes de usarse en onComplete.
        const masterTl = gsap.timeline({ repeat: -1 }).pause();

        sentences.forEach((sentence) => {
          const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
          tl.to(".text", { duration: 1.5, text: sentence });
          masterTl.add(tl);
        });

        gsap
          .timeline()
          .to(".box", { duration: 1, width: "8rem", delay: 0.5, ease: "power4.inOut" })
          .from(".hello", {
            duration: 1,
            y: "4rem",
            ease: "power3.out",
            onComplete: () => {
              masterTl.play();
            },
          })
          .to(".box", { duration: 1, height: "3rem", ease: "elastic.out" })
          .to(".box", { duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1 });
      });

      // Sin animación, el texto debe seguir siendo legible.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".text", { text: sentences[0] });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="flex min-h-[80vh] items-center justify-center px-6 py-20 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="m-0 flex flex-col items-center gap-2 p-0 text-5xl font-bold sm:text-6xl md:flex-row md:items-baseline lg:text-7xl">
            <span className="bg-accent box h-2 w-0 rounded-full" aria-hidden="true" />
            <span className="hello">{name}</span>
          </h1>

          <h2 className="text-accent font-mono text-xl font-bold sm:text-2xl lg:text-3xl">
            <span className="text inline-block whitespace-nowrap" />
            <span className="cursor inline-block" aria-hidden="true">
              |
            </span>
          </h2>

          <p className="text-muted text-base font-semibold">
            Always chasing the next cool thing
            <br />
            to build because that&apos;s what I love.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
