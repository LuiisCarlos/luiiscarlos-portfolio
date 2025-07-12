import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type JsonVisualizerProps = {
  speed?: number;
  data: Record<string, unknown>;
};

const JsonVisualizer = ({ data, speed = 1 }: JsonVisualizerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const jsonString = JSON.stringify(data, null, 2);
    const lines = jsonString.split('\n').filter(line => line.trim() !== '');
    const lineElements: HTMLDivElement[] = [];

    lines.forEach(line => {
      const lineElement = document.createElement('div');
      lineElement.className = 'text-2xl text-white font-mono absolute whitespace-pre';
      lineElement.textContent = line;
      lineElement.style.willChange = 'transform, opacity';

      gsap.set(lineElement, {
        x: Math.random() * 500 - 250,
        y: Math.random() * 300 - 150,
        opacity: 0,
        scale: 0.5
      });

      container.appendChild(lineElement);
      lineElements.push(lineElement);
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    let yPosition = 0;
    lineElements.forEach((el, i) => {
      tl.to(el, {
        opacity: 1,
        x: 0,
        y: yPosition,
        scale: 1,
        duration: 0.7 * speed,
        delay: i * 0.15 * speed
      }, "<0.1");

      yPosition += el.offsetHeight + 8;
    });

    return () => {
      tl.kill();
    };
  }, [data, speed]);

  return (
    <div
      ref={containerRef}
      className="relative h-[700px] w-full max-w-3xl overflow-hidden font-mono"
    />
  );
};

export default JsonVisualizer;