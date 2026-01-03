import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const testimonials = [
    {
      name: 'Анастасия К.',
      event: 'Свадьба в Санкт-Петербурге',
      text: 'Марина взяла на себя все организационные вопросы. Свадьба прошла идеально, как в сказке. Я только наслаждалась моментом!',
      rating: 5
    },
    {
      name: 'Дмитрий В.',
      event: 'Юбилей компании',
      text: 'Профессионализм высшего уровня. Марина координировала 200+ гостей безупречно. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Елена М.',
      event: 'День рождения в Крыму',
      text: 'От идеи до реализации - все было продумано до мелочей. Марина настоящий профессионал своего дела.',
      rating: 5
    }
  ];

  const cases = [
    {
      title: 'Свадьба на берегу моря',
      location: 'Сочи',
      guests: 120,
      image: '🌊',
      description: 'Роскошная церемония с панорамным видом на закат'
    },
    {
      title: 'Корпоратив премиум-класса',
      location: 'Москва',
      guests: 250,
      image: '🏙️',
      description: 'Стильное мероприятие в центре столицы'
    },
    {
      title: 'Юбилей в усадьбе',
      location: 'Санкт-Петербург',
      guests: 80,
      image: '🏰',
      description: 'Камерное торжество в исторической локации'
    },
    {
      title: 'Свадьба в горах',
      location: 'Крым',
      guests: 60,
      image: '⛰️',
      description: 'Уникальная выездная церемония на высоте'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, date });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gold">Marico Events</h1>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-gold transition-colors">О Марине</a>
            <a href="#cases" className="hover:text-gold transition-colors">Кейсы</a>
            <a href="#testimonials" className="hover:text-gold transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-gold transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 text-gold leading-tight">
              Ваше событие.<br />Моя ответственность.
            </h2>
            <p className="text-xl md:text-2xl text-champagne mb-8 font-light">
              Организация премиум-событий по всей России — от Москвы до Сочи
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8">
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg px-8">
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-gold/20 text-4xl mx-8">✦ ПРЕМИУМ СОБЫТИЯ</span>
            <span className="text-gold/20 text-4xl mx-8">✦ БЕЗУПРЕЧНЫЙ СЕРВИС</span>
            <span className="text-gold/20 text-4xl mx-8">✦ ВСЕГДА НА ВАШЕЙ СТОРОНЕ</span>
            <span className="text-gold/20 text-4xl mx-8">✦ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</span>
            <span className="text-gold/20 text-4xl mx-8">✦ ПРЕМИУМ СОБЫТИЯ</span>
            <span className="text-gold/20 text-4xl mx-8">✦ БЕЗУПРЕЧНЫЙ СЕРВИС</span>
            <span className="text-gold/20 text-4xl mx-8">✦ ВСЕГДА НА ВАШЕЙ СТОРОНЕ</span>
            <span className="text-gold/20 text-4xl mx-8">✦ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</span>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="text-8xl mb-6">👑</div>
              <h3 className="text-5xl font-bold mb-6 text-gold">Марина Малиночка</h3>
              <p className="text-lg text-champagne mb-4 leading-relaxed">
                С 2026 года я реализую себя как независимый организатор премиум-событий. 
                До этого многие годы работала на крупные агентства, набираясь опыта и создавая 
                безупречные мероприятия.
              </p>
              <p className="text-lg text-champagne mb-6 leading-relaxed">
                Теперь моя миссия — быть всегда на стороне клиента. Я беру на себя сложную 
                рутинную работу, координирую процессы или полностью организую событие с нуля.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border border-gold/30 p-4 rounded-lg">
                  <Icon name="MapPin" size={32} className="text-gold mb-2" />
                  <p className="text-sm text-muted-foreground">География</p>
                  <p className="font-semibold">Вся Россия</p>
                </div>
                <div className="border border-gold/30 p-4 rounded-lg">
                  <Icon name="Users" size={32} className="text-gold mb-2" />
                  <p className="text-sm text-muted-foreground">Опыт</p>
                  <p className="font-semibold">100+ событий</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <Card className="bg-card border-gold/20 hover:border-gold/50 transition-all">
                <CardContent className="p-6">
                  <Icon name="Sparkles" size={40} className="text-gold mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Уникальность</h4>
                  <p className="text-muted-foreground">
                    Я не работаю по шаблонам. Каждое событие — это уникальная история, 
                    созданная специально для вас.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-gold/20 hover:border-gold/50 transition-all">
                <CardContent className="p-6">
                  <Icon name="Shield" size={40} className="text-gold mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Ваш адвокат</h4>
                  <p className="text-muted-foreground">
                    Всегда на вашей стороне в переговорах с подрядчиками. Защищаю ваши 
                    интересы и бюджет.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-gold/20 hover:border-gold/50 transition-all">
                <CardContent className="p-6">
                  <Icon name="Settings" size={40} className="text-gold mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Гибкость</h4>
                  <p className="text-muted-foreground">
                    Подключаюсь на любом этапе — от идеи до дня события. Беру столько 
                    задач, сколько вам нужно.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl font-bold mb-4 text-gold">Портфолио</h3>
            <p className="text-xl text-champagne">Истории, которые мы создали вместе</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((caseItem, index) => (
              <Card 
                key={index} 
                className="bg-card border-gold/20 hover:border-gold hover:scale-105 transition-all cursor-pointer group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-muted flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                    {caseItem.image}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                      {caseItem.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {caseItem.description}
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Icon name="MapPin" size={16} className="text-gold" />
                        {caseItem.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={16} className="text-gold" />
                        {caseItem.guests}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl font-bold mb-4 text-gold">Отзывы</h3>
            <p className="text-xl text-champagne">Что говорят мои клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-card border-gold/20 hover:border-gold transition-all animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gold/20 pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-5xl font-bold mb-4 text-gold">Начнём диалог</h3>
            <p className="text-xl text-champagne">
              Заполните форму, и я свяжусь с вами в течение 24 часов
            </p>
          </div>
          
          <Card className="bg-card border-gold/20 animate-slide-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background border-gold/30 focus:border-gold"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background border-gold/30 focus:border-gold"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-background border-gold/30 focus:border-gold"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Дата события (ориентировочно)</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-gold/30 hover:border-gold"
                      >
                        <Icon name="Calendar" size={16} className="mr-2" />
                        {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-gold/30">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        locale={ru}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о событии</label>
                  <Textarea 
                    placeholder="Какое событие планируете? Сколько гостей? Какая помощь нужна?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background border-gold/30 focus:border-gold min-h-32"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gold text-black hover:bg-gold/90 text-lg">
                  Отправить запрос
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-gold/20 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold text-gold mb-4">Marico Events</h4>
              <p className="text-muted-foreground">
                Премиум организация событий по всей России
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-gold" />
                  hello@marico-event.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-gold" />
                  +7 (___) ___-__-__
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">География работы</h5>
              <p className="text-sm text-muted-foreground">
                Москва • Санкт-Петербург • Сочи • Крым • По всей России
              </p>
            </div>
          </div>
          
          <div className="border-t border-gold/20 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Marico Events. Марина Малиночка — Организация премиум-событий</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
