import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";

const phoneNumber = "5511967273555";
const phoneDisplay = "(11) 96727-3555";
const address = "R. José Luiz de Brito, 210 - Parque Cisper";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=R.%20Jos%C3%A9%20Luiz%20de%20Brito%2C%20210%20-%20Parque%20Cisper";
const logoUrl = "https://i.ibb.co/MxgTp32w/foto.jpg";

const services = [
  {
    title: "Desentupimento",
    desc: "Atendimento para pia, ralo, vaso sanitário, caixa de gordura e rede de esgoto com avaliação direta e execução cuidadosa.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Limpeza de caixa d'água",
    desc: "Higienização de reservatórios para casas, condomínios e comércios, com organização do início ao fim.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Dedetização",
    desc: "Controle de pragas urbanas em ambientes residenciais e comerciais, com aplicação conforme a necessidade do local.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Elétrica",
    desc: "Pequenos reparos elétricos, troca de tomadas, interruptores, luminárias, disjuntores e ajustes pontuais na instalação.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Telhado",
    desc: "Manutenção, reparos, substituição de peças e correções para reduzir infiltrações e problemas de cobertura.",
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Reparos",
    desc: "Serviços pontuais para manutenção do imóvel, ajustes, consertos e melhorias em áreas internas e externas.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Reformas",
    desc: "Apoio em reformas residenciais e comerciais, com execução organizada e alinhamento claro antes do serviço.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Construção",
    desc: "Serviços de construção e melhorias para imóveis, com atendimento conforme a necessidade e o tamanho do projeto.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Caixa de gordura",
    desc: "Limpeza e desobstrução para reduzir retorno, mau cheiro, lentidão no escoamento e riscos de entupimento.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80",
  },
];

const regions = [
  "Parque Cisper",
  "São Paulo",
  "Zona Leste",
  "Guarulhos",
  "Osasco",
  "ABC Paulista",
  "Condomínios",
  "Comércios",
];

const steps = [
  {
    title: "Contato pelo WhatsApp",
    desc: "Explique o serviço, envie fotos ou vídeo e informe o endereço de atendimento.",
  },
  {
    title: "Avaliação objetiva",
    desc: "A equipe entende a necessidade, orienta o cliente e combina o melhor horário.",
  },
  {
    title: "Execução profissional",
    desc: "O serviço é feito com cuidado no ambiente, limpeza e foco em resolver o problema.",
  },
];

const faqs = [
  {
    question: "A MJ atende serviços urgentes?",
    answer: "Sim. Envie uma mensagem pelo WhatsApp, explique o problema e mande fotos ou vídeos para agilizar a orientação.",
  },
  {
    question: "Vocês fazem mais de um serviço no mesmo atendimento?",
    answer: "Quando a agenda e o tipo de serviço permitem, é possível combinar mais de uma solução na mesma visita.",
  },
  {
    question: "Atendem residências, empresas e condomínios?",
    answer: "Sim. A MJ atende casas, apartamentos, condomínios, lojas, escritórios e outros pontos comerciais.",
  },
  {
    question: "O orçamento é feito pelo WhatsApp?",
    answer: "O primeiro contato é pelo WhatsApp. Dependendo do caso, a equipe orienta por mensagem ou combina uma avaliação no local.",
  },
];

