import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroImg from "@/assets/hero-munck.asset.json";
import truckImg from "@/assets/weber-truck.asset.json";
import logoImg from "@/assets/logo-weber.asset.json";
import aboutImg from "@/assets/weber-container.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Weber Munck & Guindastes",
          description:
            "Locação de caminhão Munck e guindaste em Porto Alegre. Içamento de cargas, içamento de geradores, transporte de containers, remoção de máquinas industriais e movimentação de estruturas metálicas.",
          areaServed: "Porto Alegre e Região Metropolitana",
          telephone: "+55-51-99862-2913",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Porto Alegre",
            addressRegion: "RS",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

const WA_URL = "https://wa.me/5551998622913";
const WA_ORCAMENTO =
  "https://wa.me/5551998622913?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Weber%20Munck%20%26%20Guindastes%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
const WA_URL_MSG = (msg: string) => `${WA_URL}?text=${encodeURIComponent(msg)}`;
const PHONE_DISPLAY = "(51) 99862-2913";

const services = [
  { title: "Caminhão Munck em Porto Alegre", desc: "Locação de caminhão Munck para içamento e transporte de cargas em obras, indústrias e condomínios." },
  { title: "Guindaste em Porto Alegre", desc: "Guindastes de alta capacidade para operações de precisão e cargas pesadas." },
  { title: "Içamento de Cargas", desc: "Içamentos verticais em prédios, telhados e locais de difícil acesso." },
  { title: "Içamento de Geradores", desc: "Movimentação e posicionamento seguro de geradores e equipamentos elétricos." },
  { title: "Remoção de Máquinas Industriais", desc: "Remoção e transporte de máquinas industriais com equipe especializada." },
  { title: "Transporte de Containers", desc: "Carregamento, transporte e descarga de containers com total segurança." },
  { title: "Movimentação de Estruturas Metálicas", desc: "Movimentação de vigas, tesouras e estruturas metálicas para construção." },
  { title: "Obras e Indústrias", desc: "Atendimento dedicado para construtoras, indústrias e empresas de todos os portes." },
];

const clientes = [
  { title: "Construtoras" },
  { title: "Indústrias" },
  { title: "Condomínios" },
  { title: "Empresas de Energia" },
  { title: "Transportadoras" },
  { title: "Metalúrgicas" },
  { title: "Obras Comerciais" },
  { title: "Pessoas Físicas" },
];

