'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    let animationFrame = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;

    const createParticles = () => {
      const particleCount = Math.max(42, Math.min(72, Math.floor((width * height) / 24000)));

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.6 + 0.25
      }));
    };

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = innerWidth;
      height = innerHeight;

      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      createParticles();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const backgroundGradient = context.createRadialGradient(width * 0.22, height * 0.15, 0, width * 0.5, height * 0.5, Math.max(width, height));
      backgroundGradient.addColorStop(0, 'rgba(245, 245, 243, 0.03)');
      backgroundGradient.addColorStop(0.45, 'rgba(26, 26, 26, 0.02)');
      backgroundGradient.addColorStop(1, 'rgba(17, 17, 17, 0)');
      context.fillStyle = backgroundGradient;
      context.fillRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        context.beginPath();
        context.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        context.shadowColor = 'rgba(255, 255, 255, 0.12)';
        context.shadowBlur = 6;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;

        for (let offset = index + 1; offset < particles.length; offset += 1) {
          const other = particles[offset];
          const distanceX = particle.x - other.x;
          const distanceY = particle.y - other.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (distance < 130) {
            const opacity = (1 - distance / 130) * 0.18;
            context.beginPath();
            context.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.65})`;
            context.lineWidth = 1;
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resizeCanvas();
    };

    resizeCanvas();
    animationFrame = window.requestAnimationFrame(draw);
    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,245,243,0.04),transparent_30%),radial-gradient(circle_at_bottom,rgba(245,245,243,0.02),transparent_24%)]" />
      <div className="absolute left-[8%] top-[18%] h-64 w-64 rounded-full bg-offwhite/5 blur-3xl" />
      <div className="absolute right-[12%] top-[28%] h-72 w-72 rounded-full bg-offwhite/5 blur-3xl" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.22),rgba(17,17,17,0.78))]" />
    </div>
  );
}
