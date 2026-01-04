import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface CityData {
  name: string;
  events: number;
  position: { x: number; y: number };
  examples: string[];
  features: string[];
}

const InteractiveMap = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities: CityData[] = [
    {
      name: 'Москва',
      events: 45,
      position: { x: 42, y: 35 },
      examples: ['Свадьба в Музеоне', 'Корпоратив в Лофте', 'Юбилей в усадьбе'],
      features: ['Премиум-локации', 'Топовые подрядчики', 'Любой бюджет']
    },
    {
      name: 'Санкт-Петербург',
      events: 32,
      position: { x: 38, y: 25 },
      examples: ['Свадьба в дворце', 'Вечер на крыше', 'Классический банкет'],
      features: ['Историческая роскошь', 'Уникальные площадки', 'Белые ночи']
    },
    {
      name: 'Сочи',
      events: 28,
      position: { x: 48, y: 68 },
      examples: ['Пляжная церемония', 'Горная свадьба', 'Яхт-вечеринка'],
      features: ['Море и горы', 'Круглый год', 'Идеально для свадеб']
    },
    {
      name: 'Крым',
      events: 21,
      position: { x: 52, y: 60 },
      examples: ['Винодельня', 'Дворцы и парки', 'Набережная'],
      features: ['Винные туры', 'Романтика', 'Южный колорит']
    }
  ];

  const selectedCityData = cities.find(c => c.name === selectedCity);

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">География</p>
          <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
            Работаю по всей <span className="text-gold">России</span>
          </h3>
          <p className="text-xl text-champagne/70">
            Нажмите на город, чтобы узнать подробности
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-full aspect-square neumorphic rounded-3xl p-8 overflow-hidden">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.2))' }}
              >
                <path
                  d="M 20 40 Q 30 20 50 25 T 70 35 Q 80 45 75 60 T 60 80 Q 40 85 25 75 T 20 40 Z"
                  fill="rgba(212, 175, 55, 0.05)"
                  stroke="rgba(212, 175, 55, 0.3)"
                  strokeWidth="0.5"
                />
                {cities.map((city) => (
                  <g key={city.name}>
                    <circle
                      cx={city.position.x}
                      cy={city.position.y}
                      r={selectedCity === city.name ? '4' : '2.5'}
                      fill={selectedCity === city.name ? '#D4AF37' : 'rgba(212, 175, 55, 0.6)'}
                      className="cursor-pointer transition-all hover:r-[4]"
                      onClick={() => setSelectedCity(city.name)}
                    />
                    <circle
                      cx={city.position.x}
                      cy={city.position.y}
                      r="8"
                      fill="transparent"
                      className="cursor-pointer animate-pulse"
                      onClick={() => setSelectedCity(city.name)}
                      opacity={selectedCity === city.name ? '0.3' : '0'}
                      stroke="#D4AF37"
                      strokeWidth="0.5"
                    />
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            {selectedCityData ? (
              <div className="holographic-card rounded-3xl p-10 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-4xl font-light text-champagne">{selectedCityData.name}</h4>
                  <button
                    onClick={() => setSelectedCity(null)}
                    className="text-champagne/50 hover:text-champagne"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="CheckCircle2" size={20} className="text-gold" />
                    <span className="text-gold text-xl font-medium">{selectedCityData.events} мероприятий</span>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-champagne/70 text-sm mb-3">Примеры проектов:</p>
                  <div className="space-y-2">
                    {selectedCityData.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Sparkles" size={14} className="text-gold" />
                        <span className="text-champagne">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-champagne/70 text-sm mb-3">Особенности:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCityData.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-champagne text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="neumorphic rounded-3xl p-10">
                <div className="text-center py-12">
                  <Icon name="MapPin" size={48} className="text-gold/30 mx-auto mb-4" />
                  <p className="text-champagne/70 text-lg">
                    Выберите город на карте
                  </p>
                  <p className="text-champagne/50 text-sm mt-2">
                    Узнайте о моём опыте работы в разных регионах
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
