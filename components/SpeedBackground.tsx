
import React, { useEffect, useRef } from 'react';

const SpeedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; length: number; speed: number; opacity: number; width: number }[] = [];

    const initParticles = () => {
      particles = [];
      const count = 100;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 15 + 10, // High speed
          opacity: Math.random() * 0.5 + 0.1,
          width: Math.random() * 2 + 1
        });
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.speed;
        
        if (p.x > canvas.width) {
          p.x = -p.length;
          p.y = Math.random() * canvas.height;
        }

        const gradient = ctx.createLinearGradient(p.x, p.y, p.x + p.length, p.y);
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${p.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.width;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length, p.y);
        ctx.stroke();

        // Add a "glow" point at the head of the streak
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity + 0.2})`;
        ctx.beginPath();
        ctx.arc(p.x + p.length, p.y, p.width, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ filter: 'blur(1px)' }}
    />
  );
};

export default SpeedBackground;
