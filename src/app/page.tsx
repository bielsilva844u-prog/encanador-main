import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const phoneNumber = "5511998471173";

const services = [
  {
    title: "Vazamentos e canos estourados",
    desc: "Reparo rápido em torneiras, registros, sifões, caixas acopladas e tubulações aparentes.",
    image: "https://encanadorguarulhos.com.br/wp-content/uploads/2025/07/reparo-de-encanamentos-768x402.jpg",
  },
  {
    title: "Desentupimento de pia e ralo",
    desc: "Desobstrução com equipamentos adequados para cozinha, banheiro, área de serviço e quintal.",
    image: "https://encanadorguarulhos.com.br/wp-content/uploads/2025/07/desentupimento-de-pia-1024x537.jpg",
  },
  {
    title: "Caça vazamento",
    desc: "Avaliação cuidadosa para encontrar a origem do problema e evitar quebradeira desnecessária.",
    image: "https://encanadorguarulhos.com.br/wp-content/uploads/2025/07/caca-vazamentos-1024x537.jpg",
  },
  {
    title: "Vaso sanitário entupido",
    desc: "Atendimento emergencial para entupimentos, mau cheiro e retorno de água no banheiro.",
    image: "https://encanadorguarulhos.com.br/wp-content/uploads/2025/07/desentupimento-de-vaso-1024x537.jpg",
  },
  {
    title: "Rede de esgoto",
    desc: "Limpeza, desentupimento e orientação para reduzir novos problemas na rede.",
    image: "https://encanadorguarulhos.com.br/wp-content/uploads/2025/07/desentupimento-de-esgoto-1024x537.jpg",
  },
  {
    title: "Instalações hidráulicas",
    desc: "Instalação e troca de torneiras, válvulas, chuveiros, filtros, registros e conexões.",
    image: "https://encanadorguarulhos.com.br/wp-content/uploads/2025/07/desentupimento-de-ralo-1024x537.jpg",
  },
];

const neighborhoods = [
  "Centro",
  "Vila Galvão",
  "Picanço",
  "Bonsucesso",
  "Cumbica",
  "Taboão",
  "Jardim Maia",
  "Ponte Grande",
];

const steps = [
  {
    title: "Chame no WhatsApp",
    desc: "Explique o problema e envie fotos ou vídeo, se tiver.",
  },
  {
    title: "Receba orientação",
    desc: "Avaliamos a urgência e combinamos o melhor atendimento.",
  },
  {
    title: "Serviço executado",
    desc: "O reparo é feito com organização, limpeza e garantia.",
  },
];

const faqs = [
  {
    question: "Meu cano estourou agora. Vocês atendem urgente?",
    answer: "Sim. Chame pelo WhatsApp, explique o que aconteceu e, se possível, envie uma foto ou vídeo do vazamento.",
  },
  {
    question: "Dá para passar um orçamento antes de ir até o local?",
    answer: "Em muitos casos dá para orientar pelo WhatsApp. Quando precisa avaliar no local, isso é combinado antes do atendimento.",
  },
  {
    question: "Minha pia ou vaso está entupido. Vocês resolvem?",
    answer: "Sim. Atendemos entupimento de pia, ralo, vaso sanitário e rede de esgoto, conforme a situação encontrada.",
  },
  {
    question: "Depois do reparo, o serviço tem garantia?",
    answer: "Sim. A garantia é informada de acordo com o tipo de serviço realizado e a condição da instalação.",
  },
];

