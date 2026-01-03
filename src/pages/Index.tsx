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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, date });
  };

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gold/10">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-champagne rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">М</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gold tracking-wide">Marico Events</h1>
              <p className="text-[10px] text-champagne/60 tracking-widest uppercase">Марина Малиночка</p>
            </div>
          </div>
          <div className="hidden lg:flex gap-12 items-center">
            <a href="#about" className="text-sm tracking-wide hover:text-gold transition-all relative group">
              О Марине
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#cases" className="text-sm tracking-wide hover:text-gold transition-all relative group">
              Портфолио
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-sm tracking-wide hover:text-gold transition-all relative group">
              Отзывы
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact">
              <Button className="bg-gold text-black hover:bg-champagne transition-all tracking-wide">
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
        
        <div className="max-w-[1400px] mx-auto px-8 relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <div className="px-4 py-2 border border-gold/30 rounded-full mb-6 shimmer-effect animate-glow-pulse">
                  <p className="text-xs tracking-[0.3em] text-champagne uppercase">С 2026 года</p>
                </div>
              </div>
              
              <h2 className="text-7xl lg:text-8xl font-light leading-[0.95] text-champagne relative">
                <span className="relative inline-block">
                  Ваше событие.
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-gold via-champagne to-transparent"></span>
                </span>
                <br />
                <span className="text-gold font-normal relative inline-block">
                  Моя
                  <span className="absolute inset-0 blur-xl bg-gold/20"></span>
                </span>
                <br />
                <span className="text-gold font-normal relative inline-block">
                  ответственность
                  <span className="absolute inset-0 blur-xl bg-gold/20"></span>
                </span>
              </h2>
              
              <p className="text-xl text-champagne/70 max-w-xl leading-relaxed font-light">
                Премиум-организация событий любого масштаба.<br />
                От Москвы до Крыма. Всегда на вашей стороне.
              </p>
              
              <div className="flex gap-4 pt-4">
                <a href="#contact">
                  <Button size="lg" className="bg-gold text-black hover:bg-champagne text-base px-8 tracking-wide">
                    Начать диалог
                  </Button>
                </a>
                <a href="#cases">
                  <Button size="lg" variant="outline" className="border-gold/30 text-champagne hover:bg-gold/5 text-base px-8 tracking-wide">
                    Портфолио
                  </Button>
                </a>
              </div>

              <div className="flex gap-12 pt-8 border-t border-gold/10">
                <div>
                  <p className="text-4xl font-light text-gold mb-1">15+</p>
                  <p className="text-sm text-champagne/60 tracking-wide">Событий</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-gold mb-1">7</p>
                  <p className="text-sm text-champagne/60 tracking-wide">Городов</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-gold mb-1">2026</p>
                  <p className="text-sm text-champagne/60 tracking-wide">Старт бренда</p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up hidden lg:block">
              <div className="relative">
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
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ БЕЗУПРЕЧНЫЙ СЕРВИС</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ВСЕГДА НА ВАШЕЙ СТОРОНЕ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ПРЕМИУМ СОБЫТИЯ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ БЕЗУПРЕЧНЫЙ СЕРВИС</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ВСЕГДА НА ВАШЕЙ СТОРОНЕ</span>
            <span className="text-gold/20 text-2xl mx-12 whitespace-nowrap">✦ ОТ ИДЕИ ДО РЕАЛИЗАЦИИ</span>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-8 bg-gradient-to-b from-black to-muted/20">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 animate-fade-in">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Обо мне</p>
            <h3 className="text-6xl font-light text-champagne mb-6">
              Марина <span className="text-gold">Малиночка</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-lg text-champagne/80 leading-relaxed font-light">
              <p>
                С 2026 года я реализую себя как независимый организатор премиум-событий. 
                До этого многие годы работала на крупные агентства, набираясь опыта и создавая 
                безупречные мероприятия для самых требовательных клиентов.
              </p>
              <p>
                Теперь моя миссия — <span className="text-gold">быть всегда на стороне клиента</span>. 
                Я беру на себя сложную рутинную работу, координирую процессы или полностью 
                организую событие с нуля. Подключаюсь на любом этапе — от идеи до финальной реализации.
              </p>
              <p>
                География моей работы простирается от Москвы и Санкт-Петербурга до Крыма и Сочи. 
                Я знаю лучшие локации, проверенных подрядчиков и все тонкости организации 
                мероприятий любого масштаба.
              </p>
            </div>

            <div className="space-y-6 flex flex-col">
              <div className="p-6 bg-muted/30 border border-gold/20 rounded-xl">
                <Icon name="Sparkles" size={28} className="text-gold mb-3" />
                <h4 className="text-xl font-normal mb-2 text-champagne">Уникальность</h4>
                <p className="text-sm text-champagne/70 leading-relaxed">
                  Каждое событие — уникальная история, созданная специально для вас
                </p>
              </div>

              <div className="p-6 bg-muted/30 border border-gold/20 rounded-xl">
                <Icon name="Shield" size={28} className="text-gold mb-3" />
                <h4 className="text-xl font-normal mb-2 text-champagne">Ваш адвокат</h4>
                <p className="text-sm text-champagne/70 leading-relaxed">
                  Защищаю ваши интересы в переговорах с подрядчиками
                </p>
              </div>

              <div className="p-6 bg-muted/30 border border-gold/20 rounded-xl">
                <Icon name="Settings" size={28} className="text-gold mb-3" />
                <h4 className="text-xl font-normal mb-2 text-champagne">Гибкость</h4>
                <p className="text-sm text-champagne/70 leading-relaxed">
                  Подключаюсь на любом этапе вашего события
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 text-center animate-fade-in">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Портфолио</p>
            <h3 className="text-6xl font-light text-champagne mb-4">
              Истории событий
            </h3>
            <p className="text-xl text-champagne/60">Каждое мероприятие — это уникальный опыт</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <Link 
                to={`/case/${caseItem.id}`}
                key={index}
                className="group cursor-pointer animate-fade-in block"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <span className="flex items-center gap-1 text-gold">
                        <Icon name="MapPin" size={14} />
                        {caseItem.location}
                      </span>
                      <span className="flex items-center gap-1 text-champagne/70">
                        <Icon name="Users" size={14} />
                        {caseItem.guests} гостей
                      </span>
                    </div>
                    <h4 className="text-3xl font-light text-champagne mb-2 group-hover:text-gold transition-colors flex items-center gap-2">
                      {caseItem.title}
                      <Icon name="ArrowRight" size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-champagne/70 text-sm">
                      {caseItem.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 px-8 bg-gradient-to-b from-black to-muted/20">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 text-center animate-fade-in">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Отзывы</p>
            <h3 className="text-6xl font-light text-champagne mb-4">
              Что говорят клиенты
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-muted/30 border border-gold/20 rounded-2xl animate-slide-up hover:border-gold/40 transition-all"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-gold fill-gold" />
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

      <section id="contact" className="py-32 px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Контакты</p>
            <h3 className="text-6xl font-light text-champagne mb-4">
              Начнём диалог
            </h3>
            <p className="text-xl text-champagne/60">
              Заполните форму — я свяжусь с вами в течение 24 часов
            </p>
          </div>

          <div className="p-10 bg-muted/30 border border-gold/20 rounded-2xl animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light mb-3 text-champagne tracking-wide">Ваше имя</label>
                  <Input 
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-black/50 border-gold/30 focus:border-gold text-champagne h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-light mb-3 text-champagne tracking-wide">Email</label>
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
                <label className="block text-sm font-light mb-3 text-champagne tracking-wide">Телефон</label>
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
                <label className="block text-sm font-light mb-3 text-champagne tracking-wide">Дата события (ориентировочно)</label>
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
                <label className="block text-sm font-light mb-3 text-champagne tracking-wide">Расскажите о событии</label>
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
                className="w-full bg-gold text-black hover:bg-champagne text-base h-14 tracking-wide"
              >
                Отправить запрос
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gold/10 py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-champagne rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xl">М</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gold tracking-wide">Marico Events</h4>
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
                По всей России
              </p>
            </div>
          </div>

          <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-champagne/40">
              © 2026 Marico Events. Марина Малиночка
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-champagne/40 hover:text-gold transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="text-champagne/40 hover:text-gold transition-colors">
                <Icon name="Facebook" size={18} />
              </a>
              <a href="#" className="text-champagne/40 hover:text-gold transition-colors">
                <Icon name="Send" size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;