function getWaLink(message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const defaultMessage = "Oi, vim pelo site da MJ Serviços e preciso de atendimento.";

  return (
    <div className="min-h-screen bg-white font-body text-slate-950">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
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
                Desentupimento, limpezas, dedetização, elétrica, telhado, reparos, reformas e construção com atendimento rápido, comunicação clara e serviço bem executado.
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

            <div className="rounded-lg border border-white/15 bg-white p-5 text-slate-950 shadow-2xl">
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
                  <img src={logoUrl} alt="Logo MJ Serviços" className="h-full w-full object-contain" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-accent">Atendimento direto</p>
                  <h2 className="text-2xl font-black">Peça seu orçamento.</h2>
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
                {["Desentupimento", "Elétrica", "Reformas", "Limpezas", "Telhado", "Dedetização"].map((item) => (
                  <div key={item} className="rounded-md border border-slate-200 px-2 py-3 text-xs font-black uppercase tracking-wide text-primary">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 md:px-8">
            {[
              { icon: Clock, title: "Resposta rápida", desc: "Contato direto para serviços urgentes e agendados." },
              { icon: MapPin, title: "Base no Parque Cisper", desc: "Atendimento em São Paulo e região metropolitana." },
              { icon: Star, title: "Postura profissional", desc: "Serviço organizado, comunicação clara e cuidado no local." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-accent">Serviços da MJ</p>
              <h2 className="text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Soluções para manutenção, limpeza e melhorias no imóvel
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Atendimento para serviços essenciais e serviços gerais, com foco em agilidade, organização e orientação clara antes da execução.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-black">{service.title}</h3>
                    <p className="mt-3 min-h-20 leading-7 text-slate-600">{service.desc}</p>
                    <a
                      className="mt-5 inline-flex w-full"
                      href={getWaLink(`Oi, vim pelo site da MJ Serviços e preciso de ajuda com ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="h-12 w-full rounded-md bg-accent font-bold text-white hover:bg-accent/90">
                        Pedir orçamento
                      </Button>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-accent">Por que contratar a MJ?</p>
              <h2 className="text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Atendimento profissional para resolver sem complicação
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A MJ Serviços trabalha com comunicação clara, cuidado no ambiente e foco em entregar uma solução prática para cada cliente.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Atendimento rápido",
                  desc: "Contato direto pelo WhatsApp para entender a urgência e orientar o próximo passo.",
                },
                {
                  title: "Serviço limpo e organizado",
                  desc: "Execução com cuidado no local, evitando bagunça desnecessária durante o atendimento.",
                },
                {
                  title: "Residencial e comercial",
                  desc: "Atendimento para casas, apartamentos, condomínios, lojas e empresas.",
                },
                {
                  title: "Serviços completos",
                  desc: "Soluções para limpeza, manutenção, elétrica, telhado, reparos, reformas e construção.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-accent">Como funciona</p>
              <h2 className="text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Atendimento simples, rápido e organizado
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                O processo foi pensado para entender a necessidade do cliente e encaminhar a melhor solução.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                    {index === 0 && <Phone className="h-5 w-5" />}
                    {index === 1 && <Wrench className="h-5 w-5" />}
                    {index === 2 && <CheckCircle2 className="h-5 w-5" />}
                  </div>
                  <span className="absolute right-6 top-6 text-4xl font-black text-slate-100">0{index + 1}</span>
                  <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative bg-slate-950 p-7 text-white sm:p-10">
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-accent" />
                  <p className="mb-3 text-sm font-black uppercase tracking-wide text-accent">Contato e localização</p>
                  <h2 className="text-3xl font-black tracking-normal text-white sm:text-4xl">MJ Serviços no Parque Cisper</h2>
                  <p className="mt-4 text-base leading-8 text-slate-100 sm:text-lg">
                    Atendimento residencial, condominial e comercial para limpeza, manutenção, reparos, reformas, construção e demais soluções.
                  </p>

                  <div className="mt-7 space-y-3">
                    <a href={getWaLink(defaultMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                      <Phone className="h-5 w-5 text-emerald-300" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-300">Telefone / WhatsApp</p>
                        <p className="text-lg font-black text-white">{phoneDisplay}</p>
                      </div>
                    </a>
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                      <MapPin className="mt-1 h-5 w-5 text-blue-300" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-300">Endereço</p>
                        <p className="text-lg font-black text-white">{address}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 p-7 sm:p-10">
                  <p className="text-sm font-black uppercase tracking-wide text-accent">Atendimento</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">Regiões e perfis atendidos</h3>
                  <div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {regions.map((region) => (
                      <div key={region} className="flex items-center gap-3 border-b border-slate-200 pb-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <span className="font-semibold text-slate-800">{region}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm leading-6 text-slate-600">
                    Envie uma mensagem para confirmar disponibilidade, horário e tipo de atendimento na sua região.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-accent">Dúvidas frequentes</p>
              <h2 className="text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Informações importantes antes do atendimento
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Respostas rápidas para quem precisa contratar serviços de limpeza, manutenção, reparos, reformas ou construção.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-black text-slate-950">{faq.question}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.03] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-accent">Precisa resolver agora?</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
                  Chame a MJ Serviços pelo WhatsApp.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Envie uma mensagem explicando o serviço. Se tiver, mande foto ou vídeo para agilizar a orientação.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
                  {["Desentupimento", "Elétrica", "Telhado", "Reparos", "Reformas", "Construção"].map((item) => (
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
                  Solicitar atendimento
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <a
        href={getWaLink(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 inline-flex h-14 items-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-black text-white shadow-2xl shadow-emerald-950/30 transition hover:bg-emerald-600"
      >
        <Phone className="h-5 w-5" />
        WhatsApp
      </a>

      <footer className="bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        <p className="font-semibold text-white">MJ Serviços e Soluções</p>
        <p className="mt-2">Desentupimento, limpezas, dedetização, elétrica, telhado, reparos, reformas e construção.</p>
        <p className="mt-2">{address} | {phoneDisplay}</p>
      </footer>
    </div>
  );
}
