interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  showArchives: boolean;
  lang: string;
}

export const SITE: Site = {
  website: "https://example.com/",
  author: "Nikita Borisov",
  profile: "https://www.linkedin.com/in/nikita-borisov-34b1b9381/",
  desc: "SRE/DevOps engineer focused on cloud infrastructure, reliability, automation, and practical AI adoption.",
  title: "Nikita Borisov",
  ogImage: "avatar.jpg",
  lightAndDarkMode: true,
  showArchives: false,
  lang: "en",
};
