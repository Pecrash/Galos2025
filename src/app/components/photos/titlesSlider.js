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

export default function TitlesSlider(params) {

    const services = [
		{
			id: 1,
            number: "01",
            title: "Haz que tu marca se vea como realmente vale."
		},
		{
			id: 2,
            number: "02",
            title: "Si tu imagen no impacta, estás perdiendo oportunidades."
		},
		{
			id: 3,
            number: "03",
            title: "Haz que te elijan desde el primer vistazo."
		},
		{
			id: 4,
            number: "04",
            title: "No es solo contenido, es cómo te recuerdan."
		},
	];

    return (
        <div className="overflow-hidden relative">
            <Swiper
					className="h-32 sm:h-[150px] 2xl:h-[200px]"
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
							<div className=" pl-8 flex items-end h-32 w-full rounded-lg relative overflow-hidden sm:h-[150px] 2xl:h-[200px]">
								<p className="text-8xl font-bold sm:text-9xl 2xl:text-[188px]">{service.number}</p>
                                <h2 className="text-2xl h-fit pb-3 pl-3 sm:text-4xl sm:pb-6 sm:pl-6 uppercase xl:font-bold xl:text-5xl 2xl:text-5xl">{service.title}</h2>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
        </div>
    )
}