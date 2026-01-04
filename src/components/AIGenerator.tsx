import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface Concept {
  title: string;
  description: string;
  budget: string;
  features: string[];
  venue: string;
  timeline: string;
}

const AIGenerator = () => {
  const [userInput, setUserInput] = useState('');
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    selectedConcept: ''
  });

  const conceptTemplates = [
    // Свадьбы
    {
      keywords: ['свадьба', 'wedding', 'жениться', 'замуж'],
      concepts: [
        {
          title: 'Свадьба в скандинавском стиле',
          description: 'Минималистичная церемония в загородном эко-отеле с панорамными окнами. Светлое дерево, живая зелень, натуральные ткани. Камерный банкет на 40-60 гостей с авторской кухней от шеф-повара.',
          budget: '450-650 тыс. ₽',
          features: ['Выездная регистрация', 'Флористика в эко-стиле', 'Живая музыка (струнный квартет)', 'Welcome-зона с сигарами'],
          venue: 'Загородный отель с панорамными окнами',
          timeline: '6-8 месяцев подготовки'
        },
        {
          title: 'Романтическая свадьба у воды',
          description: 'Церемония на берегу озера или моря с арочной конструкцией из живых цветов. Банкет в шатре с прозрачными стенами, вид на закат. Ужин из 5 блюд, живая лаунж-группа, танцпол под открытым небом.',
          budget: '550-800 тыс. ₽',
          features: ['Церемония на закате', 'Прозрачный шатер 80 гостей', 'Авторское меню', 'Фейерверк над водой'],
          venue: 'Площадка на берегу с видом на воду',
          timeline: '7-9 месяцев подготовки'
        },
        {
          title: 'Лофт-свадьба в городском стиле',
          description: 'Индустриальное пространство с кирпичными стенами и высокими потолками. Модерн-декор с неоновыми акцентами, фуд-станции, коктейльный бар. DJ-сет с живыми инструментами, световое шоу.',
          budget: '400-600 тыс. ₽',
          features: ['Лофт-пространство центр города', 'Коктейльный бар', 'DJ + саксофон', 'Инста-фотозоны'],
          venue: 'Лофт-пространство в центре города',
          timeline: '5-7 месяцев подготовки'
        }
      ]
    },
    // Дни рождения
    {
      keywords: ['день рождения', 'юбилей', 'birthday', 'лет'],
      concepts: [
        {
          title: 'Гастрономический ужин с дегустацией',
          description: 'Камерный вечер в ресторане с панорамным видом. Сет из 7 блюд от шеф-повара с винной парой. Сомелье проводит дегустацию, живая джазовая музыка. Формат: 20-25 близких друзей.',
          budget: '250-400 тыс. ₽',
          features: ['Авторское меню 7 блюд', 'Винная дегустация', 'Джаз-трио', 'Персональный торт от кондитера'],
          venue: 'Ресторан с панорамным видом',
          timeline: '3-4 месяца подготовки'
        },
        {
          title: 'Вечеринка в стиле Gatsby',
          description: 'Гламурное торжество в историческом особняке. Дресс-код: платья 20-х годов и смокинги. Шампанская башня, живой джаз-бэнд, танцпол с ретро-подсветкой. Кейтеринг от премиум-ресторана.',
          budget: '350-550 тыс. ₽',
          features: ['Исторический особняк', 'Джаз-бэнд 20-х', 'Шампанское welcome', 'Винтажная фотобудка'],
          venue: 'Исторический особняк с бальным залом',
          timeline: '4-6 месяцев подготовки'
        },
        {
          title: 'Пикник-вечеринка на природе',
          description: 'Дневное торжество в красивом парке или на берегу. Шатры с уютными зонами отдыха, барбекю-станция, крафтовые лимонады. Активности: волейбол, пинг-понг, акустическая музыка. Формат: 30-50 гостей.',
          budget: '180-280 тыс. ₽',
          features: ['Шатры и лаунж-зоны', 'Барбекю-станция', 'Акустический дуэт', 'Игровые активности'],
          venue: 'Парк или загородная площадка',
          timeline: '2-3 месяца подготовки'
        }
      ]
    },
    // Корпоративы
    {
      keywords: ['корпоратив', 'corporate', 'команд', 'сотрудник', 'офис'],
      concepts: [
        {
          title: 'Team-building с кулинарным мастер-классом',
          description: 'Интерактивное мероприятие в кулинарной студии. Команды готовят 3-4 блюда под руководством шефа, затем дегустируют результаты. Винная дегустация, тимбилдинг-активности, награждение победителей.',
          budget: '120-200 тыс. ₽',
          features: ['Кулинарный мастер-класс', 'Командное соревнование', 'Винная дегустация', 'Ужин из приготовленного'],
          venue: 'Кулинарная студия или лофт с кухней',
          timeline: '2-3 месяца подготовки'
        },
        {
          title: 'Новогодний корпоратив в усадьбе',
          description: 'Банкет в исторической усадьбе с новогодним декором класса люкс. Развлекательная программа: живая музыка, шоу-балет, иллюзионист. Подарки сотрудникам, фуршет, танцпол до утра. Формат: 80-150 человек.',
          budget: '800к-1.2 млн ₽',
          features: ['Историческая усадьба', 'Шоу-программа 2 часа', 'Подарки сотрудникам', 'Трансфер для гостей'],
          venue: 'Усадьба или банкетный комплекс',
          timeline: '5-7 месяцев подготовки'
        },
        {
          title: 'Тимбилдинг в формате квеста',
          description: 'Выездное мероприятие на базе отдыха. Квест-игра по территории с заданиями, веревочный парк, спортивные состязания. Барбекю-ужин, костер с песнями под гитару, баня. Формат: 30-60 человек.',
          budget: '200-350 тыс. ₽',
          features: ['Квест с актерами', 'Веревочный парк', 'Барбекю и баня', 'Ночлег на базе (опция)'],
          venue: 'База отдыха или загородный комплекс',
          timeline: '2-4 месяца подготовки'
        }
      ]
    },
    // Детские праздники
    {
      keywords: ['детск', 'ребенок', 'дети', 'kids', 'малыш'],
      concepts: [
        {
          title: 'Тематическая вечеринка "Гарри Поттер"',
          description: 'Превращаем площадку в Хогвартс: факультеты, мантии, волшебные палочки. Квест с заданиями, шоу мыльных пузырей, аниматоры в костюмах. Сладкий стол в стиле фильма, торт-замок. Для детей 7-12 лет.',
          budget: '120-180 тыс. ₽',
          features: ['Декор в стиле Хогвартс', 'Квест с аниматорами', 'Шоу мыльных пузырей', 'Тематический торт'],
          venue: 'Детский клуб или лофт-пространство',
          timeline: '2-3 месяца подготовки'
        },
        {
          title: 'День рождения в контактном зоопарке',
          description: 'Праздник на территории зоопарка с контактной зоной. Знакомство с животными под руководством зоолога, кормление, фотосессия. Банкет в отдельном павильоне, торт, игры на природе. До 20 детей.',
          budget: '80-150 тыс. ₽',
          features: ['Программа с животными', 'Зоолог-экскурсовод', 'Кормление животных', 'Банкет в павильоне'],
          venue: 'Контактный зоопарк или ферма',
          timeline: '1-2 месяца подготовки'
        },
        {
          title: 'Научное шоу и мастер-классы',
          description: 'Интерактивный праздник с научными экспериментами. Шоу профессора: опыты с азотом, сухим льдом, световые эффекты. Мастер-классы: создание слаймов, вулканов, мыловарение. Банкет, торт, дискотека с аниматором.',
          budget: '100-160 тыс. ₽',
          features: ['Научное шоу 45 минут', '3 мастер-класса', 'Дискотека с аниматором', 'Подарки каждому ребенку'],
          venue: 'Детский клуб или научная лаборатория',
          timeline: '2-3 месяца подготовки'
        }
      ]
    },
    // Романтические события
    {
      keywords: ['предложение', 'романтик', 'свидание', 'любов', 'surprise'],
      concepts: [
        {
          title: 'Предложение руки и сердца на крыше',
          description: 'Романтичная обстановка на крыше с панорамным видом на город. Свечи, лепестки роз, неоновая надпись "Marry Me". Живая музыка (скрипка + гитара), шампанское, клубника в шоколаде. Фотограф скрытно фиксирует момент.',
          budget: '120-200 тыс. ₽',
          features: ['Панорамная крыша', 'Флористика и свечи', 'Живая музыка', 'Скрытая фотосъемка'],
          venue: 'Крыша отеля или ресторана с видом',
          timeline: '1-2 месяца подготовки'
        },
        {
          title: 'Романтический ужин в оранжерее',
          description: 'Приватный ужин среди тропических растений и цветов. Стол на двоих с дизайнерской сервировкой, авторское меню из 5 блюд. Живая музыка (арфа), свечи, винная дегустация. Подарок от шеф-повара.',
          budget: '80-150 тыс. ₽',
          features: ['Оранжерея с тропиками', 'Ужин от шеф-повара', 'Живая арфа', 'Букет роз в подарок'],
          venue: 'Оранжерея или ботанический сад',
          timeline: '3-4 недели подготовки'
        },
        {
          title: 'Пикник на закате у воды',
          description: 'Уютный пикник на берегу озера или моря. Мягкие пледы, подушки, низкий столик с закусками и вином. Акустическая живая музыка, фотосессия на закате. Можно добавить фейерверк или небесные фонарики.',
          budget: '50-100 тыс. ₽',
          features: ['Декор пикник-зоны', 'Кейтеринг и вино', 'Акустическая музыка', 'Фотосессия на закате'],
          venue: 'Берег озера или моря',
          timeline: '2-3 недели подготовки'
        }
      ]
    }
  ];

  const generateConcepts = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const input = userInput.toLowerCase();
      
      // Находим подходящий шаблон по ключевым словам
      let selectedTemplate = conceptTemplates.find(template => 
        template.keywords.some(keyword => input.includes(keyword))
      );
      
      // Если не нашли - используем универсальные концепции
      if (!selectedTemplate) {
        selectedTemplate = {
          keywords: [],
          concepts: [
            {
              title: 'Камерная вечеринка в ресторане',
              description: 'Уютное мероприятие в премиум-ресторане с отдельным залом. Авторское меню от шеф-повара, живая музыка, винная карта. Идеально для торжества на 20-40 гостей с акцентом на качественную кухню.',
              budget: '200-350 тыс. ₽',
              features: ['Отдельный зал', 'Авторское меню', 'Живая музыка', 'Винная дегустация'],
              venue: 'Премиум-ресторан',
              timeline: '3-4 месяца подготовки'
            },
            {
              title: 'Торжество в загородном комплексе',
              description: 'Мероприятие на природе с комфортом городского уровня. Банкетный зал с панорамными окнами, терраса, зона барбекю. Развлекательная программа, активности на природе. Возможность размещения гостей.',
              budget: '300-500 тыс. ₽',
              features: ['Загородный комплекс', 'Банкет + барбекю', 'Развлекательная программа', 'Размещение гостей'],
              venue: 'Загородный банкетный комплекс',
              timeline: '4-6 месяцев подготовки'
            },
            {
              title: 'Современное событие в лофте',
              description: 'Стильное мероприятие в индустриальном пространстве. Модерн-декор, коктейльный бар, DJ. Фуд-станции с авторскими блюдами, фотозоны. Идеально для молодежной аудитории и нестандартных форматов.',
              budget: '250-400 тыс. ₽',
              features: ['Лофт-пространство', 'Коктейльный бар', 'DJ-сет', 'Фуд-станции'],
              venue: 'Лофт в центре города',
              timeline: '3-5 месяцев подготовки'
            }
          ]
        };
      }
      
      setConcepts(selectedTemplate.concepts);
      setIsGenerating(false);
      setShowContactForm(false);
    }, 2500);
  };

  const handleConceptSelect = (title: string) => {
    setFormData({ ...formData, selectedConcept: title });
    setShowContactForm(true);
    setTimeout(() => {
      document.getElementById('concept-contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }
    console.log('Concept form submitted:', formData);
    alert('Спасибо! Я свяжусь с вами в ближайшее время для обсуждения концепции.');
    setShowContactForm(false);
    setFormData({ name: '', phone: '', selectedConcept: '' });
    setUserInput('');
    setConcepts([]);
  };

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full mb-6">
            <Icon name="Sparkles" size={16} className="text-purple-400 animate-pulse" />
            <span className="text-purple-300 text-xs font-medium uppercase tracking-wider">AI-генератор концепций</span>
          </div>
          <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
            Мероприятие вашей <span className="text-gold">мечты</span>
          </h3>
          <p className="text-xl text-champagne/70 max-w-3xl mx-auto leading-relaxed">
            Опишите свои пожелания — я создам 3 реалистичные концепции с деталями, бюджетом и сроками
          </p>
        </div>

        <div className="holographic-card rounded-3xl p-10 mb-8">
          <label className="block text-champagne/80 text-sm mb-3 font-medium">
            Расскажите о вашем мероприятии:
          </label>
          <Textarea
            placeholder="Например: 
• Хочу отметить 30-летие на 50 человек
• Бюджет около 300 тысяч
• Важна хорошая кухня и живая музыка
• Предпочитаю уютную атмосферу, не люблю шумные клубы
• Дата: лето 2026"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="bg-black/50 border-gold/30 text-champagne min-h-44 text-base mb-6 focus:border-gold leading-relaxed"
          />

          <Button
            onClick={generateConcepts}
            disabled={!userInput || isGenerating}
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-14 text-base font-medium"
          >
            {isGenerating ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Создаю концепции специально для вас...
              </>
            ) : (
              <>
                <Icon name="Wand2" size={20} className="mr-2" />
                Получить 3 готовые концепции
              </>
            )}
          </Button>
        </div>

        {concepts.length > 0 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-light text-champagne mb-3">
                Ваши персональные концепции
              </h4>
              <p className="text-champagne/60">
                Выберите понравившуюся и оставьте заявку на обсуждение
              </p>
            </div>
            
            {concepts.map((concept, index) => (
              <div
                key={index}
                className="neumorphic rounded-3xl p-8 hover:transform hover:scale-[1.01] transition-all"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                  <div>
                    <h5 className="text-2xl font-normal text-gold mb-2">{concept.title}</h5>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-champagne/60">
                      <span className="flex items-center gap-1">
                        <Icon name="MapPin" size={14} />
                        {concept.venue}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {concept.timeline}
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-base font-medium whitespace-nowrap">
                    {concept.budget}
                  </span>
                </div>

                <p className="text-champagne/80 mb-6 leading-relaxed text-base">
                  {concept.description}
                </p>

                <div className="mb-6">
                  <p className="text-champagne/60 text-sm mb-3 font-medium">Что входит:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {concept.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 bg-black/30 rounded-lg">
                        <Icon name="Check" size={16} className="text-gold flex-shrink-0" />
                        <span className="text-champagne/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => handleConceptSelect(concept.title)}
                  className="w-full bg-gold text-black hover:bg-champagne h-12 text-base font-medium"
                >
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Обсудить эту концепцию
                </Button>
              </div>
            ))}

            {showContactForm && (
              <div id="concept-contact-form" className="holographic-card rounded-3xl p-10 animate-fade-in border-2 border-gold/50">
                <div className="text-center mb-8">
                  <Icon name="Sparkles" size={32} className="text-gold mx-auto mb-4" />
                  <h4 className="text-3xl font-light text-champagne mb-3">
                    Обсудим детали?
                  </h4>
                  <p className="text-champagne/70 mb-2">
                    Выбранная концепция: <span className="text-gold font-medium">{formData.selectedConcept}</span>
                  </p>
                  <p className="text-champagne/60 text-sm">
                    Оставьте контакты — я свяжусь с вами в течение часа
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm mb-2 text-champagne">Ваше имя</label>
                    <Input
                      required
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-champagne">Телефон или Telegram</label>
                    <Input
                      required
                      placeholder="+7 (___) ___-__-__ или @telegram"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-3">
                    <Checkbox
                      id="concept-terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      className="mt-1 border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                    />
                    <label htmlFor="concept-terms" className="text-xs text-champagne/70 leading-relaxed cursor-pointer">
                      Я согласен на обработку персональных данных и принимаю{' '}
                      <a href="/privacy" className="text-gold hover:underline">
                        политику конфиденциальности
                      </a>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold text-black hover:bg-champagne h-14 text-base font-medium"
                    disabled={!agreedToTerms}
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AIGenerator;
