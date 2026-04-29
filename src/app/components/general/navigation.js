"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-web";

gsap.registerPlugin(useGSAP);

export default function Navigation() {
	const navRef = useRef(null);
	const panelRef = useRef(null);
	const backdropRef = useRef(null);
	let animationInstance = useRef();
	let openCount = 0;
	const openIconRef = useRef(null);
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

		animationInstance.current = Lottie.loadAnimation({
			container: openIconRef.current,
			renderer: "svg",
			loop: false,
			autoplay: false,
			path: "/lottie/menuAnimation.json",
		});

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

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
// DEBO CORREGIR ESTO PARA QUE FUNCIONE BIEN CON EL ESTADO Y LA ANIMACIÓN AL CAMBIAR DE RUTA
	const { contextSafe } = useGSAP();

	const toggleMenu = () => setIsOpen((prev) => !prev);

	const openMenu = contextSafe(() => {
		if (!animationInstance.current) return; // protección

		const willOpen = !isOpen; // estado futuro
		const anim = animationInstance.current;

		// 2️⃣ Coloca la cabeza en el fotograma correcto y pon la dirección adecuada
		if (willOpen) {
			anim.setDirection(1); // abrir = forward
			anim.goToAndPlay(0, true); // desde inicio
		} else {
			anim.setDirection(-1); // cerrar = reverse
			anim.goToAndPlay(anim.totalFrames, true); // desde el final
		}

		setIsOpen(willOpen); // ¡ahora sí, actualiza estado!
	});

	return (
		<header ref={navRef} className="fixed inset-x-0 top-0 z-50 px-4 sm:px-8">
			<div className="relative rounded-b-2xl  bg-background/90 backdrop-blur-xl">
				<div className="flex h-16 items-center justify-between px-4 sm:px-6">
					<div className="flex items-center gap-3">
						<div
							className="flex h-10 w-28 items-center justify-center rounded-md border border-goldbackground/60 bg-background/60 text-xs font-semibold uppercase tracking-wide"
							aria-label="Logo de la agencia"
						>
							Logo
						</div>
						<Link href="/" className="xs:hidden xl:block text-lg font-semibold uppercase tracking-wide">
							Galos Casa Creativa
						</Link>
					</div>
				</div>
			</div>

			<div
				ref={backdropRef}
				className="menu-backdrop fixed inset-0 z-40 bg-blackText/80 opacity-0"
				style={{ pointerEvents: isOpen ? "auto" : "none" }}
				aria-hidden={!isOpen}
				onClick={() => setIsOpen(false)}
			/>
			<section
				ref={panelRef}
				className="fixed h-full xl:min-h-lvw top-0 right-0 z-40 flex w-[90%] sm:w-[80%] lg:w-1/3 flex-col gap-6 border-l border-goldbackground bg-background/95 px-6 pb-12 pt-24 text-left text-3xl uppercase font-primary shadow-[-12px_0_30px_rgba(0,0,0,0.35)] sm:text-5xl sm:gap-10 xl:text-7xl xl:gap-20"
				style={{ transform: "translateX(100%)" }}
			>
				<Link href="/" className="menu-link" onClick={() => setTimeout(openMenu, 800)}>
					Home
				</Link>
				<Link href="/photos" className="menu-link" onClick={() => setTimeout(openMenu, 800)}>
					Fotos
				</Link>
				<Link href="/websites" className="menu-link" onClick={() => setTimeout(openMenu, 800)}>
					Diseño Web
				</Link>
				<Link href="/blog" className="menu-link" onClick={() => setTimeout(openMenu, 800)}>
					Blog
				</Link>
			</section>
			<button
				type="button"
				onClick={openMenu}
				ref={openIconRef}
				className="flex h-11 rotate-180 w-11 z-50 absolute right-4 top-4 items-center justify-center rounded-full  text-sm font-semibold uppercase tracking-wide mr-5"
				/* aria-expanded={isOpen}
				aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} */
			></button>
		</header>
	);
}
