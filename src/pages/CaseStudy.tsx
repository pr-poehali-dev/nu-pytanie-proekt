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
      title: 'Свадьба мечты в усадьбе',
      subtitle: 'Анна и Дмитрий',
      category: 'Свадьба',
      location: 'Московская область, усадьба "Архангельское"',
      budget: '1 200 000 ₽',
      guests: 85,
      date: 'Июнь 2025',
      mainImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg'
      ],
      challenge: 'Молодожены мечтали о роскошной, но не вычурной свадьбе в историческом месте. Главные требования: камерная атмосфера для близких, премиум-уровень сервиса, идеальная организация без стресса для пары.',
      solution: 'Выбрали усадьбу "Архангельское" — идеальное сочетание истории и комфорта. Создали концепцию "Классическая элегантность" с акцентом на живые цветы, свечи и натуральные материалы. Координировала 15 подрядчиков, провела 8 встреч с парой, разработала timing на минуты.',
      testimonial: {
        text: 'Марина — настоящий профессионал! Она взяла на себя ВСЁ: от выбора площадки до последней детали декора. Мы просто наслаждались нашим днем, зная, что всё под контролем. Свадьба прошла идеально, гости до сих пор благодарят!',
        author: 'Анна и Дмитрий'
      },
      budgetBreakdown: [
        {
          item: 'Аренда усадьбы (весь день)',
          cost: '200 000 ₽',
          details: 'Включает: территория, банкетный зал, беседка для церемонии, парковка'
        },
        {
          item: 'Банкет (85 гостей)',
          cost: '425 000 ₽',
          details: '5 000 ₽/чел — меню из 5 блюд, welcome-фуршет, торт, бар'
        },
        {
          item: 'Декор и флористика',
          cost: '180 000 ₽',
          details: 'Арка из живых цветов, композиции на столы, свечи, текстиль'
        },
        {
          item: 'Фото и видео (2 камеры)',
          cost: '150 000 ₽',
          details: 'Съемка полного дня, клип 5 мин, фильм 40 мин, 500 обработанных фото'
        },
        {
          item: 'Развлекательная программа',
          cost: '120 000 ₽',
          details: 'Ведущий, живая музыка (скрипка на церемонии, джаз-трио на банкете), DJ'
        },
        {
          item: 'Организация и координация',
          cost: '80 000 ₽',
          details: 'Полное сопровождение: от концепции до реализации, координация в день свадьбы'
        },
        {
          item: 'Дополнительные услуги',
          cost: '45 000 ₽',
          details: 'Стилист и визажист для невесты, трансфер гостей, welcome-подарки'
        }
      ],
      included: [
        'Полная организация свадьбы "под ключ"',
        'Выбор и бронирование площадки',
        'Подбор всех подрядчиков из проверенной базы',
        'Разработка концепции и дизайна',
        'Координация 15 подрядчиков',
        'Тайминг мероприятия по минутам',
        'Координация в день свадьбы (12 часов)',
        'Репетиция церемонии',
        'Техническая поддержка',
        'Решение всех организационных вопросов'
      ],
      timeline: [
        {
          stage: 'Знакомство и концепция',
          duration: '2 недели',
          description: 'Встреча с парой, обсуждение пожеланий, бюджета. Разработка концепции, подбор площадки, презентация идей.'
        },
        {
          stage: 'Бронирование и подрядчики',
          duration: '1 месяц',
          description: 'Заключение договоров с площадкой и ключевыми подрядчиками: кейтеринг, декор, фото/видео, музыка.'
        },
        {
          stage: 'Детализация проекта',
          duration: '3 месяца',
          description: 'Финализация меню, флористики, сценария. Подбор дополнительных услуг: стилист, трансфер, welcome-подарки.'
        },
        {
          stage: 'Финальная подготовка',
          duration: '2 недели',
          description: 'Репетиция церемонии, согласование тайминга с подрядчиками, финальные встречи, проверка всех деталей.'
        }
      ],
      team: [
        'Организатор и координатор: Марина Малиночка',
        'Декоратор: студия "Bloom & Style"',
        'Фотограф: Алексей Петров',
        'Видеограф: команда "Wedding Films"',
        'Ведущий: Михаил Соколов',
        'Живая музыка: джаз-трио "Elegance"',
        'DJ: Артём Волков',
        'Кейтеринг: ресторан "Усадьба"',
        'Флорист: мастерская "Цветочный сад"',
        'Стилист: Елена Краснова'
      ]
    },
    'corporate-tech': {
      id: 'corporate-tech',
      title: 'Новогодний корпоратив IT-компании',
      subtitle: 'TechCorp 200 сотрудников',
      category: 'Корпоратив',
      location: 'Москва, лофт "Красный Октябрь"',
      budget: '850 000 ₽',
      guests: 200,
      date: 'Декабрь 2025',
      mainImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg'
      ],
      challenge: 'IT-компания хотела удивить сотрудников необычным корпоративом в современном стиле. Ограничение: бюджет 850к на 200 человек. Требовалось: вау-эффект, качественная еда, интерактив, подарки всем сотрудникам.',
      solution: 'Выбрали индустриальный лофт с высокими потолками. Создали концепцию "Tech Future": неоновая подсветка, интерактивные зоны с VR, фуд-станции вместо банкета, электронная музыка. Сэкономили на декоре, вложились в технологии и развлечения.',
      testimonial: {
        text: 'Марина превзошла ожидания! При бюджете 4250₽ на человека мы получили мероприятие уровня премиум. Сотрудники в восторге: VR-зоны, крутая еда, шоу-программа, подарки. Уже договорились на следующий год!',
        author: 'HR-директор TechCorp'
      },
      budgetBreakdown: [
        {
          item: 'Аренда лофта (вечер)',
          cost: '120 000 ₽',
          details: '500 кв.м, индустриальный стиль, своя кухня, звук и свет'
        },
        {
          item: 'Кейтеринг (200 гостей)',
          cost: '340 000 ₽',
          details: '1700₽/чел — фуд-станции: паста, стейки, суши, десерты, бар'
        },
        {
          item: 'Развлекательная программа',
          cost: '180 000 ₽',
          details: 'Ведущий, шоу-балет, VR-зоны (3 станции), DJ, световое шоу'
        },
        {
          item: 'Подарки сотрудникам',
          cost: '100 000 ₽',
          details: '500₽/чел — брендированные термосы премиум-класса'
        },
        {
          item: 'Декор и оформление',
          cost: '60 000 ₽',
          details: 'Неоновые надписи, новогодняя ель 4м, фотозона, гирлянды'
        },
        {
          item: 'Организация и координация',
          cost: '50 000 ₽',
          details: 'Полное сопровождение, координация в день мероприятия'
        }
      ],
      included: [
        'Организация корпоратива "под ключ"',
        'Подбор площадки под бюджет',
        'Разработка концепции Tech Future',
        'Согласование кейтеринга и меню',
        'Организация VR-развлечений',
        'Подбор шоу-программы',
        'Закупка и брендирование подарков',
        'Тайминг мероприятия',
        'Координация в день события',
        'Техническая поддержка'
      ],
      timeline: [
        {
          stage: 'Бриф и концепция',
          duration: '1 неделя',
          description: 'Встреча с руководством, уточнение бюджета и пожеланий. Разработка концепции Tech Future.'
        },
        {
          stage: 'Бронирование',
          duration: '2 недели',
          description: 'Подбор и бронирование лофта, согласование кейтеринга, выбор развлекательной программы.'
        },
        {
          stage: 'Подготовка',
          duration: '2.5 месяца',
          description: 'Организация VR-зон, заказ подарков с брендированием, финализация программы и меню.'
        },
        {
          stage: 'Реализация',
          duration: '1 день',
          description: 'Монтаж оборудования, декора. Координация мероприятия с 18:00 до 02:00.'
        }
      ],
      team: [
        'Организатор: Марина Малиночка',
        'Ведущий: Денис Рокотов',
        'Шоу-балет: труппа "Neon Dance"',
        'DJ: Владимир Ким',
        'VR-оборудование: компания "Virtual Zone"',
        'Кейтеринг: "Street Food Deluxe"',
        'Световое шоу: "Light Masters"',
        'Декор: студия "Industrial Style"'
      ]
    },
    'birthday-50th': {
      id: 'birthday-50th',
      title: 'Юбилей 50 лет в ресторане',
      subtitle: 'Семейное торжество Марии',
      category: 'Юбилей',
      location: 'Санкт-Петербург, ресторан "Палкин"',
      budget: '450 000 ₽',
      guests: 60,
      date: 'Сентябрь 2025',
      mainImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg'
      ],
      challenge: 'Семья хотела отметить юбилей мамы в классическом стиле: элегантный ресторан, изысканная кухня, живая музыка. Важно было создать душевную атмосферу для родных и друзей разных поколений.',
      solution: 'Выбрали исторический ресторан "Палкин" с классическими интерьерами. Создали концепцию "Классическая элегантность" с акцентом на флористику в пастельных тонах. Организовали сюрпризы: видеопоздравления от родных, слайд-шоу с фото из жизни, живой вокал любимых песен.',
      testimonial: {
        text: 'Марина создала именно ту атмосферу, о которой мы мечтали! Мама была в восторге от каждой детали. Особенно тронуло видео от внуков и живое исполнение её любимых песен. Гости разных возрастов чувствовали себя комфортно. Спасибо!',
        author: 'Семья Марии'
      },
      budgetBreakdown: [
        {
          item: 'Банкет в ресторане (60 гостей)',
          cost: '300 000 ₽',
          details: '5000₽/чел — меню из 6 блюд, welcome-фуршет, торт, премиум-бар'
        },
        {
          item: 'Флористика и декор',
          cost: '60 000 ₽',
          details: 'Композиции на столы, оформление президиума, цветочная арка для фото'
        },
        {
          item: 'Развлекательная программа',
          cost: '45 000 ₽',
          details: 'Ведущий, живой вокал (2 часа), пианист'
        },
        {
          item: 'Фото и видео',
          cost: '30 000 ₽',
          details: 'Фотограф (4 часа), видеомонтаж поздравлений, слайд-шоу'
        },
        {
          item: 'Организация и координация',
          cost: '15 000 ₽',
          details: 'Согласование деталей, координация в день юбилея'
        }
      ],
      included: [
        'Организация юбилея "под ключ"',
        'Бронирование ресторана',
        'Разработка концепции оформления',
        'Согласование меню с шеф-поваром',
        'Подбор флориста и декоратора',
        'Организация музыкальной программы',
        'Создание видео с поздравлениями',
        'Слайд-шоу из фотографий',
        'Координация в день события',
        'Тайминг мероприятия'
      ],
      timeline: [
        {
          stage: 'Планирование',
          duration: '2 недели',
          description: 'Встреча с семьей, обсуждение концепции, бюджета. Бронирование ресторана.'
        },
        {
          stage: 'Подготовка',
          duration: '2.5 месяца',
          description: 'Согласование меню, флористики, программы. Сбор видеопоздравлений и фото для слайд-шоу.'
        },
        {
          stage: 'Финальная неделя',
          duration: '1 неделя',
          description: 'Монтаж видео, финальное согласование тайминга, репетиция с музыкантами.'
        },
        {
          stage: 'День юбилея',
          duration: '1 день',
          description: 'Координация мероприятия, контроль подачи блюд, управление программой.'
        }
      ],
      team: [
        'Организатор: Марина Малиночка',
        'Ресторан: "Палкин", Санкт-Петербург',
        'Флорист: студия "Петербургские цветы"',
        'Ведущий: Ирина Смирнова',
        'Вокалист: Андрей Морозов',
        'Пианист: Олег Волков',
        'Фотограф: Мария Лебедева',
        'Видеограф: студия "Moments"'
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
      {/* Навигация */}
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

      {/* Главное изображение */}
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

      {/* Основные параметры */}
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

      {/* Задача и решение */}
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

      {/* Детализация бюджета */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-muted/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-champagne mb-4 text-center">
            Детализация <span className="text-gold">бюджета</span>
          </h2>
          <p className="text-champagne/60 text-center mb-12 max-w-2xl mx-auto">
            Полная прозрачность: на что потрачен каждый рубль
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

      {/* Что входило */}
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

      {/* Тайминг подготовки */}
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

      {/* Команда */}
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

      {/* Отзыв */}
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

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-champagne mb-6">
            Хотите такое же <span className="text-gold">событие?</span>
          </h2>
          <p className="text-xl text-champagne/70 mb-10 max-w-2xl mx-auto">
            Обсудим ваши пожелания и создадим концепцию вашего идеального мероприятия
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-gold text-black hover:bg-champagne text-lg px-10 h-16">
              Обсудить моё мероприятие
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
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
            © 2026 Марина Малиночка. Частный организатор мероприятий
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;
