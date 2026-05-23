const skills = [
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Helm",
  "ArgoCD",
  "GitHub Actions",
  "Kafka",
  "Prometheus",
  "Grafana",
  "ELK Stack",
  "Cloud Run",
  "ECS",
  "Nginx",
  "Linux",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12">
        <p className="text-cyan-400">Technical Expertise</p>

        <h2 className="mt-2 text-4xl font-bold">
          Skills & Technologies
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Production-grade cloud and DevOps technologies
          used across Kubernetes, GitOps, CI/CD, observability,
          automation, and scalable infrastructure platforms.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl border border-gray-800 bg-gray-900/40 p-5 text-center text-gray-300 transition hover:border-cyan-400 hover:bg-gray-900"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}