function getWaLink(message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const defaultMessage = "Oi, vim pelo site e preciso de um encanador em São Paulo.";

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
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/88 to-primary/70" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.04fr_0.72fr] md:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
                <Clock className="h-4 w-4 text-emerald-300" />
                Atendimento 24h em São Paulo
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-normal sm:text-5xl lg:text-7xl">
                Encanador 24h em São Paulo
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
                Vazamentos, desentupimentos e reparos hidráulicos com atendimento rápido para casas, apartamentos e comércios.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={getWaLink(defaultMessage)} target="_blank" rel="noopener noreferrer">
                  <Button className="h-14 w-full rounded-md bg-emerald-500 px-7 text-base font-bold text-white shadow-xl shadow-emerald-950/30 hover:bg-emerald-600 sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar atendimento
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
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  Orçamento claro
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  Atendimento local
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  Serviço com garantia
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-white/15 bg-white p-5 text-slate-950 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">Chame pelo WhatsApp</p>
              <h2 className="mt-2 text-2xl font-black">Explique o problema e receba orientação rápida.</h2>
              <div className="mt-5 space-y-4">
                {[
                  "Vazamento ou cano estourado",
                  "Pia, ralo ou vaso entupido",
                  "Instalação ou troca de peças",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
                    <Wrench className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <a className="mt-6 block" href={getWaLink(defaultMessage)} target="_blank" rel="noopener noreferrer">
                <Button className="h-12 w-full rounded-md bg-accent text-base font-black text-white hover:bg-accent/90">
                  Quero atendimento agora
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 md:px-8">
            {[
              { icon: Clock, title: "Emergência 24h", desc: "Plantão para problemas urgentes." },
              { icon: MapPin, title: "São Paulo e região", desc: "Atendimento nos principais bairros." },
              { icon: ShieldCheck, title: "Serviço profissional", desc: "Execução cuidadosa e garantia." },
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
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-accent">Serviços de encanador</p>
              <h2 className="text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Resolva o problema hidráulico sem enrolação
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Atendimento para reparos, desentupimentos e instalações com foco em agilidade, limpeza e solução definitiva.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Droplets className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-black">{service.title}</h3>
                    <p className="mt-3 min-h-20 leading-7 text-slate-600">{service.desc}</p>
                    <a
                      className="mt-5 inline-flex w-full"
                      href={getWaLink(`Oi, vim pelo site e preciso de ajuda com ${service.title}.`)}
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
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-accent">Como funciona</p>
              <h2 className="text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Atendimento simples, rápido e organizado
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                O processo foi pensado para resolver urgências hidráulicas com clareza desde o primeiro contato.
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

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative bg-slate-950 p-7 text-white sm:p-10">
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-accent" />
                  <p className="mb-3 text-sm font-black uppercase tracking-wide text-accent">Área de atendimento</p>
                  <h2 className="text-3xl font-black tracking-normal text-white sm:text-4xl">Encanador 24h em São Paulo</h2>
                  <p className="mt-4 text-base leading-8 text-slate-100 sm:text-lg">
                    Atendimento residencial e comercial para urgências hidráulicas, reparos e desentupimentos em São Paulo e região.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {[
                      { value: "24h", label: "plantão" },
                      { value: "SP", label: "capital e região" },
                      { value: "WhatsApp", label: "chamada rápida" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-md border border-white/10 bg-white/5 p-4">
                        <p className="text-2xl font-black text-white">{item.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <a className="mt-7 inline-flex" href={getWaLink(defaultMessage)} target="_blank" rel="noopener noreferrer">
                    <Button className="h-12 rounded-md bg-emerald-500 px-7 font-bold text-white hover:bg-emerald-600">
                      <Phone className="mr-2 h-5 w-5" />
                      Chamar no WhatsApp
                    </Button>
                  </a>
                </div>

                <div className="bg-slate-50 p-7 sm:p-10">
                  <p className="text-sm font-black uppercase tracking-wide text-accent">Regiões atendidas</p>
                  <div className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {neighborhoods.map((neighborhood) => (
                      <div key={neighborhood} className="flex items-center gap-3 border-b border-slate-200 pb-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <span className="font-semibold text-slate-800">{neighborhood}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm leading-6 text-slate-600">
                    Não encontrou sua região na lista? Envie uma mensagem para confirmar a disponibilidade de atendimento.
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
                Respostas rápidas para quem precisa resolver vazamentos, entupimentos ou reparos hidráulicos.
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
                  Chame um encanador 24h em São Paulo pelo WhatsApp.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Envie uma mensagem explicando o problema. Se tiver, mande foto ou vídeo para agilizar a orientação.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    Atendimento 24h
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    Orçamento pelo WhatsApp
                  </span>
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
        <p className="font-semibold text-white">Encanador São Paulo 24h</p>
        <p className="mt-2">Atendimento hidráulico profissional em São Paulo-SP.</p>
      </footer>
    </div>
  );
}
