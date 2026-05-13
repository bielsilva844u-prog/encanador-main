import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const phoneNumber = "5511967273555";
const phoneDisplay = "(11) 96727-3555";
const address = "R. José Luiz de Brito, 210 - Parque Cisper, São Paulo - SP";
const logoUrl = "https://i.ibb.co/MxgTp32w/foto.jpg";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=R.%20Jos%C3%A9%20Luiz%20de%20Brito%2C%20210%20-%20Parque%20Cisper%2C%20S%C3%A3o%20Paulo%20-%20SP";

const heroImage =
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1800&q=84";

const mainServices = [
  {
    title: "Desentupimento",
    imageName: "mj-servicos-desentupimento.jpg",
    image:
      "https://i.ibb.co/8gg5dctd/desentupidora-dicas.jpg",
    alt: "Profissional realizando manutenção hidráulica em tubulação",
    desc: "Desentupimento de pia, ralo, vaso sanitário, caixa de gordura e rede de esgoto, com avaliação objetiva e atendimento rápido.",
  },
  {
    title: "Limpezas",
    imageName: "mj-servicos-limpeza.jpg",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    alt: "Profissional de limpeza higienizando ambiente",
    desc: "Limpeza de caixa d'água, caixa de gordura e pontos críticos do imóvel para melhorar higiene, escoamento e conservação.",
  },
  {
    title: "Elétrica",
    imageName: "mj-servicos-eletrica.jpg",
    image:
      "https://i.ibb.co/RpWkvzXv/eletricista-ajustando-instalacao-eletrica-industrial.webp",
    alt: "Eletricista realizando manutenção em quadro elétrico",
    desc: "Troca de tomadas, interruptores, luminárias, disjuntores e reparos elétricos pontuais para residências e empresas.",
  },
  {
    title: "Telhado",
    imageName: "mj-servicos-telhado.jpg",
    image:
      "https://i.ibb.co/twsFtjFm/reforma-de-telhados-dicas-e-informacoes-importantes.webp",
    alt: "Profissional fazendo manutenção em telhado",
    desc: "Telhadista para conserto de telhado, manutenção, limpeza de calha, limpeza de rufos e correção de infiltrações.",
  },
  {
    title: "Reformas",
    imageName: "mj-servicos-reformas.jpg",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
    alt: "Obra de reforma com ferramentas e materiais de construção",
    desc: "Reformas residenciais e comerciais, pequenos acabamentos, reparos e melhorias com planejamento e execução organizada.",
  },
  {
    title: "Dedetização",
    imageName: "mj-servicos-dedetizacao.jpg",
    image:
      "https://i.ibb.co/sdXDkpqJ/dedetiza-ao.webp",
    alt: "Aplicação profissional para controle de pragas urbanas",
    desc: "Dedetização e controle de pragas urbanas para casas, comércios, empresas e condomínios, com orientação preventiva.",
  },
];

const additionalServices = [
  {
    title: "Limpeza de caixa d'água",
    imageName: "mj-servicos-limpeza-caixa-dagua.jpg",
    image: "https://i.ibb.co/v4vtzqV4/5.jpg",
    alt: "Limpeza profissional de caixa d'água",
    desc: "Higienização de reservatórios para manter a água mais segura e reduzir acúmulo de sujeira.",
  },
  {
    title: "Limpeza de caixa de gordura",
    imageName: "mj-servicos-caixa-de-gordura.jpg",
    image: "https://i.ibb.co/3mYxc4wq/1602296383-caixa-de-gordura.jpg",
    alt: "Limpeza profissional de caixa de gordura",
    desc: "Remoção de resíduos para reduzir mau cheiro, retorno de água e risco de entupimento.",
  },
  {
    title: "Limpeza de calha",
    imageName: "mj-servicos-limpeza-de-calha.jpg",
    image: "https://i.ibb.co/SDkjSmYr/calha.webp",
    alt: "Limpeza profissional de calha",
    desc: "Retirada de folhas e sujeiras para melhorar o escoamento da água da chuva.",
  },
  {
    title: "Limpeza de rufos",
    imageName: "mj-servicos-limpeza-de-rufos.jpg",
    image: "https://i.ibb.co/mVSF2PMW/limpeza-calhas-rufos-01.webp",
    alt: "Limpeza profissional de rufos e calhas",
    desc: "Manutenção preventiva para evitar infiltrações e acúmulo de sujeira na cobertura.",
  },
];

