import Link from "next/link";
import WebsiteSlider from "../components/websites/websiteSlider";
import Image from "next/image";

export default function Websites() {
	return (
		<main className="bg-foreground">
			<section className="flex min-h-[100svh] w-full flex-col overflow-hidden bg-background px-6 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-14 3xl:px-24 3xl:py-20">
				<p className="h-fit w-fit rounded-lg border border-goldbackground bg-amber-300/6 p-2 text-xs font-bold text-goldbackground sm:text-sm lg:mt-10">
					DISEÑO WEB ESTRATÉGICO
				</p>
				<h3 className="mt-4 max-w-[16ch] text-3xl font-bold leading-tight text-pretty xs:text-4xl sm:text-5xl md:max-w-[18ch] lg:text-6xl xl:text-7xl xl:leading-[1.08] 3xl:text-8xl">
					DISEÑAMOS Y DESARROLLAMOS{" "}
					<span className="text-goldbackground italic">experiencias</span> WEB QUE
					IMPULSAN TU MARCA.
				</h3>
				<ul className="mt-5 flex max-w-3xl flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-white/35 sm:text-sm lg:text-base">
					<li>UI UX</li>
					<li>SEO</li>
					<li>ACCESIBILIDAD</li>
					<li>RENDIMIENTO</li>
					<li>ESCALABILIDAD</li>
				</ul>
				<p className="mt-6 max-w-2xl border-t border-white/20 pt-5 font-secundary text-lg text-foreground/60 sm:text-xl lg:text-2xl">
					Creamos sitios web estratégicos, funcionales y visualmente potentes,
					<br /> pensados para convertir visitas en oportunidades reales.
				</p>
				<div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:gap-4 lg:mt-10">
					<Link
						href="/contact"
						className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-goldbackground px-5 py-3 text-center font-bold text-blackText transition-colors hover:bg-blackText duration-500 ease-in-out hover:text-goldbackground sm:px-6"
					>
						Agenda tu consulta
						<img src="/circleBlackArrow.svg" alt="" />
					</Link>
					<Link
						href="/projects"
						className="flex min-h-12 items-center justify-center rounded-lg border border-graybackground/60 px-5 py-3 text-center font-bold text-graybackground transition-colors hover:bg-foreground duration-500 ease-in-out hover:text-blackText sm:px-6"
					>
						Nuestros Proyectos
					</Link>
				</div>
				<div className="min-h-[clamp(13rem,34svh,24rem)] flex-1 md:min-h-[28svh]" aria-hidden="true" />
			</section>

			<section className="relative flex flex-col gap-8 bg-background px-6 py-16 before:absolute before:left-1/2 before:top-0 before:h-[1px] before:w-4/5 before:-translate-x-1/2 before:bg-white before:opacity-20 sm:px-8 sm:py-20 lg:px-16 lg:py-28 3xl:px-24 3xl:py-36">
				<span className="relative ml-16 h-fit w-fit text-sm uppercase text-goldbackground before:absolute before:-left-16 before:top-1/2 before:h-0.5 before:w-12 before:-translate-y-full before:bg-goldbackground sm:ml-20 sm:text-base sm:before:-left-20 sm:before:w-16">
					propuesta de valor
				</span>
				<div className="mx-auto w-full max-w-[1800px]">
					<article className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.8fr)] lg:items-end lg:gap-12 2xl:gap-20">
						<h3 className="max-w-4xl text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl">
							Nos enfocamos en hacer de esto un proceso{" "}
							<span className="text-goldbackground">simple</span> y{" "}
							<span className="text-goldbackground">efectivo</span>.
						</h3>
						<p className="max-w-3xl font-secundary text-base leading-relaxed text-foreground/75 sm:text-xl lg:text-2xl 3xl:text-3xl">
							Diseñamos experiencias digitales pensadas para verse bien, funcionar mejor y
							crecer junto a tu negocio. Cuatro pilares que sostienen cada proyecto.
							Sabiendo que cada marca es única, adaptamos cada proceso a tus necesidades y
							objetivos específicos.
						</p>
					</article>
					<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4 2xl:gap-6 3xl:mt-24 3xl:gap-10">
						<article className="relative flex min-h-72 flex-col rounded-2xl bg-blackText p-6 after:absolute after:bottom-5 after:left-1/2 after:h-0.5 after:w-3/4 after:-translate-x-1/2 after:bg-goldbackground sm:min-h-80 lg:p-8 3xl:min-h-96 3xl:rounded-3xl 3xl:p-12">
							<h3 className="mt-12 text-3xl font-semibold sm:text-4xl xl:text-3xl 2xl:text-4xl">Accesibilidad</h3>
							<p className="mt-4 text-base leading-relaxed opacity-70 sm:text-lg xl:text-base 3xl:text-xl">
								Sitios pensados para todas las personas, cumpliendo estándares WCAG sin
								sacrificar estética.
							</p>
							<div className="-order-1 flex w-full justify-between text-xl font-semibold text-goldbackground sm:text-2xl 3xl:text-3xl">
								<span className="flex size-12 items-center justify-center rounded-xl bg-background sm:size-14">
									<img className="w-3/5" src="/accessibility.svg" alt="" />
								</span>
								<p className="relative h-fit before:absolute before:w-2/3 before:h-0.5 before:bg-goldbackground before:top-1/2 before:-translate-y-full before:-left-full">
									01
								</p>
							</div>
						</article>
						<article className="relative flex min-h-72 flex-col rounded-2xl bg-blackText p-6 after:absolute after:bottom-5 after:left-1/2 after:h-0.5 after:w-3/4 after:-translate-x-1/2 after:bg-goldbackground sm:min-h-80 lg:p-8 3xl:min-h-96 3xl:rounded-3xl 3xl:p-12">
							<h3 className="mt-12 text-3xl font-semibold sm:text-4xl xl:text-3xl 2xl:text-4xl">Rendimiento</h3>
							<p className="mt-4 text-base leading-relaxed opacity-70 sm:text-lg xl:text-base 3xl:text-xl">
								Carga veloz, métricas Core Web Vitals optimizadas y experiencia fluida en
								cualquier dispositivo.
							</p>
							<div className="-order-1 flex w-full justify-between text-xl font-semibold text-goldbackground sm:text-2xl 3xl:text-3xl">
								<span className="flex size-12 items-center justify-center rounded-xl bg-background sm:size-14">
									<img className="w-3/5" src="/performance.svg" alt="" />
								</span>
								<p className="relative h-fit before:absolute before:w-2/3 before:h-0.5 before:bg-goldbackground before:top-1/2 before:-translate-y-full before:-left-full">
									02
								</p>
							</div>
						</article>
						<article className="relative flex min-h-72 flex-col rounded-2xl bg-blackText p-6 after:absolute after:bottom-5 after:left-1/2 after:h-0.5 after:w-3/4 after:-translate-x-1/2 after:bg-goldbackground sm:min-h-80 lg:p-8 3xl:min-h-96 3xl:rounded-3xl 3xl:p-12">
							<h3 className="mt-12 text-3xl font-semibold sm:text-4xl xl:text-3xl 2xl:text-4xl">SEO</h3>
							<p className="mt-4 text-base leading-relaxed opacity-70 sm:text-lg xl:text-base 3xl:text-xl">
								Arquitectura semántica, contenido estructurado y base técnica lista para
								posicionar.
							</p>
							<div className="-order-1 flex w-full justify-between text-xl font-semibold text-goldbackground sm:text-2xl 3xl:text-3xl">
								<span className="flex size-12 items-center justify-center rounded-xl bg-background sm:size-14">
									<img className="w-3/5" src="/seo.svg" alt="" />
								</span>
								<p className="relative h-fit before:absolute before:w-2/3 before:h-0.5 before:bg-goldbackground before:top-1/2 before:-translate-y-full before:-left-full">
									03
								</p>
							</div>
						</article>
						<article className="relative flex min-h-72 flex-col rounded-2xl bg-blackText p-6 after:absolute after:bottom-5 after:left-1/2 after:h-0.5 after:w-3/4 after:-translate-x-1/2 after:bg-goldbackground sm:min-h-80 lg:p-8 3xl:min-h-96 3xl:rounded-3xl 3xl:p-12">
							<h3 className="mt-12 text-3xl font-semibold sm:text-4xl xl:text-3xl 2xl:text-4xl">Escalabilidad</h3>
							<p className="mt-4 text-base leading-relaxed opacity-70 sm:text-lg xl:text-base 3xl:text-xl">
								Sistemas modulares que crecen contigo, sin rehacer todo al sumar productos
								o secciones.
							</p>
							<div className="-order-1 flex w-full justify-between text-xl font-semibold text-goldbackground sm:text-2xl 3xl:text-3xl">
								<span className="flex size-12 items-center justify-center rounded-xl bg-background sm:size-14">
									<img className="w-3/5" src="/scalability.svg" alt="" />
								</span>
								<p className="relative h-fit before:absolute before:w-2/3 before:h-0.5 before:bg-goldbackground before:top-1/2 before:-translate-y-full before:-left-full">
									04
								</p>
							</div>
						</article>
					</div>
				</div>
				{/* <section className="flex flex-col items-center bg-blackText p-8 rounded-2xl xl:flex-row xl:w-full xl:gap-20 3xl:rounded-4xl">
					
				</section> */}
			</section>

			<section className="bg-goldbackground p-8 lg:p-16">
				<section>
					<h2 className="text-blackText text-center text-2xl font-semibold sm:text-4xl lg:text-5xl lg:mt-16 xl:text-start 3xl:text-7xl">
						DISEÑO UI-UX
					</h2>
					<p className="font-secundary mt-4 text-blackText font-medium sm:text-3xl sm:mt-8 lg:mt-16 xl:max-w-6xl 3xl:text-4xl 3xl:max-w-[1700px]">
						Imagina tu sitio como una ciudad en pleno crecimiento. Antes de levantar sus
						edificios —interfaces, animaciones, formularios— necesitamos un plano urbano
						claro que indique qué se construye, dónde y por qué. Ese plano es el Concepto:
						la idea rectora que alinea estética, contenido y funcionalidades con los
						objetivos de negocio.
					</p>
				</section>

				<section className="w-full flex flex-col xl:flex-row gap-5 xl:mt-36 xl:gap-20">
					<div className="h-[300px] w-full relative sm:h-[450px] lg:h-[600px] sm:mt-20 xl:w-2/4 3xl:mt-0">
						<Image
							src="/iaImages/galoBottom.png"
							fill
							className="object-contain object-top"
							alt=""
						/>
					</div>
					<ul className="font-primary flex flex-col gap-6 text-blackText 3xl:mt-5">
						<li className="flex gap-4">
							<span className="w-13 h-13 rounded-xl bg-blackText shrink-0 text-foreground flex items-center text-xl font-bold justify-center sm:size-20 sm:text-4xl xl:size-24 xl:text-5xl">
								01
							</span>
							<div className="flex flex-col gap-3">
								<h4 className="font-bold sm:text-3xl xl:text-2xl 3xl:text-3xl">
									INVESTIGACIÓN
								</h4>
								<p className="font-secundary sm:text-2xl xl:text-xl 3xl:text-2xl">
									Analizamos tu marca, competencia y usuarios para entender el contexto
									completo.
								</p>
							</div>
						</li>
						<li className="flex gap-4">
							<span className="w-13 h-13 rounded-xl bg-blackText shrink-0 text-foreground flex items-center text-xl font-bold justify-center sm:w-20 sm:h-20 sm:text-4xl xl:size-24 xl:text-5xl">
								02
							</span>
							<div className="flex flex-col gap-3">
								<h4 className="font-bold sm:text-3xl xl:text-2xl 3xl:text-3xl">
									ITEREACIÓN
								</h4>
								<p className="font-secundary sm:text-2xl xl:text-xl 3xl:text-2xl">
									Refinamos basándonos en feedback y pruebas de usabilidad.
								</p>
							</div>
						</li>
						<li className="flex gap-4">
							<span className="w-13 h-13 rounded-xl bg-blackText shrink-0 text-foreground flex items-center text-xl font-bold justify-center sm:w-20 sm:h-20 sm:text-4xl xl:size-24 xl:text-5xl">
								03
							</span>
							<div className="flex flex-col gap-3">
								<h4 className="font-bold sm:text-3xl xl:text-2xl 3xl:text-3xl">
									CONCEPTO
								</h4>
								<p className="font-secundary sm:text-2xl xl:text-xl 3xl:text-2xl">
									Definimos la arquitectura de información y el flujo de usuario ideal.
								</p>
							</div>
						</li>
						<li className="flex gap-4">
							<span className="w-13 h-13 rounded-xl bg-blackText shrink-0 text-foreground flex items-center text-xl font-bold justify-center sm:w-20 sm:h-20 sm:text-4xl xl:size-24 xl:text-5xl">
								04
							</span>
							<div className="flex flex-col gap-3">
								<h4 className="font-bold sm:text-3xl xl:text-2xl 3xl:text-3xl">DISEÑO</h4>
								<p className="font-secundary sm:text-2xl xl:text-xl 3xl:text-2xl">
									Creamos interfaces visuales que reflejan tu identidad y objetivos.
								</p>
							</div>
						</li>
					</ul>
				</section>

				<section className="mt-30">
					<article className="xl:flex xl:justify-between">
						<h3 className="uppercase text-xl text-center text-blackText font-semibold mt-10 sm:text-4xl lg:text-5xl lg:mt-16 xl:text-start xl:text-4xl xl:w-3/6 3xl:text-6xl">
							Definimos la línea gráfica y lA ESENCIA DE TU NEGOCIO
						</h3>
						<p className="font-secundary mt-4 font-medium text-blackText sm:text-3xl sm:mt-8 lg:mt-16 xl:text-2xl xl:w-3/7 3xl:text-4xl">
							Un diseño coherente, una funcionalidad centrada en los objetivos y una
							interfaz intuitiva es lo que debería tener cada sitio web que pretenda
							representarte en el mundo digital.
						</p>
					</article>
					<div className="flex flex-col h-auto gap-2 mt-10 xl:flex-row 3xl:gap-4 3xl:max-w-4/5 3xl:mx-auto 3xl:mt-42">
						<div className="bg-gray-400 col-span-2 row-span-4 rounded-2xl">
							<Image
								src={"/prototypes/galoHero.jpg"}
								width={1600}
								height={700}
								alt=""
								className="object-cover rounded-2xl"
							/>
						</div>
						<section className="flex flex-col gap-2 3xl:gap-4">
							<div className=" col-span-2 row-span-2 rounded-2xl">
								<Image
									src={"/prototypes/galoFrame.jpg"}
									width={900}
									height={700}
									alt=""
									className="object-cover rounded-2xl 3xl:w-[1200px]"
								/>
							</div>
							<section className="flex gap-2 3xl:gap-4">
								<div className="col-span-1 row-span-3 rounded-2xl relative overflow-hidden">
									<Image
										src={"/prototypes/clothesWebsite.jpg"}
										width={800}
										height={700}
										alt=""
										className="object-cover rounded-2xl"
									/>
								</div>
								<div className="bg-gray-400 col-span-1 row-span-3 rounded-2xl ">
									<Image
										src={"/prototypes/icecreamWebsite.jpg"}
										width={800}
										height={700}
										alt=""
										className="object-cover rounded-2xl"
									/>
								</div>
							</section>
						</section>
					</div>
				</section>

				<section className="mt-10 sm:mt-20">
					<article className="xl:flex xl:justify-between">
						<h3 className="font-semibold text-blackText text-center text-xl sm:text-4xl lg:text-5xl lg:mt-16 xl:text-start xl:text-4xl xl:w-3/6 3xl:text-6xl">
							ENFOCAMOS LA EXPERIENCIA EN EL USUARIO
						</h3>
						<p className="font-secundary mt-4 font-medium text-blackText sm:text-3xl sm:mt-8 lg:mt-16 xl:text-2xl xl:w-3/7 3xl:text-4xl">
							Centramos nuestras ideas en el usuario final, ponemos las necesidades,
							expectativas y comportamientos de las personas al frente de cada decisión
							visual y funcional. Todo se optimiza para ofrecer navegación intuitiva,
							accesible y satisfactoria. Queremos ofrecer una experiencia fluida que
							reduzca la fricción e incremente la confianza.
						</p>
					</article>
					<div className="flex flex-col mt-22 gap-1 sm:flex-row sm:flex-wrap justify-center sm:gap-x-6 sm:gap-y-4 3xl:gap-8 3xl:mt-48">
						<div className="bg-blackText h-72 rounded-2xl p-6 mb-2 relative sm:max-w-80 lg:h-80 3xl:h-[500px] 3xl:max-w-lg">
							<Image
								src={"/prototypes/galoTime.png"}
								width={150}
								height={130}
								alt=""
								className="absolute -top-12 right-0 3xl:w-42"
							/>
							<h4 className="font-semibold mt-20 text-center uppercase text-goldbackground text-lg lg:text-xl lg:mt-16 3xl:mt-28 3xl:text-4xl">
								Tiempo de permanencia
							</h4>
							<p className="text-foreground text-center mt-4 text-sm text-balance lg:text-base 3xl:text-xl 3xl:mt-6">
								Un diseño cautivador y contenido relevante prolongan el tiempo de
								permanencia, transformando simples visitas en exploraciones profundas que
								fortalecen la relación con tu marca.
							</p>
						</div>
						<div className="bg-blackText h-72 rounded-2xl p-6 mb-2 relative sm:max-w-80 lg:h-80 3xl:h-[500px] 3xl:max-w-lg">
							<Image
								src={"/prototypes/galoPerformance.png"}
								width={150}
								height={130}
								alt=""
								className="absolute -top-12 right-0 3xl:w-42"
							/>
							<h4 className="font-semibold mt-20 text-center uppercase text-goldbackground text-lg lg:text-xl lg:mt-16 3xl:mt-28 3xl:text-4xl">
								Rendimiento
							</h4>
							<p className="text-foreground text-center mt-4 text-sm lg:text-base 3xl:text-xl 3xl:mt-6">
								Rendimiento óptimo significa cargas instantáneas y transiciones fluidas;
								cada segundo ahorrado reduce la frustración, impulsa conversiones y mejora
								significativamente tu posicionamiento en buscadores.
							</p>
						</div>
						<div className="bg-blackText h-72 rounded-2xl p-6 relative sm:max-w-80 lg:h-80 3xl:h-[500px] 3xl:max-w-lg">
							<Image
								src={"/prototypes/galoAccessibility.png"}
								width={150}
								height={130}
								alt=""
								className="absolute -top-12 right-0 3xl:w-42"
							/>
							<h4 className="font-semibold mt-20 text-center uppercase text-goldbackground text-lg lg:text-xl lg:mt-16 3xl:mt-28 3xl:text-4xl">
								Accesibilidad
							</h4>
							<p className="text-foreground text-center mt-4 text-sm lg:text-base 3xl:text-xl 3xl:mt-6">
								La accesibilidad garantiza que todas las personas, sin importar sus
								capacidades, naveguen, comprendan e interactúen con tu sitio, ampliando
								audiencia y cumpliendo estándares globales.
							</p>
						</div>
					</div>
				</section>
			</section>

			{/* <WebsiteSlider /> */}

			<section className="bg-foreground p-8 lg:p-16">
				<h2 className="text-2xl font-semibold mt-4 text-center text-blackText sm:text-4xl lg:text-5xl lg:mt-16 3xl:text-6xl">
					TUS OBJETIVOS SON <br /> NUESTRA PRIORIDAD
				</h2>
				<div className="flex overflow-scroll gap-6 mt-10 pb-4 snap-x snap-mandatory text-blackText font-bold lg:mt-16 xl:overflow-hidden xl:justify-center xl:gap-10">
					<article className="relative border-2 shrink-0 border-[#CCCCCC] w-9/10 h-72 sm:size-80 rounded-2xl snap-center">
						<img
							className="absolute top-4 left-2/4 -translate-x-2/4"
							src="/cubeIcon.svg"
							alt="icon"
						/>
						<h3 className="text-xl mt-40 text-center sm:text-3xl">
							TEXTO SABROSO JAJAJA
						</h3>
					</article>
					<article className="relative border-2 shrink-0 border-[#CCCCCC] w-9/10 h-72 sm:size-80 rounded-2xl snap-center">
						<img
							className="absolute top-6 left-2/4 -translate-x-2/4"
							src="/progressIcon.svg"
							alt="icon"
						/>
						<h3 className="text-xl mt-40 text-center sm:text-3xl">
							TEXTO SABROSO JAJAJA
						</h3>
					</article>
					<article className="relative border-2 shrink-0 border-[#CCCCCC] w-9/10 h-72 sm:size-80 rounded-2xl snap-center">
						<img
							className="absolute top-6 left-2/4 -translate-x-2/4"
							src="/peopleIcon.svg"
							alt="icon"
						/>
						<h3 className="text-xl mt-40 text-center sm:text-3xl">
							TEXTO SABROSO JAJAJA
						</h3>
					</article>
				</div>

				<div className="flex flex-col xl:flex-row xl:gap-10 xl:mt-30 3xl:w-4/5 3xl:mx-auto">
					<article className="shrink-0 text-blackText flex flex-col gap-4 mt-10 items-center min-h-[311px] bg-[#D9D9D9] p-8 rounded-2xl xl:w-3/5 xl:mt-0">
						<h2 className="text-2xl font-bold uppercase text-center w-64 sm:text-4xl sm:w-80 xl:w-full 3xl:text-5xl">
							Transformamos tu <br /> visión en ruta
						</h2>
						<p className="sm:text-2xl text-center 3xl:text-3xl 3xl:max-w-5xl 3xl:mt-8">
							Diseño web a la medida, SEO con estrategia real, branding que emociona, y
							contenido que sostiene el crecimiento. No es solo ejecutar tácticas; es
							avanzar con propósito, medir con inteligencia y elevar tu marca paso a paso
							hasta donde sueñas estar.
						</p>
					</article>
					<section className="shrink-0 xl:w-2/5">
						<span className="flex justify-center w-full min-h-[311px] mt-5 bg-cyan-600 rounded-2xl xl:mt-0 xl:h-full">
							VIDEO
						</span>
					</section>
				</div>

				<p className="ml-auto text-right right-0 text-blackText font-secundary mt-10 font-medium w-8/10 sm:text-2xl xl:w-6/10 3xl:text-3xl 3xl:mt-28 3xl:w-4/10">
					Si tienes interés en trabajar con nosotros creamos para ti el boceto de lo que
					podría convertirse en la nueva identidad de tu marca{" "}
					<span className="font-bold text-goldbackground">sin costo alguno.</span>{" "}
					queremos que veas por ti mismo/a el valor que podemos ofrecerte.
				</p>
				<Link
					href={""}
					className="bg-blackText pl-3 pr-3 w-44 ml-auto mt-10 font-bold h-12 rounded-xl flex gap-4 justify-center items-center sm:text-2xl sm:w-56 sm:h-14 sm:pl-6 sm:pr-6"
				>
					HABLEMOS
					<img src="/whiteArrow.svg" alt="" className="h-2/4" />
				</Link>
			</section>
		</main>
	);
}
