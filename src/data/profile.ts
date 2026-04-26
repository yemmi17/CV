export type Locale = "en" | "ru";

export interface ProfileSection {
  title: string;
  body: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export interface ListingPageContent {
  title: string;
  description: string;
  intro: string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export interface ProfileContent {
  locale: Locale;
  siteTitle: string;
  siteDescription: string;
  heroTitle: string;
  heroSummary: string;
  navAbout: string;
  footerTagline: string;
  switchLanguageLabel: string;
  homeSections: ProfileSection[];
  aboutTitle: string;
  aboutDescription: string;
  aboutIntro: string[];
  aboutSections: Array<{
    title: string;
    items: string[];
  }>;
  projectsPage: ListingPageContent;
  projects: ProjectItem[];
  blogPage: Required<Pick<ListingPageContent, "title" | "description" | "intro">> & {
    emptyTitle: string;
    emptyDescription: string;
    publishedLabel: string;
    tagsLabel: string;
  };
  contactTitle: string;
  contactDescription: string;
  contactIntro: string;
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
    navAbout: "About",
    footerTagline:
      "Nikita Borisov. SRE/DevOps engineer writing about infrastructure, automation, and AI.",
    switchLanguageLabel: "Russian",
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
      {
        title: "Contacts",
        body: "You can reach me through GitHub, LinkedIn, Telegram, or email. I am open to professional conversations, collaboration, and sharing notes from real infrastructure work.",
      },
    ],
    aboutTitle: "About",
    aboutDescription: "Background, stack, and professional interests of Nikita Borisov.",
    aboutIntro: [
      "My name is Nikita Borisov, and I often go by Nik in English-speaking contexts.",
      "I have more than 1.5 years of industry experience and currently work as an SRE/DevOps engineer focused on cloud infrastructure in a large Russian bank.",
    ],
    aboutSections: [
      {
        title: "What I Do",
        items: [
          "Work with infrastructure reliability, operational routines, and engineering support around production systems.",
          "Handle a broad SRE/DevOps stack rather than a single narrow domain.",
          "Focus on solutions that are practical, maintainable, and useful for the team.",
        ],
      },
      {
        title: "What I Work With",
        items: [
          "Linux server administration and day-to-day platform operations.",
          "Observability tooling, monitoring practices, and database-related work.",
          "Basic programming in Python, C++, and Bash for automation and internal tools.",
        ],
      },
      {
        title: "Current Interests",
        items: [
          "Applying AI to engineering automation in ways that save time and reduce repetitive manual work.",
          "Building a stronger understanding of systems beyond my immediate responsibilities.",
          "Turning small scripts and experiments into useful workflow improvements.",
        ],
      },
      {
        title: "Beyond Work",
        items: [
          "Participate in hackathons, CTF events, and other technical competitions.",
          "Enjoy fast feedback loops, hands-on problem solving, and learning by doing.",
        ],
      },
    ],
    projectsPage: {
      title: "Projects",
      description:
        "Selected infrastructure, automation, and reliability projects by Nikita Borisov.",
      intro:
        "A focused list of practical engineering work around infrastructure, automation, observability, and delivery workflows.",
    },
    projects: [
      {
        title: "Cloud Blog Platform",
        description: "Highly available AWS platform with autoscaling and observability.",
        tags: ["AWS", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
      },
      {
        title: "K8s GitOps Boilerplate",
        description: "Reusable deployment baseline for Argo CD and Helm delivery.",
        tags: ["GitHub Actions", "Argo CD", "Helm", "Kubernetes"],
      },
      {
        title: "Observability Stack",
        description: "Prometheus, Grafana, and Loki setup for useful production visibility.",
        tags: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
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
    contactTitle: "Contacts",
    contactDescription: "Ways to contact Nikita Borisov for professional conversations.",
    contactIntro:
      "I am open to professional conversations, collaboration, and sharing notes from real infrastructure work.",
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
    navAbout: "Обо мне",
    footerTagline:
      "Nikita Borisov. SRE/DevOps инженер, заметки об инфраструктуре, автоматизации и AI.",
    switchLanguageLabel: "English",
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
      {
        title: "Контакты",
        body: "Для связи доступны GitHub, LinkedIn, Telegram и email. Открыт к профессиональному общению, совместным проектам и обмену практическим опытом.",
      },
    ],
    aboutTitle: "Обо мне",
    aboutDescription: "Кратко обо мне, опыте, рабочем стеке и профессиональных интересах.",
    aboutIntro: [
      "Меня зовут Никита Борисов. В англоязычной среде обычно использую имя Nik.",
      "У меня более 1.5 лет опыта в индустрии, сейчас я работаю SRE/DevOps инженером с фокусом на облачную инфраструктуру в крупном российском банке.",
    ],
    aboutSections: [
      {
        title: "Чем я занимаюсь",
        items: [
          "Работаю с надежностью инфраструктуры, эксплуатационными процессами и инженерной поддержкой production-систем.",
          "Закрываю широкий круг SRE/DevOps-задач, а не только одну узкую область.",
          "Стараюсь делать решения практичными, поддерживаемыми и полезными для команды.",
        ],
      },
      {
        title: "С чем я работаю",
        items: [
          "Администрирование Linux-серверов и повседневные платформенные задачи.",
          "Observability-инструменты, мониторинг и работа с базами данных.",
          "Базовая разработка на Python, C++ и Bash для автоматизации и небольших внутренних инструментов.",
        ],
      },
      {
        title: "Что мне сейчас интересно",
        items: [
          "Применение AI в инженерной автоматизации без хайпа, как реального рабочего инструмента.",
          "Расширение системного кругозора за пределами текущей зоны ответственности.",
          "Превращение небольших скриптов и экспериментов в полезные улучшения повседневных процессов.",
        ],
      },
      {
        title: "Помимо работы",
        items: [
          "Участвую в хакатонах, CTF и других технических соревнованиях.",
          "Люблю среду, где можно быстро учиться, проверять гипотезы и решать задачи руками.",
        ],
      },
    ],
    projectsPage: {
      title: "Проекты",
      description: "Избранные инфраструктурные, automation и reliability-проекты Никиты Борисова.",
      intro:
        "Список практических инженерных работ вокруг инфраструктуры, автоматизации, observability и delivery-процессов.",
    },
    projects: [
      {
        title: "Cloud Blog Platform",
        description: "Высокодоступная AWS-платформа с автомасштабированием и observability.",
        tags: ["AWS", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
      },
      {
        title: "K8s GitOps Boilerplate",
        description: "Переиспользуемый deployment-базис для доставки через Argo CD и Helm.",
        tags: ["GitHub Actions", "Argo CD", "Helm", "Kubernetes"],
      },
      {
        title: "Observability Stack",
        description: "Стек Prometheus, Grafana и Loki для полезной видимости production-систем.",
        tags: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
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
    contactTitle: "Контакты",
    contactDescription: "Способы связаться с Никитой Борисовым для профессионального общения.",
    contactIntro:
      "Открыт к профессиональному общению, совместным проектам и обмену практическим опытом из инфраструктурной работы.",
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
