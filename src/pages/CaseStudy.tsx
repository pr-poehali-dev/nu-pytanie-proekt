import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CaseData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  budget: string;
  guests: number;
  date: string;
  mainImage: string;
  images: string[];
  challenge: string;
  solution: string;
  testimonial: {
    text: string;
    author: string;
  };
  budgetBreakdown: {
    item: string;
    cost: string;
    details: string;
  }[];
  included: string[];
  timeline: {
    stage: string;
    duration: string;
    description: string;
  }[];
  team: string[];
}

const CaseStudy = () => {
  const { id } = useParams();

  const casesData: Record<string, CaseData> = {
    'wedding-luxury-moscow': {
      id: 'wedding-luxury-moscow',
      title: 'Свадьба в загородной усадьбе',
      subtitle: 'Классическое торжество',
      category: 'Свадьба',
      location: 'Московская область, загородный комплекс',
      budget: '980 000 ₽',
      guests: 70,
      date: 'Август 2024',
      mainImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c51fe9a0-63e0-405e-bf68-360de2267ed0.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c51fe9a0-63e0-405e-bf68-360de2267ed0.jpg'
      ],
      challenge: 'Пара хотела классическую свадьбу на природе с камерной атмосферой. Основные требования: элегантность без излишеств, качественный сервис, комфорт для гостей разного возраста.',
      solution: 'Выбрали уютную загородную площадку в 40 минутах от Москвы. Разработали концепцию в пастельных тонах с акцентом на живые цветы. Организовали трансфер для гостей, продумали программу с учётом интересов всех возрастов.',
      testimonial: {
        text: 'Марина помогла воплотить нашу мечту! Взяла на себя все переговоры с подрядчиками, контролировала каждый этап. В день свадьбы мы были спокойны и счастливы. Всё прошло идеально!',
        author: 'Молодожёны'
      },
      budgetBreakdown: [
        {
          item: 'Аренда площадки',
          cost: '180 000 ₽',
          details: 'Загородный комплекс на весь день: территория, банкетный зал, зона церемонии'
        },
        {
          item: 'Банкет (70 гостей)',
          cost: '350 000 ₽',
          details: '5 000 ₽/чел — меню из 5 блюд, welcome-зона, торт, напитки'
        },
        {
          item: 'Декор и флористика',
          cost: '140 000 ₽',
          details: 'Оформление зоны церемонии, банкетного зала, композиции на столы'
        },
        {
          item: 'Фотограф и видеограф',
          cost: '120 000 ₽',
          details: 'Съёмка полного дня, обработка 300+ фото, видеоклип 5 минут'
        },
        {
          item: 'Музыка и развлечения',
          cost: '100 000 ₽',
          details: 'Ведущий, живая музыка на церемонии, DJ на банкете'
        },
        {
          item: 'Организация и координация',
          cost: '60 000 ₽',
          details: 'Полное сопровождение, координация в день свадьбы'
        },
        {
          item: 'Дополнительно',
          cost: '30 000 ₽',
          details: 'Трансфер гостей, полиграфия, мелкий декор'
        }
      ],
      included: [
        'Подбор и бронирование площадки',
        'Разработка концепции оформления',
        'Поиск всех подрядчиков',
        'Согласование меню с кейтерингом',
        '🌐 Создание персонального сайта-приглашения с RSVP',
        '✨ QR-коды для гостевой навигации и меню',
        'Составление тайминга',
        'Координация подрядчиков',
        'Присутствие в день свадьбы (10 часов)',
        'Решение всех организационных вопросов'
      ],
      timeline: [
        {
          stage: 'Планирование',
          duration: '2 недели',
          description: 'Знакомство с парой, обсуждение желаний и бюджета, выбор площадки'
        },
        {
          stage: 'Бронирование',
          duration: '3 недели',
          description: 'Заключение договоров с площадкой и ключевыми подрядчиками'
        },
        {
          stage: 'Подготовка',
          duration: '2.5 месяца',
          description: 'Работа над деталями: декор, меню, программа, финальные согласования'
        },
        {
          stage: 'Реализация',
          duration: '1 день',
          description: 'Контроль всех процессов в день свадьбы'
        }
      ],
      team: [
        'Организатор: Марина Малиночка',
        'Площадка: загородный комплекс',
        'Кейтеринг: банкетная служба',
        'Декоратор: флористическая мастерская',
        'Фотограф',
        'Видеограф',
        'Ведущий мероприятия',
        'DJ',
        'Живые музыканты'
      ]
    },
    'corporate-tech': {
      id: 'corporate-tech',
      title: 'Корпоратив IT-компании',
      subtitle: 'Новогоднее мероприятие',
      category: 'Корпоратив',
      location: 'Москва, лофт-пространство',
      budget: '720 000 ₽',
      guests: 150,
      date: 'Декабрь 2024',
      mainImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/df7887b0-d57c-48b0-9bc7-c05960ef0ecc.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/df7887b0-d57c-48b0-9bc7-c05960ef0ecc.jpg'
      ],
      challenge: 'IT-компания хотела современный корпоратив для молодой команды. Бюджет ограничен — 4800₽ на человека. Нужен был вау-эффект при разумных затратах.',
      solution: 'Нашли стильный лофт с включённым оборудованием. Вместо классического банкета сделали фуд-станции — это дешевле и интереснее. Сделали акцент на свет, музыку и активности.',
      testimonial: {
        text: 'При небольшом бюджете Марина организовала крутое мероприятие! Сотрудники были в восторге от формата. Всё прошло динамично и весело. Рекомендуем!',
        author: 'Представитель компании'
      },
      budgetBreakdown: [
        {
          item: 'Аренда лофта',
          cost: '100 000 ₽',
          details: '400 кв.м, звук и свет включены, своя кухня'
        },
        {
          item: 'Кейтеринг (150 человек)',
          cost: '300 000 ₽',
          details: '2000₽/чел — фуд-станции, напитки, кофе-брейк'
        },
        {
          item: 'Развлечения',
          cost: '150 000 ₽',
          details: 'Ведущий, DJ, интерактивные игры, фотозона'
        },
        {
          item: 'Подарки сотрудникам',
          cost: '90 000 ₽',
          details: '600₽/чел — новогодние наборы'
        },
        {
          item: 'Декор',
          cost: '50 000 ₽',
          details: 'Новогоднее оформление, ёлка, гирлянды'
        },
        {
          item: 'Организация',
          cost: '30 000 ₽',
          details: 'Координация всех подрядчиков и присутствие на мероприятии'
        }
      ],
      included: [
        'Подбор площадки',
        'Разработка концепции',
        '📱 Telegram-бот с программой и уведомлениями',
        '🎯 Интерактивная фотобудка с мгновенной отправкой',
        'Организация кейтеринга',
        'Подбор ведущего и DJ',
        'Закупка подарков',
        'Составление программы',
        'Координация в день мероприятия'
      ],
      timeline: [
        {
          stage: 'Планирование',
          duration: '1 неделя',
          description: 'Встреча с заказчиком, определение бюджета и формата'
        },
        {
          stage: 'Бронирование',
          duration: '2 недели',
          description: 'Выбор площадки, согласование кейтеринга и программы'
        },
        {
          stage: 'Подготовка',
          duration: '2 месяца',
          description: 'Закупка подарков, финализация всех деталей'
        },
        {
          stage: 'Реализация',
          duration: '1 вечер',
          description: 'Проведение мероприятия с 19:00 до 01:00'
        }
      ],
      team: [
        'Организатор: Марина Малиночка',
        'Площадка: лофт-пространство',
        'Кейтеринг: фуд-сервис',
        'Ведущий',
        'DJ',
        'Декоратор'
      ]
    },
    'birthday-50th': {
      id: 'birthday-50th',
      title: 'Юбилей в ресторане',
      subtitle: 'Празднование 50-летия',
      category: 'Юбилей',
      location: 'Санкт-Петербург, классический ресторан',
      budget: '380 000 ₽',
      guests: 50,
      date: 'Октябрь 2024',
      mainImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/9e099256-58fc-4ae0-83fe-35ffba161e74.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/9e099256-58fc-4ae0-83fe-35ffba161e74.jpg'
      ],
      challenge: 'Семья хотела отметить юбилей в элегантной обстановке. Важно было создать уютную атмосферу для гостей разных возрастов и организовать трогательные сюрпризы.',
      solution: 'Выбрали классический ресторан с хорошей кухней. Создали видеопоздравление от близких, подготовили слайд-шоу с фотографиями. Продумали программу так, чтобы всем было комфортно.',
      testimonial: {
        text: 'Марина помогла создать тёплую атмосферу праздника. Всё было организовано деликатно и с душой. Виновница торжества и гости остались очень довольны!',
        author: 'Родственники'
      },
      budgetBreakdown: [
        {
          item: 'Банкет (50 гостей)',
          cost: '250 000 ₽',
          details: '5000₽/чел — меню из 6 блюд, напитки, торт'
        },
        {
          item: 'Декор и флористика',
          cost: '50 000 ₽',
          details: 'Оформление зала, цветочные композиции'
        },
        {
          item: 'Развлечения',
          cost: '40 000 ₽',
          details: 'Ведущий, живая музыка'
        },
        {
          item: 'Фото и видео',
          cost: '25 000 ₽',
          details: 'Фотограф, видеомонтаж поздравлений'
        },
        {
          item: 'Организация',
          cost: '15 000 ₽',
          details: 'Координация мероприятия'
        }
      ],
      included: [
        'Бронирование ресторана',
        'Согласование меню',
        '🎨 Создание персональной монограммы и фирменного стиля',
        '🎬 Видео-приглашения для VIP-гостей с анимацией',
        '🎁 Цифровой wishlist для гостей',
        'Подбор декоратора',
        'Организация музыкальной программы',
        'Создание видео с поздравлениями',
        'Координация в день юбилея'
      ],
      timeline: [
        {
          stage: 'Планирование',
          duration: '2 недели',
          description: 'Встреча с семьёй, выбор ресторана, обсуждение деталей'
        },
        {
          stage: 'Подготовка',
          duration: '2 месяца',
          description: 'Сбор фото и видео для сюрпризов, согласование всех деталей'
        },
        {
          stage: 'Финальная неделя',
          duration: '1 неделя',
          description: 'Монтаж видео, финальные согласования'
        },
        {
          stage: 'День юбилея',
          duration: '1 день',
          description: 'Координация мероприятия'
        }
      ],
      team: [
        'Организатор: Марина Малиночка',
        'Ресторан',
        'Флорист',
        'Ведущий',
        'Музыканты',
        'Фотограф'
      ]
    },
    'wedding-beach-sochi': {
      id: 'wedding-beach-sochi',
      title: 'Свадьба на побережье',
      subtitle: 'Церемония у моря',
      category: 'Свадьба',
      location: 'Сочи, пляжная зона',
      budget: '650 000 ₽',
      guests: 45,
      date: 'Июнь 2024',
      mainImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b721589b-e086-4bbf-8c4f-e2840f521ca6.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b721589b-e086-4bbf-8c4f-e2840f521ca6.jpg'
      ],
      challenge: 'Пара мечтала о камерной свадьбе у моря с минималистичным декором. Основные задачи: найти красивую локацию с видом на море, учесть погодные условия, организовать комфорт гостей на открытом воздухе.',
      solution: 'Выбрали уединённую пляжную зону с потрясающим видом. Церемонию провели на закате. Создали лаунж-зону с шатром на случай ветра. Банкет организовали в ресторане на берегу в формате средиземноморской кухни.',
      testimonial: {
        text: 'Марина воплотила нашу мечту! Свадьба у моря прошла идеально — погода, закат, атмосфера. Все детали были продуманы. Это был лучший день в нашей жизни!',
        author: 'Молодожёны'
      },
      budgetBreakdown: [
        {
          item: 'Аренда локации',
          cost: '120 000 ₽',
          details: 'Пляжная зона для церемонии, ресторан для банкета на весь день'
        },
        {
          item: 'Банкет (45 гостей)',
          cost: '270 000 ₽',
          details: '6 000 ₽/чел — средиземноморская кухня, морепродукты, напитки, торт'
        },
        {
          item: 'Декор',
          cost: '90 000 ₽',
          details: 'Минималистичное оформление церемонии, живые цветы, текстиль'
        },
        {
          item: 'Фото и видео',
          cost: '80 000 ₽',
          details: 'Съёмка на закате, дрон-съёмка, клип 4 минуты'
        },
        {
          item: 'Музыка',
          cost: '50 000 ₽',
          details: 'Саксофонист на церемонии, DJ на банкете'
        },
        {
          item: 'Организация',
          cost: '30 000 ₽',
          details: 'Координация подрядчиков, присутствие весь день'
        },
        {
          item: 'Дополнительно',
          cost: '10 000 ₽',
          details: 'Шатёр, веера для гостей, полиграфия'
        }
      ],
      included: [
        'Поиск локации у моря',
        'Разработка концепции в стиле бохо',
        '🌐 Сайт-приглашение с таймером и картой',
        '✨ QR-коды с программой дня',
        'План B на случай непогоды',
        'Согласование меню с рестораном',
        'Подбор декоратора',
        'Организация музыкального сопровождения',
        'Координация в день свадьбы',
        'Логистика гостей'
      ],
      timeline: [
        {
          stage: 'Планирование',
          duration: '3 недели',
          description: 'Поиск локации у моря, встречи с парой, выбор концепции'
        },
        {
          stage: 'Бронирование',
          duration: '2 недели',
          description: 'Заключение договоров с площадкой, рестораном, фотографом'
        },
        {
          stage: 'Подготовка',
          duration: '2 месяца',
          description: 'Работа над декором, меню, деталями, согласование всех элементов'
        },
        {
          stage: 'Реализация',
          duration: '1 день',
          description: 'Проведение церемонии и банкета'
        }
      ],
      team: [
        'Организатор: Марина Малиночка',
        'Пляжная локация',
        'Ресторан на берегу',
        'Декоратор',
        'Фотограф',
        'Видеограф с дроном',
        'Саксофонист',
        'DJ'
      ]
    }
  };

  const caseData = id ? casesData[id] : null;

  if (!caseData) {
    return (
      <div className="min-h-screen bg-black text-champagne flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-6">Кейс не найден</h1>
          <Link to="/">
            <Button className="bg-gold text-black hover:bg-champagne">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-champagne">
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
          <Link to="/#cases">
            <Button variant="outline" className="border-gold/30 text-champagne hover:bg-gold/5">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              К портфолио
            </Button>
          </Link>
        </div>
      </nav>

      <div className="relative h-[70vh] mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
        <img 
          src={caseData.mainImage}
          alt={caseData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 lg:p-16">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-gold text-black text-sm font-medium rounded-full">
                {caseData.category}
              </span>
              <span className="px-4 py-1.5 bg-black/70 backdrop-blur-sm border border-gold/30 text-gold text-sm rounded-full">
                {caseData.date}
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-champagne mb-3">
              {caseData.title}
            </h1>
            <p className="text-2xl text-champagne/80">{caseData.subtitle}</p>
          </div>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="neumorphic rounded-2xl p-6 text-center">
              <Icon name="MapPin" size={32} className="text-gold mx-auto mb-4" />
              <p className="text-champagne/60 text-sm mb-2">Локация</p>
              <p className="text-champagne font-medium">{caseData.location}</p>
            </div>
            <div className="neumorphic rounded-2xl p-6 text-center">
              <Icon name="Wallet" size={32} className="text-gold mx-auto mb-4" />
              <p className="text-champagne/60 text-sm mb-2">Бюджет</p>
              <p className="text-champagne font-medium text-xl">{caseData.budget}</p>
            </div>
            <div className="neumorphic rounded-2xl p-6 text-center">
              <Icon name="Users" size={32} className="text-gold mx-auto mb-4" />
              <p className="text-champagne/60 text-sm mb-2">Гостей</p>
              <p className="text-champagne font-medium text-xl">{caseData.guests}</p>
            </div>
            <div className="neumorphic rounded-2xl p-6 text-center">
              <Icon name="Calendar" size={32} className="text-gold mx-auto mb-4" />
              <p className="text-champagne/60 text-sm mb-2">Дата</p>
              <p className="text-champagne font-medium">{caseData.date}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="holographic-card rounded-3xl p-8">
              <Icon name="Target" size={32} className="text-gold mb-4" />
              <h3 className="text-2xl font-light text-champagne mb-4">Задача</h3>
              <p className="text-champagne/80 leading-relaxed">{caseData.challenge}</p>
            </div>
            <div className="holographic-card rounded-3xl p-8">
              <Icon name="Lightbulb" size={32} className="text-gold mb-4" />
              <h3 className="text-2xl font-light text-champagne mb-4">Решение</h3>
              <p className="text-champagne/80 leading-relaxed">{caseData.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-muted/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-champagne mb-4 text-center">
            Детализация <span className="text-gold">бюджета</span>
          </h2>
          <p className="text-champagne/60 text-center mb-12 max-w-2xl mx-auto">
            Прозрачность расходов — на что потрачен каждый рубль
          </p>

          <div className="space-y-4">
            {caseData.budgetBreakdown.map((item, index) => (
              <div key={index} className="neumorphic rounded-2xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl text-champagne font-medium">{item.item}</h4>
                  <span className="text-gold text-xl font-medium">{item.cost}</span>
                </div>
                <p className="text-champagne/70 text-sm">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-gold/10 to-purple-600/10 border-2 border-gold/30 rounded-2xl p-8">
            <div className="flex justify-between items-center">
              <span className="text-2xl text-champagne font-light">Итого:</span>
              <span className="text-4xl text-gold font-medium">{caseData.budget}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-champagne mb-12 text-center">
            Что было <span className="text-gold">реализовано</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {caseData.included.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-muted/30 rounded-xl p-4 border border-gold/10">
                <Icon name="CheckCircle2" size={20} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-champagne">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-champagne mb-12 text-center">
            Этапы <span className="text-gold">подготовки</span>
          </h2>

          <div className="space-y-6">
            {caseData.timeline.map((stage, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-bold">
                  {index + 1}
                </div>
                <div className="neumorphic rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl text-champagne font-medium">{stage.stage}</h4>
                    <span className="text-gold text-sm">{stage.duration}</span>
                  </div>
                  <p className="text-champagne/70">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-muted/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-champagne mb-4 text-center">
            Цифровые <span className="text-gold">решения</span>
          </h2>
          <p className="text-champagne/60 text-center mb-12 max-w-2xl mx-auto">
            Современные технологии делают ваше событие ещё более запоминающимся
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="holographic-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Icon name="Globe" size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-light text-champagne">Персональный сайт-приглашение</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">Уникальный дизайн под стиль мероприятия</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">Таймер обратного отсчёта до события</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">RSVP-форма с подтверждением гостей</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">Карта проезда и контакты</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">Галерея с историей пары/компании</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gold/20">
                <p className="text-champagne/60 text-sm">
                  💡 Домен вида: <span className="text-gold">anna-and-dmitry.wedding</span>
                </p>
              </div>
            </div>

            <div className="holographic-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-light text-champagne">Интерактивные элементы</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">QR-коды для меню и программы</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">Онлайн-фотобудка с мгновенной отправкой</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">Telegram/WhatsApp-бот для гостей</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">Live-трансляция для удалённых гостей</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-champagne/80">Цифровой wishlist с онлайн-оплатой</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gold/20">
                <p className="text-champagne/60 text-sm">
                  ✨ Все элементы адаптированы под мобильные устройства
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600/10 via-gold/10 to-purple-600/10 border border-gold/30 rounded-2xl p-8 text-center">
            <Icon name="Zap" size={48} className="text-gold mx-auto mb-4" />
            <h4 className="text-2xl font-light text-champagne mb-3">
              Создаём WOW-эффект
            </h4>
            <p className="text-champagne/70 max-w-2xl mx-auto">
              Все цифровые решения разрабатываются индивидуально под ваше мероприятие и интегрируются в общую концепцию события
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-champagne mb-12 text-center">
            Команда <span className="text-gold">проекта</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseData.team.map((member, index) => (
              <div key={index} className="flex items-center gap-3 bg-muted/30 rounded-xl p-4 border border-gold/10">
                <Icon name="User" size={18} className="text-gold flex-shrink-0" />
                <span className="text-champagne text-sm">{member}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-muted/10 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="holographic-card rounded-3xl p-12 text-center">
            <Icon name="Quote" size={48} className="text-gold/30 mx-auto mb-6" />
            <p className="text-2xl text-champagne/90 italic leading-relaxed mb-8">
              "{caseData.testimonial.text}"
            </p>
            <div className="flex items-center justify-center gap-2 text-gold">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={20} className="fill-gold" />
              ))}
            </div>
            <p className="text-champagne font-medium mt-4">— {caseData.testimonial.author}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-champagne mb-6">
            Хотите организовать <span className="text-gold">своё событие?</span>
          </h2>
          <p className="text-xl text-champagne/70 mb-10 max-w-2xl mx-auto">
            Обсудим ваши пожелания и создам концепцию под ваш бюджет
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-gold text-black hover:bg-champagne text-lg px-10 h-16">
              Обсудить моё мероприятие
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-gold/10 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-champagne rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">М</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gold">Марина Малиночка</h4>
            </div>
          </Link>
          <p className="text-champagne/40 text-sm">
            © 2025 Марина Малиночка. Частный организатор мероприятий
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;