import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

interface Notification {
  id: number;
  name: string;
  city: string;
  event: string;
}

const NotificationToast = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

  const notificationData = [
    { name: 'Анна', city: 'Москва', event: 'свадьбу' },
    { name: 'Игорь', city: 'Сочи', event: 'корпоратив' },
    { name: 'Елена', city: 'Санкт-Петербург', event: 'юбилей' },
    { name: 'Дмитрий', city: 'Крым', event: 'день рождения' },
    { name: 'Ольга', city: 'Москва', event: 'свадьбу' }
  ];

  useEffect(() => {
    const showRandomNotification = () => {
      const randomData = notificationData[Math.floor(Math.random() * notificationData.length)];
      const newNotification = {
        id: Date.now(),
        ...randomData
      };

      setCurrentNotification(newNotification);

      setTimeout(() => {
        setCurrentNotification(null);
      }, 5000);
    };

    const interval = setInterval(showRandomNotification, 15000);
    setTimeout(showRandomNotification, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!currentNotification) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-in-left">
      <div className="bg-muted/95 backdrop-blur-xl border border-gold/30 rounded-2xl p-4 pr-6 shadow-2xl max-w-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="CheckCircle2" size={20} className="text-gold" />
          </div>
          <div>
            <p className="text-champagne text-sm font-medium">
              <span className="text-gold">{currentNotification.name}</span> из {currentNotification.city}
            </p>
            <p className="text-champagne/70 text-xs">
              только что оставила заявку на {currentNotification.event}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;
