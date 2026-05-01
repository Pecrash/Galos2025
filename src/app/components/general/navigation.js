"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-web";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const routes = [
	{ href: "/", label: "Home", eyebrow: "Punto de partida" },
	{ href: "/photos", label: "Fotos", eyebrow: "Archivo visual" },
	{ href: "/websites", label: "Diseño Web", eyebrow: "Experiencias digitales" },
	{ href: "/blog", label: "Blog", eyebrow: "Ideas & reflexiones" },
];

const socials = [
	{ href: "https://www.instagram.com/", label: "Instagram" },
	{ href: "https://www.behance.net/", label: "Behance" },
	{ href: "https://www.linkedin.com/", label: "LinkedIn" },
];

export default function Navigation() {
	const pathname = usePathname();
	const router = useRouter();
	const navRef = useRef(null);
	const panelRef = useRef(null);
	const menuIconRef = useRef(null);
	const menuAnimationRef = useRef(null);
	const menuTweenRef = useRef(null);
	const isOpenRef = useRef(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const [headerTheme, setHeaderTheme] = useState("light");
	const [hasMounted, setHasMounted] = useState(false);

	const panelBaseStyle = {
		pointerEvents: isOpen ? "auto" : "none",
		zIndex: 9990,
		...(hasMounted
			? {}
			: {
					opacity: 0,
					visibility: "hidden",
					transform: "translate3d(100%, 0, 0)",
				}),
	};

	const menuSelectors = useCallback(() => {
		const panel = panelRef.current;
		return {
			links: panel ? panel.querySelectorAll(".menu-link") : [],
			placeholder: panel ? panel.querySelectorAll(".menu-placeholder") : [],
			socials: panel ? panel.querySelectorAll(".menu-social") : [],
		};
	}, []);

	const headerColorClass =
		isOpen || headerTheme === "light" ? "text-foreground" : "text-blackText";
	const iconFilter = !isOpen && headerTheme === "dark" ? "invert(1)" : "none";

	const isRouteActive = useCallback(
		(href) => {
			if (href === "/") return pathname === "/";
			return pathname === href || pathname?.startsWith(`${href}/`);
		},
		[pathname]
	);

	const playMenuIcon = useCallback((open) => {
		const animation = menuAnimationRef.current;
		if (!animation) return;

		const lastFrame = Math.max(animation.totalFrames - 1, 0);
		if (!lastFrame) return;

		animation.setSpeed(open ? 1.65 : 2.2);
		animation.setDirection(open ? 1 : -1);
		animation.goToAndPlay(open ? 0 : lastFrame, true);
	}, []);

	const setMenuOpen = useCallback(
		(open) => {
			isOpenRef.current = open;
			playMenuIcon(open);
			setIsOpen(open);
		},
		[playMenuIcon]
	);

	useEffect(() => {
		isOpenRef.current = isOpen;
	}, [isOpen]);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	useEffect(() => {
		if (!menuIconRef.current) return;

		menuAnimationRef.current = Lottie.loadAnimation({
			container: menuIconRef.current,
			renderer: "svg",
			loop: false,
			autoplay: false,
			path: "/lottie/menuAnimation.json",
			rendererSettings: {
				progressiveLoad: true,
				preserveAspectRatio: "xMidYMid meet",
			},
		});

		menuAnimationRef.current.addEventListener("DOMLoaded", () => {
			const animation = menuAnimationRef.current;
			if (!animation) return;

			const lastFrame = Math.max(animation.totalFrames - 1, 0);
			animation.goToAndStop(isOpenRef.current ? lastFrame : 0, true);
		});

		return () => {
			menuAnimationRef.current?.destroy();
			menuAnimationRef.current = null;
		};
	}, []);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		let ticking = false;

		const updateHeaderVisibility = () => {
			if (isOpen) {
				ticking = false;
				return;
			}

			const currentScrollY = window.scrollY;
			const delta = currentScrollY - lastScrollY;

			if (Math.abs(delta) > 8) {
				setIsHidden(delta > 0 && currentScrollY > 90);
				lastScrollY = currentScrollY;
			}

			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateHeaderVisibility);
				ticking = true;
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) setIsHidden(false);
		document.body.style.overflow = isOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	useEffect(() => {
		const themedSections = gsap.utils.toArray("[data-header-theme]");

		const updateThemeFromViewport = () => {
			const markerY = Math.min(88, window.innerHeight * 0.18);
			const activeSection = themedSections.find((section) => {
				const rect = section.getBoundingClientRect();
				return rect.top <= markerY && rect.bottom >= markerY;
			});

			setHeaderTheme(activeSection?.dataset.headerTheme || "light");
		};

		const triggers = themedSections.map((section) =>
			ScrollTrigger.create({
				trigger: section,
				start: "top 88px",
				end: "bottom 88px",
				onEnter: updateThemeFromViewport,
				onEnterBack: updateThemeFromViewport,
				onLeave: updateThemeFromViewport,
				onLeaveBack: updateThemeFromViewport,
				onRefresh: updateThemeFromViewport,
			})
		);

		const refreshFrame = window.requestAnimationFrame(() => {
			updateThemeFromViewport();
			ScrollTrigger.refresh();
		});

		window.addEventListener("resize", updateThemeFromViewport);

		return () => {
			window.cancelAnimationFrame(refreshFrame);
			window.removeEventListener("resize", updateThemeFromViewport);
			triggers.forEach((trigger) => trigger.kill());
		};
	}, [pathname]);

	useGSAP(
		() => {
			gsap.to(navRef.current, {
				yPercent: isHidden ? -115 : 0,
				duration: 0.42,
				ease: "power3.out",
				overwrite: true,
			});
		},
		{ dependencies: [isHidden] }
	);

	useGSAP(
		() => {
			const panel = panelRef.current;
			if (!panel) return;

			const { links, placeholder, socials } = menuSelectors();

			gsap.set(panel, { autoAlpha: 0, xPercent: 100 });
			gsap.set(links, { autoAlpha: 0, x: 36 });
			gsap.set(socials, { autoAlpha: 0, y: 10 });
			gsap.set(placeholder, { autoAlpha: 0, scale: 0.96 });
		},
		{ dependencies: [], scope: panelRef }
	);

	useGSAP(
		() => {
			const panel = panelRef.current;
			if (!panel) return;

			const { links, placeholder, socials } = menuSelectors();

			menuTweenRef.current?.kill();

			const tl = gsap.timeline({
				defaults: { overwrite: true },
				onComplete: () => {
					if (!isOpen) gsap.set(panel, { autoAlpha: 0, xPercent: 100 });
				},
			});

			menuTweenRef.current = tl;

			if (isOpen) {
				tl.set(panel, { autoAlpha: 1, xPercent: 100 })
					.to(panel, {
						xPercent: 0,
						duration: 0.62,
						ease: "power3.out",
					})
					.to(
						links,
						{
							autoAlpha: 1,
							x: 0,
							duration: 0.42,
							stagger: 0.055,
							ease: "power3.out",
						},
						"-=0.32"
					)
					.to(
						placeholder,
						{
							autoAlpha: 1,
							x: 0,
							scale: 1,
							duration: 0.48,
							ease: "power2.out",
						},
						"-=0.38"
					)
					.to(
						socials,
						{
							autoAlpha: 1,
							x: 0,
							y: 0,
							duration: 0.28,
							stagger: 0.04,
							ease: "power2.out",
						},
						"-=0.2"
					);

				return;
			}

			tl.to(links, {
				autoAlpha: 0,
				x: 16,
				duration: 0.14,
				stagger: 0.025,
				ease: "power1.in",
			})
				.to(
					socials,
					{
						autoAlpha: 0,
						y: 10,
						duration: 0.12,
						ease: "power1.in",
					},
					0
				)
				.to(
					placeholder,
					{
						autoAlpha: 0,
						scale: 0.96,
						duration: 0.12,
						ease: "power1.in",
					},
					0
				)
				.to(
					panel,
					{
						xPercent: 100,
						duration: 0.26,
						ease: "power2.in",
					},
					0
				);
		},
		{ dependencies: [isOpen, menuSelectors], scope: panelRef }
	);

	const handleRouteClick = (event, href) => {
		if (
			event.metaKey ||
			event.ctrlKey ||
			event.shiftKey ||
			event.altKey ||
			event.button !== 0
		) {
			return;
		}

		event.preventDefault();
		setMenuOpen(false);

		window.setTimeout(() => {
			if (pathname !== href) router.push(href);
		}, 300);
	};

	return (
		<>
			<header
				ref={navRef}
				className={`fixed inset-x-0 top-0 z-[10000] px-4 py-5 transition-colors duration-300 sm:px-8 lg:px-10 2xl:px-14 ${headerColorClass}`}
			>
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="group flex items-center gap-3"
						aria-label="Ir al inicio"
						onClick={() => isOpen && setMenuOpen(false)}
					>
						<span className="flex size-9 items-center justify-center rounded-md border border-current/25 bg-white/6 text-sm font-bold italic text-goldbackground backdrop-blur-sm transition-colors group-hover:border-goldbackground/70 sm:size-10">
							G
						</span>
						<span className="leading-none">
							<span className="block text-xs font-bold uppercase tracking-[0.28em] sm:text-sm">
								Galos
							</span>
							<span className="mt-1 block text-[0.62rem] uppercase tracking-[0.38em] opacity-70 sm:text-xs">
								Casa Creativa
							</span>
						</span>
					</Link>

					<button
						type="button"
						onClick={() => setMenuOpen(!isOpen)}
						className="relative z-[10000] flex size-11 items-center justify-center rounded-full border border-current/25 bg-white/6 p-2 backdrop-blur-sm transition-colors hover:border-goldbackground hover:text-goldbackground sm:size-12"
						aria-expanded={isOpen}
						aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
					>
						<span
							ref={menuIconRef}
							className="block size-7 transition-[filter] duration-300"
							style={{ filter: iconFilter }}
						/>
					</button>
				</div>
			</header>

			<nav
				ref={panelRef}
				className="fixed inset-0 flex h-[100svh] w-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_80%_40%,rgba(221,178,109,0.12),transparent_32%),linear-gradient(110deg,#1a1a1a,#24221f_55%,#2b2821)] text-foreground"
				style={panelBaseStyle}
				aria-hidden={!isOpen}
			>
				<div className="h-24 shrink-0 border-b border-white/8 sm:h-28" />

				<div className="grid min-h-0 flex-1 grid-rows-[1fr_auto] px-6 pb-6 sm:px-10 sm:pb-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.85fr)] lg:grid-rows-1 lg:px-14 xl:px-20 2xl:px-24">
					<div className="flex min-h-0 flex-col justify-center border-white/10 py-8 lg:border-r lg:pr-16">
						<ul className="w-full max-w-5xl">
							{routes.map((route, index) => {
								const isActive = isRouteActive(route.href);

								return (
									<li
										key={route.href}
										className="menu-link border-b border-goldbackground/35 py-4 sm:py-5 xl:py-6"
									>
										<Link
											href={route.href}
											onClick={(event) => handleRouteClick(event, route.href)}
											className={`group grid grid-cols-[2.4rem_minmax(0,1fr)_1.5rem] items-end gap-3 transition-colors duration-300 sm:grid-cols-[3rem_minmax(0,1fr)_2rem] ${
												isActive
													? "text-goldbackground"
													: "text-foreground/82 hover:text-[#cfa96c]"
											}`}
										>
											<span className="pb-3 text-xs font-semibold tracking-[0.3em] opacity-90 sm:text-sm">
												{String(index + 1).padStart(2, "0")}
											</span>
											<span>
												<span className="block text-[clamp(3.4rem,14vw,7.2rem)] font-bold uppercase leading-[0.86] tracking-normal lg:text-[clamp(4rem,7vw,8.5rem)] 2xl:text-[9rem]">
													{route.label}
												</span>
												<span className="mt-3 block text-xs font-semibold uppercase tracking-[0.34em] opacity-55 sm:text-sm">
													{route.eyebrow}
												</span>
											</span>
											<span className="pb-7 text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-3xl">
												↗
											</span>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="hidden min-h-0 flex-col justify-center pl-12 lg:flex">
						<p className="menu-placeholder mb-16 text-xs font-semibold uppercase tracking-[0.36em] text-white/20">
							04.416 N · 3.703 W
						</p>
						<div className="menu-placeholder relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center rounded-full border border-goldbackground/14">
							<div className="absolute inset-[12%] rounded-full border border-dashed border-goldbackground/10" />
							<div className="absolute inset-[24%] rounded-full border border-goldbackground/8" />
							<div className="text-center">
								<p className="text-[clamp(4rem,8vw,8.5rem)] font-bold uppercase leading-none text-white/92">
									Galos<span className="text-goldbackground">.</span>
								</p>
								<div className="mx-auto mt-8 h-px w-40 bg-goldbackground/35" />
								<p className="mt-8 text-xs font-semibold uppercase tracking-[0.46em] text-white/45">
									Placeholder
								</p>
								<p className="mt-4 text-xs font-semibold uppercase tracking-[0.34em] text-white/30">
									Ilustracion futura
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="grid shrink-0 gap-4 border-t border-white/8 px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/36 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-14 xl:px-20 2xl:px-24">
					<ul className="flex flex-wrap gap-x-7 gap-y-3">
						{socials.map((social) => (
							<li key={social.label} className="menu-social">
								<a
									href={social.href}
									target="_blank"
									rel="noreferrer"
									className="transition-colors duration-300 hover:text-white"
								>
									{social.label} ↗
								</a>
							</li>
						))}
					</ul>
					<p className="menu-social hidden text-right lg:block">
						hello@galos.studio <span className="mx-5 text-white/12">|</span> © 2024 Galos
					</p>
				</div>
			</nav>
		</>
	);
}
