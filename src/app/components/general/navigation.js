"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import animationData from "../../../../public/lottie/menuAnimation.json";

gsap.registerPlugin(useGSAP);

const menuLinks = [
	{ href: "/", label: "Home", description: "Punto de partida" },
	{ href: "/photos", label: "Fotos", description: "Archivo visual" },
	{ href: "/websites", label: "Diseño Web", description: "Experiencias digitales" },
	{ href: "/blog", label: "Blog", description: "Ideas & reflexiones" },
];

export default function Navigation() {
	const pathname = usePathname();
	const navRef = useRef(null);
	const lottieRef = useRef(null);
	const panelRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const isRouteActive = (href) => {
		if (href === "/") return pathname === "/";
		return pathname === href || pathname?.startsWith(`${href}/`);
	};

	useEffect(() => {
		if (!isOpen) return;

		const body = document.body;
		const html = document.documentElement;

		const originalBodyOverflow = body.style.overflow;
		const originalHtmlOverflow = html.style.overflow;
		const originalPaddingRight = body.style.paddingRight;

		const scrollbarWidth = window.innerWidth - html.clientWidth;

		body.style.overflow = "hidden";
		html.style.overflow = "hidden";

		if (scrollbarWidth > 0) {
			body.style.paddingRight = `${scrollbarWidth}px`;
		}

		return () => {
			body.style.overflow = originalBodyOverflow;
			html.style.overflow = originalHtmlOverflow;
			body.style.paddingRight = originalPaddingRight;
		};
	}, [isOpen]);

	useGSAP(
		() => {
			gsap.set(panelRef.current, { autoAlpha: 0, xPercent: 100 });
		},
		{ scope: panelRef }
	);

	const { contextSafe } = useGSAP({ scope: navRef });

	const animatePanel = contextSafe((open) => {
		const panel = panelRef.current;
		if (!panel) return;

		const links = panel.querySelectorAll(".navigation-panel-link");
		const details = panel.querySelectorAll(".navigation-panel-detail");
		const illustration = panel.querySelector(".navigation-illustration");

		lottieRef.current?.setDirection(open ? 1 : -1);
		lottieRef.current?.play();

		gsap.killTweensOf([panel, links, details, illustration]);

		if (open) {
			setIsOpen(true);

			gsap
				.timeline()
				.set(panel, { autoAlpha: 1, xPercent: 100 })
				.set(links, { autoAlpha: 0, x: 28 })
				.set(details, { autoAlpha: 0, y: 10 })
				.set(illustration, { autoAlpha: 0, scale: 0.96 })
				.to(panel, {
					xPercent: 0,
					duration: 0.58,
					ease: "power3.out",
				})
				.to(
					links,
					{
						autoAlpha: 1,
						x: 0,
						duration: 0.42,
						stagger: 0.07,
						ease: "power3.out",
					},
					"-=0.28"
				)
				.to(
					illustration,
					{
						autoAlpha: 1,
						scale: 1,
						duration: 0.46,
						ease: "power2.out",
					},
					"-=0.34"
				)
				.to(
					details,
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.3,
						stagger: 0.04,
						ease: "power2.out",
					},
					"-=0.24"
				);

			return;
		}

		setIsOpen(false);

		gsap
			.timeline()
			.to([links, details, illustration], {
				autoAlpha: 0,
				duration: 0.16,
				ease: "power1.in",
			})
			.to(
				panel,
				{
					xPercent: 100,
					duration: 0.34,
					ease: "power2.inOut",
				},
				0
			)
			.set(panel, { autoAlpha: 0 });
	});

	const toggleMenu = () => {
		animatePanel(!isOpen);
	};

	const closeMenu = () => {
		if (isOpen) animatePanel(false);
	};

	useEffect(() => {
		const closeOnEscape = (event) => {
			if (event.key === "Escape") closeMenu();
		};

		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	});

	return (
		<>
			<header
				ref={navRef}
				className="fixed inset-x-0 top-0 z-[80] flex h-14 w-full items-center bg-transparent px-5 text-foreground sm:h-16 sm:px-8 lg:h-[4.5rem] lg:px-12 2xl:px-16"
			>
				<Link
					href="/"
					onClick={closeMenu}
					className="group flex items-center gap-3"
					aria-label="Ir al inicio"
				>
					<span className="flex size-10 items-center justify-center rounded-lg border border-foreground/15 bg-background/25 text-sm font-bold text-goldbackground backdrop-blur-md transition-colors duration-300 group-hover:border-goldbackground/70 sm:size-11">
						G
					</span>
					<span className="hidden leading-none sm:block">
						<span className="block text-xs font-bold uppercase tracking-[0.28em]">
							Galos
						</span>
						<span className="mt-1 block text-[0.62rem] uppercase tracking-[0.34em] text-foreground/55">
							Casa Creativa
						</span>
					</span>
				</Link>

				<button
					type="button"
					onClick={toggleMenu}
					className="relative z-[90] ml-auto flex size-10 items-center justify-center rounded-full border border-foreground/20 bg-background/20 p-2 text-foreground backdrop-blur-md transition-colors duration-300 hover:border-goldbackground hover:text-goldbackground sm:size-11 lg:size-12"
					aria-expanded={isOpen}
					aria-controls="main-navigation-panel"
					aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
				>
					<Lottie
						lottieRef={lottieRef}
						animationData={animationData}
						loop={false}
						autoplay={false}
						className="size-full rotate-180"
					/>
				</button>
			</header>

			<div
				id="main-navigation-panel"
				ref={panelRef}
				className={`invisible fixed inset-0 z-[70] h-[100svh] w-screen translate-x-full overflow-y-auto bg-background text-foreground opacity-0 lg:overflow-hidden ${
					isOpen ? "pointer-events-auto" : "pointer-events-none"
				}`}
				aria-hidden={!isOpen}
			>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_42%,rgba(221,178,109,0.14),transparent_30%),linear-gradient(115deg,rgba(36,36,36,0.98),rgba(36,36,36,0.94)_56%,rgba(53,53,53,0.88))]" />
				<div className="absolute inset-x-0 top-14 h-px bg-foreground/8 sm:top-16 lg:top-[4.5rem]" />

				<div className="relative grid h-full grid-rows-[1fr_auto] px-5 pb-5 pt-18 sm:px-8 sm:pb-7 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)] lg:grid-rows-1 lg:px-12 lg:pb-8 lg:pt-24 xl:px-16 2xl:px-24">
					<nav className="relative z-10 flex min-h-0 flex-col justify-center lg:border-r lg:border-foreground/10 lg:pr-12 2xl:pr-18">
						<ul className="ml-auto flex w-full max-w-5xl flex-col items-end">
							{menuLinks.map((link, index) => {
								const isActive = isRouteActive(link.href);

								return (
									<li
										key={link.href}
										className="navigation-panel-link w-full border-b border-goldbackground/30 py-4 first:border-t sm:py-5 lg:py-6 3xl:py-8"
									>
										<Link
											href={link.href}
											onClick={closeMenu}
											className={`group grid grid-cols-[2.25rem_minmax(0,1fr)] items-end gap-4 text-right transition-colors duration-300 sm:grid-cols-[3rem_minmax(0,1fr)] lg:gap-6 ${
												isActive
													? "text-goldbackground"
													: "text-foreground/78 hover:text-goldbackground/80"
											}`}
											aria-current={isActive ? "page" : undefined}
										>
											<span className="pb-3 text-left text-xs font-bold tracking-[0.3em] opacity-80 sm:text-sm">
												{String(index + 1).padStart(2, "0")}
											</span>
											<span className="flex min-w-0 flex-col items-end">
												<span className="max-w-full text-[clamp(3.2rem,16vw,6.8rem)] font-bold uppercase leading-[0.88] text-balance transition-transform duration-300 group-hover:-translate-x-2 lg:text-[clamp(4.5rem,7vw,8rem)] 2xl:text-[clamp(6rem,7vw,9.2rem)]">
													{link.label}
												</span>
												<span className="navigation-panel-detail mt-3 text-[0.62rem] font-bold uppercase tracking-[0.34em] opacity-50 sm:text-xs lg:text-sm">
													{link.description}
												</span>
											</span>
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>

					<aside className="pointer-events-none absolute inset-0 opacity-30 lg:pointer-events-auto lg:relative lg:flex lg:items-center lg:justify-center lg:pl-12 lg:opacity-100 2xl:pl-18">
						<div className="navigation-illustration absolute inset-0 flex items-center justify-center lg:relative lg:inset-auto lg:w-full">
							<div className="relative flex aspect-square w-[115vmin] max-w-none items-center justify-center rounded-full border border-goldbackground/10 sm:w-[95vmin] lg:w-full lg:max-w-[34rem] 2xl:max-w-[42rem]">
								<div className="absolute inset-[12%] rounded-full border border-dashed border-goldbackground/10" />
								<div className="absolute inset-[24%] rounded-full border border-goldbackground/8" />
								<div className="absolute h-px w-2/5 bg-goldbackground/20" />
								<div className="text-center">
									<p className="text-[clamp(3.6rem,18vw,8.5rem)] font-bold uppercase leading-none text-foreground/90 lg:text-[clamp(4rem,8vw,8rem)]">
										Galos<span className="text-goldbackground">.</span>
									</p>
									<p className="mt-7 text-[0.62rem] font-bold uppercase tracking-[0.46em] text-foreground/35 sm:text-xs">
										Placeholder
									</p>
									<p className="mt-3 text-[0.58rem] font-bold uppercase tracking-[0.34em] text-foreground/25 sm:text-xs">
										Ilustracion futura
									</p>
								</div>
							</div>
						</div>
					</aside>

					<div className="relative z-10 flex flex-wrap justify-end gap-x-6 gap-y-3 border-t border-foreground/10 pt-5 text-right text-[0.62rem] font-bold uppercase tracking-[0.26em] text-foreground/38 sm:text-xs lg:absolute lg:inset-x-12 lg:bottom-7 lg:border-0 lg:pt-0 xl:inset-x-16 2xl:inset-x-24">
						<span className="navigation-panel-detail">Instagram</span>
						<span className="navigation-panel-detail">Behance</span>
						<span className="navigation-panel-detail">LinkedIn</span>
					</div>
				</div>
			</div>
		</>
	);
}
