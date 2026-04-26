export type Locale = "en" | "ru";

export interface ProfileSection {
  title: string;
  body: string;
}

export interface BlogPageContent {
  title: string;
  description: string;
  intro: string;
  emptyTitle: string;
  emptyDescription: string;
  publishedLabel: string;
  tagsLabel: string;
}

export interface ProfileContent {
  locale: Locale;
  siteTitle: string;
  siteDescription: string;
  heroTitle: string;
  heroSummary: string;
  footerTagline: string;
  homeSections: ProfileSection[];
  blogPage: BlogPageContent;
  contacts: Array<{
    label: string;
    href: string;
    text: string;
  }>;
}

export const profileContent: Record<Locale, ProfileContent> = {
  en: {
    locale: "en",
    siteTitle: "Nikita Borisov",
    siteDescription:
      "SRE/DevOps engineer focused on cloud infrastructure, reliability, automation, and practical AI adoption.",
    heroTitle: "SRE / DevOps Engineer",
    heroSummary:
      "I write about infrastructure, automation, system reliability, and the craft of building calmer production environments.",
    footerTagline:
      "Nikita Borisov. SRE/DevOps engineer writing about infrastructure, automation, and AI.",
    homeSections: [
      {
        title: "Current Role",
        body: "I work with cloud infrastructure and day-to-day reliability engineering tasks in a large banking environment, where stability, observability, and operational discipline matter.",
      },
      {
        title: "Core Stack",
        body: "My working toolbox spans Linux administration, observability practices, databases, automation, and the surrounding SRE/DevOps ecosystem needed to keep services running predictably.",
      },
      {
        title: "Engineering Approach",
        body: "I do not position myself as a narrow specialist in a single technology. My strength is understanding enough of the full stack to connect systems, automate routine work, and move toward practical solutions.",
      },
      {
        title: "AI and Automation",
        body: "Alongside my main role, I am actively exploring how AI can be used in engineering automation in a practical way: saving time, reducing repetitive work, and helping navigate complex systems faster.",
      },
      {
        title: "Community",
        body: "Outside of work I take part in hackathons, CTFs, and other technical activities that reward fast learning, experimentation, and problem-solving under time pressure.",
      },
    ],
    blogPage: {
      title: "Blog",
      description:
        "Notes about infrastructure, automation, reliability, and practical AI adoption.",
      intro:
        "Longer technical notes will live here. Posts are loaded from the Astro content collection in src/content/blog.",
      emptyTitle: "No posts yet",
      emptyDescription:
        "The blog collection is ready, but there are no published posts yet. Add Markdown or MDX files under src/content/blog to publish the first article.",
      publishedLabel: "Published",
      tagsLabel: "Tags",
    },
    contacts: [
      { label: "GitHub", href: "https://github.com/yemmi17", text: "github.com/yemmi17" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/nikita-borisov-34b1b9381/",
        text: "nikita-borisov-34b1b9381",
      },
      { label: "Telegram", href: "https://t.me/Yemmi0", text: "@Yemmi0" },
      {
        label: "Email",
        href: "mailto:nikitabrworkjob@gmail.com",
        text: "nikitabrworkjob@gmail.com",
      },
    ],
  },
  ru: {
    locale: "ru",
    siteTitle: "Nikita Borisov",
    siteDescription:
      "SRE/DevOps инженер, сфокусированный на облачной инфраструктуре, надежности, автоматизации и практическом применении AI.",
    heroTitle: "SRE / DevOps Engineer",
    heroSummary:
      "Пишу об инфраструктуре, автоматизации, надежности систем и инженерном подходе к более спокойному production.",
    footerTagline:
      "Nikita Borisov. SRE/DevOps инженер, заметки об инфраструктуре, автоматизации и AI.",
    homeSections: [
      {
        title: "Текущая роль",
        body: "Работаю с облачной инфраструктурой и задачами reliability engineering в крупной банковской среде, где важны стабильность, observability и аккуратные эксплуатационные процессы.",
      },
      {
        title: "Рабочий стек",
        body: "Мой рабочий набор охватывает Linux-администрирование, observability, базы данных, автоматизацию и инструменты SRE/DevOps, нужные для предсказуемой поддержки production-сервисов.",
      },
      {
        title: "Инженерный подход",
        body: "Я не позиционирую себя как узкого специалиста в одной технологии. Моя сильная сторона в том, что я вижу систему целиком, связываю разные части стека и двигаюсь к практичным решениям.",
      },
      {
        title: "AI и автоматизация",
        body: "Параллельно с основной ролью изучаю, как AI может помогать в инженерной автоматизации: экономить время, сокращать ручные действия и ускорять разбор сложных систем.",
      },
      {
        title: "Сообщество",
        body: "Вне работы участвую в хакатонах, CTF и других технических активностях, где важны быстрое обучение, эксперименты и решение задач в ограниченное время.",
      },
    ],
    blogPage: {
      title: "Блог",
      description:
        "Заметки об инфраструктуре, автоматизации, надежности и практическом применении AI.",
      intro:
        "Здесь будут технические заметки. Посты загружаются из Astro content collection в src/content/blog.",
      emptyTitle: "Постов пока нет",
      emptyDescription:
        "Коллекция блога готова, но опубликованных постов пока нет. Добавь Markdown или MDX-файлы в src/content/blog, чтобы опубликовать первую статью.",
      publishedLabel: "Опубликовано",
      tagsLabel: "Теги",
    },
    contacts: [
      { label: "GitHub", href: "https://github.com/yemmi17", text: "github.com/yemmi17" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/nikita-borisov-34b1b9381/",
        text: "nikita-borisov-34b1b9381",
      },
      { label: "Telegram", href: "https://t.me/Yemmi0", text: "@Yemmi0" },
      {
        label: "Email",
        href: "mailto:nikitabrworkjob@gmail.com",
        text: "nikitabrworkjob@gmail.com",
      },
    ],
  },
};
