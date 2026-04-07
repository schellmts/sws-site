import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Pulse Commerce",
    kind: "E-commerce B2B",
    year: "2026",
    summary:
      "Plataforma de pedidos para distribuidores com catálogo dinâmico, gestão de preços por cliente e checkout em 2 etapas.",
    stack: ["Next.js", "Node", "PostgreSQL", "Redis"],
    impact: ["-38% tempo de fechamento", "+22% ticket médio", "99.95% uptime"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop",
  },
  {
    name: "OpsBoard AI",
    kind: "Dashboard operacional",
    year: "2025",
    summary:
      "Painel para monitorar filas, incidentes e SLA em tempo real com alertas inteligentes e ações automatizadas.",
    stack: ["React", "TypeScript", "WebSockets", "Docker"],
    impact: ["-51% MTTR", "+40% previsibilidade", "-27% custo operacional"],
    image:
      "https://images.unsplash.com/photo-1551281044-8b9a7d3d1f17?w=1400&q=80&auto=format&fit=crop",
  },
  {
    name: "Clinic Flow",
    kind: "SaaS saúde",
    year: "2025",
    summary:
      "Aplicação para clínicas com agenda inteligente, prontuário digital e automações de confirmação por canal.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    impact: ["-33% faltas", "+29% produtividade", "NPS 74"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80&auto=format&fit=crop",
  },
  {
    name: "Talent Grid",
    kind: "Portal RH",
    year: "2024",
    summary:
      "Portal de recrutamento com trilha técnica, avaliação customizável e integração com ATS de mercado.",
    stack: ["Next.js", "Tailwind", "Supabase", "CI/CD"],
    impact: ["-44% tempo de contratação", "+31% conversão", "A11y AA"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80&auto=format&fit=crop",
  },
];

const capabilities = [
  "Arquitetura orientada a domínio",
  "Front-end de alta performance",
  "APIs e integrações críticas",
  "Observabilidade e SRE",
  "Acessibilidade e UX técnica",
  "Automação CI/CD",
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-background px-5 pb-20 pt-28 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="rounded-2xl border border-zinc-200/90 bg-white/80 p-6 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#5c5470] dark:text-[#9d96ab]">
                Showcase de projetos
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                Projetos entregues com impacto mensurável
              </h1>
              <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                Exemplos mockados para apresentar formato de entrega: contexto,
                stack, solução e resultados de negócio.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/30"
            >
              Voltar para landing
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-zinc-200/90 bg-zinc-50/80 px-4 py-3 text-sm text-zinc-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-300"
            >
              {item}
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition hover:border-[#4A4458]/45 dark:border-white/[0.1] dark:bg-zinc-950/95 dark:[background-image:linear-gradient(155deg,rgba(74,68,88,0.2)_0%,rgba(5,5,5,0.45)_50%,transparent_80%)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 h-[112%] w-full" style={{ top: "-6%" }}>
                  <Image
                    src={project.image}
                    alt={`Projeto ${project.name}`}
                    width={1400}
                    height={788}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-200/90">
                    {project.kind}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-white">
                    {project.name}
                  </h2>
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-100">
                  {project.year}
                </span>
              </div>

              <div className="space-y-5 p-6">
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Stack utilizada
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-200/90 bg-zinc-50 px-2.5 py-1 font-mono text-[10px] text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Resultado
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {project.impact.map((metric) => (
                      <li key={metric} className="rounded-lg bg-zinc-50 px-3 py-2 dark:bg-white/[0.03]">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
