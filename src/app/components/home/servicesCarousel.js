"use client";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import { Navigation, EffectCoverflow } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";
import Image from "next/image";

// init Swiper:
/* const swiper = new Swiper(".swiper", {
	// configure Swiper to use modules
	modules: [Navigation, Pagination, EffectCoverflow],
}); */

export default function ServicesCarousel() {
	const swiperRef = useRef(null);
	const prevSlider = useRef(null);
	const nextSlider = useRef(null);

	const services = [
		{
			src: "/photos/service1.jpg",
			id: 1,
			title: "Fotografía de producto",
			description: "Imágenes estratégicas pensadas para resaltar la esencia de tu producto.",
			cliente: "Nana Bakes",
		},
		{
			src: "/photos/service2.jpg",
			id: 2,
			title: "Retrato corporativo",
			description:
				"Retratos que transmiten confianza, cercanía y credibilidad profesional.",
			cliente: "PAD - Firma de Abogados",
		},
		{
			src: "/photos/service3.jpg",
			id: 3,
			title: "Lifestyle & editorial",
			description: "Narrativas visuales naturales con tu producto en contextos reales.",
			cliente: "Don Cottone",
		},
		{
			src: "/photos/service6.jpg",
			id: 6,
			title: "Producción audiovisual para artistas",
			description: "Creamos narrativas que te identifiquen y conecten con tu audiencia.",
			cliente: "Fredonia - Fiestas del Café",
		},
		{
			src: "/photos/service4.jpg",
			id: 4,
			title: "Publicidad & social media",
			description: "Piezas optimizadas para captar atención y convertir en redes.",
			cliente: "Chamela",
		},
		{
			src: "/photos/service5_2.jpg",
			id: 5,
			title: "Video comercial (spots, reels)",
			description: "Historias breves y dinámicas que impulsan tu marca.",
			cliente: "Nuestra Casa Creativa",
		},
	];

	useEffect(() => {
		const sw = swiperRef.current;
		if (!sw || !prevSlider.current || !nextSlider.current) return;

		// Conectar los elementos y re-inicializar navegación
		sw.params.navigation.prevEl = prevSlider.current;
		sw.params.navigation.nextEl = nextSlider.current;
		sw.navigation.init();
		sw.navigation.update();

		return () => {
			try {
				sw.navigation.destroy();
			} catch {}
		};
	}, []);

	return (
		<div className="overflow-hidden relative xl:w-[1190px] xl:mx-auto ">
			<section className="relative xl:before:left-0 xl:before:content-[''] xl:before:w-28 xl:before:absolute xl:before:h-full xl:before:z-30 xl:before:bg-linear-to-l xl:before:to-[#242424]">
				<Swiper
					className="sm:w-14/9 xl:w-[2000px]"
					modules={[Navigation, EffectCoverflow]}
					onSwiper={(sw) => (swiperRef.current = sw)} // ← guarda la instancia
					navigation={false}
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides
					loop={true}
					initialSlide={6}
					spaceBetween={30}
					slidesPerView={3}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 120,
						modifier: 1.2,
						slideShadows: false,
					}}
					breakpoints={{
						360: {
							slidesPerView: 1.2,
							spaceBetween: 5,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 5,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 5,
							initialSlide: 6,
						},
						1280: {
							slidesPerView: 5,
							spaceBetween: 30,
							initialSlide: 3,
							/* loop: false, */
						},
					}}
				>
					{services.map((service) => (
						<SwiperSlide key={service.id} className=" rounded-lg">
							<div className="h-[465px] sm:h-[600px] xl:h-[500px] rounded-lg relative overflow-hidden">
								<Image
									fill
									className="object-cover"
									src={service.src}
									alt={service.title}
								></Image>
							</div>
							<h3 className="text-lg sm:text-2xl sm:w-4/5 mt-2 font-semibold mb-2 xl:mt-7 xl:text-xl uppercase">
								{service.title}
							</h3>
							<p className="w-5/6 font-secundary sm:text-lg">{service.description}</p>
							<p className="text-sm sm:text-base mt-1 text-gray-400 font-secundary font-normal">{service.cliente}</p>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</div>
	);
}
