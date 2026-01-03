import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
      id: 'sochi-wedding',
      title: 'Свадьба на берегу моря',
      location: 'Сочи',
      guests: 120,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg',
      description: 'Роскошная церемония с панорамным видом на закат'
    },
    {
      id: 'moscow-corporate',
      title: 'Корпоратив премиум-класса',
      location: 'Москва',
      guests: 250,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
      description: 'Стильное мероприятие в центре столицы'
    },
    {
      id: 'spb-anniversary',
      title: 'Юбилей в усадьбе',
      location: 'Санкт-Петербург',
      guests: 80,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg',
      description: 'Камерное торжество в исторической локации'
    },
    {
      id: 'crimea-mountain',
      title: 'Свадьба в горах',
      location: 'Крым',
      guests: 60,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg',
      description: 'Уникальная выездная церемония на высоте'
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
    console.log('Form submitted:', { ...formData, date });
  };

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-champagne rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">М</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gold tracking-wide">Marico Events</h1>
              <p className="text-[10px] text-champagne/60 tracking-widest uppercase">Марина Малиночка</p>
            </div>
          </Link>
          <div className="hidden lg:flex gap-10 items-center">
            <a href="#services" className="text-sm tracking-wide hover:text-gold transition-all relative group">
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#how" className="text-sm tracking-wide hover:text-gold transition-all relative group">
              Как работаю
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#cases" className="text-sm tracking-wide hover:text-gold transition-all relative group">
              Портфолио
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact">
              <Button className="bg-gold text-black hover:bg-champagne transition-all tracking-wide px-6">
                Обсудить проект
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
                  <p className="text-xs tracking-[0.3em] text-champagne uppercase">С 2026 года — мой бренд</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-6xl lg:text-7xl font-light leading-[1.1] text-champagne mb-6">
                  <span className="relative inline-block">
                    Ваше событие —
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-gold via-champagne to-transparent"></span>
                  </span>
                  <br />
                  <span className="text-gold font-normal relative inline-block">
                    Моя ответственность
                    <span className="absolute inset-0 blur-2xl bg-gold/20"></span>
                  </span>
                </h2>
                
                <p className="text-xl text-champagne/80 max-w-xl leading-relaxed">
                  Организую премиум-события <span className="text-gold">от идеи до реализации</span>. 
                  Всегда на вашей стороне — защищаю интересы, контролирую бюджет, создаю безупречные мероприятия.
                </p>
              </div>
              
              <div className="flex gap-4">
                <a href="#contact">
                  <Button size="lg" className="bg-gold text-black hover:bg-champagne text-base px-8 h-14">
                    Начать диалог
                  </Button>
                </a>
                <a href="#services">
                  <Button size="lg" variant="outline" className="border-gold/30 text-champagne hover:bg-gold/5 text-base px-8 h-14">
                    Мои услуги
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

      <section id="services" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Для кого я работаю</p>
            <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
              Для тех, кто <span className="text-gold">ценит время</span> и <span className="text-gold">качество</span>
            </h3>
            <p className="text-xl text-champagne/70">
              Вы хотите безупречное событие, но не хотите погружаться в рутину? Я — ваше решение.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 bg-muted/30 border border-gold/20 rounded-2xl hover:border-gold/50 transition-all animate-fade-in hover:transform hover:scale-105"
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

          <div className="bg-gradient-to-r from-gold/10 via-champagne/5 to-gold/10 border border-gold/30 rounded-3xl p-12 text-center">
            <h4 className="text-3xl font-light text-champagne mb-4">
              Почему выбирают меня?
            </h4>
            <p className="text-xl text-champagne/80 max-w-3xl mx-auto leading-relaxed">
              Я не просто организатор — я <span className="text-gold font-normal">ваш адвокат</span> в мире event-индустрии. 
              Защищаю ваш бюджет в переговорах, контролирую каждого подрядчика, решаю проблемы до того, 
              как вы о них узнаете. Вы получаете не стресс, а <span className="text-gold font-normal">удовольствие от процесса</span>.
            </p>
          </div>
        </div>
      </section>

      <section id="how" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Как я работаю</p>
            <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
              Прозрачный <span className="text-gold">процесс</span> от А до Я
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Знакомство и концепция',
                description: 'Созваниваемся, обсуждаем ваше событие, бюджет и ожидания. Я предлагаю идеи и формирую концепцию.'
              },
              {
                step: '02',
                title: 'Подбор и контроль',
                description: 'Нахожу лучшие локации и подрядчиков. Веду переговоры, защищаю ваш бюджет, заключаю договоры.'
              },
              {
                step: '03',
                title: 'Реализация мечты',
                description: 'Координирую всех в день Х, решаю форс-мажоры. Вы наслаждаетесь событием, я контролирую процесс.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative p-10 bg-muted/30 border border-gold/20 rounded-2xl animate-fade-in"
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

      <section id="cases" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Портфолио</p>
            <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
              Истории <span className="text-gold">успешных</span> событий
            </h3>
            <p className="text-xl text-champagne/70">
              Каждый проект — это уникальная история с вызовами и триумфом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <Link 
                to={`/case/${caseItem.id}`}
                key={index}
                className="group cursor-pointer animate-fade-in block"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-all"></div>
                  <img 
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-gold">
                        <Icon name="MapPin" size={14} />
                        {caseItem.location}
                      </span>
                      <span className="flex items-center gap-1 text-champagne/70">
                        <Icon name="Users" size={14} />
                        {caseItem.guests} гостей
                      </span>
                    </div>
                    <h4 className="text-3xl font-light text-champagne mb-3 group-hover:text-gold transition-colors flex items-center gap-3">
                      {caseItem.title}
                      <Icon name="ArrowRight" size={24} className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2" />
                    </h4>
                    <p className="text-champagne/70">
                      {caseItem.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contact" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Контакты</p>
            <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
              Давайте <span className="text-gold">обсудим</span> ваше событие
            </h3>
            <p className="text-xl text-champagne/70">
              Заполните форму — я свяжусь с вами в течение 24 часов
            </p>
          </div>

          <div className="p-10 lg:p-12 bg-muted/30 border border-gold/20 rounded-3xl animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light mb-3 text-champagne">Ваше имя *</label>
                  <Input 
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-light mb-3 text-champagne">Email *</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light mb-3 text-champagne">Телефон *</label>
                <Input 
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-3 text-champagne">Дата события (ориентировочно)</label>
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
                <label className="block text-sm font-light mb-3 text-champagne">Расскажите о событии *</label>
                <Textarea 
                  placeholder="Какое событие планируете? Сколько гостей? Какая помощь нужна?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-black/50 border-gold/30 focus:border-gold text-champagne min-h-32"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gold text-black hover:bg-champagne text-base h-14 tracking-wide font-medium"
              >
                Отправить запрос
              </Button>
              
              <p className="text-xs text-center text-champagne/50">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
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
                  <h4 className="text-xl font-bold text-gold">Marico Events</h4>
                  <p className="text-[10px] text-champagne/60 tracking-widest uppercase">Марина Малиночка</p>
                </div>
              </div>
              <p className="text-champagne/60 leading-relaxed max-w-md">
                Премиум-организация событий по всей России. Всегда на вашей стороне — от идеи до реализации.
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
              © 2026 Marico Events. Марина Малиночка — Организация премиум-событий
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