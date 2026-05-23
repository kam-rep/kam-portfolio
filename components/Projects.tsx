const projects = [
  {
    title: "RCM Healthcare Platform",
    description:
      "Designed and managed scalable healthcare infrastructure on GKE with GitOps, Kafka, autoscaling, and zero-downtime deployments.",
    tech: ["GKE", "ArgoCD", "Kafka", "Terraform", "MongoDB"],
  },
  {
    title: "Perla 2.0 Platform",
    description:
      "Built containerized AWS ECS infrastructure with Terraform automation, CloudWatch observability, and secure multi-tenant deployments.",
    tech: ["AWS ECS", "Terraform", "CloudWatch", "Route53", "API Gateway"],
  },
  {
    title: "GitOps & Helm Migration",
    description:
      "Migrated Kubernetes workloads from manual deployments to ArgoCD GitOps workflows with reusable Helm chart templates.",
    tech: ["Kubernetes", "Helm", "ArgoCD", "GitOps"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12">
        <p className="text-cyan-400">
          Production Work
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Real-world cloud and DevOps engineering projects
          focused on scalability, automation, observability,
          and production reliability.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group transform rounded-2xl border border-gray-800 bg-gray-900/40 p-8 transition duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:bg-gray-900/70"
          >
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}