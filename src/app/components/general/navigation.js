"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navigation() {
  const navRef = useRef(null);
  const panelRef = useRef(null);
  const backdropRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      if (isOpen) return;

      const current = window.scrollY;
      if (current > lastScrollY + 8 && current > 40) {
        setIsHidden(true);
      } else if (current < lastScrollY - 8) {
        setIsHidden(false);
      }
      lastScrollY = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  useGSAP(
    () => {
      gsap.to(navRef.current, {
        y: isHidden ? "-110%" : "0%",
        duration: 0.5,
        ease: "power3.out",
      });
    },
    { dependencies: [isHidden] }
  );

  useGSAP(
    () => {
      gsap.set(panelRef.current, { x: "100%" });
      gsap.set(".menu-link", { x: 24, opacity: 0 });
      gsap.set(backdropRef.current, { opacity: 0 });
    },
    { dependencies: [] }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(panelRef.current, {
        x: isOpen ? 0 : "100%",
        duration: 0.5,
      });

      tl.to(
        backdropRef.current,
        {
          opacity: isOpen ? 1 : 0,
          duration: 0.4,
        },
        "<"
      );

      tl.to(
        ".menu-link",
        {
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : 24,
          stagger: 0.05,
          duration: 0.35,
        },
        isOpen ? "-=0.1" : 0
      );
    },
    { dependencies: [isOpen] }
  );

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-50 px-4 sm:px-8">
      <div className="relative rounded-b-2xl border border-goldbackground bg-background/90 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-28 items-center justify-center rounded-md border border-goldbackground/60 bg-background/60 text-xs font-semibold uppercase tracking-wide"
              aria-label="Logo de la agencia"
            >
              Logo
            </div>
            <Link href="/" className="text-lg font-semibold uppercase tracking-wide">
              Galos Casa Creativa
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-goldbackground bg-blackText text-sm font-semibold uppercase tracking-wide"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? "X" : "Menú"}
          </button>
        </div>
      </div>

      <div
        ref={backdropRef}
        className="menu-backdrop fixed inset-0 z-40 bg-blackText/80 opacity-0"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      />

      <nav
        ref={panelRef}
        className="fixed top-0 right-0 z-40 flex h-screen w-[90%] sm:w-[80%] lg:w-1/2 flex-col gap-6 border-l border-goldbackground bg-background/95 px-6 pb-12 pt-24 text-left text-xl uppercase font-primary shadow-[-12px_0_30px_rgba(0,0,0,0.35)]"
        style={{ transform: "translateX(100%)" }}
      >
        <Link href="/" className="menu-link" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/photos" className="menu-link" onClick={() => setIsOpen(false)}>
          Fotos
        </Link>
        <Link href="/websites" className="menu-link" onClick={() => setIsOpen(false)}>
          Diseño Web
        </Link>
        <Link href="/blog" className="menu-link" onClick={() => setIsOpen(false)}>
          Blog
        </Link>
      </nav>
    </header>
  );
}
