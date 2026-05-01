"use client";

import PhotosSlider from "../components/photos/videosSlider";
import SwiperSlider from "../components/photos/imagesSlider";
import TitlesSlider from "../components/photos/titlesSlider";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Photos() {
	const containerRef = useRef();

	useGSAP(
		() => {
			const tl = gsap.timeline({ repeat: -1, repeatDelay: 3, delay: 3 });
			const mm = gsap.matchMedia();
			mm.add("(min-width: 1280px) and (max-width: 1535px)", () => {
				tl.to(".box", {
					y: "-18.78rem",
					duration: 0.7,
					stagger: 0.3,
					ease: "power1.inOut",
				}).to(
					".box",
					{ y: "-37.56rem", duration: 0.7, stagger: 0.3, ease: "power1.inOut" },
					">3"
				);
			});

			mm.add("(min-width: 1536px)", () => {
				tl.to(".box", {
					y: "-19.78rem",
					duration: 0.7,
					stagger: 0.3,
					ease: "power1.inOut",
				}).to(
					".box",
					{ y: "-39.56rem", duration: 0.7, stagger: 0.3, ease: "power1.inOut" },
					">3"
				);
			});
		},
		{ scope: containerRef }
	);

	return (
		<main ref={containerRef}>
			<section className="h-[70vh] flex flex-col w-full relative p-8 xl:h-screen xl:p-16">
				<Image
					src={"/photos/photosWelcome.png"}
					fill
					sizes="100vw"
					alt=""
					className="object-cover absolute top-0 left-0 -z-1"
				/>
				<h2 className="font-bold uppercase text-2xl text-goldbackground sm:text-5xl sm:text-center lg:text-6xl xl:text-start xl:w-8/10 xl:text-7xl xl:leading-22 2xl:text-8xl 2xl:leading-26 3xl:text-9xl 3xl:leading-34">
					No es solo contenido. Es la imagen que te representa.
				</h2>
				<p className="text-xl mt-4 sm:text-3xl sm:mt-8 sm:text-center lg:text-4xl xl:text-start xl:w-7/10 xl:text-3xl 2xl:text-4xl 2xl:mt-12 3xl:text-5xl 3xl:mt-16">
					Fotografía y video profesional para marcas que quieren destacar, conectar y
					vender más.
				</p>
				<div className="flex justify-evenly gap-4 w-full mt-auto sm:justify-center sm:gap-8 xl:gap-10 xl:justify-start">
					<Link
						href="#"
						className="text-blackText text-sm shrink-0 font-bold font-primary w-36 h-10 flex justify-center bg-foreground items-center rounded-lg sm:w-48 sm:h-14 sm:rounded-xl sm:text-xl xl:text-lg xl:w-48 xl:h-14 2xl:text-2xl 2xl:w-56 2xl:h-16 3xl:w-64 3xl:h-18 3xl:text-[1.7rem]"
					>
						<span className="">MÁS DE NOSOTROS</span>
					</Link>
					<Link
						href="#"
						className="text-foreground text-sm shrink-0 font-bold font-primary w-36 h-10 bg-blackText flex justify-center  items-center rounded-lg sm:w-48 sm:h-14 sm:rounded-xl sm:text-xl xl:text-lg xl:w-48 xl:h-14 2xl:text-2xl 2xl:w-56 2xl:h-16 3xl:w-64 3xl:h-18 3xl:text-[1.7rem]"
					>
						<span className="">NUESTRO BEHANCE</span>
					</Link>
				</div>
			</section>

			<section data-header-theme="dark" className="bg-foreground p-8 pt-16 sm:p-16 sm:pt-24">
				<h2 className="text-2xl text-blackText font-semibold sm:text-5xl 2xl:text-7xl">
					NUESTROS SERVICIOS
				</h2>
				<p className="text-blackText mt-2 mb-4 sm:text-3xl xl:w-4/6 xl:mt-12 xl:mb-20 2xl:text-4xl">
					Lorem ipsum dolor sit amet consectetur. Dignissim habitant tristique neque
					felis. Et tellus quam arcu in nullam.
				</p>
				<section className="bg-foreground xl:flex xl:h-74 xl:overflow-hidden xl:gap-8 xl:justify-center 2xl:h-78">
					<div className="box flex gap-3 shrink-0 pt-2 h-72 xl:flex-col 2xl:h-76">
						<article className="w-96 relative rounded-xl bg-graybackground p-2 sm:p-6 xl:h-72 xl:flex-auto xl:shrink-0 2xl:h-76 2xl:w-md">
							<p className="font-semibold text-blackText text-2xl font-secundary 2xl:text-6xl 2xl:font-bold">1</p>
							<p className="text-blackText text-sm font-secundary 2xl:text-xl 2xl:pl-7 font-semibold">
								Creamos videos corporativos que transmiten la esencia de tu empresa,
								fortalecen tu imagen y generan confianza en clientes potenciales.
							</p>
							<h3 className="font-bold text-[18px] absolute bottom-3 text-center 2xl:-ml-6 2xl:text-2xl w-full text-blackText">
								Producción de <br /> Video Corporativo
							</h3>
						</article>
						<article className="w-96 relative rounded-xl bg-graybackground p-2 sm:p-6 xl:h-72 xl:flex-auto xl:shrink-0 2xl:h-76 2xl:w-md">
							<p className="font-semibold text-blackText text-2xl font-secundary 2xl:text-6xl 2xl:font-bold">4</p>
							<p className="text-blackText text-sm font-secundary 2xl:text-xl 2xl:pl-7 font-semibold">
								Desarrollamos videos promocionales que destacan tus productos o servicios,
								diseñados para persuadir, emocionar y generar resultados.
							</p>
							<h3 className="font-bold text-[18px] absolute bottom-3 text-center 2xl:-ml-6 2xl:text-2xl w-full text-blackText">
								Producción de <br /> Videos Promocionales
							</h3>
						</article>
						<article className="w-96 relative rounded-xl bg-graybackground p-2 sm:p-6 xl:h-72 xl:flex-auto xl:shrink-0 2xl:h-76 2xl:w-md">
							<p className="font-semibold text-blackText text-2xl font-secundary 2xl:text-6xl 2xl:font-bold">1</p>
							<p className="text-blackText text-sm font-secundary 2xl:text-xl 2xl:pl-7 font-semibold">
								Creamos videos corporativos que transmiten la esencia de tu empresa,
								fortalecen tu imagen y generan confianza en clientes potenciales.
							</p>
							<h3 className="font-bold text-[18px] absolute bottom-3 text-center 2xl:-ml-6 2xl:text-2xl w-full text-blackText">
								Producción de <br /> Video Corporativo
							</h3>
						</article>
					</div>
					<div className="box flex gap-3 shrink-0 text-foreground pt-2 h-72 xl:flex-col xl:h-72 2xl:h-76">
						<article className="w-96 relative rounded-xl bg-blackText p-2 sm:p-6 xl:h-72 xl:flex-auto xl:shrink-0 2xl:h-76 2xl:w-md">
							<p className="font-semibold text-foreground text-2xl font-secundary 2xl:text-6xl 2xl:font-bold">2</p>
							<p className=" text-sm font-secundary 2xl:text-xl 2xl:pl-7 font-semibold">
								Realizamos sesiones fotográficas enfocadas en resaltar la identidad,
								productos y servicios de tu marca con un enfoque estratégico y visual.
							</p>
							<h3 className="font-bold text-[18px] absolute bottom-3 text-center 2xl:-ml-6 2xl:text-2xl w-full ">
								Fotografía <br /> Profesional de Marca
							</h3>
						</article>
						<article className="w-96 relative rounded-xl bg-blackText pt-2 sm:p-6 xl:h-72 xl:flex-auto xl:shrink-0 2xl:h-76 2xl:w-md">
							<p className="font-semibold  text-2xl font-secundary 2xl:text-6xl 2xl:font-bold">5</p>
							<p className=" text-sm font-secundary 2xl:text-xl 2xl:pl-7 font-semibold">
								Aplicamos edición, corrección de color, sonido y efectos visuales para
								lograr piezas audiovisuales pulidas y listas para destacar.
							</p>
							<h3 className="font-bold text-[18px] absolute bottom-3 text-center 2xl:-ml-6 2xl:text-2xl w-full ">
								Edición y Postproducción <br /> Audiovisual
							</h3>
						</article>
						<article className="w-96 relative rounded-xl bg-blackText p-2 sm:p-6 xl:h-72 xl:flex-auto xl:shrink-0 2xl:h-76 2xl:w-md">
							<p className="font-semibold text-foreground text-2xl font-secundary 2xl:text-6xl 2xl:font-bold">2</p>
							<p className=" text-sm font-secundary 2xl:text-xl 2xl:pl-7 font-semibold">
								Realizamos sesiones fotográficas enfocadas en resaltar la identidad,
								productos y servicios de tu marca con un enfoque estratégico y visual.
							</p>
							<h3 className="font-bold text-[18px] absolute bottom-3 text-center 2xl:-ml-6 2xl:text-2xl w-full ">
								Fotografía <br /> Profesional de Marca
							</h3>
						</article>
					</div>
					<div className="box flex gap-3 shrink-0 pt-2 h-60 xl:flex-col xl:h-72 2xl:h-76">
						<article className="w-96 relative rounded-xl bg-graybackground p-2 sm:p-6 xl:h-72 xl:flex-auto xl:shrink-0 2xl:h-76 2xl:w-md">
							<p className="font-semibold text-blackText text-2xl font-secundary 2xl:text-6xl 2xl:font-bold">3</p>
							<p className="text-blackText text-sm font-secundary 2xl:text-xl 2xl:pl-7 font-semibold">
								Creamos contenido dinámico optimizado para redes sociales, pensado para
								aumentar visibilidad, engagement y posicionamiento digital.
							</p>
							<h3 className="font-bold text-[18px] text-blackText absolute bottom-3 text-center 2xl:-ml-6 2xl:text-2xl w-full">
								Contenido para <br /> Redes Sociales
							</h3>
						</article>
						<article className="w-96 relative rounded-xl bg-graybackground p-2 sm:p-6 xl:h-72 xl:flex-auto xl:shrink-0 2xl:h-76 2xl:w-md">
							<p className="font-semibold text-blackText text-2xl font-secundary 2xl:text-6xl 2xl:font-bold">6</p>
							<p className="text-blackText text-sm font-secundary 2xl:text-xl 2xl:pl-7 font-semibold">
								Registramos eventos corporativos, sociales o comerciales con fotografía y
								video, asegurando contenido de alto valor para difusión y memoria.
							</p>
							<h3 className="font-bold text-[18px] text-blackText absolute bottom-3 text-center 2xl:-ml-6 2xl:text-2xl w-full">
								Cobertura de Eventos
							</h3>
						</article>
						<article className="w-96 relative rounded-xl bg-graybackground p-2 sm:p-6 xl:h-72 xl:flex-auto xl:shrink-0 2xl:h-76 2xl:w-md">
							<p className="font-semibold text-blackText text-2xl font-secundary 2xl:text-6xl 2xl:font-bold">3</p>
							<p className="text-blackText text-sm font-secundary 2xl:text-xl 2xl:pl-7 font-semibold">
								Creamos contenido dinámico optimizado para redes sociales, pensado para
								aumentar visibilidad, engagement y posicionamiento digital.
							</p>
							<h3 className="font-bold text-[18px] text-blackText absolute bottom-3 text-center 2xl:-ml-6 2xl:text-2xl w-full">
								Contenido para <br /> Redes Sociales
							</h3>
						</article>
					</div>
				</section>
			</section>

			<section className="grid grid-cols-2 gap-2 p-2 auto-rows-[55px] sm:auto-rows-[100px] sm:grid-cols-3 sm:gap-4 sm:p-4 lg:auto-rows-[150px] mb-2 xl:pr-16 xl:pl-16 xl:gap-6 xl:max-w-6xl xl:grid-cols-[1.4fr_1fr_1fr] xl:mx-auto 2xl:max-w-360 2xl:auto-rows-[200px]">
				<div className="col-span-2 overflow-hidden flex flex-col row-span-4 rounded-2xl relative sm:col-start-2 sm:row-span-2 xl:p-8">
					<Image
						className="object-cover absolute top-0 left-0 -z-10"
						src={"/photos/linkPhoto2.jpg"}
						fill
						sizes="(min-width: 1280px) 40vw, (min-width: 640px) 66vw, 100vw"
						alt="#"
					/>
					<p className="text-2xl font-semibold text-center mt-auto">
						Puedes ver mucho más de nuestro trabajo en{" "}
						<span className="text-goldbackground underline">Behance</span>
					</p>
					<a href="holi" className="absolute w-full -ml-6 -mt-6 h-full z-10"></a>
				</div>
				<div className="col-span-1 overflow-hidden flex flex-col row-span-3 rounded-2xl relative sm:col-start-3 sm:row-span-2 xl:p-8">
					<Image
						className="object-cover absolute top-0 left-0 -z-10"
						src={"/photos/linkPhoto3.jpg"}
						fill
						sizes="(min-width: 1280px) 25vw, (min-width: 640px) 33vw, 50vw"
						alt="#"
					/>
					<p className="text-xl font-semibold text-center mt-auto">
						Conoce más sobre nosotros en nuestro BLOG
					</p>
					<a href="holi" className="absolute w-full -ml-6 -mt-6 h-full z-10"></a>
				</div>
				<div className="col-span-1 overflow-hidden flex flex-col row-span-3 rounded-2xl relative sm:col-start-2 sm:row-start-3 sm:row-span-2 xl:p-8">
					<Image
						className="object-cover absolute top-0 left-0 -z-10"
						src={"/photos/linkPhoto4.jpg"}
						fill
						sizes="(min-width: 1280px) 25vw, (min-width: 640px) 33vw, 50vw"
						alt="#"
					/>
					<p className="text-xl font-semibold text-center mt-auto">Reserva tu Sesión</p>
					<a href="holi" className="absolute w-full -ml-6 -mt-6 h-full z-10"></a>
				</div>
				<div className="col-span-2 row-span-6 flex flex-col rounded-2xl relative sm:col-start-1 sm:row-start-1 sm:col-span-1 sm:row-span-4 overflow-hidden xl:p-8">
					<Image
						className="object-cover absolute top-0 left-0 -z-10"
						src={"/photos/linkPhoto1.jpg"}
						fill
						sizes="(min-width: 1280px) 25vw, (min-width: 640px) 33vw, 100vw"
						alt="#"
					/>
					<p className="text-2xl font-semibold text-center mt-auto">
						Potenciamos tu marca con la imagen que realmente merece
					</p>
					<a href="holi" className="absolute w-full -ml-6 -mt-6 h-full z-10"></a>
				</div>
			</section>

			<PhotosSlider />

			<section className="xl:flex xl:justify-between xl:h-screen xl:pl-8">
				<SwiperSlider />
				<article className="mt-10 xl:w-7/12 xl:flex xl:flex-col">
					<TitlesSlider />
					<div className="flex flex-col gap-5 mt-8 p-8 sm:p-16 xl:flex-row xl:justify-evenly xl:items-center xl:pr-0">
						<div>
							<h3 className="font-semibold font-secundary sm:text-3xl">TELÉFONO</h3>
							<ol className="list-disc list-inside font-secundary mt-4 sm:text-2xl">
								<li className="list-disc">+57 3122863288</li>
								<li>+57 3158304179</li>
							</ol>
						</div>
						<div>
							<h3 className="font-semibold font-secundary sm:text-3xl">EMAIL</h3>
							<ol className="list-disc list-inside mt-4 font-secundary sm:text-2xl">
								<li>contacto@galos.com</li>
								<li>fotografiaowebsite@galos.com</li>
							</ol>
						</div>
					</div>
					<h2 className="font-bold text-xl uppercase p-8 text-center text-goldbackground sm:text-3xl xl:my-auto xl:text-4xl 2xl:text-6xl">
						Conectamos ideas con personas, y personas con experiencias.
					</h2>
				</article>
			</section>
		</main>
	);
}