const porqueContratar = [
  { title: "Atendimento Rápido", desc: "Resposta ágil para orçamentos e emergências." },
  { title: "Frota Preparada", desc: "Caminhões Munck e guindastes prontos para operação." },
  { title: "Operação Segura", desc: "Procedimentos rigorosos em cada içamento." },
  { title: "Equipe Treinada", desc: "Operadores experientes e capacitados." },
  { title: "Equipamentos Revisados", desc: "Manutenção preventiva constante da frota." },
  { title: "Orçamento Direto pelo WhatsApp", desc: "Cotação rápida, sem burocracia." },
  { title: "Atendimento em Porto Alegre e Região", desc: "Cobertura em toda a região metropolitana." },
  { title: "Atendimento para Empresas e Pessoas Físicas", desc: "Soluções para todos os portes de projeto." },
];

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#atendemos", label: "Atendemos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#porque", label: "Por que contratar" },
  
  { href: "#contato", label: "Contato" },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "", telefone: "", cidade: "", servico: "", mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = [
      "Olá, vim pelo site da Weber Munck & Guindastes e gostaria de solicitar um orçamento.",
      "",
      `Nome: ${form.nome}`,
      `Telefone: ${form.telefone}`,
      `Cidade: ${form.cidade}`,
      `Tipo de serviço: ${form.servico}`,
      `Mensagem: ${form.mensagem}`,
    ].join("\n");
    window.open(WA_URL_MSG(mensagem), "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full bg-navy-deep/95 backdrop-blur-sm shadow-industrial">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logoImg.url} alt="Weber Munck & Guindastes" className="h-12 w-12 rounded-md object-cover" width={48} height={48} />
            <div className="hidden sm:block">
              <div className="font-display text-lg leading-none text-white tracking-wide">WEBER</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Munck & Guindastes</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-gold">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy-deep shadow-card transition-transform hover:scale-105"
            >
              Solicitar Orçamento
            </a>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? "Fechar" : "Menu"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="lg:hidden border-t border-white/10 bg-navy-deep px-4 py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-gold py-1"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_ORCAMENTO}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy-deep"
              >
                Solicitar Orçamento
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative min-h-[100vh] overflow-hidden bg-navy-deep pt-20">
        <div className="absolute inset-0">
          <img src={heroImg.url} alt="Caminhão Munck Weber em operação de içamento em Porto Alegre" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Porto Alegre e Região
            </div>
            <h1 className="mt-6 font-display text-4xl leading-[1] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              PRECISA IÇAR <span className="text-gold">MÁQUINA</span>, <span className="text-gold">CONTAINER</span>, <span className="text-gold">GERADOR</span> OU ESTRUTURA PESADA?
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
              A Weber Munck atende Porto Alegre e região com caminhão Munck e guindastes para içamentos, remoções, transporte e movimentação de cargas com segurança e agilidade.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WA_ORCAMENTO}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-deep shadow-industrial transition-transform hover:scale-105"
              >
                Solicitar orçamento no WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
              >
                Ver Serviços
              </a>
            </div>

            <a href={WA_ORCAMENTO} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 group">
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold">WhatsApp direto</div>
                <div className="font-display text-2xl text-white group-hover:text-gold transition-colors">{PHONE_DISPLAY}</div>
              </div>
            </a>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-gold opacity-20 blur-3xl" />
            <img src={truckImg.url} alt="Caminhão Weber Munck com guindaste para locação em Porto Alegre" className="relative rounded-2xl shadow-industrial" width={800} height={600} />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-industrial max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="min-w-0">
                  <div className="font-display text-sm text-navy-deep leading-tight">OPERAÇÃO SEGURA</div>
                  <div className="text-xs text-muted-foreground">Equipe treinada e equipamentos revisados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Nossos Serviços</div>
            <h2 className="mt-3 font-display text-4xl text-navy-deep sm:text-5xl md:text-6xl">
              LOCAÇÃO DE CAMINHÃO MUNCK E <span className="text-gold">GUINDASTE EM PORTO ALEGRE</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Içamento de cargas, içamento de geradores, transporte de containers, remoção de máquinas industriais e movimentação de estruturas metálicas para obras, indústrias e condomínios.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-industrial"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-all group-hover:bg-gold/20" />
                <div className="relative">
                  <h3 className="font-display text-lg text-navy-deep leading-tight">{s.title.toUpperCase()}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATENDEMOS */}
      <section id="atendemos" className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Atendemos</div>
            <h2 className="mt-3 font-display text-4xl text-navy-deep sm:text-5xl md:text-6xl">
              PARA QUEM A <span className="text-gold">WEBER MUNCK</span> TRABALHA
            </h2>
            <p className="mt-4 text-muted-foreground">
              Atendemos empresas e pessoas físicas em Porto Alegre e região metropolitana com soluções em içamento, movimentação e transporte de cargas.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {clientes.map((c) => (
              <div key={c.title} className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-industrial">
                <div className="font-display text-base text-navy-deep">{c.title.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative bg-background py-20 md:py-28 overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img src={aboutImg.url} alt="Caminhão Munck Weber carregando container em Porto Alegre" className="rounded-2xl shadow-industrial w-full" loading="lazy" width={800} height={600} />
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-navy-deep p-6 shadow-industrial">
              <div className="font-display text-5xl text-gold">+10</div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-1">Anos de<br />experiência</div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Sobre a Empresa</div>
            <h2 className="mt-3 font-display text-4xl text-navy-deep sm:text-5xl">
              FORÇA, PRECISÃO E <span className="text-gold">CONFIANÇA</span> EM CADA OPERAÇÃO
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              A <strong className="text-navy-deep">Weber Munck & Guindastes</strong> atua com soluções completas para içamento de cargas, transporte de containers, remoção de máquinas industriais e movimentação de estruturas metálicas. Trabalhamos com equipamentos revisados, equipe treinada e foco total em segurança, pontualidade e atendimento rápido em Porto Alegre e região.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Experiência sólida em locação de caminhão Munck",
                "Atendimento rápido em Porto Alegre e região metropolitana",
                "Operações com segurança, equipe treinada e equipamentos revisados",
                "Frota preparada para içamento de geradores e cargas pesadas",
                "Profissionais qualificados para movimentação de estruturas metálicas",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-navy-deep">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* POR QUE CONTRATAR */}
      <section id="porque" className="relative overflow-hidden bg-gradient-navy py-20 md:py-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25% 20%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 75% 80%, var(--gold) 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Diferenciais</div>
            <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl md:text-6xl">
              POR QUE CONTRATAR A <span className="text-gold">WEBER MUNCK?</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {porqueContratar.map((d) => (
              <div key={d.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-gold hover:bg-white/10">
                <h3 className="font-display text-lg text-white leading-tight">{d.title.toUpperCase()}</h3>
                <p className="mt-2 text-sm text-white/70">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-deep shadow-industrial transition-transform hover:scale-105"
            >
              Solicitar orçamento no WhatsApp
            </a>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src={heroImg.url} alt="" className="h-full w-full object-cover opacity-20" loading="lazy" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/70" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-28 text-center">
          <h2 className="font-display text-4xl text-white sm:text-5xl md:text-6xl leading-[1]">
            PRECISA DE UM <span className="text-gold">CAMINHÃO MUNCK OU GUINDASTE</span> EM PORTO ALEGRE?
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Fale agora com a Weber Munck & Guindastes e solicite um orçamento rápido pelo WhatsApp.
          </p>
          <a
            href={WA_ORCAMENTO}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-5 text-base font-bold uppercase tracking-wide text-navy-deep shadow-industrial transition-transform hover:scale-105"
          >
            Solicitar orçamento no WhatsApp
          </a>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="min-w-0">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Contato</div>
            <h2 className="mt-3 font-display text-4xl text-navy-deep sm:text-5xl">
              FALE COM A <span className="text-gold">EQUIPE WEBER</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Preencha os dados do seu içamento e envie sua solicitação direto pelo WhatsApp. Retornamos rapidamente com seu orçamento.
            </p>

            <div className="mt-8 space-y-5">
              <a href={WA_ORCAMENTO} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp / Telefone</div>
                  <div className="font-display text-2xl text-navy-deep group-hover:text-gold transition-colors">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Área de atuação</div>
                  <div className="font-display text-xl text-navy-deep">Porto Alegre e Região</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Atendimento</div>
                  <div className="font-display text-xl text-navy-deep">24 horas para emergências</div>
                </div>
              </div>

              <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                {[
                  "Locação de caminhão Munck",
                  "Içamento de cargas e geradores",
                  "Transporte de containers",
                  "Remoção de máquinas industriais",
                  "Movimentação de estruturas metálicas",
                ].map(k => (
                  <li key={k} className="flex items-center gap-2">
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField label="Nome" required>
                <input required maxLength={100} value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} className="input" placeholder="Seu nome" />
              </FormField>
              <FormField label="Telefone" required>
                <input required maxLength={20} value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} className="input" placeholder="(51) 99999-9999" />
              </FormField>
              <FormField label="Cidade" required>
                <input required maxLength={80} value={form.cidade} onChange={e => setForm({ ...form, cidade: e.target.value })} className="input" placeholder="Sua cidade" />
              </FormField>
              <FormField label="Tipo de serviço" required>
                <select required value={form.servico} onChange={e => setForm({ ...form, servico: e.target.value })} className="input">
                  <option value="">Selecione</option>
                  {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  <option value="Outro">Outro</option>
                </select>
              </FormField>
            </div>
            <FormField label="Mensagem" className="mt-4">
              <textarea rows={4} maxLength={1000} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} className="input resize-none" placeholder="Descreva o serviço que precisa..." />
            </FormField>
            <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-bold uppercase tracking-wide text-navy-deep shadow-card transition-transform hover:scale-[1.02]">
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:px-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImg.url} alt="Weber" className="h-14 w-14 rounded-lg" width={56} height={56} />
              <div>
                <div className="font-display text-xl tracking-wide">WEBER</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Munck & Guindastes</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">Locação de caminhão Munck e guindaste em Porto Alegre. Içamento de cargas, geradores, containers e estruturas metálicas com segurança e agilidade.</p>
            <p className="mt-4 font-display text-lg text-gold">"Atendimento rápido, seguro e profissional."</p>
          </div>

          <div>
            <div className="font-display text-lg text-gold">NAVEGAÇÃO</div>
            <ul className="mt-4 space-y-2">
              {navLinks.map(l => (
                <li key={l.href}><a href={l.href} className="text-sm text-white/70 hover:text-gold transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-lg text-gold">CONTATO</div>
            <a href={WA_ORCAMENTO} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-gold">
              {PHONE_DISPLAY}
            </a>
            <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
              Porto Alegre e Região
            </div>
            <a href={WA_ORCAMENTO} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-xs font-bold uppercase tracking-wide text-navy-deep">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 py-5">
          <div className="mx-auto max-w-7xl px-4 md:px-8 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Weber Munck & Guindastes. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}

function FormField({ label, required, children, className }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-xs font-bold uppercase tracking-wider text-navy-deep">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          background: white;
          font-size: 0.875rem;
          color: var(--foreground);
          transition: all 0.15s;
          outline: none;
        }
        .input:focus { border-color: var(--gold); box-shadow: 0 0 0 3px color-mix(in oklab, var(--gold) 25%, transparent); }
      `}</style>
    </label>
  );
}
