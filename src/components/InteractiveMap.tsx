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
            <div className="relative w-full aspect-square neumorphic rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-gold/5 to-purple-600/5">
              <svg
                viewBox="0 0 200 120"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))' }}
              >
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgba(212, 175, 55, 0.2)', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: 'rgba(138, 43, 226, 0.15)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgba(79, 70, 229, 0.2)', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Упрощённый контур России */}
                <path
                  d="M 30 45 L 40 35 L 50 30 L 70 28 L 90 30 L 110 32 L 130 35 L 150 38 L 170 42 L 180 48 L 185 55 L 180 62 L 170 68 L 150 72 L 130 70 L 110 68 L 90 65 L 80 70 L 70 75 L 60 78 L 50 80 L 40 78 L 35 70 L 30 60 L 28 50 Z"
                  fill="url(#mapGradient)"
                  stroke="rgba(212, 175, 55, 0.5)"
                  strokeWidth="1"
                  className="transition-all"
                />
                
                {/* Города с пульсацией */}
                {cities.map((city) => (
                  <g key={city.name}>
                    {/* Пульсирующий круг при выборе */}
                    {selectedCity === city.name && (
                      <>
                        <circle
                          cx={city.position.x * 2}
                          cy={city.position.y * 1.2}
                          r="20"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="0.5"
                          opacity="0.3"
                          className="animate-ping"
                        />
                        <circle
                          cx={city.position.x * 2}
                          cy={city.position.y * 1.2}
                          r="15"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="0.8"
                          opacity="0.5"
                          className="animate-pulse"
                        />
                      </>
                    )}
                    
                    {/* Основная точка города */}
                    <circle
                      cx={city.position.x * 2}
                      cy={city.position.y * 1.2}
                      r={selectedCity === city.name ? '6' : '4'}
                      fill={selectedCity === city.name ? '#D4AF37' : 'rgba(212, 175, 55, 0.8)'}
                      className="cursor-pointer transition-all hover:scale-150"
                      onClick={() => setSelectedCity(city.name)}
                      stroke="#000"
                      strokeWidth="0.5"
                    />
                    
                    {/* Внешнее кольцо */}
                    <circle
                      cx={city.position.x * 2}
                      cy={city.position.y * 1.2}
                      r="8"
                      fill="transparent"
                      stroke="rgba(212, 175, 55, 0.4)"
                      strokeWidth="1"
                      className="cursor-pointer transition-all"
                      onClick={() => setSelectedCity(city.name)}
                    />
                    
                    {/* Название города */}
                    <text
                      x={city.position.x * 2}
                      y={city.position.y * 1.2 - 12}
                      fill="rgba(212, 175, 55, 0.9)"
                      fontSize="6"
                      textAnchor="middle"
                      className="font-light pointer-events-none"
                      style={{ textShadow: '0 0 4px rgba(0, 0, 0, 0.8)' }}
                    >
                      {city.name}
                    </text>
                  </g>
                ))}
              </svg>
              
              {/* Легенда */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm border border-gold/30 rounded-lg p-3 text-xs">
                <div className="flex items-center gap-2 text-champagne/70">
                  <div className="w-3 h-3 rounded-full bg-gold"></div>
                  <span>Кликните по городу</span>
                </div>
              </div>
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