import { useEffect } from "react";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

type HeroSectionProps = {
  name: string;
};

function HeroSection({ name }: HeroSectionProps) {
  const sentences = [
    "Backend enthusiast at heart.",
    "Music keeps my code alive.",
    "Backend first, frontend maybe.",
    "Always shipping, always learning.",
    "Learning tech like side quests.",
  ];

  useEffect(() => {
    gsap.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 });

    let boxTl = gsap.timeline();

    boxTl
      .to(".box", {
        duration: 1,
        width: "17vw",
        delay: 0.5,
        ease: "power4.inOut",
      })
      .from(".hello", {
        duration: 1,
        y: "7vw",
        ease: "power3.out",
        onComplete: () => {
          masterTl.play();
        },
      })
      .to(".box", { duration: 1, height: "7vw", ease: "elastic.out" })
      .to(".box", { duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1 });

    let masterTl = gsap.timeline({ repeat: -1 }).pause();

    sentences.forEach((sentence) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".text", { duration: 1.5, text: sentence });

      masterTl.add(tl);
    });
  }, []);

  return (
    <section className="min-h-200 py-20 mb-10 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-[70pt] font-bold m-0 p-0">
            <span className="box"></span>
            <span className="hello">{name}</span>
          </h1>
          <h3 className="text-3xl text-accent font-bold font-mono">
            <span className="text inline-block whitespace-nowrap"></span>
            <span className="cursor inline-block">|</span>
          </h3>
          <p className="text-zinc-500 text-md font-semibold">
            Always chasing the next cool thing
            <br />
            to build because that's what I love.
          </p>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
          {/* <JsonVisualizer data={personalData} speed={1} /> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
