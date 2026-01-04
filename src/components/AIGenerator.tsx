import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Concept {
  title: string;
  description: string;
  budget: string;
  features: string[];
}

const AIGenerator = () => {
  const [userInput, setUserInput] = useState('');
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateConcepts = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const generatedConcepts: Concept[] = [
        {
          title: 'Романтический вечер на природе',
          description: 'Камерная церемония в загородном отеле с панорамным видом. Декор в натуральных тонах, живая музыка, ужин при свечах.',
          budget: '150-200 тыс. ₽',
          features: ['30 гостей', 'Выездная регистрация', 'Барбекю-зона', 'Живая музыка']
        },
        {
          title: 'Эко-пикник с активностями',
          description: 'Уютное мероприятие в лесопарковой зоне. Эко-декор, фуд-станции, командные игры на природе.',
          budget: '120-180 тыс. ₽',
          features: ['До 40 гостей', 'Активности', 'Кейтеринг', 'Фотозона']
        },
        {
          title: 'Лофт с живой музыкой',
          description: 'Современное пространство с индустриальным дизайном. Концертное выступление, авторская кухня, танцпол.',
          budget: '180-250 тыс. ₽',
          features: ['50 гостей', 'Живая группа', 'DJ сет', 'Бар']
        }
      ];

      setConcepts(generatedConcepts);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full mb-6">
            <Icon name="Sparkles" size={16} className="text-purple-400" />
            <span className="text-purple-300 text-xs font-medium uppercase tracking-wider">AI-генератор</span>
          </div>
          <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
            Мероприятие вашей <span className="text-gold">мечты</span>
          </h3>
          <p className="text-xl text-champagne/70 max-w-3xl mx-auto">
            Опишите свои пожелания в свободной форме — я создам 3 готовые концепции
          </p>
        </div>

        <div className="holographic-card rounded-3xl p-10 mb-8">
          <Textarea
            placeholder="Например: Хочу необычный день рождения на 30 человек, бюджет 200к, люблю природу и уютную атмосферу, важна качественная еда и живая музыка..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="bg-black/50 border-gold/30 text-champagne min-h-40 text-lg mb-6 focus:border-gold"
          />

          <Button
            onClick={generateConcepts}
            disabled={!userInput || isGenerating}
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-14 text-base"
          >
            {isGenerating ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Генерирую концепции...
              </>
            ) : (
              <>
                <Icon name="Wand2" size={20} className="mr-2" />
                Получить AI-концепции
              </>
            )}
          </Button>
        </div>

        {concepts.length > 0 && (
          <div className="space-y-6 animate-fade-in">
            <h4 className="text-2xl font-light text-champagne mb-6 text-center">
              Ваши персональные концепции
            </h4>
            {concepts.map((concept, index) => (
              <div
                key={index}
                className="neumorphic rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h5 className="text-2xl font-light text-gold">{concept.title}</h5>
                  <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm">
                    {concept.budget}
                  </span>
                </div>
                <p className="text-champagne/80 mb-6 leading-relaxed">
                  {concept.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {concept.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
                      <Icon name="Check" size={14} className="text-gold" />
                      <span className="text-champagne/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center pt-8">
              <Button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="bg-gold text-black hover:bg-champagne"
              >
                Обсудить эти концепции со мной
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIGenerator;
