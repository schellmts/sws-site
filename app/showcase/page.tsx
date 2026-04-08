"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";

import { useShowcaseGsap } from "../hooks/use-showcase-gsap";

type SortOrder = "newest" | "oldest";

type Project = {
  name: string;
  kind: string;
  yearLabel: string;
  /** Maior = mais recente (inclui projetos futuros / “em breve”). */
  yearSort: number;
  summary: string;
  stack: string[];
  impact: string[];
  image: string;
  url?: string | null;
};

const projectsSource: Project[] = [
  {
    name: "LuthierBase",
    kind: "SaaS · instrumentos de corda",
    yearLabel: "Em breve",
    yearSort: 0,
    summary:
      "Sistema em desenvolvimento para luthiers: organização de serviços, instrumentos e rotinas do oficina, com foco em clareza e controle do trabalho artesanal.",
    stack: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    impact: [
      "Cadastro de instrumentos e histórico de intervenções",
      "Fluxos voltados ao dia a dia do luthier",
      "Lançamento previsto após validação com usuários",
    ],
    image: "/LuthierBase2.png",
    url: null,
  },
  {
    name: "Adec Transporte Executivo",
    kind: "Site institucional",
    yearLabel: "2025",
    yearSort: 2025,
    summary:
      "Site institucional para transporte executivo em Guarapuava e região, com serviços, apresentação da frota e canais de contato voltados à credibilidade e à conversão.",
    stack: ["Next.js", "Tailwind CSS", "WhatsApp"],
    impact: [
      "Solicitação de agendamento e orçamento diretamente pela página",
      "Destaque para frota e para o portfólio de serviços",
      "Dados de contato e atendimento de forma visível",
    ],
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=80&auto=format&fit=crop",
    url: "https://www.adectransporteexecutivo.com.br/",
  },
  {
    name: "Lata Velha Guarapuava",
    kind: "Comércio de peças",
    yearLabel: "2024",
    yearSort: 2024.2,
    summary:
      "Site para comércio de peças automotivas usadas, com catálogo, galeria, presença em marketplaces e canais de atendimento ao cliente.",
    stack: ["HTML", "CSS", "JavaScript", "E-mail"],
    impact: [
      "Exibição de veículos e linhas de peças",
      "Formulário e WhatsApp para solicitações",
      "Publicação com certificado de segurança e domínio próprio",
    ],
    image: "/lata.png",
    url: "https://latavelhaguarapuava.com.br/",
  },
  {
    name: "Portfólio pessoal",
    kind: "Site pessoal",
    yearLabel: "2024",
    yearSort: 2024.1,
    summary:
      "Portfólio pessoal com apresentação profissional, serviços oferecidos, projetos em destaque e canal para mensagens e orçamentos.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    impact: [
      "Estrutura com páginas Sobre, Serviços e Projetos",
      "Formulário para orçamento e contato",
      "Hospedagem estável em GitHub Pages",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80&auto=format&fit=crop",
    url: "https://schellmts.github.io/personal-site/",
  },
];

const capabilities = [
  "SaaS e produtos digitais",
  "Automação de processos internos",
  "Arquitetura alinhada ao negócio",
  "Interfaces web rápidas e responsivas",
  "Integrações entre sistemas e APIs",
  "Monitoramento e confiabilidade em produção",
  "Acessibilidade e experiência do usuário",
  "Integração e entrega contínua de software",
];

function sortProjects(list: Project[], order: SortOrder): Project[] {
  const published = list.filter((p) => p.url);
  const upcoming = list.filter((p) => !p.url);
  const byYearDesc = (a: Project, b: Project) => b.yearSort - a.yearSort;
  const byYearAsc = (a: Project, b: Project) => a.yearSort - b.yearSort;
  const sortedPublished =
    order === "newest"
      ? [...published].sort(byYearDesc)
      : [...published].sort(byYearAsc);
  /* LuthierBase (em breve) permanece em destaque no topo; o restante segue o ano. */
  return [...upcoming, ...sortedPublished];
}

