"use client";

import { use, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import animationData from "../../../../public/lottie/scrollDown.json";

gsap.registerPlugin(ScrollTrigger);

export default function PhotosSlider(params) {
	const videosContainer = useRef();
	const video1 = useRef();
	const video2 = useRef();
	const video3 = useRef();

	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						markers: true,
						trigger: videosContainer.current,
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
				.to(".box1", { translateY: "0%" })
				.addLabel("step2")
				.to(".box2", { top: "0%" })
				.addLabel("step3")
				.to(".box3", { top: "0%" })
				.addLabel("step4")
				.to(".box3", { top: "0%" });
		},
		{ scope: videosContainer }
	);

	return (
		<section
			ref={videosContainer}
			className="flex  overflow-hidden bg-foreground w-full p-8 gap-4 items-center relative h-screen"
		>
			<div
				ref={video1}
				className="box1 overflow-hidden w-full h-screen shrink-0 absolute top-0 -z-10 left-0 p-8 sm:p-16 xl:pt-0"
			>
				<div className=" w-full flex flex-col h-screen shrink-0 xl:flex-row xl:justify-between">
					<article className="text-blackText mt-4 sm:mt-8 xl:w-4/10 xl:pt-16 self-center">
						<h2 className="text-2xl font-bold sm:text-5xl">ET TALKS - EPISODE #1</h2>
						<p className="text-xl mt-4 sm:text-3xl sm:mt-8">
							Video realizado para el Preuniversitario Formarte, en su programa English
							Training, destacando su metodología innovadora y el impacto en la formación
							de sus estudiantes.
						</p>
						<ul className="text-xl list-disc p-8 sm:text-2xl sm:p-16">
							<li>Grabación</li>
							<li>Edición de video</li>
						</ul>
					</article>
					<img className="h-7/10 my-auto" src="/separator.svg" alt="" />
					<div className="bg-foreground w-full h-52 -order-1 sm:h-96 lg:h-[550px] xl:w-[42rem] xl:h-[24rem] overflow-hidden rounded-2xl xl:order-1 xl:self-center">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/W8-FFE6R-rM?si=f66MgSZMUiVf-SNa"
							title="YouTube video player"
							frameBorder="0"
							loading="lazy"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</div>
				</div>
				<figure className="mt-6 w-20 z-40 absolute bottom-4 left-1/2 -translate-x-1/2">
					<Lottie
						animationData={animationData}
						autoplay
						loop={true}
						rendererSettings={{ progressiveLoad: true }}
					/>
				</figure>
			</div>

			<div
				ref={video2}
				className="box2 overflow-hidden w-full h-screen shrink-0 absolute bg-foreground top-full left-0 p-8 z-20 sm:p-16 xl:pt-0"
			>
				<div className="w-full flex flex-col h-screen shrink-0 xl:flex-row xl:justify-between">
					<article className="text-blackText mt-4 sm:mt-8 xl:w-4/10 xl:pt-16 self-center">
						<h2 className="text-2xl font-bold sm:text-5xl">
							A NADIE LE COPIO - 'EL TIGRE DEL PUEBLO'
						</h2>
						<p className="text-xl mt-4 sm:text-2xl sm:mt-8">
							Videoclip realizado para el artista de música popular Antony, el Tigre del
							Pueblo, destacando su inconfundible estilo y pasión por la música que
							conecta con el corazón de su gente.
						</p>
						<ul className="text-xl list-disc p-8 sm:text-2xl sm:p-16">
							<li>Grabación</li>
							<li>Edición de video</li>
							<li>Producción</li>
						</ul>
					</article>
					<img className="h-7/10 my-auto" src="/separator.svg" alt="" />

					<div className="bg-gray-500 w-full h-52 -order-1 sm:h-96 lg:h-[550px] xl:w-[42rem] xl:h-[24rem] overflow-hidden rounded-2xl xl:order-1 xl:self-center">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/iy9tmxBvZGU?si=VuYdYG2d_ZS6y9GG"
							title="YouTube video player"
							frameBorder="0"
							loading="lazy"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</div>
				</div>
				<figure className="mt-6 w-20 z-40 absolute bottom-4 left-1/2 -translate-x-1/2">
					<Lottie
						animationData={animationData}
						autoplay
						loop={true}
						rendererSettings={{ progressiveLoad: true }}
					/>
				</figure>
			</div>

			<div
				ref={video3}
				className="box3 overflow-hidden w-full h-screen shrink-0 absolute bg-foreground top-full left-0 p-8 z-30 sm:p-16 xl:pt-0"
			>
				<div className=" w-full flex flex-col h-screen shrink-0 xl:flex-row xl:justify-between">
					<article className="text-blackText mt-4 sm:mt-8 xl:w-4/10 xl:pt-16 self-center">
						<h2 className="text-2xl font-bold sm:text-5xl">VESTIGIOS - ECOS</h2>
						<p className="text-xl mt-4 sm:text-3xl sm:mt-8 ">
							Tráiler del cortometraje realizado para la marca de ropa ECOS, en su drop
							Vestigios, una propuesta visual que explora la historia y el legado del
							ferrocarril de Antioquia a través de la moda y la narrativa audiovisual.
						</p>
						<ul className="text-xl list-disc p-8 sm:text-2xl sm:p-16">
							<li>Grabación</li>
							<li>Edición de video</li>
							<li>Producción</li>
						</ul>
					</article>
					<img className="h-7/10 my-auto" src="/separator.svg" alt="" />

					<div className="bg-gray-500 w-full h-52 -order-1 sm:h-96 lg:h-[550px] xl:w-[42rem] xl:h-[24rem] overflow-hidden rounded-2xl xl:order-1 xl:self-center">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/rhAJf8ZHj_M?si=Xj7NA-Sw0DSelZVn"
							title="YouTube video player"
							frameBorder="0"
							loading="lazy"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</div>
				</div>
				<figure className="mt-6 w-20 z-40 absolute bottom-4 left-1/2 -translate-x-1/2">
					<Lottie
						animationData={animationData}
						autoplay
						loop={true}
						rendererSettings={{ progressiveLoad: true }}
					/>
				</figure>
			</div>
		</section>
	);
}
