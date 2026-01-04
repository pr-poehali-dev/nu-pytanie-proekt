import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let time = 0;

    const animate = () => {
      time += 0.005;

      const gradient1 = ctx.createRadialGradient(
        mouseX * 0.8,
        mouseY * 0.8,
        0,
        mouseX,
        mouseY,
        canvas.width * 0.5
      );
      gradient1.addColorStop(0, `rgba(138, 43, 226, ${0.15 + Math.sin(time) * 0.05})`);
      gradient1.addColorStop(0.5, `rgba(75, 0, 130, ${0.1 + Math.cos(time * 1.5) * 0.05})`);
      gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');

      const gradient2 = ctx.createRadialGradient(
        canvas.width - mouseX * 0.8,
        canvas.height - mouseY * 0.8,
        0,
        canvas.width - mouseX,
        canvas.height - mouseY,
        canvas.width * 0.5
      );
      gradient2.addColorStop(0, `rgba(79, 70, 229, ${0.15 + Math.cos(time * 1.2) * 0.05})`);
      gradient2.addColorStop(0.5, `rgba(67, 56, 202, ${0.1 + Math.sin(time * 0.8) * 0.05})`);
      gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 3; i++) {
        const offsetX = Math.sin(time + i) * 100;
        const offsetY = Math.cos(time * 1.3 + i) * 100;
        
        const grad = ctx.createRadialGradient(
          canvas.width / 2 + offsetX,
          canvas.height / 2 + offsetY,
          0,
          canvas.width / 2 + offsetX,
          canvas.height / 2 + offsetY,
          300
        );
        grad.addColorStop(0, `rgba(212, 175, 55, ${0.08 + Math.sin(time + i) * 0.03})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default AnimatedBackground;
