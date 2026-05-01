"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WebsiteSlider(params) {
	const container = useRef();

	/* useGSAP(
		() => {
			let elements = gsap.utils.toArray(".box");
			let animating = true;
			let enter = 0
			let tl = gsap.timeline({
				paused: true,
				defaults: { ease: "power1.inOut" },
				onComplete: () => (animating = false),
			});

			ScrollTrigger.create({
				trigger: container.current,
				start: "top top",
				end: "+=1500", // distancia de scroll del “capítulo”
				pin: true,
				anticipatePin: 1,
				scrub: false, // importante: animaciones por tiempo, no ligadas al scroll
				// Activa al entrar, desactiva al salir

				onEnter: () => (animating = false, enter = 1),
				onEnterBack: () => (animating = false, enter = 1),
				onLeave: () => (enter = 0),
				onLeaveBack: () => (enter = 0),
			});

			observerRef.current = Observer.create({
				target: window,
				type: "wheel, touch",
				onDown: () => {
					console.log(animating);
					if (!animating && enter == 1) {
						animating = true;
						count < elements.length - 1 && count++;
						tl.clear()
							.to(elements[count], { top: "1.5rem", color: "#E8E8E8" })
							.to(elements[count - 1], { top: "-100%" }, "<")
							.to(elements[count], { height: "100%" })
							.play();
						console.log("Entered:", count);
					}
				},
				onUp: () => {
					console.log(count);
					if (!animating && enter == 1) {
						animating = true;
						if (count == 0) {
							tl.clear().to(elements[count], { top: "1.5rem", color: "#E8E8E8" }).play();
							console.log("funciono arriba");
						} else {
							tl.clear()
								.to(elements[count], { height: "32px" })
								.to(elements[count], {
									top: `${count == 3 ? "91.6667%" : count == 2 ? "83.3333%" : "75%"}`,
									color: "#353535",
								}).to(elements[count - 1], { top: "1.5rem", height: "100%" })
								.play();
							console.log("funciono abajo");
						}
						count > 0 && count--;
					}
				},
			});
		},
		{ scope: container }
	); // <-- scope is for selector text (optional) */


	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: container.current,
						start: "top top",
						end: "+=1400",
						pin: true,
						scrub: 1, // 1 s de easing al seguir el scroll
						snap: {
							snapTo: "labels", // ancla en cada label de la timeline
							duration: 0.3, // 0.3 s para el ajuste
							ease: "power1.inOut",
							inertia: false, // usa momentum del scroll
						},
					},
				})
				.addLabel("step1")
				.to(".box1", {color: "#E8E8E8", top: "-100%"})
				.to(".box2", {color: "#E8E8E8", top: "2.5rem"}, "<")
				.to(".box2", { height: "100%" })
				.addLabel("step2")
				.to(".box2", {color: "#E8E8E8", top: "-100%"})
				.to(".box3", {color: "#E8E8E8", top: "2.5rem"}, "<")
				.to(".box3", { height: "100%" })
				.addLabel("step3")
				.to(".box3", {color: "#E8E8E8", top: "-100%"})
				.to(".box4", {color: "#E8E8E8", top: "2.5rem"}, "<")
				.to(".box4", { height: "100%" })
				.addLabel("step4") // se duplica para que el contenedor finalice correctamente
				.to(".box3", {color: "#E8E8E8", top: "-100%"})
				.to(".box4", {color: "#E8E8E8", top: "2.5rem"}, "<")
				.to(".box4", { height: "100%" })
		},
		{ scope: container }
	);

	return (
		<section
			className="flex flex-col bg-foreground relative p-8 pt-10 h-screen"
			ref={container}
		>
			{/* <h1 className="text-red-400 text-xl">Aun debemos corregir cosas aquí</h1> */}
			<h2 className="text-blackText text-2xl font-semibold">
				ESCALABILIDAD DEL PROYECTO
			</h2>
			<div className="h-72 bg-blackText left-2/4 -translate-x-2/4 absolute -z-10 top-30 w-5/6 rounded-2xl"></div>
			<div className="relative w-6/6 left-2/4 -translate-x-2/4 h-5/6 overflow-hidden">
				<article
					id="p1"
					className="box1 pl-4 pr-3 overflow-hidden w-full absolute top-10 text-foreground"
				>
					<h3 className="text-xl font-semibold">TECNOLOGÍAS MODERNAS</h3>
					<p className="mt-2 font-secundary">
						Utilizar código altamente personalizable y bibliotecas modernas impulsa la
						eficiencia de desarrollo, facilita la escalabilidad y mejora el rendimiento
						del sitio. Nos permite implementar experiencias llamativas y enfocadas
						mientras se reducen costos de mantenimiento y tiempo de salida al mercado.
					</p>
				</article>
				<article
					id="p2"
					className="box2 pl-4 pr-3 overflow-hidden w-full h-6 text-blackText absolute top-9/12"
				>
					<h3 className="text-xl font-semibold">TECNOLOGÍAS MODERNAS</h3>
					<p className="mt-2 font-secundary">
						Utilizar código altamente personalizable y bibliotecas modernas impulsa la
						eficiencia de desarrollo, facilita la escalabilidad y mejora el rendimiento
						del sitio. Nos permite implementar experiencias llamativas y enfocadas
						mientras se reducen costos de mantenimiento y tiempo de salida al mercado.
					</p>
				</article>
				<article
					id="p3"
					className="box3 pl-4 pr-3 overflow-hidden w-full h-6 text-blackText absolute top-10/12"
				>
					<h3 className="text-xl font-semibold">TECNOLOGÍAS MODERNAS</h3>
					<p className="mt-2 font-secundary">
						Utilizar código altamente personalizable y bibliotecas modernas impulsa la
						eficiencia de desarrollo, facilita la escalabilidad y mejora el rendimiento
						del sitio. Nos permite implementar experiencias llamativas y enfocadas
						mientras se reducen costos de mantenimiento y tiempo de salida al mercado.
					</p>
				</article>
				<article
					id="p4"
					className="box4 pl-4 pr-3 overflow-hidden w-full h-6 text-blackText absolute top-11/12"
				>
					<h3 className="text-xl font-semibold">TECNOLOGÍAS MODERNAS</h3>
					<p className="mt-2 font-secundary">
						Utilizar código altamente personalizable y bibliotecas modernas impulsa la
						eficiencia de desarrollo, facilita la escalabilidad y mejora el rendimiento
						del sitio. Nos permite implementar experiencias llamativas y enfocadas
						mientras se reducen costos de mantenimiento y tiempo de salida al mercado.
					</p>
				</article>
			</div>
		</section>
	);
}
