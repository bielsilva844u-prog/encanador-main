"use client";

import Link from "next/link";
import { Clock, Home, Menu, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const whatsappUrl =
  "https://wa.me/5511998471173?text=Oi%2C%20vim%20pelo%20site%20e%20preciso%20de%20um%20encanador%20em%20S%C3%A3o%20Paulo.";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
      <div className="hidden bg-primary text-white md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-8 text-[13px] font-medium">
          <span>Atendimento hidráulico 24h em São Paulo e região</span>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold">
            <Phone className="h-4 w-4 text-emerald-300" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 md:h-[82px] md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Encanador na sua região">
          <span className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-sm md:h-14 md:w-14">
            <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="text-[26px] font-black leading-none tracking-tight">E</span>
            <span className="absolute bottom-2 left-2 h-2 w-7 rounded-full border-2 border-white/80 border-t-transparent" />
          </span>

          <span className="min-w-0">
            <span className="flex items-center gap-2">
              <span className="text-[23px] font-black leading-none tracking-tight text-slate-950 sm:text-[30px]">
                Encanador
              </span>
              <span className="hidden rounded-full bg-accent px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white sm:inline-flex">
                24h
              </span>
            </span>
            <span className="mt-1.5 block text-[12px] font-extrabold uppercase leading-none tracking-[0.18em] text-primary sm:text-[13px]">
              na sua região
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-[13px] font-bold uppercase tracking-wide text-slate-700 transition hover:text-accent">
            Início
          </Link>
          <Link href="#servicos" className="text-[13px] font-bold uppercase tracking-wide text-slate-700 transition hover:text-accent">
            Serviços
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="h-11 rounded-md bg-accent px-5 font-bold text-white shadow-sm hover:bg-accent/90">
              <Phone className="mr-2 h-4 w-4" />
              Orçamento rápido
            </Button>
          </a>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-11 w-11 rounded-md text-primary hover:bg-slate-100 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86vw] max-w-[340px] border-l-0 p-0">
            <div className="bg-primary px-6 pb-6 pt-8 text-white">
              <SheetTitle className="text-left text-2xl font-extrabold text-white">
                Encanador na sua região
              </SheetTitle>
              <p className="mt-3 text-sm leading-6 text-blue-50">
                Atendimento hidráulico 24h em São Paulo para vazamentos, reparos e desentupimentos.
              </p>
            </div>

            <div className="px-6 py-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Menu</p>

              <nav className="mt-4 divide-y divide-slate-100 border-y border-slate-100">
                <Link href="/" className="flex items-center gap-3 py-4 text-[15px] font-semibold text-slate-800">
                  <Home className="h-5 w-5 text-primary" />
                  Início
                </Link>
                <Link href="#servicos" className="flex items-center gap-3 py-4 text-[15px] font-semibold text-slate-800">
                  <Wrench className="h-5 w-5 text-primary" />
                  Serviços
                </Link>
              </nav>

              <div className="mt-6 rounded-md bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="font-bold text-slate-950">Plantão 24h</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">Envie uma mensagem e explique o problema.</p>
                  </div>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 block">
                <Button className="h-12 w-full rounded-md bg-emerald-500 text-sm font-bold text-white shadow-sm hover:bg-emerald-600">
                  <Phone className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
