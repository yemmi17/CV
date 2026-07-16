export const experience = [
  {
    company: "VTB Cloud",
    role: "SRE Engineer",
    period: "Aug 2025 — Present",
    summary: { en: "Operating and improving production infrastructure across cloud and on-prem environments.", ru: "Эксплуатация и развитие production-инфраструктуры в облачных и on-prem окружениях." },
    outcomes: {
      en: ["Coordinated OS upgrades across 100+ servers", "Upgraded Kubernetes clusters with controlled rollback paths", "Built observability with Prometheus, Grafana and OpenSearch", "Automated routine operations through Ansible, AWX, Bash and Python"],
      ru: ["Организовал обновление ОС на 100+ серверах", "Обновлял Kubernetes-кластеры с контролируемым откатом", "Развивал observability на Prometheus, Grafana и OpenSearch", "Автоматизировал операции через Ansible, AWX, Bash и Python"],
    },
    stack: ["Kubernetes", "Linux", "Vault", "HAProxy", "Prometheus", "Ansible"],
  },
  {
    company: "Digital Department of the Moscow Aviation Institute",
    role: "MLOps / DevOps Engineer",
    period: "Dec 2024 — Jun 2025",
    summary: { en: "Supported educational and applied infrastructure at the intersection of DevOps and machine learning operations.", ru: "Поддерживал учебную и прикладную инфраструктуру на пересечении DevOps и эксплуатации ML-систем." },
    outcomes: {
      en: ["Prepared reproducible development and deployment environments", "Automated routine infrastructure workflows", "Supported CI/CD practices for engineering projects"],
      ru: ["Готовил воспроизводимые среды разработки и развёртывания", "Автоматизировал типовые инфраструктурные операции", "Поддерживал CI/CD-практики инженерных проектов"],
    },
    stack: ["Python", "Docker", "Linux", "Git", "CI/CD"],
  },
] as const;
