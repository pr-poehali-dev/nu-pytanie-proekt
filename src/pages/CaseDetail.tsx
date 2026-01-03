import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CaseDetail = () => {
  const { id } = useParams();

  const cases = [
    {
      id: 'sochi-wedding',
      title: 'Свадьба на берегу моря',
      location: 'Сочи',
      guests: 120,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg',
      description: 'Роскошная церемония с панорамным видом на закат',
      story: `Когда ко мне обратилась пара с мечтой о свадьбе на берегу моря, я знала — это будет особенное событие.

**Начало истории**
Первая встреча прошла в уютном кафе Москвы. Жених и невеста рассказали о своей мечте — церемония на закате, шум волн, золотой песок. Бюджет был ограничен, но желание создать незабываемое событие — огромным.

**Поиск локации**
Я лично посетила 15 площадок в Сочи, прежде чем нашла идеальное место. Частный пляж с видом на горы, возможность организовать банкет прямо на берегу, и главное — потрясающие закаты.

**Координация команды**
Работала с 12 подрядчиками: от декораторов до звукорежиссёров. Каждая деталь согласовывалась лично. Когда за неделю до события декоратор отказался, я за 48 часов нашла замену и пересогласовала всю концепцию.

**День события**
120 гостей, идеальная погода, церемония на закате. Невеста плакала от счастья, когда увидела арку из белых роз на фоне моря. 

**Результат**
Событие стало легендарным среди друзей пары. Они до сих пор получают комплименты и просьбы порекомендовать организатора.`,
      challenges: [
        'Поиск идеальной локации среди 15 вариантов',
        'Замена декоратора за 48 часов до события',
        'Координация 12 подрядчиков одновременно',
        'Логистика для 120 гостей из разных городов'
      ],
      results: [
        'Церемония прошла без единой заминки',
        'Все гости остались в восторге',
        'Пара рекомендовала меня 8 знакомым',
        'Фотографии разошлись по Instagram'
      ]
    },
    {
      id: 'moscow-corporate',
      title: 'Корпоратив премиум-класса',
      location: 'Москва',
      guests: 250,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
      description: 'Стильное мероприятие в центре столицы',
      story: `Когда крупная IT-компания обратилась ко мне за месяц до корпоратива, я понимала — времени мало, но отступать нельзя.

**Вызов**
250 гостей, топ-менеджмент из Европы, премиум-уровень, строгий дресс-код. Предыдущий организатор сорвал сроки, и компания была в панике.

**Решение за 30 дней**
Первым делом я забронировала лучшую площадку в Москва-Сити — панорамный ресторан на 60 этаже. Затем собрала команду мечты: кейтеринг от шеф-повара мишленовского ресторана, световое шоу, джаз-бэнд.

**Детали имеют значение**
Персонализированные меню для каждого гостя, синхронный перевод для иностранных партнёров, трансфер на премиум-автомобилях. Я лично контролировала каждую деталю.

**Критический момент**
За 2 часа до начала выяснилось, что световое оборудование задерживается в пробке. Я организовала мотокурьера и лично встретила оборудование, чтобы техники успели всё установить.

**Триумф**
Генеральный директор лично поблагодарил меня на сцене. Событие вошло в корпоративную историю компании.`,
      challenges: [
        'Всего 30 дней на подготовку события',
        'Высокие ожидания международных партнёров',
        'Форс-мажор с оборудованием в день X',
        'Координация 250 гостей премиум-класса'
      ],
      results: [
        'Безупречное проведение мероприятия',
        'Благодарность от CEO на сцене',
        'Контракт на следующий год',
        'Рекомендации другим компаниям'
      ]
    },
    {
      id: 'spb-anniversary',
      title: 'Юбилей в усадьбе',
      location: 'Санкт-Петербург',
      guests: 80,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg',
      description: 'Камерное торжество в исторической локации',
      story: `История этого юбилея началась с необычного запроса — клиент хотел воссоздать атмосферу аристократического приёма XIX века.

**Концепция**
80 гостей, историческая усадьба под Петербургом, дресс-код в стиле эпохи. Задача — погрузить гостей в другую эпоху, сохранив современный комфорт.

**Погружение в историю**
Я провела 3 недели, изучая особенности балов того времени. Нашла исторические источники, проконсультировалась с театральными художниками, подобрала аутентичную музыку.

**Магия деталей**
Золотые канделябры, сервировка фарфором императорских заводов (аренда!), живая музыка на старинных инструментах. Даже меню составила по рецептам того времени — но адаптировала под современные вкусы.

**Сюрприз**
Организовала появление "гостей из прошлого" — актёры в костюмах эпохи, которые развлекали гостей историями и танцами. Никто не ожидал!

**Эмоции**
Именинник не сдержал слёз, когда увидел зал. Гости аплодировали стоя. Многие сказали, что это лучшее событие в их жизни.`,
      challenges: [
        'Воссоздание атмосферы XIX века',
        'Поиск аутентичного антиквариата',
        'Адаптация исторических рецептов',
        'Координация актёров и музыкантов'
      ],
      results: [
        'Полное погружение гостей в эпоху',
        'Слёзы счастья у именинника',
        'Овации от всех гостей',
        'Публикации в lifestyle-изданиях'
      ]
    },
    {
      id: 'crimea-mountain',
      title: 'Свадьба в горах',
      location: 'Крым',
      guests: 60,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg',
      description: 'Уникальная выездная церемония на высоте',
      story: `Эта свадьба стала самым экстремальным проектом в моей карьере — церемония на высоте 1200 метров над уровнем моря.

**Безумная идея**
Пара хотела пожениться на вершине горы в Крыму. Не в долине, не на плато — именно на вершине, куда ведёт только пешая тропа.

**Логистическая головоломка**
Как доставить декор, еду, оборудование на вершину? Я нашла решение — договорилась с местными проводниками, организовала цепочку носильщиков, использовала облегчённые конструкции.

**Риски**
Погода в горах непредсказуема. Я подготовила три плана: основной, запасной и аварийный. Мониторила прогноз каждый час. За день до события начался дождь, но я знала — утром будет ясно.

**Волшебство**
60 гостей поднялись на вершину на рассвете. Церемония прошла в лучах восходящего солнца, облака плыли под ногами. Невеста сказала "да" с панорамой гор на фоне.

**Легенда**
Это событие стало легендой в Крыму. Местные жители до сих пор рассказывают о "той самой свадьбе в облаках".`,
      challenges: [
        'Доставка оборудования на вершину горы',
        'Непредсказуемая погода',
        'Безопасность 60 гостей на высоте',
        'Отсутствие электричества и воды'
      ],
      results: [
        'Церемония на восходе солнца',
        'Все гости в безопасности',
        'Незабываемые эмоции',
        'История стала легендой региона'
      ]
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
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gold/10">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex justify-between items-center">
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
        <div className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
          <img 
            src={caseData.image}
            alt={caseData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-16">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex items-center gap-6 mb-6">
                <span className="flex items-center gap-2 text-gold text-sm">
                  <Icon name="MapPin" size={16} />
                  {caseData.location}
                </span>
                <span className="flex items-center gap-2 text-champagne/70 text-sm">
                  <Icon name="Users" size={16} />
                  {caseData.guests} гостей
                </span>
              </div>
              <h1 className="text-7xl font-light text-champagne mb-4">
                {caseData.title}
              </h1>
              <p className="text-2xl text-champagne/70 max-w-2xl">
                {caseData.description}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-light text-gold mb-8">История события</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  {caseData.story.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={index} className="text-2xl font-normal text-champagne mt-8 mb-4">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }
                    return (
                      <p key={index} className="text-champagne/80 leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-muted/30 border border-gold/20 rounded-2xl">
                <h3 className="text-2xl font-light text-gold mb-6">Вызовы</h3>
                <ul className="space-y-4">
                  {caseData.challenges.map((challenge, index) => (
                    <li key={index} className="flex gap-3 text-champagne/80">
                      <Icon name="AlertCircle" size={20} className="text-gold flex-shrink-0 mt-1" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-muted/30 border border-gold/20 rounded-2xl">
                <h3 className="text-2xl font-light text-gold mb-6">Результаты</h3>
                <ul className="space-y-4">
                  {caseData.results.map((result, index) => (
                    <li key={index} className="flex gap-3 text-champagne/80">
                      <Icon name="CheckCircle2" size={20} className="text-gold flex-shrink-0 mt-1" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-gold/10 to-champagne/5 border border-gold/30 rounded-2xl">
                <h3 className="text-2xl font-light text-gold mb-4">Хотите так же?</h3>
                <p className="text-champagne/70 mb-6">
                  Давайте обсудим ваше событие и создадим уникальную историю
                </p>
                <Link to="/#contact">
                  <Button className="w-full bg-gold text-black hover:bg-champagne">
                    Обсудить проект
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gold/10 py-16 px-8 mt-20">
        <div className="max-w-[1400px] mx-auto text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-champagne transition-colors">
            <Icon name="ArrowLeft" size={20} />
            <span className="text-lg">Вернуться к портфолио</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default CaseDetail;
