"use client";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function SwiperSlider(params) {

    const services = [
		{
			src: "/photos/service1.jpg",
			id: 1,
            title: "Servicio 1"
		},
		{
			src: "/photos/service2.jpg",
			id: 2,
            title: "Servicio 1"
		},
		{
			src: "/photos/service1.jpg",
			id: 3,
            title: "Servicio 1"
		},
		{
			src: "/photos/service2.jpg",
			id: 4,
            title: "Servicio 1"
		},
	];

    return (
        <div className="overflow-hidden relative shrink-0 xl:order-1 xl:w-2/5">
            <Swiper
					className="h-[380px] sm:h-[500px] lg:h-[600px] xl:h-full"
					modules={[Autoplay]}
					navigation={false}
					loop={true}
					spaceBetween={0}
                    direction="vertical"
                    autoplay={{ delay: 5000 }}
                    speed={600}
					slidesPerView="auto"
					/* breakpoints={{
						360: {
							slidesPerView: 1.2,
							spaceBetween: 5,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 50,
							initialSlide: 6,
						},
					}} */
				>
					{services.map((service) => (
						<SwiperSlide key={service.id} className=" rounded-lg">
							<div className="h-[380px] w-full rounded-lg relative overflow-hidden sm:h-[500px] lg:h-[600px] xl:h-full xl:rounded-none">
								<Image
									fill
									className="object-cover"
									src={service.src}
									alt={service.title}
								></Image>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
        </div>
    )
}