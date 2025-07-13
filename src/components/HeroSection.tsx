import { useEffect } from "react"
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

import JsonVisualizer from './JsonVisualizer';

gsap.registerPlugin(TextPlugin);

const sentences = ['I\'m a Backend enthusiast.', 'I solve problems with code.', 'I speak fluent API.', "I\'m always learning."];
const personalData = {
  name: "Luis Carlos",
  role: "Backend Developer",
  experience: "1+ years",
  skills: ["Java", "Spring", "TypeScript", "Angular"],
  contact: {
    email: "luisccg2003@gmail.com",
    github: "github.com/LuiisCarlos"
  },
  currentlyLearning: "Spring AI and some frontend"
};

function HeroSection() {
  useEffect(() => {
    gsap.to('.cursor', { opacity: 0, ease: 'power2.inOut', repeat: -1 });

    let boxTl = gsap.timeline();

    boxTl.to('.box', { duration: 1, width: '17vw', delay: 0.5, ease: 'power4.inOut' })
      .from('.hello', { duration: 1, y: '7vw', ease: 'power3.out', onComplete: () => { masterTl.play(); } })
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
    <section className="flex flex-row items-center justify-center h-200 py-20 mb-10 gap-100">
      <div className="flex justify-end w-1/2">
        <div className="space-y-10">
          <h1 className="text-[70pt] font-bold m-0 p-0">
            <span className="box"></span>
            <span className="hello ">Luis Carlos</span>
          </h1>
          <h3 className="text-3xl text-blue-500 font-bold font-mono">
            <span className="text inline-block whitespace-nowrap"></span>
            <span className="cursor inline-block">|</span>
          </h3>
          <p className="text-gray-500 text-md font-semibold">
            Crafting digital experiences
            <br />
            with modern technologies
          </p>
        </div>
      </div>
      <div className="flex justify-start w-1/2">
        {/* <JsonVisualizer data={personalData} speed={1} /> */}
      </div>
    </section>
  )
}

export default HeroSection;
