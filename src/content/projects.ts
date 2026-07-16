export const projects = [
  { name: "Atlas", status: "In progress", description: { en: "An AI assistant and agent system with a Telegram interface.", ru: "AI-ассистент и агентная система с Telegram-интерфейсом." }, stack: ["Python", "AI Agents", "Telegram"] },
  { name: "VPN Infrastructure Platform", status: "Case study", description: { en: "Infrastructure and a management portal for secure VPN connections.", ru: "Инфраструктура и портал управления защищёнными VPN-подключениями." }, stack: ["Linux", "Ansible", "Networking"] },
  { name: "Kubernetes Observability", status: "Production", description: { en: "Cluster monitoring based on Prometheus, Grafana and VictoriaMetrics.", ru: "Мониторинг Kubernetes на базе Prometheus, Grafana и VictoriaMetrics." }, stack: ["Kubernetes", "Prometheus", "Grafana"] },
  { name: "Infrastructure Automation", status: "Maintained", description: { en: "Repeatable server operations and updates through Ansible and AWX.", ru: "Повторяемые серверные операции и обновления через Ansible и AWX." }, stack: ["Ansible", "AWX", "Python"] },
] as const;
