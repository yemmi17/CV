export type Locale = "en" | "ru";

export const experience = [
  {
    slug: "vtb-cloud",
    company: "VTB Cloud",
    role: "SRE Engineer",
    period: "Aug 2025 — Present",
    range: { start: "2025-08", end: null },
    summary: {
      en: "Operating and improving production infrastructure across cloud and on-prem environments.",
      ru: "Эксплуатация и развитие production-инфраструктуры в облачных и on-prem окружениях.",
    },
    focus: {
      en: ["Production reliability", "Platform operations", "Observability", "Automation"],
      ru: ["Надёжность production", "Эксплуатация платформы", "Observability", "Автоматизация"],
    },
    outcomes: {
      en: ["Coordinated OS upgrades across 100+ servers", "Upgraded Kubernetes clusters with controlled rollback paths", "Built observability with Prometheus, Grafana and OpenSearch", "Automated routine operations through Ansible, AWX, Bash and Python"],
      ru: ["Организовал обновление ОС на 100+ серверах", "Обновлял Kubernetes-кластеры с контролируемым откатом", "Развивал observability на Prometheus, Grafana и OpenSearch", "Автоматизировал операции через Ansible, AWX, Bash и Python"],
    },
    responsibilities: {
      en: ["Maintain and optimize cloud and on-prem infrastructure", "Plan safe changes to operating systems and Kubernetes clusters", "Operate Vault, HAProxy and load-balancing layers", "Develop monitoring and participate in incident response and production releases"],
      ru: ["Поддерживать и оптимизировать облачную и on-prem инфраструктуру", "Планировать безопасные изменения ОС и Kubernetes-кластеров", "Эксплуатировать Vault, HAProxy и системы балансировки", "Развивать мониторинг, участвовать в инцидентах и production-релизах"],
    },
    narrative: {
      en: ["This period is focused on making infrastructure changes predictable: explicit rollout stages, visible signals and practical rollback paths.", "The work combines hands-on operations with automation. Repeated procedures are moved into Ansible, AWX, Bash or Python so that production work is reviewable and reproducible."],
      ru: ["Этот период сфокусирован на предсказуемых инфраструктурных изменениях: явных этапах rollout, наблюдаемых сигналах и практичных сценариях отката.", "Работа сочетает эксплуатацию и автоматизацию. Повторяемые процедуры переносятся в Ansible, AWX, Bash или Python, чтобы production-операции были воспроизводимыми и проверяемыми."],
    },
    stack: ["Kubernetes", "Linux", "Vault", "HAProxy", "Prometheus", "Grafana", "OpenSearch", "Ansible", "AWX", "Python"],
  },
  {
    slug: "mai-digital-department",
    company: "Digital Department of the Moscow Aviation Institute",
    role: "MLOps / DevOps Engineer",
    period: "Dec 2024 — Jun 2025",
    range: { start: "2024-12", end: "2025-06" },
    summary: {
      en: "Supported educational and applied infrastructure at the intersection of DevOps and machine learning operations.",
      ru: "Поддерживал учебную и прикладную инфраструктуру на пересечении DevOps и эксплуатации ML-систем.",
    },
    focus: {
      en: ["Reproducible environments", "CI/CD", "Infrastructure automation"],
      ru: ["Воспроизводимые окружения", "CI/CD", "Автоматизация инфраструктуры"],
    },
    outcomes: {
      en: ["Prepared reproducible development and deployment environments", "Automated routine infrastructure workflows", "Supported CI/CD practices for engineering projects"],
      ru: ["Готовил воспроизводимые среды разработки и развёртывания", "Автоматизировал типовые инфраструктурные операции", "Поддерживал CI/CD-практики инженерных проектов"],
    },
    responsibilities: {
      en: ["Containerize development workloads", "Support Linux-based environments", "Automate setup and delivery tasks", "Document repeatable engineering workflows"],
      ru: ["Контейнеризировать среды разработки", "Поддерживать Linux-окружения", "Автоматизировать настройку и доставку", "Документировать воспроизводимые инженерные процессы"],
    },
    narrative: {
      en: ["The role established the habit of treating environments as code rather than one-off machine state.", "It connected development needs with operational constraints and made delivery workflows easier to repeat, inspect and hand over."],
      ru: ["Этот этап сформировал привычку относиться к окружениям как к коду, а не как к уникальному состоянию отдельных машин.", "Работа связывала потребности разработки с эксплуатационными ограничениями и делала процессы доставки воспроизводимыми, прозрачными и передаваемыми."],
    },
    stack: ["Python", "Docker", "Linux", "Git", "CI/CD"],
  },
] as const;

export function getExperience(slug: string) {
  return experience.find((item) => item.slug === slug);
}
