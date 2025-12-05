import Image from "next/image";
import Link from "next/link";
import ServicesCarousel from "./components/home/servicesCarousel";
import DesignsCarousel from "./components/home/designsCarousel";
import HomeTitle from "./components/lottie/homeTitle";

export default function Home() {
	return (
		<div className="font-primary ">
			<main className="flex flex-col gap-[24px] relative items-start sm:items-start">
				<div className="flex flex-col gap-[24px] p-8 xl:p-16 xl:h-screen relative after:absolute after:w-full after:h-1/12 after:bg-black after:left-0 after:bottom-0 after:bg-linear-to-b after:mask-t-from-20% after:to-background">
					<div className="absolute -z-10 h-full w-4/5 top-0 left-0">
						<Image src="/photos/detrasDeCamara.png" alt="" fill className=" object-cover" />
					</div>
					<HomeTitle />
					<p className="font-secundary text-center sm:text-3xl xl:text-start xl:w-4/6 xl:bottom-0 xl:mt-auto xl:inset-x-0 xl:relative">
						Creamos experiencias que se traducen en resultados reales y memorables;
						nuestra prioridad es conectar profundamente contigo y con las personas que
						confían en tu marca.
					</p>
					{/* <button className="flex gap-2 sm:gap-3 p-2 sm:p-4 items-center w-28 h-10 sm:w-44 sm:h-12 border-2 rounded-lg sm:rounded-xl sm:text-2xl text-goldbackground self-center m-2 border-goldbackground font-bold uppercase xl:self-start xl:mt-8">
						Hablemos{" "}
						<span className="w-5 sm:w-8">
							<img src="/arrow.svg" alt="" />
						</span>
					</button> */}
					<ul className="flex flex-col w-max relative left-[70%] items-end gap-2 sm:gap-4 text-lg sm:text-3xl xl:right-16 xl:left-auto xl:top-[55vh] xl:absolute">
						<li className="w-max ">Fotografía</li>
						<li className="w-max ">Video</li>
						<li className="w-max ">Desarrollo Web</li>
						<li className="w-max ">Ui-Ux</li>
						<li className="w-max ">Sobre Nosotros</li>
					</ul>
				</div>

				<div className="pb-8 pt-8 relative xl:h-[26rem] xl:flex xl:flex-col xl:justify-center w-full xl:pb-16 xl:pt-16">
					<h2 className="text-goldbackground text-2xl sm:text-5xl pr-3 pl-8 mt-2 xl:w-6/8 xl:text-6xl xl:pl-16">
						CÁMARAS LISTAS, TU HISTORIA COMIENZA CON NOSOTROS
					</h2>
					<p className="font-secundary pr-3 pl-8 mt-2 sm:mt-4 sm:text-3xl w-4/5 uppercase xl:w-4/7 xl:pl-16">
						Fotografía profesional para marcas que buscan destacar en el mundo digital
					</p>
					<div className="absolute top-0 -z-10 h-full w-full">
						<Image
							src="/photos/home1.png"
							alt="Cámara"
							fill
							className="object-contain object-right"
						/>
					</div>
				</div>

				<div className="w-full relative">
					<h2 className="text-goldbackground text-2xl mt-8 p-8 sm:text-5xl xl:w-5/6 xl:text-6xl xl:p-16">
						QUEREMOS CAPTURAR INSTATES QUE PERDUREN Y TRANSMITAN LO QUE SIENTES
					</h2>
					<div className="flex justify-between p-8 items-center xl:p-16">
						<p className="sm:text-2xl">SERVICIO DE FOTOGRAFÍA</p>
						<Link
							href={"/photos"}
							className="flex text-xl sm:text-3xl uppercase gap-1 text-goldbackground "
						>
							Explorar <img src="/arrow.svg" alt="" className="w-5 ml-2" />
						</Link>
					</div>
					<ServicesCarousel />
					<p className="p-8 xl:p-16 font-secundary sm:text-3xl xl:w-3/5">
						Si quieres conocer más de nuestro trabajo fotográfico en{" "}
						<span className="font-bold text-white">Galos Casa Creativa</span> puedes
						visitar nuestro perfil en{" "}
						<span className="font-bold text-goldbackground">Behance</span> esperamos que
						te guste
					</p>
				</div>

				<div>
					<h2 className="text-goldbackground text-2xl mt-8 p-8">VIDEO SECTION</h2>
				</div>

				<div className="p-8 xl:p-16 w-full">
					<h2 className="text-goldbackground text-2xl sm:text-5xl mt-8 uppercase xl:text-6xl text-center">
						Diseño y Desarrollo Web
					</h2>
					<ul className="flex flex-wrap justify-center gap-1 xl:gap-2 text-xs sm:text-base sm:mt-2">
						<li className="underline">UX-UI</li>
						<li className="underline">SEO</li>
						<li className="underline">ESCALABILIDAD</li>
						<li className="underline">ACCESIBILIDAD</li>
						<li className="underline">RESPONSIVE</li>
						<li className="underline">OPTIMIZACIÓN</li>
						<li className="underline">ANÁLISIS</li>
					</ul>
					<section className="flex flex-col justify-center-items xl:flex-row xl:mt-15 xl:mb-15 xl:items-center xl:justify-between xl:content-between xl:w-full">
						<div className="bg-gray-400 w-2/5 rounded-3xl h-83"></div>
						<section className="flex flex-col justify-center-items xl:items-start xl:justify-center xl:w-2/4">
							<p className="text-xs sm:text-xl text-center mt-7 sm:mt-15 inline-block ">
								NUESTRA IDENTIDAD
							</p>
							<p className="font-handwriting text-3xl sm:text-5xl text-center mt-2 xl:text-8xl xl:text-start">
								<span className="text-goldbackground">La</span> primera{" "}
								<span className="text-goldbackground">impresión</span> puede{" "}
								<span className="text-goldbackground">definir</span> el rumbo de{" "}
								<span className="text-goldbackground">toda</span> una{" "}
								<span className="text-goldbackground">relación</span>
							</p>
							<p className="font-light font-secundary text-center text-sm sm:text-2xl xl:text-start mt-2.5 xl:mt-6 xl:w-4/5 xl:text-3xl">
								En <span className="font-bold">Galos Casa Creativa</span>, el diseño es
								nuestro idioma para influir en cómo se valora y se recuerda un producto o
								servicio.
							</p>
						</section>
					</section>
				</div>

				<div>
					<img className="max-w-full" src="/bentoText.svg" alt="" />
					<section className="max-w-screen xl:flex overflow-hidden xl:justify-between">
						<section className="p-8 sm:mt-10 flex flex-col items-center xl:w-5/10 xl:text-start xl:p-16">
							<Link
								href=""
								className="flex justify-center self-end gap-1 uppercase text-xs sm:text-base xl:self-start"
							>
								Conoce más sobre nuestro proceso{" "}
								<img src="/whiteArrow.svg" className="w-3 sm:w-4" alt="" />
							</Link>
							<h2 className="text-goldbackground text-2xl sm:text-5xl text-center mt-4 inline-block xl:text-6xl xl:text-start">
								NUESTROS DISEÑOS INSPIRAN
							</h2>
							<p className="text-center font-secundary  sm:text-2xl mt-5 sm:mt-10 xl:text-start xl:w-full xl:text-3xl">
								Transformamos tus ideas en contenido visual que destaca y conecta. Desde
								el concepto hasta la entrega final, estamos contigo en cada etapa.
							</p>
							<Link
								href=""
								className="flex gap-1.5 sm:gap-3 p-2 sm:p-4 items-center w-28 h-10 sm:w-44 sm:h-12 border-2 rounded-lg sm:rounded-xl sm:text-2xl text-goldbackground self-center xl:self-start xl:ml-0 xl:mt-16 m-8 border-goldbackground font-bold uppercase"
							>
								Contáctanos
							</Link>
						</section>
						<DesignsCarousel />
					</section>
				</div>

				<div className="w-full flex flex-col mt-14 items-center xl:flex-row">
					<section className="flex flex-col items-center p-8 order-2 xl:w-4/5">
						<h2 className="text-goldbackground text-2xl sm:text-5xl mt-8 uppercase text-center xl:text-6xl xl:mt-0">
							¿Quienes Somos...?
						</h2>
						<p className="text-center font-secundary sm:text-2xl mt-2.5 sm:mt-10 w-5/6 xl:text-3xl xl:w-6/6 xl:pl-11 xl:pr-11 xl:mt-15">
							Somos un equipo de creativos apasionados por diseñar y desarrollar
							experiencias digitales que inspiran. A través del diseño web, el desarrollo
							tecnológico, la fotografía y el video, construimos narrativas visuales que
							fortalecen la presencia digital de las marcas y las ayudan a conectar con su
							audiencia de manera auténtica y memorable.
						</p>
						<h3 className="text-[20px] sm:text-3xl font-light mt-10 sm:mt-15 text-center xl:mt-20">
							De <span className="text-goldbackground">Medellín</span> para el{" "}
							<span className="text-goldbackground">Mundo.</span>
						</h3>
						<h2 className="font-bold text-2xl sm:text-5xl text-center w-2xs sm:w-[430px] mt-1 sm:mt-3">
							SOMOS GALOS CASA CREATIVA
						</h2>
					</section>
					<div className="relative w-full h-[325px] sm:h-[450px] lg:h-[600px] order-1 xl:order-2 xl:w-3/6 xl:h-screen xl:grayscale-75">
						<Image
							alt="detrás de cámara"
							fill
							src={"/photos/detrasDeCamara1.jpg"}
							className="object-cover object-[75%] grayscale-25"
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
