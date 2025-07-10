import { useEffect } from "react"
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const sentences = ['Luis Carlos.', 'Backend enthusiast.', 'Java lover.', 'Frontend apprentice.'];

function Hero() {

  useEffect(() => {
    gsap.to('.cursor', { opacity: 0, ease: 'power2.inOut', repeat: -1 });

    let boxTl = gsap.timeline();

    boxTl.to('.box', { duration: 1, width: '17vw', delay: 0.5, ease: 'power4.inOut' })
      .from('.hi', { duration: 1, y: '7vw', ease: 'power3.out', onComplete: () => { masterTl.play(); }})
      .to('.box', { duration: 1, height: '7vw', ease: 'elastic.out' })
      .to('.box', { duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1 });

    let masterTl = gsap.timeline({ repeat: -1 }).pause();

    sentences.forEach(sentence => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to('.text', { duration: 1, text: sentence });

      masterTl.add(tl);
    });
  }, []);

  return (
    <div className="text-white font-bold">
      <span className="box"></span>
      <span className="hello">Hello, I am </span>
      <br />
      <span className="text"></span>
      <span className="cursor">|</span>
    </div>
  )
}

export default Hero;