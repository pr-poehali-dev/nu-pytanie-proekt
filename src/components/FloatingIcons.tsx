import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

interface FloatingIcon {
  id: number;
  icon: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  duration: number;
}

const FloatingIcons = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const iconNames = ['Cake', 'Heart', 'PartyPopper', 'Sparkles', 'Gift'];
    const newIcons = iconNames.map((icon, i) => ({
      id: i,
      icon,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
      duration: 15 + Math.random() * 10
    }));
    setIcons(newIcons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-float-3d"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.rotation}deg) scale(${icon.scale})`,
            animation: `float-3d ${icon.duration}s ease-in-out infinite`,
            animationDelay: `${icon.id * 0.5}s`
          }}
        >
          <div className="relative">
            <Icon
              name={icon.icon}
              size={48}
              className="text-gold/10 drop-shadow-2xl"
            />
            <Icon
              name={icon.icon}
              size={48}
              className="absolute top-0 left-0 text-gold/5 blur-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
