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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/e3a1434e-5331-47aa-854a-b2bf47e0287f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          eventType: formData.email,
          eventDate: date ? format(date, 'dd.MM.yyyy') : 'Не указана',
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setDate(undefined);
        setAgreedToTerms(false);
      } else {
        alert('❌ Произошла ошибка при отправке. Пожалуйста, попробуйте позже или напишите напрямую.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ Произошла ошибка при отправке. Пожалуйста, попробуйте позже или напишите напрямую.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden relative">
      <AnimatedBackground />
      <FloatingIcons />
      <CursorTrail />
      <ScrollProgress />
      <NotificationToast />
      <ChecklistPopup />
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-gold to-champagne rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg lg:text-xl">М</span>
            </div>
            <div>
              <h1 className="text-base lg:text-xl font-bold text-gold tracking-wide">Марина Малиночка</h1>
            </div>
          </Link>
          
          {/* Desktop menu */}
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

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gold"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-gold/10 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-champagne hover:text-gold transition-colors border-b border-gold/10"
              >
                Обо мне
              </a>
              <a 
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-champagne hover:text-gold transition-colors border-b border-gold/10"
              >
                Услуги
              </a>
              <a 
                href="#how"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-champagne hover:text-gold transition-colors border-b border-gold/10"
              >
                Как работаю
              </a>
              <a 
                href="#cases"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-champagne hover:text-gold transition-colors border-b border-gold/10"
              >
                Портфолио
              </a>
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-gold text-black hover:bg-champagne mt-2">
                  Контакты
                </Button>
              </a>
            </div>
          </div>
        )}
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
                  <p className="text-xs tracking-[0.3em] text-champagne uppercase">Индивидуальный подход</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-light leading-[1.1] text-champagne mb-6">
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
                
                <p className="text-base md:text-lg lg:text-xl text-champagne/80 max-w-xl leading-relaxed">
                  Частный организатор мероприятий<br/>
                  <span className="text-gold">Всегда на вашей стороне</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
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

              <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 border-t border-gold/10">
                <div>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gold mb-2">15+</p>
                  <p className="text-xs md:text-sm text-champagne/60">Реализованных событий</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gold mb-2">7</p>
                  <p className="text-xs md:text-sm text-champagne/60">Городов России</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gold mb-2">100%</p>
                  <p className="text-xs md:text-sm text-champagne/60">Довольных клиентов</p>
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

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 lg:py-6 border-t border-gold/10">
          <div className="flex animate-marquee">
            <span className="text-gold/20 text-sm md:text-lg lg:text-2xl mx-6 md:mx-12 whitespace-nowrap">✦ ПРЕМИУМ СОБЫТИЯ</span>
            <span className="text-gold/20 text-sm md:text-lg lg:text-2xl mx-6 md:mx-12 whitespace-nowrap">✦ ВСЕГДА НА ВАШЕЙ СТОРОНЕ</span>
            <span className="text-gold/20 text-sm md:text-lg lg:text-2xl mx-6 md:mx-12 whitespace-nowrap">✦ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</span>
            <span className="text-gold/20 text-sm md:text-lg lg:text-2xl mx-6 md:mx-12 whitespace-nowrap">✦ ЗАЩИТА ВАШИХ ИНТЕРЕСОВ</span>
            <span className="text-gold/20 text-sm md:text-lg lg:text-2xl mx-6 md:mx-12 whitespace-nowrap">✦ ПРЕМИУМ СОБЫТИЯ</span>
            <span className="text-gold/20 text-sm md:text-lg lg:text-2xl mx-6 md:mx-12 whitespace-nowrap">✦ ВСЕГДА НА ВАШЕЙ СТОРОНЕ</span>
            <span className="text-gold/20 text-sm md:text-lg lg:text-2xl mx-6 md:mx-12 whitespace-nowrap">✦ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</span>
            <span className="text-gold/20 text-sm md:text-lg lg:text-2xl mx-6 md:mx-12 whitespace-nowrap">✦ ЗАЩИТА ВАШИХ ИНТЕРЕСОВ</span>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in max-w-4xl mx-auto">
            <p className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Почему я?</p>
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-light text-champagne mb-6 md:mb-8">
              Марина Малиночка
            </h3>
            <div className="text-left space-y-4 md:space-y-6 text-champagne/80 text-sm md:text-base lg:text-lg leading-relaxed">
              <p>
                Частный специалист по организации мероприятий. Моя миссия — создавать события, которые идеально соответствуют вашим желаниям и возможностям.
              </p>
              <p>
                Моя главная особенность: <span className="text-gold font-normal">я всегда на стороне клиента</span>. Я не навязываю партнеров и подрядчиков, а подбираю под ваш запрос и бюджет именно то, что нужно именно вам.
              </p>
            </div>
          </div>

          <div className="mb-12 md:mb-20">
            <h4 className="text-2xl md:text-3xl font-light text-champagne mb-6 md:mb-8 text-center">Гибкий подход</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: 'Полная организация с нуля', icon: 'Sparkles' },
                { title: 'Помощь на определенном этапе', icon: 'Target' },
                { title: 'Координация в день события', icon: 'CalendarCheck' },
                { title: 'Консультация и подбор подрядчиков', icon: 'Users' }
              ].map((item, index) => (
                <div key={index} className="neumorphic p-4 md:p-6 rounded-2xl text-center hover:transform hover:scale-105 transition-all">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto">
                    <Icon name={item.icon} size={20} className="text-gold md:w-6 md:h-6" />
                  </div>
                  <p className="text-champagne text-sm md:text-base">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-600/20 border-2 border-purple-500/40 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-20">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-light text-champagne mb-4 md:mb-6 text-center">
              Собственная база проверенных партнёров
            </h4>
            <p className="text-sm md:text-base lg:text-xl text-champagne/90 max-w-4xl mx-auto leading-relaxed text-center">
              За время работы я собрала личную базу надежных подрядчиков из открытых источников. 
              Это не реклама — это моя кураторская подборка лучших специалистов. 
              <span className="text-gold font-normal block mt-4">После подписания договора вы получите полный доступ к этой базе.</span>
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl md:text-2xl font-light text-champagne mb-4 md:mb-6">География работы</h4>
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              {['Москва', 'Санкт-Петербург', 'Сочи', 'Крым', 'Ваш город'].map((city, index) => (
                <span key={index} className="px-4 md:px-6 py-2 md:py-3 bg-gold/10 border border-gold/30 rounded-full text-champagne text-sm md:text-base">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 animate-fade-in max-w-3xl mx-auto">
            <p className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Что я организую</p>
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-light text-champagne mb-6">
              Любые форматы <span className="text-gold">событий</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
                className="holographic-card neumorphic p-6 md:p-8 rounded-2xl hover:transform hover:scale-105 transition-all animate-fade-in"
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

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <p className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Уникальные возможности</p>
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-light text-champagne mb-6">
              Больше чем просто <span className="text-gold">организация</span>
            </h3>
            <p className="text-sm md:text-lg lg:text-xl text-champagne/70 max-w-3xl mx-auto">
              Создаю WOW-эффект с помощью современных технологий и креативных решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="holographic-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Globe" size={32} className="text-gold" />
              </div>
              <h4 className="text-xl md:text-2xl font-normal text-champagne mb-4">Персональный сайт-приглашение</h4>
              <p className="text-sm md:text-base text-champagne/70 leading-relaxed mb-4">
                Создам уникальный онлайн-сайт для вашего события: с таймером, картой проезда, RSVP-формой и галереей
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Адаптивный дизайн</span>
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Уникальный домен</span>
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Онлайн RSVP</span>
              </div>
            </div>

            <div className="holographic-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Sparkles" size={32} className="text-gold" />
              </div>
              <h4 className="text-xl md:text-2xl font-normal text-champagne mb-4">Интерактивные элементы</h4>
              <p className="text-sm md:text-base text-champagne/70 leading-relaxed mb-4">
                QR-коды для меню, онлайн-фотобудка с мгновенной отправкой, live-трансляция для удалённых гостей
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">QR-меню</span>
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Фотобудка</span>
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Live-стрим</span>
              </div>
            </div>

            <div className="holographic-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Palette" size={32} className="text-gold" />
              </div>
              <h4 className="text-xl md:text-2xl font-normal text-champagne mb-4">Кастомная айдентика</h4>
              <p className="text-sm md:text-base text-champagne/70 leading-relaxed mb-4">
                Разработаю уникальный стиль мероприятия: логотип, монограмму, фирменные цвета и полиграфию
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Логотип события</span>
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Монограмма</span>
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Брендбук</span>
              </div>
            </div>

            <div className="holographic-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Video" size={32} className="text-gold" />
              </div>
              <h4 className="text-xl md:text-2xl font-normal text-champagne mb-4">Видео-приглашения</h4>
              <p className="text-sm md:text-base text-champagne/70 leading-relaxed mb-4">
                Персональные видео-приглашения для VIP-гостей с анимацией и вашими пожеланиями
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Анимация</span>
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Персонализация</span>
              </div>
            </div>

            <div className="holographic-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="MessageSquare" size={32} className="text-gold" />
              </div>
              <h4 className="text-xl md:text-2xl font-normal text-champagne mb-4">Чат-бот для гостей</h4>
              <p className="text-sm md:text-base text-champagne/70 leading-relaxed mb-4">
                Telegram/WhatsApp бот с программой, ответами на вопросы и уведомлениями для гостей
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">24/7 поддержка</span>
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Push-уведомления</span>
              </div>
            </div>

            <div className="holographic-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-orange-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Gift" size={32} className="text-gold" />
              </div>
              <h4 className="text-xl md:text-2xl font-normal text-champagne mb-4">Цифровой wishlist</h4>
              <p className="text-sm md:text-base text-champagne/70 leading-relaxed mb-4">
                Онлайн список желаний с возможностью денежных подарков через безопасные сервисы
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Удобная оплата</span>
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold">Список желаний</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-gold/10 via-purple-600/10 to-gold/10 border-2 border-gold/30 rounded-2xl p-6 md:p-8">
              <p className="text-champagne/90 text-base md:text-lg mb-2">
                💡 <span className="text-gold font-medium">Все цифровые решения</span> создаются индивидуально под ваше событие
              </p>
              <p className="text-champagne/60 text-sm md:text-base">
                От простого сайта-приглашения до полноценной цифровой экосистемы мероприятия
              </p>
            </div>
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

            <div className="mt-8 pt-8 border-t border-gold/20">
              <p className="text-center text-champagne/60 text-sm mb-6">Или свяжитесь со мной напрямую:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a 
                  href="https://wa.me/79182858216" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-black/30 border border-gold/20 rounded-xl hover:border-gold/50 transition-all group"
                >
                  <Icon name="MessageCircle" size={24} className="text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-champagne/80">WhatsApp</span>
                </a>
                <a 
                  href="https://t.me/marico_event" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-black/30 border border-gold/20 rounded-xl hover:border-gold/50 transition-all group"
                >
                  <Icon name="Send" size={24} className="text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-champagne/80">Telegram</span>
                </a>
                <a 
                  href="tel:+79956323108" 
                  className="flex flex-col items-center gap-2 p-4 bg-black/30 border border-gold/20 rounded-xl hover:border-gold/50 transition-all group"
                >
                  <Icon name="Phone" size={24} className="text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-champagne/80">Позвонить</span>
                </a>
                <a 
                  href="mailto:marico.event@mail.ru" 
                  className="flex flex-col items-center gap-2 p-4 bg-black/30 border border-gold/20 rounded-xl hover:border-gold/50 transition-all group"
                >
                  <Icon name="Mail" size={24} className="text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-champagne/80">Email</span>
                </a>
              </div>
            </div>
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
                Частный организатор мероприятий. Всегда на вашей стороне.
              </p>
            </div>

            <div>
              <h5 className="text-champagne font-normal mb-4 tracking-wide">Контакты</h5>
              <div className="space-y-3 text-sm">
                <a href="mailto:marico.event@mail.ru" className="flex items-center gap-2 text-champagne/60 hover:text-gold transition-colors">
                  <Icon name="Mail" size={14} className="text-gold" />
                  marico.event@mail.ru
                </a>
                <a href="tel:+79956323108" className="flex items-center gap-2 text-champagne/60 hover:text-gold transition-colors">
                  <Icon name="Phone" size={14} className="text-gold" />
                  +7 (995) 632-31-08
                </a>
                <a href="https://wa.me/79182858216" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-champagne/60 hover:text-gold transition-colors">
                  <Icon name="MessageCircle" size={14} className="text-gold" />
                  WhatsApp
                </a>
                <a href="https://t.me/marico_event" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-champagne/60 hover:text-gold transition-colors">
                  <Icon name="Send" size={14} className="text-gold" />
                  Telegram
                </a>
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
              © 2025 Марина Малиночка. Частный организатор мероприятий
            </p>
            <p className="text-xs text-champagne/30">
              Москва • Санкт-Петербург • Сочи • Крым
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/malinochka_mari" target="_blank" rel="noopener noreferrer" className="text-champagne/40 hover:text-gold transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://t.me/marico_event" target="_blank" rel="noopener noreferrer" className="text-champagne/40 hover:text-gold transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://wa.me/79182858216" target="_blank" rel="noopener noreferrer" className="text-champagne/40 hover:text-gold transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;