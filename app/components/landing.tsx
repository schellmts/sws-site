"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

import { useLandingGsap } from "../hooks/use-landing-gsap";
import { InnovationDnd } from "./innovation-dnd";
import { Magnetic } from "./magnetic";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#inovacao", label: "Inovação" },
  { href: "/showcase", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

const services: {
  tag: string;
  title: string;
  desc: string;
  examples: string;
  chips: string[];
  icon: "layers" | "terminal" | "cloud" | "grid";
  span?: "wide";
}[] = [
  {
    tag: "Front-end & produto",
    title: "Interfaces e produtos web",
    desc: "Criamos sites e plataformas fáceis de usar, rápidos e com visual profissional para apresentar sua empresa e vender melhor.",
    examples: "Sites institucionais, áreas do cliente e painéis de gestão.",
    chips: ["Site profissional", "Velocidade", "Acessibilidade"],
    icon: "layers",
    span: "wide",
  },
  {
    tag: "Integrações & automação",
    title: "Sistemas que conversam entre si",
    desc: "Ligamos seu site a WhatsApp, pagamento, CRM, ERP e outras ferramentas para reduzir trabalho manual e evitar retrabalho.",
    examples: "Formulário que vira lead no CRM, pedidos indo para o sistema interno.",
    chips: ["Integrações", "Automações", "Dados organizados"],
    icon: "terminal",
  },
  {
    tag: "Hospedagem & estabilidade",
    title: "Projeto no ar com segurança",
    desc: "Publicamos, monitoramos e mantemos seu projeto estável para que ele funcione bem em dias normais e em picos de acesso.",
    examples: "Atualizações sem cair o site, alertas de erro e backup recorrente.",
    chips: ["Estabilidade", "Segurança", "Monitoramento"],
    icon: "cloud",
  },
  {
    tag: "Experiência & consistência",
    title: "Interface clara e profissional",
    desc: "Definimos um padrão visual para que todas as telas tenham a mesma linguagem, transmitam confiança e sejam simples de navegar.",
    examples: "Botões e formulários padronizados, textos claros e fluxo sem confusão.",
    chips: ["UX simples", "Padrão visual", "Confiança"],
    icon: "grid",
    span: "wide",
  },
];

function ServiceIcon({
  name,
  className,
}: {
  name: "layers" | "terminal" | "cloud" | "grid";
  className?: string;
}) {
  const svg = (children: ReactNode) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
  switch (name) {
    case "layers":
      return svg(
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />,
      );
    case "terminal":
      return svg(
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m6.75 7.5 3 2.25-3 2.25M9.75 15h4.5M4.875 18.75h14.25a1.125 1.125 0 0 0 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H4.875A1.125 1.125 0 0 0 3.75 6.375v11.25c0 .621.504 1.125 1.125 1.125Z"
        />,
      );
    case "cloud":
      return svg(
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5h9.75a3.75 3.75 0 0 0 0-7.5h-.837a3.75 3.75 0 0 0-7.008-1.125A4.5 4.5 0 0 0 2.25 15Z"
        />,
      );
    case "grid":
      return svg(
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h3A2.25 2.25 0 0 1 11.25 6v3A2.25 2.25 0 0 1 9 11.25H6A2.25 2.25 0 0 1 3.75 9V6ZM13.5 6A2.25 2.25 0 0 1 15.75 3.75h3A2.25 2.25 0 0 1 21 6v3a2.25 2.25 0 0 1-2.25 2.25h-3A2.25 2.25 0 0 1 13.5 9V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h3a2.25 2.25 0 0 1 2.25 2.25V21A2.25 2.25 0 0 1 9 23.25H6A2.25 2.25 0 0 1 3.75 21v-5.25ZM13.5 15.75A2.25 2.25 0 0 1 15.75 13.5h3a2.25 2.25 0 0 1 2.25 2.25V21a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25v-5.25Z"
        />,
      );
  }
}

const process = [
  {
    step: "01",
    title: "Descoberta",
    text: "Alinhamos objetivos, métricas e restrições para um escopo enxuto.",
  },
  {
    step: "02",
    title: "Arquitetura",
    text: "Modelamos dados, contratos e a stack ideal para o seu contexto.",
  },
  {
    step: "03",
    title: "Entrega contínua",
    text: "Ciclos curtos, revisões frequentes e deploy previsível.",
  },
  {
    step: "04",
    title: "Evolução",
    text: "Monitoramento, melhorias e roadmap técnico junto do produto.",
  },
];

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
];

