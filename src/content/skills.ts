export const skillGroups = {
  Infrastructure: ["Linux", "Kubernetes", "Docker", "Nginx", "HAProxy", "Load Balancing"],
  Monitoring: ["Prometheus", "VictoriaMetrics", "Grafana", "Blackbox Exporter", "Node Exporter"],
  "CI/CD & Automation": ["Jenkins", "GitLab CI", "Ansible", "AWX", "Bash", "Python"],
  "Databases & Messaging": ["PostgreSQL", "Kafka", "Redis"],
  Tools: ["Git", "Helm", "ELK", "Vault", "Keycloak"],
} as const;
