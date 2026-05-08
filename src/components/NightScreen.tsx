"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Maximize2, Minimize2, Settings, Moon, Sun, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NightScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTrueBlack, setIsTrueBlack] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const hideControls = useCallback(() => {
    setShowControls(false);
  }, []);

  const resetTimer = useCallback(() => {
    setShowControls(true);
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(hideControls, 3000);
    setTimer(newTimer);
  }, [timer, hideControls]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = () => resetTimer();
    const handleKeyDown = () => resetTimer();
    const handleTouch = () => resetTimer();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [resetTimer]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen mode: ${e.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 transition-colors duration-1000 ease-in-out cursor-none",
        isTrueBlack ? "bg-black" : "bg-[#0B0A0F]",
        showControls && "cursor-default"
      )}
    >
      {/* The pure black canvas overlay that fades in on mount */}
      <div className="absolute inset-0 z-0 fade-in" aria-hidden="true" />

      {/* Minimalist UI Layer */}
      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col items-center justify-between p-8 transition-opacity duration-700 ease-in-out font-body",
          showControls ? "opacity-100" : "opacity-0"
        )}
      >
        <header className="w-full flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Tela Noturna
            </h1>
            <p className="text-[10px] text-muted-foreground/50 tracking-tight">
              PURE MINIMALISM
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-muted-foreground hover:bg-primary/20"
              onClick={() => setIsTrueBlack(!isTrueBlack)}
              title={isTrueBlack ? "Modo Carvão" : "Modo Preto Absoluto"}
            >
              {isTrueBlack ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-muted-foreground hover:bg-primary/20"
              onClick={toggleFullscreen}
              title="Tela Cheia"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
          </div>
        </header>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-1 h-1 bg-accent/30 rounded-full animate-pulse" />
          <span className="text-[12px] font-light text-muted-foreground/30 tracking-[0.2em] uppercase">
            {showControls ? "Foco & Relaxamento" : ""}
          </span>
        </div>

        <footer className="w-full flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-muted-foreground/20 leading-relaxed max-w-[200px]">
              O movimento revela a interface.
              O repouso traz a escuridão.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-muted-foreground/30 hover:text-muted-foreground hover:bg-transparent"
              onClick={() => {}}
            >
              <Info className="w-3 h-3" />
            </Button>
          </div>
        </footer>
      </div>

      {/* Subtle indicator for when controls are hidden but user clicks */}
      {!showControls && (
        <div 
          className="absolute inset-0 z-0 bg-transparent" 
          onClick={() => setShowControls(true)}
        />
      )}
    </div>
  );
}