const roofServices = [
  "Telhadista",
  "Limpeza de calha",
  "Limpeza de rufos",
  "Conserto de telhado",
  "Manutenção de telhado",
  "Correção de infiltrações",
];

const regions = [
  "São Paulo - SP",
  "Guarulhos",
  "Osasco",
  "Santo André",
  "São Bernardo do Campo",
  "São Caetano do Sul",
  "Diadema",
  "Mauá",
  "Barueri",
  "Alphaville",
  "Carapicuíba",
  "Cotia",
  "Taboão da Serra",
  "Mogi das Cruzes",
  "Suzano",
  "Outras regiões próximas",
];

const profiles = ["Residencial", "Comercial", "Condomínios", "Empresas"];

const process = [
  {
    icon: Phone,
    title: "Contato",
    desc: "Chame pelo WhatsApp, informe o serviço e envie fotos ou vídeo do local.",
  },
  {
    icon: Wrench,
    title: "Avaliação",
    desc: "A equipe entende a necessidade, orienta o cliente e combina o atendimento.",
  },
  {
    icon: CheckCircle2,
    title: "Execução",
    desc: "O serviço é realizado com organização, clareza e cuidado no ambiente.",
  },
];

function getWaLink(message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const defaultMessage = "Olá, vim pelo site da MJ Serviços e preciso de atendimento.";

  return (
    <div className="min-h-screen bg-white font-body text-slate-950">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-primary/75" />

          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.02fr_0.74fr] md:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Serviços essenciais para residências, condomínios e empresas
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-normal sm:text-5xl lg:text-7xl">
                MJ Serviços e Soluções
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
                Desentupimento, limpezas, elétrica, telhado, reformas e dedetização com atendimento rápido, comunicação clara e serviço bem executado.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={getWaLink(defaultMessage)} target="_blank" rel="noopener noreferrer">
                  <Button className="h-14 w-full rounded-md bg-emerald-500 px-7 text-base font-bold text-white shadow-xl shadow-emerald-950/30 hover:bg-emerald-600 sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                </a>
                <a href="#servicos">
                  <Button variant="secondary" className="h-14 w-full rounded-md px-7 text-base font-bold sm:w-auto">
                    Ver serviços
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-sm font-medium text-slate-100 sm:grid-cols-3">
                {["Orçamento pelo WhatsApp", "Residencial e comercial", "Atendimento com cuidado"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden rounded-lg border border-white/15 bg-white p-5 text-slate-950 shadow-2xl md:block">
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
                  <img src={logoUrl} alt="Logo MJ Serviços e Soluções" className="h-full w-full object-contain" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-accent">Atendimento direto</p>
                  <h2 className="text-2xl font-black">Peça seu orçamento</h2>
                </div>
              </div>

              <div className="space-y-3">
                <a href={getWaLink(defaultMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-md bg-emerald-50 p-4 text-emerald-950 transition hover:bg-emerald-100">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide">WhatsApp</p>
                    <p className="font-black">{phoneDisplay}</p>
                  </div>
                </a>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-md bg-slate-50 p-4 transition hover:bg-slate-100">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Endereço</p>
                    <p className="font-semibold leading-6">{address}</p>
                  </div>
                </a>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                {mainServices.map((item) => (
                  <a key={item.title} href="#servicos" className="rounded-md border border-slate-200 px-2 py-3 text-xs font-black uppercase tracking-wide text-primary transition hover:border-accent hover:bg-blue-50">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-3 md:px-8">
            {[
              { icon: Clock3, title: "Resposta rápida", desc: "Orçamento e orientação inicial pelo WhatsApp." },
              { icon: MapPin, title: "Atendimento local", desc: "São Paulo, Grande SP e regiões próximas." },
              { icon: Building2, title: "Perfis atendidos", desc: "Residencial, comercial, condomínios e empresas." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-100 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Serviços principais</p>
              <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
                Serviços organizados para anúncios e atendimento rápido
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Cada serviço possui imagem relacionada, descrição objetiva e chamada direta para orçamento no WhatsApp.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {mainServices.map((service) => (
                <article key={service.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <img
                    src={service.image}
                    alt={service.alt}
                    data-image-name={service.imageName}
                    className="h-48 w-full object-cover brightness-[0.96] saturate-[0.92]"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-2 min-h-24 text-sm leading-6 text-slate-600">{service.desc}</p>
                    <a
                      href={getWaLink(`Olá, vim pelo site da MJ Serviços e preciso de orçamento para ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-semibold text-primary transition hover:text-accent"
                    >
                      Pedir orçamento
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service) => (
                <div key={service.title} data-image-name={service.imageName} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  {"image" in service && service.image && (
                    <img src={service.image} alt={service.alt} className="h-48 w-full object-cover brightness-[0.96] saturate-[0.92]" />
                  )}
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{service.desc}</p>
                    {"image" in service && service.image && (
                      <a
                        href={getWaLink(`Olá, vim pelo site da MJ Serviços e preciso de orçamento para ${service.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex text-sm font-semibold text-primary transition hover:text-accent"
                      >
                        Pedir orçamento
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.95fr_1.05fr] md:items-center md:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Telhado</p>
              <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
                Telhadista, calhas, rufos e manutenção de telhados
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Serviços para corrigir vazamentos, prevenir infiltrações e manter a cobertura do imóvel em boas condições.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {roofServices.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-4">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Atendimento</p>
              <h2 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
                Processo simples e transparente
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {process.map((step, index) => (
                <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-10 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Área de atendimento</p>
                <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                  Regiões e perfis atendidos
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Atendimento para São Paulo e cidades próximas, com foco em residências, comércios, condomínios e empresas.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-white">Regiões atendidas</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {regions.map((region) => (
                      <div key={region} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100">
                        {region}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-white">Perfis atendidos</h3>
                  <div className="grid gap-3">
                    {profiles.map((profile) => (
                      <div key={profile} className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-950">
                        {profile}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="overflow-hidden rounded-lg bg-slate-950 text-white shadow-xl shadow-slate-950/10">
              <div className="grid gap-8 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">Atendimento rápido</p>
                  <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
                    Precisa resolver um serviço hoje?
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                    Fale com a MJ Serviços pelo WhatsApp, envie fotos do local e receba orientação para o próximo atendimento.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
                    {["Orçamento pelo WhatsApp", "São Paulo e Grande SP", "Residencial e comercial"].map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={getWaLink(defaultMessage)} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                  <Button className="h-14 w-full rounded-md bg-emerald-500 px-7 text-base font-black text-white shadow-xl shadow-emerald-950/30 hover:bg-emerald-600 md:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href={getWaLink(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar MJ Serviços no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-slate-950/20 transition hover:bg-emerald-600 md:w-auto md:px-4"
      >
        <Phone className="h-5 w-5" />
        <span className="ml-2 hidden text-sm font-semibold md:inline">WhatsApp</span>
      </a>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500">
        <p className="font-semibold text-slate-950">MJ Serviços e Soluções</p>
        <p className="mt-2">Desentupimento, limpezas, elétrica, telhado, reformas e dedetização.</p>
        <p className="mt-2">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {address}
          </a>{" "}
          | {phoneDisplay}
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MJ Serviços e Soluções",
            telephone: phoneDisplay,
            address,
            areaServed: regions,
            image: logoUrl,
            makesOffer: mainServices.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.desc,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
