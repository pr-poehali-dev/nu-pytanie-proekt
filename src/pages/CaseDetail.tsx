import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const CaseDetail = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const cases = [
    {
      id: 'sochi-wedding',
      title: 'Свадьба на берегу моря',
      location: 'Сочи',
      guests: 120,
      budget: '2 500 000 ₽',
      date: 'Август 2025',
      heroImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7d2f0c66-c494-4e95-9416-5f4b666b469b.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7d2f0c66-c494-4e95-9416-5f4b666b469b.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7d2f0c66-c494-4e95-9416-5f4b666b469b.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg'
      ],
      description: 'Роскошная церемония с панорамным видом на закат',
      brief: 'Молодая пара мечтала о свадьбе на берегу моря с видом на закат. Ограниченный бюджет, высокие ожидания, 120 гостей из разных городов России.',
      story: [
        {
          title: 'Начало истории',
          text: 'Первая встреча прошла в уютном кафе Москвы. Жених и невеста рассказали о своей мечте — церемония на закате, шум волн, золотой песок под ногами. Бюджет был ограничен, но желание создать незабываемое событие — огромным. Я поняла: это будет не просто свадьба, а история любви, написанная волнами и светом заката.'
        },
        {
          title: 'Поиск идеального места',
          text: 'Я лично посетила 15 площадок в Сочи за неделю. Каждый пляж, каждый ресторан оценивала с точки зрения пары. Наконец нашла то, что искала: частный пляж с видом на горы, возможность организовать банкет прямо на берегу, и главное — потрясающие закаты, которые захватывают дух. Владельцы места согласились на эксклюзивную аренду.'
        },
        {
          title: 'Координация команды мечты',
          text: 'Собрала команду из 12 подрядчиков: декораторы, флористы, звукорежиссёры, фотографы, кейтеринг. Каждая деталь согласовывалась лично — от цвета скатертей до угла установки арки. Когда за неделю до события декоратор отказался из-за форс-мажора, я за 48 часов нашла замену и пересогласовала всю концепцию. Отступать было нельзя.'
        },
        {
          title: 'Критический момент',
          text: 'За день до свадьбы метеосводки обещали дождь. Я не спала всю ночь, мониторя прогноз каждый час. Подготовила запасной план с тентами и переносом банкета в закрытое помещение. Но утром небо очистилось — как будто природа услышала мои молитвы.'
        },
        {
          title: 'День свадьбы',
          text: '120 гостей, идеальная погода, церемония на закате. Невеста шла по дорожке из белых роз под звуки скрипки. Когда она увидела арку из цветов на фоне моря и заходящего солнца, не смогла сдержать слёз счастья. Жених повторял: "Это даже лучше, чем я мечтал". После церемонии гости аплодировали стоя 5 минут.'
        },
        {
          title: 'Результат',
          text: 'Событие стало легендарным среди друзей пары. Они до сих пор получают сообщения с комплиментами и просьбами порекомендовать организатора. Фотографии свадьбы набрали тысячи лайков в Instagram. Пара порекомендовала меня 8 знакомым парам — и все 8 стали моими клиентами.'
        }
      ],
      challenges: [
        'Поиск идеальной локации среди 15 вариантов',
        'Замена декоратора за 48 часов до события',
        'Координация 12 подрядчиков одновременно',
        'Непредсказуемая погода и план Б',
        'Логистика для 120 гостей из разных городов',
        'Укладка в ограниченный бюджет'
      ],
      results: [
        'Церемония прошла без единой заминки',
        'Все 120 гостей остались в восторге',
        'Пара рекомендовала меня 8 знакомым',
        'Фотографии набрали тысячи лайков',
        'Идеальная погода в день события',
        'Укладка в бюджет с запасом 50 000 ₽'
      ],
      testimonial: {
        name: 'Анастасия и Дмитрий',
        text: 'Марина превратила нашу мечту в реальность, которая превзошла все ожидания. Свадьба на берегу моря была идеальной до последней детали. Мы просто наслаждались моментом, пока Марина контролировала всё. Лучшее решение — довериться профессионалу!'
      }
    },
    {
      id: 'moscow-corporate',
      title: 'Корпоратив премиум-класса',
      location: 'Москва',
      guests: 250,
      budget: '4 500 000 ₽',
      date: 'Декабрь 2025',
      heroImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/62c971b8-7718-4102-bed5-ad851c4d1b79.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/62c971b8-7718-4102-bed5-ad851c4d1b79.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/62c971b8-7718-4102-bed5-ad851c4d1b79.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg'
      ],
      description: 'Стильное мероприятие в центре столицы',
      brief: 'Крупная IT-компания обратилась за месяц до корпоратива. Предыдущий организатор сорвал сроки. 250 гостей, включая топ-менеджмент из Европы, премиум-уровень.',
      story: [
        {
          title: 'Вызов',
          text: 'Когда HR-директор крупной IT-компании позвонила мне в панике, я поняла — это будет экстремальный проект. 250 гостей, топ-менеджмент из Европы, премиум-уровень, строгий дресс-код. Предыдущий организатор сорвал все сроки, и до корпоратива оставался месяц. Но я не боюсь вызовов — я их люблю.'
        },
        {
          title: 'Решение за 30 дней',
          text: 'Первым делом забронировала лучшую площадку Москвы — панорамный ресторан на 60 этаже в Москва-Сити с видом на всю столицу. Затем собрала команду мечты за 48 часов: кейтеринг от шеф-повара мишленовского ресторана, световое шоу мирового уровня, джаз-бэнд, который играл на Grammy.'
        },
        {
          title: 'Детали имеют значение',
          text: 'Персонализированные меню для каждого из 250 гостей с учётом диетических предпочтений. Синхронный перевод на 3 языка для иностранных партнёров. Трансфер на премиум-автомобилях Mercedes S-class. Видеостена с корпоративными достижениями года. Каждую деталь я контролировала лично — от температуры шампанского до угла света на сцене.'
        },
        {
          title: 'Критический момент',
          text: 'За 2 часа до начала звонок техника: световое оборудование застряло в пробке на МКАД. Обычный организатор впал бы в панику. Но у меня всегда есть план Б. Я организовала мотокурьера, который привёз оборудование за 40 минут. Лично встретила технику у служебного входа, помогла занести оборудование. Гости не заметили ничего — шоу началось вовремя.'
        },
        {
          title: 'Триумф',
          text: 'Корпоратив прошёл безупречно. Генеральный директор лично поблагодарил меня на сцене перед всеми гостями — случай беспрецедентный. Иностранные партнёры сказали, что это лучшее корпоративное мероприятие, на котором они были. HR-директор плакала от облегчения и радости.'
        },
        {
          title: 'Долгосрочный результат',
          text: 'Событие вошло в корпоративную историю компании. В понедельник после корпоратива я получила контракт на организацию всех мероприятий компании на следующий год. Плюс 12 рекомендаций другим IT-гигантам. Этот кейс открыл мне двери в мир корпоративных событий премиум-класса.'
        }
      ],
      challenges: [
        'Всего 30 дней на подготовку события',
        'Высокие ожидания международных партнёров',
        'Форс-мажор с оборудованием в день X',
        'Координация 250 гостей премиум-класса',
        'Мультиязычная коммуникация',
        'Безупречный сервис для топ-менеджмента'
      ],
      results: [
        'Безупречное проведение мероприятия',
        'Благодарность от CEO на сцене',
        'Контракт на следующий год',
        'Рекомендации 12 другим компаниям',
        'Публикации в бизнес-СМИ',
        'Решение форс-мажора за 2 часа'
      ],
      testimonial: {
        name: 'Екатерина В., HR-директор',
        text: 'Марина спасла наш корпоратив, когда предыдущий организатор подвёл. За месяц она сделала невозможное — создала мероприятие мирового уровня. Профессионализм, стрессоустойчивость, внимание к деталям. Теперь все наши события — только с Мариной.'
      }
    },
    {
      id: 'spb-anniversary',
      title: 'Юбилей в усадьбе',
      location: 'Санкт-Петербург',
      guests: 80,
      budget: '1 800 000 ₽',
      date: 'Июнь 2025',
      heroImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7cedd5c5-e26b-4341-bdec-e57e7bed1c44.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7cedd5c5-e26b-4341-bdec-e57e7bed1c44.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7cedd5c5-e26b-4341-bdec-e57e7bed1c44.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg'
      ],
      description: 'Камерное торжество в исторической локации',
      brief: 'Клиент хотел воссоздать атмосферу аристократического бала XIX века в исторической усадьбе под Петербургом. 80 гостей, дресс-код эпохи.',
      story: [
        {
          title: 'Необычный запрос',
          text: 'История этого юбилея началась с звонка: "Хочу устроить бал, как при Екатерине II". Клиент не шутил — он мечтал погрузить 80 гостей в атмосферу аристократического приёма XIX века. Историческая усадьба, дресс-код эпохи, но с современным комфортом. Я поняла: это будет не просто вечеринка, а путешествие во времени.'
        },
        {
          title: 'Погружение в историю',
          text: 'Я провела 3 недели в библиотеках и архивах, изучая особенности балов того времени. Консультировалась с театральными художниками Мариинского театра, историками моды, музыкантами старинной музыки. Каждая деталь должна была быть аутентичной, но практичной — гости не должны чувствовать дискомфорта.'
        },
        {
          title: 'Магия деталей',
          text: 'Золотые канделябры с настоящими свечами (450 штук!). Сервировка фарфором Императорских заводов — нашла через антикварную сеть, договорилась об аренде. Живая музыка на старинных инструментах — скрипка Страдивари, клавесин XVIII века. Меню по рецептам того времени, адаптированное под современные вкусы шеф-поваром.'
        },
        {
          title: 'Театрализация',
          text: 'Организовала появление "гостей из прошлого" — 12 актёров в костюмах эпохи стоимостью по 200 000 рублей каждый. Они развлекали гостей историями из жизни дворян, обучали танцам, читали стихи Пушкина. Хореограф Мариинского театра поставил полонез, которому за час обучил всех гостей.'
        },
        {
          title: 'Эмоциональный пик',
          text: 'Когда именинник вошёл в зал в парадном мундире и увидел горящие свечи, накрытые столы с фарфором, гостей в платьях и фраках — он не смог сдержать слёз. "Я словно попал в своё прошлое воплощение", — сказал он. Гости аплодировали стоя. Многие признались, что это лучшее событие в их жизни.'
        },
        {
          title: 'Резонанс',
          text: 'Событие получило огромный резонанс. Публикации появились в Vogue, Tatler, Forbes Life. Три lifestyle-блогера с аудиторией 1+ млн написали посты. Я получила 15 запросов на организацию похожих тематических событий. Этот проект показал: люди готовы платить за уникальные эмоции и погружение.'
        }
      ],
      challenges: [
        'Воссоздание атмосферы XIX века',
        'Поиск аутентичного антиквариата',
        'Адаптация исторических рецептов',
        'Координация актёров и музыкантов',
        'Обучение гостей танцам эпохи',
        'Баланс аутентичности и комфорта'
      ],
      results: [
        'Полное погружение гостей в эпоху',
        'Слёзы счастья у именинника',
        'Овации от всех 80 гостей',
        'Публикации в Vogue, Tatler, Forbes',
        '15 новых запросов на тематические события',
        'Видео набрало 500 000 просмотров'
      ],
      testimonial: {
        name: 'Александр П.',
        text: 'Марина создала не просто юбилей, а машину времени. Три месяца подготовки, каждая деталь продумана до мелочей. Гости до сих пор обсуждают этот вечер. Я получил подарок, который невозможно купить за деньги — воплощение мечты.'
      }
    },
    {
      id: 'crimea-mountain',
      title: 'Свадьба в горах',
      location: 'Крым',
      guests: 60,
      budget: '1 200 000 ₽',
      date: 'Сентябрь 2025',
      heroImage: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg',
      images: [
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg',
        'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg'
      ],
      description: 'Уникальная выездная церемония на высоте',
      brief: 'Экстремальный проект — церемония на высоте 1200 метров. Пара хотела пожениться на вершине горы, куда ведёт только пешая тропа. 60 гостей.',
      story: [
        {
          title: 'Безумная идея',
          text: 'Когда пара сказала: "Хотим пожениться на вершине горы в Крыму", я уточнила: "На плато?" Они ответили: "Нет, на самой вершине, на высоте 1200 метров, куда ведёт только пешая тропа". Я выдохнула и сказала: "Сделаем". Это стало самым экстремальным проектом в моей карьере.'
        },
        {
          title: 'Логистическая головоломка',
          text: 'Как доставить декор, еду, оборудование, арку на вершину горы? Вертолёт — слишком дорого и рискованно. Я нашла решение: договорилась с местными проводниками-альпинистами, организовала цепочку из 15 носильщиков. Использовала облегчённые конструкции — алюминиевую арку вместо деревянной, складные столы, пластиковую посуду премиум-класса.'
        },
        {
          title: 'Управление рисками',
          text: 'Погода в горах непредсказуема. Я подготовила три плана: основной (церемония на вершине), запасной (церемония на плато на высоте 600м) и аварийный (в усадьбе у подножия). Мониторила прогноз каждый час. Купила метеостанцию, установила на вершине за неделю. За день до события начался дождь, но я знала по данным станции — утром будет ясно.'
        },
        {
          title: 'Подъём',
          text: '60 гостей начали подъём в 4 утра в сопровождении проводников. Я шла в первой группе, контролируя безопасность. У каждого гостя — питьевая вода, снеки, аптечка. Три часа подъёма. У некоторых начиналась горная болезнь — я лично помогала, поддерживала. Никто не сдался — все 60 человек поднялись на вершину.'
        },
        {
          title: 'Волшебство на высоте',
          text: 'Церемония началась на восходе солнца. Облака плыли под ногами. Невеста стояла в свадебном платье на фоне панорамы Крымских гор, подсвеченная первыми лучами. Когда она сказала "да", гости зарыдали от красоты момента. Фотограф сделал кадр, который позже вошёл в топ-10 свадебных фото года по версии международного конкурса.'
        },
        {
          title: 'Легенда',
          text: 'Это событие стало легендой Крыма. Местные жители называют его "та самая свадьба в облаках". История попала в региональные СМИ, потом в федеральные. Канал "Россия 1" снял сюжет. Я получила 20+ запросов на организацию экстремальных свадеб. Этот проект доказал: нет невозможного, есть недостаточная подготовка.'
        }
      ],
      challenges: [
        'Доставка оборудования на вершину горы',
        'Непредсказуемая погода',
        'Безопасность 60 гостей на высоте',
        'Отсутствие электричества и воды',
        'Подъём в 4 утра',
        'Горная болезнь у нескольких гостей'
      ],
      results: [
        'Церемония на восходе солнца',
        'Все 60 гостей в безопасности',
        'Фото вошло в топ-10 года',
        'История стала легендой региона',
        'Сюжет на федеральном ТВ',
        '20+ запросов на экстремальные свадьбы'
      ],
      testimonial: {
        name: 'Ирина и Сергей',
        text: 'Марина сделала невозможное. Свадьба на вершине горы — это было безумием, но она превратила его в реальность. Каждая деталь, каждый риск были просчитаны. Мы пережили самый волшебный день в жизни. Спасибо за то, что поверили в нашу мечту!'
      }
    }
  ];

  const caseData = cases.find(c => c.id === id);

  if (!caseData) {
    return (
      <div className="min-h-screen bg-black text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-champagne mb-4">Кейс не найден</h1>
          <Link to="/">
            <Button className="bg-gold text-black hover:bg-champagne">
              На главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-champagne rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">М</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gold tracking-wide">Marico Events</h1>
              <p className="text-[10px] text-champagne/60 tracking-widest uppercase">Марина Малиночка</p>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline" className="border-gold/30 text-champagne hover:bg-gold/5">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-24">
        <div className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
          <img 
            src={caseData.heroImage}
            alt={caseData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 pb-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-6 mb-6 flex-wrap">
                <span className="flex items-center gap-2 text-gold text-sm">
                  <Icon name="MapPin" size={16} />
                  {caseData.location}
                </span>
                <span className="flex items-center gap-2 text-champagne/70 text-sm">
                  <Icon name="Users" size={16} />
                  {caseData.guests} гостей
                </span>
                <span className="flex items-center gap-2 text-champagne/70 text-sm">
                  <Icon name="Calendar" size={16} />
                  {caseData.date}
                </span>
                <span className="flex items-center gap-2 text-champagne/70 text-sm">
                  <Icon name="Wallet" size={16} />
                  {caseData.budget}
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-light text-champagne mb-6">
                {caseData.title}
              </h1>
              <p className="text-xl lg:text-2xl text-champagne/80 max-w-3xl leading-relaxed">
                {caseData.description}
              </p>
            </div>
          </div>
        </div>

        <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Задача</p>
              <p className="text-2xl text-champagne/80 leading-relaxed max-w-4xl">
                {caseData.brief}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              <div className="p-10 bg-muted/30 border border-gold/20 rounded-3xl">
                <h3 className="text-3xl font-light text-gold mb-8 flex items-center gap-3">
                  <Icon name="AlertCircle" size={32} className="text-gold" />
                  Вызовы проекта
                </h3>
                <ul className="space-y-5">
                  {caseData.challenges.map((challenge, index) => (
                    <li key={index} className="flex gap-4 text-champagne/80 text-lg">
                      <span className="text-gold mt-1">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-muted/30 border border-gold/20 rounded-3xl">
                <h3 className="text-3xl font-light text-gold mb-8 flex items-center gap-3">
                  <Icon name="CheckCircle2" size={32} className="text-gold" />
                  Достигнутые результаты
                </h3>
                <ul className="space-y-5">
                  {caseData.results.map((result, index) => (
                    <li key={index} className="flex gap-4 text-champagne/80 text-lg">
                      <Icon name="Check" size={24} className="text-gold flex-shrink-0 mt-1" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-light text-champagne mb-16 text-center">
              История создания и реализации
            </h2>

            <div className="space-y-16">
              {caseData.story.map((chapter, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-normal text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-light text-gold mb-4">{chapter.title}</h3>
                      <p className="text-xl text-champagne/80 leading-relaxed">{chapter.text}</p>
                    </div>
                  </div>
                  {index < caseData.story.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent my-12"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-muted/20 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-light text-champagne mb-16 text-center">Галерея события</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseData.images.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img 
                    src={image}
                    alt={`${caseData.title} - фото ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="p-12 lg:p-16 bg-gradient-to-br from-gold/10 via-muted/30 to-champagne/5 border border-gold/30 rounded-3xl text-center">
              <div className="mb-8">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={24} className="inline-block text-gold fill-gold mx-1" />
                ))}
              </div>
              <p className="text-2xl lg:text-3xl text-champagne/90 italic mb-8 leading-relaxed">
                "{caseData.testimonial.text}"
              </p>
              <p className="text-xl text-gold font-normal">{caseData.testimonial.name}</p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-light text-champagne mb-6">
                Хотите такое же событие?
              </h2>
              <p className="text-xl text-champagne/70">
                Расскажите о вашей мечте — я превращу её в реальность
              </p>
            </div>

            <div className="p-10 lg:p-12 bg-muted/30 border border-gold/20 rounded-3xl">
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

                <div>
                  <label className="block text-sm font-light mb-3 text-champagne">Расскажите о вашем событии *</label>
                  <Textarea 
                    placeholder="Вдохновил этот кейс? Расскажите, что вы хотите..."
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
                  Обсудить мой проект
                </Button>
                
                <p className="text-xs text-center text-champagne/50">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-gold/10 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-champagne transition-colors text-lg">
              <Icon name="ArrowLeft" size={20} />
              <span>Вернуться к портфолио</span>
            </Link>
          </div>
          <div className="border-t border-gold/10 pt-8 text-center">
            <p className="text-sm text-champagne/40">
              © 2026 Marico Events. Марина Малиночка — Организация премиум-событий
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseDetail;