const solutionTopics: {
  title: string;
  audience: string;
  value: string;
  deliverables: string[];
}[] = [
  {
    title: "Agenda inteligente",
    audience: "Para clínicas, consultórios e serviços por horário",
    value:
      "Organiza atendimentos, evita conflitos de horário e reduz faltas com confirmações automáticas.",
    deliverables: ["Agendamento online", "Lembrete por WhatsApp", "Painel de horários"],
  },
  {
    title: "Calendário operacional",
    audience: "Para times com rotina de tarefas e prazos",
    value:
      "Centraliza compromissos, entregas e responsáveis em um calendário simples de acompanhar.",
    deliverables: ["Visão semanal/mensal", "Filtros por equipe", "Alertas de prazo"],
  },
  {
    title: "Controle interno",
    audience: "Para empresas que hoje usam planilhas soltas",
    value:
      "Cria um sistema interno para cadastro, aprovações e acompanhamento de processos com histórico.",
    deliverables: ["Perfis de acesso", "Fluxo de aprovação", "Relatórios básicos"],
  },
  {
    title: "Catálogo de apresentação",
    audience: "Para lojas, distribuidores e equipes comerciais",
    value:
      "Mostra produtos e serviços com organização visual, busca rápida e materiais para venda.",
    deliverables: ["Categorias e filtros", "Página de produto", "Link compartilhável"],
  },
  {
    title: "Integração entre sistemas",
    audience: "Para negócios com ferramentas que não conversam",
    value:
      "Conecta site, CRM, ERP e outros sistemas para eliminar retrabalho e manter dados sincronizados.",
    deliverables: ["Integração API", "Sincronização automática", "Tratamento de falhas"],
  },
];

function BrandLogo({
  width,
  height,
  className,
  priority,
}: {
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src="/logo-light.png"
        alt="Schell Web Services"
        width={width}
        height={height}
        className={`hidden h-auto dark:block ${className ?? ""}`}
        priority={priority}
      />
      <Image
        src="/logo-dark.png"
        alt=""
        width={width}
        height={height}
        className={`block h-auto dark:hidden ${className ?? ""}`}
        priority={priority}
        aria-hidden
      />
    </>
  );
}

