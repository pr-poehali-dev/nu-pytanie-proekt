import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const CursorTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const emojis = ['✨', '🎊', '🎉', '⭐', '💫'];
    
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: nextId,
        x: e.clientX,
        y: e.clientY,
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
      };

      setParticles(prev => [...prev, newParticle].slice(-15));
      setNextId(prev => prev + 1);

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    };

    let lastTime = 0;
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 50) {
        lastTime = now;
        handleMouseMove(e);
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, [nextId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-2xl animate-trail-fade"
          style={{
            left: particle.x,
            top: particle.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default CursorTrail;
