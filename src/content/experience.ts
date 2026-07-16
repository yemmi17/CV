export const experience = [
  {
    company: "Cloud Infrastructure Team", // TODO: replace company name.
    role: "Site Reliability Engineer",
    period: "2023 — Present", // TODO: replace dates.
    summary: { en: "Operating and improving production infrastructure across cloud and on-prem environments.", ru: "Эксплуатация и развитие production-инфраструктуры в облачных и on-prem окружениях." },
    outcomes: {
      en: ["Coordinated OS upgrades across 100+ servers", "Upgraded Kubernetes clusters with controlled rollback paths", "Built observability with Prometheus, Grafana and OpenSearch", "Automated routine operations through Ansible, AWX, Bash and Python"],
      ru: ["Организовал обновление ОС на 100+ серверах", "Обновлял Kubernetes-кластеры с контролируемым откатом", "Развивал observability на Prometheus, Grafana и OpenSearch", "Автоматизировал операции через Ansible, AWX, Bash и Python"],
    },
    stack: ["Kubernetes", "Linux", "Vault", "HAProxy", "Prometheus", "Ansible"],
  },
] as const;
