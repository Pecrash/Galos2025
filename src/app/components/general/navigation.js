"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const NAV_HEIGHT = "4.5rem";

export default function Navigation() {
  const navRef = useRef(null);
  const panelRef = useRef(null);
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
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(panelRef.current, {
        height: isOpen ? "100vh" : NAV_HEIGHT,
        duration: 0.6,
      });

      tl.to(
        ".menu-backdrop",
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
          y: isOpen ? 0 : -12,
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
      <div
        ref={panelRef}
        className="relative overflow-hidden rounded-b-2xl border border-goldbackground bg-background/90 backdrop-blur-xl"
        style={{ height: NAV_HEIGHT }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-lg font-semibold uppercase tracking-wide">
            Galos Casa Creativa
          </Link>

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

        <div className="menu-backdrop pointer-events-none absolute inset-0 -z-10 bg-blackText opacity-0" />

        <nav className="flex h-[calc(100%-4.5rem)] flex-col items-center justify-center gap-6 px-6 text-center text-xl uppercase font-primary">
          <Link href="/" className="menu-link opacity-0" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/photos" className="menu-link opacity-0" onClick={() => setIsOpen(false)}>
            Fotos
          </Link>
          <Link href="/websites" className="menu-link opacity-0" onClick={() => setIsOpen(false)}>
            Diseño Web
          </Link>
          <Link href="/blog" className="menu-link opacity-0" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
