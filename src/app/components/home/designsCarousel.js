"use client";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

export default function DesignsCarousel() {
	const swiperRef = useRef(null);

	/* useEffect(() => {
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
	}, []); */

	return (
		<div className="w-full overflow-hidden xl:p-0 xl:w-6/10 relative xl:before:left-0 xl:before:content-[''] xl:self-center xl:before:w-28 xl:before:absolute xl:before:h-full xl:before:z-30 xl:before:bg-linear-to-l xl:before:from-[#24242400] xl:before:to-[#242424]">
			<Swiper
				onSwiper={(sw) => (swiperRef.current = sw)}
				grabCursor={true}
				slidesPerView={"auto"}
				spaceBetween={10}
				loop
				centeredSlides={true}
				effect="slide"
				autoplay={{
					delay: 5000, // ms entre cambios
					speed: 1000,
					disableOnInteraction: false, // que NO se pare al hacer drag/click
					pauseOnMouseEnter: true, // pausa al pasar el mouse
					stopOnLastSlide: false, // si no usas loop, puedes pararlo en el último
					waitForTransition: true, // espera a que acabe la transición
					// reverseDirection: true,   // (opcional) dirección inversa
				}}
				/* navigation={{
					prevEl: prevSlider.current,
					nextEl: nextSlider.current,
				}} */
				modules={[FreeMode, Autoplay /* Navigation */]}
				className="w-screen xl:max-w-[60vw]"
			>
				{/* SE DEBE PONER EL OPERADOR ! QUE INDICA IMPORTANT EN TAILWIND PARA SOBRESCRIBIR EL ANCHO POR DEFECTO DE SWIPER */}
				<SwiperSlide className="!w-auto relative">
					{/* <div className="bg-gray-600 w-[350px] rounded-3xl border-goldbackground border-2 h-[450px] sm:h-[560px]" /> */}
					<video className="h-52 sm:h-[360px] w-auto rounded-2xl" autoPlay loop muted src="/videos/MobileShoes.mp4"></video>
				</SwiperSlide>
				<SwiperSlide className="!w-auto relative">
					{/* <div className="bg-gray-600 w-[350px] rounded-3xl border-goldbackground border-2 h-[450px] sm:h-[560px]" /> */}
					<video className="h-52 sm:h-[360px] w-auto rounded-2xl" autoPlay loop muted src="/videos/shoesTransition.mp4"></video>
				</SwiperSlide>
				<SwiperSlide className="!w-auto relative">
					{/* <div className="bg-gray-600 w-[250px] rounded-3xl border-goldbackground border-2 h-[450px] sm:h-[560px]" /> */}
					<video className="h-52 sm:h-[360px] w-auto rounded-2xl" autoPlay loop muted src="/videos/fruit-soda.mp4"></video>
				</SwiperSlide>
				<SwiperSlide className="!w-auto relative">
					{/* <div className="bg-gray-600 w-[250px] rounded-3xl border-goldbackground border-2 h-[450px] sm:h-[560px]" /> */}
					<video className="h-52 sm:h-[360px] w-auto rounded-2xl" autoPlay loop muted src="/videos/MobileShoes.mp4"></video>
				</SwiperSlide>
				<SwiperSlide className="!w-auto relative">
					{/* <div className="bg-gray-600 w-[250px] rounded-3xl border-goldbackground border-2 h-[450px] sm:h-[560px]" /> */}
					<video className="h-52 sm:h-[360px] w-auto rounded-2xl" autoPlay loop muted src="/videos/fruit-soda.mp4"></video>
				</SwiperSlide>
				<SwiperSlide className="!w-auto relative">
					<div className="h-52 w-36 rounded-2xl border border-goldbackground/30 bg-foreground/5 sm:h-[360px] sm:w-64" />
				</SwiperSlide>
				<SwiperSlide className="!w-auto relative">
					<div className="h-52 w-36 rounded-2xl border border-goldbackground/30 bg-foreground/5 sm:h-[360px] sm:w-64" />
				</SwiperSlide>
				<SwiperSlide className="!w-auto relative">
					<div className="h-52 w-36 rounded-2xl border border-goldbackground/30 bg-foreground/5 sm:h-[360px] sm:w-64" />
				</SwiperSlide>
			</Swiper>
			{/* <div className="flex justify-center gap-4 mt-4">
				<button ref={prevSlider} className=" bg-gray-200 rounded-full">
					Prev
				</button>
				<button ref={nextSlider} className=" bg-gray-200 rounded-full">
					Next
				</button>
			</div> */}
		</div>
	);
}
