
import { Question, DirectorResult, DirectorId } from './types';

export const DIRECTORS: Record<DirectorId, DirectorResult> = {
  Tarantino: {
    id: 'Tarantino',
    name: 'Квентин Тарантино',
    description: 'Вы — Квентин Тарантино. Ваш стиль — дерзкий постмодерн: вы собираете кино из цитат, жанров и хлёсткого ритма, где зритель становится соучастником. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Quentin_Tarantino_by_Gage_Skidmore.jpg/800px-Quentin_Tarantino_by_Gage_Skidmore.jpg'
  },
  Hitchcock: {
    id: 'Hitchcock',
    name: 'Альфред Хичкок',
    description: 'Вы — Альфред Хичкок. Вы мыслите сцену как механизм: управляете вниманием зрителя через напряжение, ожидание и точную постановку. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Alfred_Hitchcock_nywts.jpg/800px-Alfred_Hitchcock_nywts.jpg'
  },
  Kurosawa: {
    id: 'Kurosawa',
    name: 'Акира Куросава',
    description: 'Вы — Акира Куросава. Ваш стиль — эпос и движение: вы любите динамичную мизансцену, мощную драму и “живую” стихию в кадре. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Akira_Kurosawa_in_1951.jpg/800px-Akira_Kurosawa_in_1951.jpg'
  },
  Bergman: {
    id: 'Bergman',
    name: 'Ингмар Бергман',
    description: 'Вы — Ингмар Бергман. Вы снимаете психологию крупным планом: вас интересуют философские вопросы, отношения и внутренние трещины человека. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ingmar_Bergman_1957.jpg/800px-Ingmar_Bergman_1957.jpg'
  },
  Tarkovsky: {
    id: 'Tarkovsky',
    name: 'Андрей Тарковский',
    description: 'Вы — Андрей Тарковский. Ваш стиль — кино как переживание: тишина, время и символы (вода, ветер, дождь) работают сильнее слов. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Andrey_Tarkovsky_1960.jpg/800px-Andrey_Tarkovsky_1960.jpg'
  },
  Kubrick: {
    id: 'Kubrick',
    name: 'Стэнли Кубрик',
    description: 'Вы — Стэнли Кубрик. Вы экспериментатор и перфекционист: любите точность, визуальные конструкции и жанры, которые превращаются в авторское высказывание. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Stanley_Kubrick.jpg/800px-Stanley_Kubrick.jpg'
  },
  Balabanov: {
    id: 'Balabanov',
    name: 'Алексей Балабанов',
    description: 'Вы — Алексей Балабанов. Ваш стиль — герой эпохи и жёсткая правда: вы снимаете реальность так, что она одновременно смешная, страшная и узнаваемая. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/e/ef/Aleksei_Balabanov.jpg/400px-Aleksei_Balabanov.jpg'
  },
  Fellini: {
    id: 'Fellini',
    name: 'Федерико Феллини',
    description: 'Вы — Федерико Феллини. Вы превращаете жизнь в карнавал: гротеск, фантазия и автобиографическая интонация делают мир на экране чуть более сном, чем реальностью. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Federico_Fellini_1965.jpg/800px-Federico_Fellini_1965.jpg'
  },
  Bertolucci: {
    id: 'Bertolucci',
    name: 'Бернардо Бертолуччи',
    description: 'Вы — Бернардо Бертолуччи. Ваш стиль — чувственность и свобода мысли: вы соединяете политику, идентичность и страсть, делая личное частью эпохи. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bernardo_Bertolucci_1976.jpg/800px-Bernardo_Bertolucci_1976.jpg'
  },
  Spielberg: {
    id: 'Spielberg',
    name: 'Стивен Спилберг',
    description: 'Вы — Стивен Спилберг. Вы рассказываете большие истории человеческим голосом: под зрелищем у вас всегда прячутся темы одиночества, семьи и надежды. Чтобы узнать подробнее о кино — покупайте курс.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Steven_Spielberg_by_Gage_Skidmore.jpg/800px-Steven_Spielberg_by_Gage_Skidmore.jpg'
  }
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Что для вас важнее всего в сцене?",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000",
    options: [
      { id: '1A', text: "A) Диалог и ритм: чтобы фразы “жили” отдельно от сюжета", points: ['Tarantino', 'Fellini'] },
      { id: '1B', text: "B) Напряжение и контроль внимания зрителя", points: ['Hitchcock', 'Kubrick'] },
      { id: '1C', text: "C) Образ и внутреннее состояние, которое “простоит” дольше слов", points: ['Tarkovsky', 'Bergman'] },
      { id: '1D', text: "D) Эмоция и чувство чуда, чтобы зритель снова поверил", points: ['Spielberg', 'Kurosawa'] }
    ]
  },
  {
    id: 2,
    text: "Ваш идеальный визуальный стиль — это…",
    imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1000",
    options: [
      { id: '2A', text: "A) Узнаваемые “фирменные” ракурсы, игра с жанрами, постмодерн", points: ['Tarantino', 'Bertolucci'] },
      { id: '2B', text: "B) Симметрия, выверенность, кадр как архитектура", points: ['Kubrick', 'Hitchcock'] },
      { id: '2C', text: "C) “Дышащий” кадр, стихии, тишина, время", points: ['Tarkovsky', 'Fellini'] },
      { id: '2D', text: "D) Реальность без глянца: грубо, смешно и больно одновременно", points: ['Balabanov', 'Kurosawa'] }
    ]
  },
  {
    id: 3,
    text: "Как вы общаетесь со зрителем?",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
    options: [
      { id: '3A', text: "A) Провоцирую: пусть смеётся и морщится одновременно", points: ['Tarantino', 'Balabanov'] },
      { id: '3B', text: "B) Веду как иллюзионист: зритель думает, что сам всё понял", points: ['Hitchcock', 'Kubrick'] },
      { id: '3C', text: "C) Оставляю пространство для тишины и личной интерпретации", points: ['Tarkovsky', 'Bergman'] },
      { id: '3D', text: "D) Обнимаю историей: хочу, чтобы пережил и вышел вдохновлённым", points: ['Spielberg', 'Kurosawa'] }
    ]
  },
  {
    id: 4,
    text: "Что вы выберете как главный инструмент режиссуры?",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000",
    options: [
      { id: '4A', text: "A) Актёр: лицо, взгляд, пауза — это и есть кино", points: ['Bergman', 'Bertolucci'] },
      { id: '4B', text: "B) Камера и монтаж: движение/склейка управляют смыслом", points: ['Kurosawa', 'Kubrick'] },
      { id: '4C', text: "C) Звук и тишина: мир фильма слышен кожей", points: ['Tarkovsky', 'Hitchcock'] },
      { id: '4D', text: "D) Мизансцена как спектакль: карнавал, гротеск, фантазия", points: ['Fellini', 'Tarantino'] }
    ]
  },
  {
    id: 5,
    text: "Какой конфликт вам интереснее?",
    imageUrl: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80&w=1000",
    options: [
      { id: '5A', text: "A) Моральный выбор в мире хаоса, где честь и сила — в деталях", points: ['Kurosawa', 'Spielberg'] },
      { id: '5B', text: "B) Психология, вина, вера, страх: человек против самого себя", points: ['Bergman', 'Tarkovsky'] },
      { id: '5C', text: "C) Политика + страсть: когда личное и общественное неразделимы", points: ['Bertolucci', 'Fellini'] },
      { id: '5D', text: "D) “Герой своего времени”: хроника эпохи через очень живых людей", points: ['Balabanov', 'Tarantino'] }
    ]
  },
  {
    id: 6,
    text: "Ваш темп — это…",
    imageUrl: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&q=80&w=1000",
    options: [
      { id: '6A', text: "A) Быстро, хлёстко, музыкально (ритм важнее логики)", points: ['Tarantino', 'Fellini'] },
      { id: '6B', text: "B) Медленно и гипнотично (время — главный герой)", points: ['Tarkovsky', 'Bergman'] },
      { id: '6C', text: "C) Холодно и точно (каждый сантиметр кадра — смысл)", points: ['Kubrick', 'Hitchcock'] },
      { id: '6D', text: "D) Драйвово и зрелищно (но с человеческим теплом внутри)", points: ['Spielberg', 'Kurosawa'] }
    ]
  },
  {
    id: 7,
    text: "На площадке вы скорее…",
    imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1000",
    options: [
      { id: '7A', text: "A) Перфекционист: бесконечно довожу до идеала", points: ['Kubrick', 'Hitchcock'] },
      { id: '7B', text: "B) Психолог: ищу правду в актёре, вытаскиваю внутренний нерв", points: ['Bergman', 'Bertolucci'] },
      { id: '7C', text: "C) Авантюрист: люблю риск, импровизацию и живую энергию", points: ['Tarantino', 'Fellini'] },
      { id: '7D', text: "D) Производственник: умею собирать сложное кино так, чтобы работало на зрителя", points: ['Spielberg', 'Kurosawa'] }
    ]
  },
  {
    id: 8,
    text: "Какое “послевкусие” вы хотите оставить?",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1000",
    options: [
      { id: '8A', text: "A) “Меня потрясло — это было как сон/воспоминание/молитва”", points: ['Tarkovsky', 'Fellini'] },
      { id: '8B', text: "B) “Меня перехитрили — и я хочу пересмотреть, чтобы всё уложилось”", points: ['Hitchcock', 'Kubrick'] },
      { id: '8C', text: "C) “Это было одновременно смешно и страшно правдиво про жизнь”", points: ['Balabanov', 'Bergman'] },
      { id: '8D', text: "D) “Я вышел с ощущением надежды и большой истории”", points: ['Spielberg', 'Kurosawa'] }
    ]
  },
  {
    id: 9,
    text: "Что вы чаще всего “узнаёте” в любимом кино?",
    imageUrl: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&q=80&w=1000",
    options: [
      { id: '9A', text: "A) Авторский язык из цитат и жанров, где насилие/ирония — часть игры", points: ['Tarantino', 'Bertolucci'] },
      { id: '9B', text: "B) Саспенс: вы чувствуете, как вас ведут по тонкой нитке тревоги", points: ['Hitchcock', 'Kubrick'] },
      { id: '9C', text: "C) Стихии и детали мира: дождь/ветер/вода как символы внутреннего состояния", points: ['Tarkovsky', 'Kurosawa'] },
      { id: '9D', text: "D) Свет “откровения”: блики/прожекторы/сияние как чувство надежды", points: ['Spielberg', 'Fellini'] }
    ]
  }
];
