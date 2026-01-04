import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingIcons from '@/components/FloatingIcons';
import CursorTrail from '@/components/CursorTrail';
import ScrollProgress from '@/components/ScrollProgress';
import NotificationToast from '@/components/NotificationToast';
import ParallaxSection from '@/components/ParallaxSection';
import PhilosophySection from '@/components/PhilosophySection';
import InteractiveMap from '@/components/InteractiveMap';
import AIGenerator from '@/components/AIGenerator';
import ChecklistPopup from '@/components/ChecklistPopup';
import PortfolioSlider from '@/components/PortfolioSlider';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
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



  const services = [
    {
      icon: 'Sparkles',
      title: 'Полная организация',
      description: 'От первой идеи до последнего гостя — я беру всё на себя. Вы просто наслаждаетесь событием.'
    },
    {
      icon: 'Users',
      title: 'Частичная координация',
      description: 'Уже начали подготовку? Подключусь на любом этапе и доведу до идеала.'
    },
    {
      icon: 'Shield',
      title: 'Управление подрядчиками',
      description: 'Веду переговоры, защищаю ваш бюджет, контролирую качество работы каждого.'
    },
    {
      icon: 'MapPin',
      title: 'Работа в любом городе',
      description: 'Москва, Питер, Сочи, Крым — у меня есть проверенные контакты везде.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }
    console.log('Form submitted:', { ...formData, date });
  };

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden relative">
      <AnimatedBackground />
      <FloatingIcons />
      <CursorTrail />
      <ScrollProgress />
      <NotificationToast />
      <ChecklistPopup />
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-champagne rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">М</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gold tracking-wide">Марина Малиночка</h1>
            </div>
          </Link>
          <div className="hidden lg:flex gap-10 items-center">
            <a href="#about" className="text-sm tracking-wide hover:text-gold transition-all relative group">
              Обо мне
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-sm tracking-wide hover:text-gold transition-all relative group">
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#how" className="text-sm tracking-wide hover:text-gold transition-all relative group">
              Как работаю
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact">
              <Button className="bg-gold text-black hover:bg-champagne transition-all tracking-wide px-6">
                Контакты
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-champagne/5 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[100px] animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-in">
              <div className="inline-block">
                <div className="px-5 py-2 border border-gold/30 rounded-full shimmer-effect animate-glow-pulse">
                  <p className="text-xs tracking-[0.3em] text-champagne uppercase">Работаю с 2026 года</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-6xl lg:text-7xl font-light leading-[1.1] text-champagne mb-6">
                  <span className="relative inline-block">
                    Ваше событие
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-gold via-champagne to-transparent"></span>
                  </span>
                  <br />
                  <span className="text-gold font-normal relative inline-block">
                    Ваши условия
                    <span className="absolute inset-0 blur-2xl bg-gold/20"></span>
                  </span>
                </h2>
                
                <p className="text-xl text-champagne/80 max-w-xl leading-relaxed">
                  Частный организатор мероприятий с 2026 года<br/>
                  <span className="text-gold">Всегда на вашей стороне</span>
                </p>
              </div>
              
              <div className="flex gap-4">
                <a href="#contact">
                  <Button size="lg" className="bg-gold text-black hover:bg-champagne text-base px-8 h-14">
                    Обсудить мероприятие
                  </Button>
                </a>
                <a href="#about">
                  <Button size="lg" variant="outline" className="border-gold/30 text-champagne hover:bg-gold/5 text-base px-8 h-14">
                    Обо мне
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gold/10">
                <div>
                  <p className="text-4xl font-light text-gold mb-2">15+</p>
                  <p className="text-sm text-champagne/60">Реализованных событий</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-gold mb-2">7</p>
                  <p className="text-sm text-champagne/60">Городов России</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-gold mb-2">100%</p>
                  <p className="text-sm text-champagne/60">Довольных клиентов</p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up hidden lg:block">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-8 bg-gradient-to-r from-gold/30 via-champagne/20 to-gold/30 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent rounded-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/files/IMG_5780.PNG"
                  alt="Марина Малиночка"
                  className="relative rounded-3xl w-full h-[650px] object-cover shadow-2xl border-2 border-gold/20"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-champagne/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-6 border-t border-gold/10">
          <div className="flex animate-marquee">
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ПРЕМИУМ СОБЫТИЯ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ВСЕГДА НА ВАШЕЙ СТОРОНЕ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ЗАЩИТА ВАШИХ ИНТЕРЕСОВ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ПРЕМИУМ СОБЫТИЯ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ВСЕГДА НА ВАШЕЙ СТОРОНЕ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ЗАЩИТА ВАШИХ ИНТЕРЕСОВ</span>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in max-w-4xl mx-auto">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Почему я?</p>
            <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-8">
              Марина Малиночка
            </h3>
            <div className="text-left space-y-6 text-champagne/80 text-lg leading-relaxed">
              <p>
                Я открыла свой проект в 2026 году как частный специалист по организации мероприятий. Моя миссия — создавать события, которые идеально соответствуют вашим желаниям и возможностям.
              </p>
              <p>
                Моя главная особенность: <span className="text-gold font-normal">я всегда на стороне клиента</span>. Я не навязываю партнеров и подрядчиков, а подбираю под ваш запрос и бюджет именно то, что нужно именно вам.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h4 className="text-3xl font-light text-champagne mb-8 text-center">Гибкий подход</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Полная организация с нуля', icon: 'Sparkles' },
                { title: 'Помощь на определенном этапе', icon: 'Target' },
                { title: 'Координация в день события', icon: 'CalendarCheck' },
                { title: 'Консультация и подбор подрядчиков', icon: 'Users' }
              ].map((item, index) => (
                <div key={index} className="neumorphic p-6 rounded-2xl text-center hover:transform hover:scale-105 transition-all">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon name={item.icon} size={24} className="text-gold" />
                  </div>
                  <p className="text-champagne">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-600/20 border-2 border-purple-500/40 rounded-3xl p-12 mb-20">
            <h4 className="text-3xl font-light text-champagne mb-6 text-center">
              Собственная база проверенных партнёров
            </h4>
            <p className="text-xl text-champagne/90 max-w-4xl mx-auto leading-relaxed text-center">
              За время работы я собрала личную базу надежных подрядчиков из открытых источников. 
              Это не реклама — это моя кураторская подборка лучших специалистов. 
              <span className="text-gold font-normal block mt-4">После подписания договора вы получите полный доступ к этой базе.</span>
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-light text-champagne mb-6">География работы</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Москва', 'Санкт-Петербург', 'Сочи', 'Крым', 'Ваш город'].map((city, index) => (
                <span key={index} className="px-6 py-3 bg-gold/10 border border-gold/30 rounded-full text-champagne">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Что я организую</p>
            <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
              Любые форматы <span className="text-gold">событий</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'Cake', title: 'Дни рождения', description: 'Камерные и масштабные празднования любой сложности' },
              { icon: 'Heart', title: 'Свадьбы', description: 'Организация вашего особенного дня от А до Я' },
              { icon: 'Briefcase', title: 'Корпоративы', description: 'Деловые и неформальные мероприятия для компаний' },
              { icon: 'PartyPopper', title: 'Частные события', description: 'Юбилеи, детские праздники, семейные торжества' },
              { icon: 'Sparkle', title: 'Камерные встречи', description: 'Элегантные мероприятия в узком кругу' },
              { icon: 'Lightbulb', title: 'Нестандартные форматы', description: 'Воплощаем самые смелые идеи' }
            ].map((service, index) => (
              <div 
                key={index}
                className="holographic-card neumorphic p-8 rounded-2xl hover:transform hover:scale-105 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={28} className="text-gold" />
                </div>
                <h4 className="text-xl font-normal mb-3 text-champagne">{service.title}</h4>
                <p className="text-sm text-champagne/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Как мы работаем</p>
            <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
              Простой и понятный <span className="text-gold">процесс</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Знакомство',
                description: 'Обсуждаем ваши пожелания, бюджет и видение мероприятия'
              },
              {
                step: '02',
                title: 'Подбор решений',
                description: 'Формирую предложения из моей базы под ваши задачи'
              },
              {
                step: '03',
                title: 'Договор',
                description: 'Подписываем договор, вы получаете доступ к базе партнеров'
              },
              {
                step: '04',
                title: 'Реализация',
                description: 'Беру на себя все вопросы по организации и координации'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative neumorphic p-10 rounded-2xl animate-fade-in hover:transform hover:scale-105 transition-all"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-8xl font-light text-gold/10 absolute top-4 right-6">{item.step}</div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-6 text-black font-bold text-xl">
                    {item.step}
                  </div>
                  <h4 className="text-2xl font-normal mb-4 text-champagne">{item.title}</h4>
                  <p className="text-champagne/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSlider />

      <section id="testimonials" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Отзывы</p>
            <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
              Что говорят <span className="text-gold">клиенты</span>
            </h3>
            <p className="text-xl text-champagne/70">
              Доверие — главная валюта в моей работе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-muted/30 border border-gold/20 rounded-2xl animate-fade-in hover:border-gold/40 transition-all"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-champagne/80 mb-8 italic leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gold/20 pt-6">
                  <p className="font-normal text-champagne text-lg">{testimonial.name}</p>
                  <p className="text-sm text-champagne/50 mt-1">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhilosophySection />

      <InteractiveMap />

      <AIGenerator />

      <section id="contact" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Контакты</p>
            <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
              Обсудим ваше <span className="text-gold">мероприятие?</span>
            </h3>
          </div>

          <div className="p-10 lg:p-12 bg-muted/30 border border-gold/20 rounded-3xl animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-light mb-3 text-champagne">Ваше имя</label>
                <Input 
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-3 text-champagne">Телефон или Telegram</label>
                <Input 
                  type="text"
                  placeholder="+7 (___) ___-__-__ или @telegram"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-3 text-champagne">Тип мероприятия</label>
                <Input 
                  type="text"
                  placeholder="Например: день рождения, свадьба"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-3 text-champagne">Желаемая дата мероприятия</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-light border-gold/30 hover:border-gold bg-black/50 text-champagne h-12"
                    >
                      <Icon name="Calendar" size={16} className="mr-2" />
                      {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-muted border-gold/30">
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
                <label className="block text-sm font-light mb-3 text-champagne">Расскажите о ваших пожеланиях</label>
                <Textarea 
                  placeholder="Опишите ваше видение мероприятия, количество гостей, бюджет, особые пожелания..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-black/50 border-gold/30 focus:border-gold text-champagne min-h-40"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="contact-terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  className="mt-1 border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                />
                <label htmlFor="contact-terms" className="text-xs text-champagne/70 leading-relaxed cursor-pointer">
                  Я согласен на обработку персональных данных и принимаю{' '}
                  <a href="/privacy" className="text-gold hover:underline">
                    политику конфиденциальности
                  </a>
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gold text-black hover:bg-champagne text-base h-14 tracking-wide font-medium"
                disabled={!agreedToTerms}
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gold/10 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-champagne rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xl">М</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gold">Марина Малиночка</h4>
                </div>
              </div>
              <p className="text-champagne/60 leading-relaxed max-w-md">
                Частный организатор мероприятий с 2026 года. Всегда на вашей стороне.
              </p>
            </div>

            <div>
              <h5 className="text-champagne font-normal mb-4 tracking-wide">Контакты</h5>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2 text-champagne/60">
                  <Icon name="Mail" size={14} className="text-gold" />
                  hello@marico-event.ru
                </p>
                <p className="flex items-center gap-2 text-champagne/60">
                  <Icon name="Phone" size={14} className="text-gold" />
                  +7 (___) ___-__-__
                </p>
              </div>
            </div>

            <div>
              <h5 className="text-champagne font-normal mb-4 tracking-wide">География</h5>
              <p className="text-sm text-champagne/60 leading-relaxed">
                Москва<br />
                Санкт-Петербург<br />
                Сочи<br />
                Крым<br />
                Вся Россия
              </p>
            </div>
          </div>

          <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-champagne/40">
              © 2026 Марина Малиночка. Частный организатор мероприятий
            </p>
            <p className="text-xs text-champagne/30">
              Москва • Санкт-Петербург • Сочи • Крым
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-champagne/40 hover:text-gold transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-champagne/40 hover:text-gold transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;