export function Landing() {
  const scopeRef = useRef<HTMLDivElement>(null);
  useLandingGsap(scopeRef);

  return (
    <div
      ref={scopeRef}
      className="relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-500 ease-out"
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.5] dark:opacity-[0.45]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(74,68,88,0.14),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(74,68,88,0.35),transparent)]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_35%,transparent)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-200/90 bg-white/85 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#050505]/75">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-[4.25rem] sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <BrandLogo width={140} height={40} className="max-h-8 w-auto opacity-95" priority />
          </Link>
          <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium tracking-wide text-zinc-600 md:flex dark:text-zinc-400">
            {nav.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll={false}
                  className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href="#contato"
              className="rounded-full border border-zinc-300/90 bg-white px-3 py-2 text-sm font-medium tracking-wide text-zinc-900 shadow-sm transition hover:border-[#4A4458]/45 hover:bg-zinc-50 dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-100 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)] dark:hover:border-[#4A4458]/60 dark:hover:bg-[#4A4458]/20 sm:px-4"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-[100dvh] flex-col justify-center px-5 pb-20 pt-[5.25rem] sm:px-8 sm:pb-28 sm:pt-28">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-3xl space-y-8">
              <p
                data-hero-eyebrow
                className="font-mono text-xs uppercase tracking-[0.35em] text-[#5c5470] dark:text-[#9d96ab]"
              >
                Schell Web Services · desde 2024
              </p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight text-zinc-900 dark:text-white">
                <span className="block overflow-hidden pb-1">
                  <span className="hero-line-inner block">Software preciso.</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="hero-line-inner block">Entrega contínua.</span>
                </span>
              </h1>
              <p
                data-hero-sub
                className="max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400"
              >
                Desenvolvimento de software sob medida para quem precisa de
                código limpo, arquitetura sólida e experiências web de alto
                desempenho — do discovery ao deploy.
              </p>
              <div data-hero-cta className="flex flex-wrap gap-4">
                <Magnetic>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-[#0a0a0a] dark:hover:bg-zinc-200"
                  >
                    Iniciar projeto
                  </a>
                </Magnetic>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/30"
                >
                  Ver serviços
                </a>
                <Link
                  href="/showcase"
                  scroll={false}
                  className="inline-flex items-center justify-center rounded-full border border-[#4A4458]/35 bg-[#4A4458]/8 px-7 py-3 text-sm font-medium text-[#4A4458] transition hover:bg-[#4A4458]/14 dark:border-[#4A4458]/55 dark:bg-[#4A4458]/18 dark:text-[#c5bed5] dark:hover:bg-[#4A4458]/24"
                >
                  Ver projetos
                </Link>
              </div>
            </div>

            <div
              data-hero-logo
              className="relative mx-auto flex w-full max-w-[280px] flex-col items-center lg:mx-0 lg:max-w-[320px]"
            >
              <div className="absolute -inset-10 rounded-full bg-[#4A4458]/12 blur-3xl dark:bg-[#4A4458]/25" />
              <Image
                src="/logo-light.png"
                alt=""
                width={320}
                height={120}
                className="relative z-[1] hidden h-auto w-full drop-shadow-[0_12px_40px_rgba(74,68,88,0.2)] dark:block dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]"
                priority
              />
              <Image
                src="/logo-dark.png"
                alt=""
                width={320}
                height={120}
                className="relative z-[1] block h-auto w-full drop-shadow-[0_12px_40px_rgba(74,68,88,0.18)] dark:hidden"
                priority
              />
              <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                web · cloud · produto
              </p>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
            aria-hidden
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-zinc-500">
              scroll
            </span>
            <span className="inline-block h-8 w-px bg-gradient-to-b from-zinc-400 to-transparent dark:from-zinc-500" />
          </div>
        </section>

        <section className="border-y border-zinc-200/90 bg-white/60 py-10 dark:border-white/[0.06] dark:bg-white/[0.02]">
          <div
            data-gsap-stagger
            className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-5 text-center sm:px-8"
          >
            {[
              ["Entrega rápida", "Acompanhamento frequente e sem surpresa"],
              ["Transparência", "Você sabe o que está sendo feito e por quê"],
              ["Facilidade de uso", "Pensado para funcionar para qualquer pessoa"],
            ].map(([t, s]) => (
              <div key={t} data-gsap-stagger-item>
                <p className="font-display text-sm font-semibold text-zinc-900 dark:text-white">
                  {t}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{s}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#5c5470] dark:text-[#9d96ab]">
                O que fazemos
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Engenharia ponta a ponta
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                Transformamos necessidade de negócio em soluções digitais claras,
                com tecnologia certa e foco em resultado real.
              </p>
            </div>

            <div className="mt-14 grid auto-rows-fr gap-4 sm:gap-5 lg:grid-cols-12">
              {services.map((s) => (
                <article
                  key={s.title}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-[0_1px_0_rgba(15,15,15,0.06)] transition [background-image:linear-gradient(135deg,rgba(74,68,88,0.06)_0%,transparent_45%)] hover:border-[#4A4458]/45 dark:border-white/[0.1] dark:bg-zinc-950/95 dark:[background-image:linear-gradient(155deg,rgba(74,68,88,0.22)_0%,rgba(5,5,5,0.4)_48%,transparent_75%)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] dark:hover:border-[#4A4458]/55 sm:p-8 ${
                    s.span === "wide" ? "lg:col-span-7" : "lg:col-span-5"
                  }`}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4A4458]/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100 dark:via-[#4A4458]/50"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/90 bg-zinc-50 text-[#4A4458] dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-[#b5aec4]">
                        <ServiceIcon
                          name={s.icon}
                          className="h-5 w-5"
                        />
                      </span>
                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#5c5470] dark:text-[#b5aec4]">
                        {s.tag}
                      </span>
                    </div>
                    <span
                      className="hidden font-mono text-[10px] text-zinc-400 sm:inline dark:text-zinc-500"
                      aria-hidden
                    >
                      //
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {s.desc}
                  </p>
                  <p className="mt-4 border-l-2 border-[#4A4458]/25 pl-3 text-xs leading-relaxed text-zinc-500 dark:border-[#4A4458]/40 dark:text-zinc-500">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
                      Ex.{" "}
                    </span>
                    {s.examples}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 font-mono text-[10px] text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-zinc-400"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#4A4458]/[0.07] blur-3xl transition duration-500 group-hover:bg-[#4A4458]/12 dark:bg-[#4A4458]/10 dark:group-hover:bg-[#4A4458]/20" />
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-200/90 bg-zinc-50/70 p-6 dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5c5470] dark:text-[#b5aec4]">
                    Soluções que desenvolvemos
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-zinc-900 dark:text-white">
                    Modelos prontos para acelerar seu projeto
                  </h3>
                </div>
                <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
                  Partimos de bases já testadas e adaptamos tudo para a
                  realidade do seu negócio.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {solutionTopics.map((topic) => (
                  <article
                    key={topic.title}
                    className="rounded-xl border border-zinc-200/80 bg-white p-4 dark:border-white/[0.08] dark:bg-zinc-950/70"
                  >
                    <p className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                      {topic.title}
                    </p>
                    <p className="mt-1 text-xs text-[#5c5470] dark:text-[#b5aec4]">
                      {topic.audience}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {topic.value}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {topic.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-[#4A4458]"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="inovacao"
          className="scroll-mt-24 border-t border-zinc-200/90 px-5 py-24 dark:border-white/[0.06] sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div data-gsap-reveal className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#5c5470] dark:text-[#9d96ab]">
                Inovação & stack moderna
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Ferramentas atuais, decisões conscientes
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Usamos ferramentas modernas, mas com foco em simplicidade: o que
                realmente melhora velocidade, estabilidade e manutenção do seu
                projeto. Sem exagero técnico, sem complicação desnecessária.
              </p>
            </div>

            <div
              data-gsap-reveal
              className="mt-12 rounded-2xl border border-dashed border-zinc-300/90 bg-zinc-50/50 p-5 dark:border-white/[0.12] dark:bg-white/[0.03] sm:p-8"
            >
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#4A4458] dark:text-[#b5aec4]">
                    Interativo
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-zinc-900 dark:text-white">
                    Prioridades do backlog (arraste para reordenar)
                  </h3>
                </div>
                <p className="max-w-sm text-xs text-zinc-500 dark:text-zinc-500">
                  Exemplo de interação avançada de interface. Esse tipo de
                  recurso pode ser aplicado em catálogos, painéis, quadros de
                  tarefas e sistemas internos.
                </p>
              </div>
              <div data-no-lenis>
                <InnovationDnd reducedMotion={false} />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-200/90 px-5 py-24 dark:border-white/[0.06] sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div
              data-parallax-wrap
              data-gsap-reveal
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-white/[0.08]"
            >
              <div
                data-parallax-inner
                className="absolute inset-0 h-[118%] w-full will-change-transform"
                style={{ top: "-9%" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format&fit=crop"
                  alt="Ambiente de desenvolvimento com código em tela"
                  width={900}
                  height={620}
                  className="h-full w-full object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent dark:from-[#050505]" />
              <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                craft · performance · clareza
              </p>
            </div>
            <div id="processo" className="scroll-mt-24 space-y-10">
              <div data-gsap-reveal>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#5c5470] dark:text-[#9d96ab]">
                  Processo
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                  Transparência em cada etapa
                </h2>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Rituais claros, documentação viva e comunicação direta com
                  quem decide — no ritmo de referências como{" "}
                  <a
                    href="https://quentinhocde.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-white/20 dark:hover:decoration-white/50"
                  >
                    Quentin Hocdé
                  </a>
                  ,{" "}
                  <a
                    href="https://www.felix-nieto.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-white/20 dark:hover:decoration-white/50"
                  >
                    Felix Nieto
                  </a>{" "}
                  e{" "}
                  <a
                    href="https://bogdankolomiyets.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-white/20 dark:hover:decoration-white/50"
                  >
                    Bogdan Kolomiyets
                  </a>
                  .
                </p>
              </div>
              <ol data-gsap-stagger className="space-y-6">
                {process.map((p) => (
                  <li
                    key={p.step}
                    data-gsap-stagger-item
                    className="flex gap-5 border-l border-zinc-200 pl-6 dark:border-white/10"
                  >
                    <span className="font-mono text-xs text-[#4A4458]">
                      {p.step}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {p.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="stack"
          className="scroll-mt-24 border-t border-zinc-200/90 px-5 py-24 dark:border-white/[0.06] sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div data-gsap-reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#5c5470] dark:text-[#9d96ab]">
                Stack
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Ferramentas que dominamos
              </h2>
            </div>
            <div data-gsap-stagger className="mt-10 flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span
                  key={tech}
                  data-gsap-stagger-item
                  className="inline-flex rounded-full border border-zinc-200/90 bg-zinc-100/90 px-4 py-2 font-mono text-xs text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-24 border-t border-zinc-200/90 px-5 py-28 dark:border-white/[0.06] sm:px-8"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2
              data-gsap-reveal
              className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-zinc-900 dark:text-white"
            >
              Vamos construir o próximo release juntos.
            </h2>
            <p data-gsap-reveal className="mx-auto mt-6 max-w-xl text-zinc-600 dark:text-zinc-400">
              Conte objetivos, prazo e stack atual. Respondemos com uma proposta
              técnica objetiva — sem slides genéricos.
            </p>
            <div
              data-gsap-reveal
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Magnetic>
                <a
                  href="mailto:contato@schellwebservices.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#4A4458] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_-12px_rgba(74,68,88,0.55)] transition hover:bg-[#5c5469] dark:shadow-[0_0_40px_-10px_rgba(74,68,88,0.8)]"
                >
                  contato@schellwebservices.com
                </a>
              </Magnetic>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-8 py-3.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/30"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200/90 px-5 py-10 dark:border-white/[0.06] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-sm text-zinc-500 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <BrandLogo width={120} height={36} className="max-h-7 w-auto opacity-90" />
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:hidden">
              {nav.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={false}
                    className="text-xs tracking-wide text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-xs tracking-wide text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
          </div>
          <p className="text-center sm:max-w-xs sm:text-right">
            © {new Date().getFullYear()} Schell Web Services. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