export default function ShowcasePage() {
  const scopeRef = useRef<HTMLElement>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  useShowcaseGsap(scopeRef);

  const projects = useMemo(
    () => sortProjects(projectsSource, sortOrder),
    [sortOrder],
  );

  return (
    <main
      ref={scopeRef}
      className="min-h-screen bg-background px-5 pb-20 pt-28 text-foreground sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <header
          data-showcase-hero
          className="rounded-2xl border border-zinc-200/90 bg-white/80 p-6 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#5c5470] dark:text-[#9d96ab]">
                Projetos
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                Seleção de projetos de referência
              </h1>
              <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                A seguir, exemplos de trabalhos com endereço público na internet. A
                atuação inclui também{" "}
                <span className="text-zinc-800 dark:text-zinc-200">
                  soluções em SaaS e automação de processos internos
                </span>{" "}
                em ambiente corporativo. Por confidencialidade e por políticas de
                tecnologia da informação, esses sistemas não constam nesta página.
              </p>
            </div>
            <Link
              href="/"
              scroll={false}
              className="inline-flex rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/30"
            >
              Voltar à página inicial
            </Link>
          </div>
        </header>

        <section
          data-showcase-stagger
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((item) => (
            <div
              key={item}
              data-showcase-stagger-item
              className="rounded-xl border border-zinc-200/90 bg-zinc-50/80 px-4 py-3 text-sm text-zinc-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-300"
            >
              {item}
            </div>
          ))}
        </section>

        <section
          data-showcase-stagger
          className="mt-8 rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#5c5470] dark:text-[#9d96ab]">
            Atuação complementar
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Parte relevante da entrega concentra-se em sistemas internos: fluxos
            operacionais, integração entre ferramentas, painéis de acompanhamento e
            rotinas que reduzem retrabalho e dependência excessiva de planilhas.
            Trata-se de projetos efetivos; contudo, não é possível divulgar telas
            nem identificar empresas. Esses pontos podem ser tratados em reunião,
            conforme o escopo de cada demanda.
          </p>
        </section>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#5c5470] dark:text-[#9d96ab]">
              Referências públicas
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Sites e portfólios disponíveis para consulta
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
              Resumo do contexto, tecnologias empregadas, principais entregas e acesso
              ao endereço de cada projeto. O LuthierBase (em breve) aparece primeiro;
              os demais podem ser ordenados do mais recente ao mais antigo, ou o inverso.
            </p>
          </div>
          <div
            className="flex shrink-0 flex-col gap-2 sm:items-end"
            role="group"
            aria-label="Ordenação dos projetos por período"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
              Ordenar por ano
            </span>
            <div className="inline-flex rounded-full border border-zinc-200/90 bg-zinc-100/80 p-1 dark:border-white/[0.1] dark:bg-white/[0.04]">
              <button
                type="button"
                onClick={() => setSortOrder("newest")}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  sortOrder === "newest"
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                Mais novo → mais antigo
              </button>
              <button
                type="button"
                onClick={() => setSortOrder("oldest")}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  sortOrder === "oldest"
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                Mais antigo → mais novo
              </button>
            </div>
          </div>
        </div>

        <section
          key={sortOrder}
          data-showcase-stagger
          className="mt-8 grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <article
              key={project.name}
              data-showcase-stagger-item
              className="group overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition hover:border-[#4A4458]/45 dark:border-white/[0.1] dark:bg-zinc-950/95 dark:[background-image:linear-gradient(155deg,rgba(74,68,88,0.2)_0%,rgba(5,5,5,0.45)_50%,transparent_80%)]"
            >
              <div
                data-showcase-parallax
                className="relative aspect-[16/9] overflow-hidden"
              >
                <div
                  data-showcase-parallax-inner
                  className="absolute inset-0 h-[112%] w-full"
                  style={{ top: "-6%" }}
                >
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
                  {project.yearLabel}
                </span>
              </div>

              <div className="space-y-5 p-6">
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Tecnologias
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
                    Principais entregas
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {project.impact.map((metric) => (
                      <li key={metric} className="rounded-lg bg-zinc-50 px-3 py-2 dark:bg-white/[0.03]">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-[#4A4458]/50 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-white/30 dark:hover:bg-white/[0.08]"
                  >
                    Acessar o site
                  </a>
                ) : (
                  <span
                    className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-dashed border-zinc-300 bg-zinc-50/80 px-4 py-2.5 text-sm font-medium text-zinc-500 dark:border-white/15 dark:bg-white/[0.02] dark:text-zinc-500"
                    aria-disabled
                  >
                    Em breve
                  </span>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
