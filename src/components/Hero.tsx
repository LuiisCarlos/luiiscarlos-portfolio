import { useEffect } from "react"
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

import JsonVisualizer from './JsonVisualizer';

gsap.registerPlugin(TextPlugin);

const sentences = ['I\'m a Backend enthusiast.', 'I solve problems with code.', 'I speak fluent API.', "I\'m always learning."];
const data = {
  name: "Luis Carlos",
  role: "Full Stack Developer",
  experience: "1+ years",
  skills: ["Java", "Spring", "TypeScript", "Angular", "Astro"],
  contact: {
    email: "luisccg2003@gmail.com",
    github: "github.com/LuiisCarlos"
  },
  currentlyLearning: "React and GSAP animations"
};

function Hero() {
  useEffect(() => {
    gsap.to('.cursor', { opacity: 0, ease: 'power2.inOut', repeat: -1 });

    let boxTl = gsap.timeline();

    boxTl.to('.box', { duration: 1, width: '17vw', delay: 0.5, ease: 'power4.inOut' })
      .from('.hi', { duration: 1, y: '7vw', ease: 'power3.out', onComplete: () => { masterTl.play(); } })
      .to('.box', { duration: 1, height: '7vw', ease: 'elastic.out' })
      .to('.box', { duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1 });

    let masterTl = gsap.timeline({ repeat: -1 }).pause();

    sentences.forEach(sentence => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to('.text', { duration: 1.5, text: sentence });

      masterTl.add(tl);
    });
  }, []);

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex flex-col w-1/2 space-y-10">
          <p className="text-6xl font-bold">
            <span className="box"></span>
            <span className="hello ">Luis Carlos</span>
          </p>
          <p className="text-3xl text-blue-500 font-bold font-mono">
            <span className="text inline-block whitespace-nowrap"></span>
            <span className="cursor inline-block">|</span>
          </p>
          <p className="text-gray-500 text-md">
            Crafting digital experiences
            <br />
            with modern technologies
          </p>
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <JsonVisualizer data={data} speed={1} />
      </div>
    </div>
  )
}

export default Hero;