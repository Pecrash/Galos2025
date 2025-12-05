import Link from "next/link";
import WebsiteSlider from "../components/websites/websiteSlider";
import Image from "next/image";

export default function Websites() {
	return (
		<main className="bg-foreground">
			<section className="flex flex-col h-screen w-full relative p-8 bg-background lg:p-16 lg:flex-row">
				<h3 className="text-3xl mt-4 font-bold sm:text-5xl sm:w-8/10 xl:w-7/10 xl:text-7xl xl:leading-snug">
					PLANEAMOS, <br /> DISEÑAMOS Y <br /> CONSTRUIMOS TU <br /> PRESENCIA EN LINEA
				</h3>
				<div className="w-2/5 h-1/4 self-center rounded-3xl mt-10 bg-gray-400">
					animación
				</div>
				<a
					href=""
					className="font-bold text-xl text-right underline mt-auto sm:text-3xl sm:w-7/10 sm:ml-auto lg:absolute lg:right-16 lg:top-4/5"
				>
					AGENDA TU CONSULTORÍA <br /> GRATUITA
				</a>
			</section>

			<section className="flex flex-col p-8 gap-4 items-center bg-background lg:p-16 ">
				<section className="flex flex-col items-center bg-blackText p-8 rounded-2xl xl:flex-row xl:w-full xl:gap-20">
					<div className="w-3/4 h-[250px] rounded-lg mb-10 relative sm:h-[450px] lg:h-[600px] xl:h-[500px] xl:w-2/6">
						<Image src="/iaImages/galoWebsite.png" fill className="object-cover" alt="" />
					</div>
					<div className="xl:w-5/6">
						<article className="w-fit">
							<ul className="flex gap-2 font-semibold text-[#A7A7A7] flex-wrap justify-center text-[11px] xl:text-xl xl:justify-evenly xl:w-full">
								<li>ACCESIBILIDAD</li>
								<li>RENDIMIENTO</li>
								<li>SEO</li>
								<li>ESCALABILIDAD</li>
							</ul>
							<h3 className="text-center mt-1 text-2xl xl:text-5xl xl:text-start xl:mt-4">
								NOS ENFOCAMOS EN HACER DE ESTO UN PROCESO AMENO
							</h3>
						</article>
						<p className="font-secundary text-center mt-3 xl:text-start sm:text-2xl xl:mt-8 xl:max-w-[900px]">
							Sabemos perfectamente la cantidad de dudas y preguntas que surgen cuando
							quieres dar el salto al mundo digital por eso en{" "}
							<span className="font-bold text-goldbackground">Galos Casa Creativa</span>{" "}
							hacemos de lo difícil algo sencillo.
						</p>
					</div>
				</section>
			</section>

			<section className="bg-goldbackground p-8 lg:p-16">
				<section>
					<h2 className="text-blackText text-center text-2xl font-semibold sm:text-4xl lg:text-5xl lg:mt-16 xl:text-start">
						DISEÑO UI-UX
					</h2>
					<p className="font-secundary mt-4 text-blackText font-medium sm:text-3xl sm:mt-8 lg:mt-16 xl:max-w-6xl">
						Imagina tu sitio como una ciudad en pleno crecimiento. Antes de levantar sus
						edificios —interfaces, animaciones, formularios— necesitamos un plano urbano
						claro que indique qué se construye, dónde y por qué. Ese plano es el Concepto:
						la idea rectora que alinea estética, contenido y funcionalidades con los
						objetivos de negocio.
					</p>
				</section>

				<section className="w-full flex flex-col xl:flex-row gap-5 xl:mt-36 xl:gap-20">
					<div className="h-[300px] w-full relative sm:h-[450px] lg:h-[600px] sm:mt-20 xl:w-2/4 xl:">
						<Image
							src="/iaImages/galoBottom.png"
							fill
							className="object-contain object-top"
							alt=""
						/>
					</div>
					<ul className="font-primary flex flex-col gap-6 text-blackText">
						<li className="flex gap-4">
							<span className="w-13 h-13 rounded-xl bg-blackText shrink-0 text-foreground flex items-center text-xl font-bold justify-center sm:size-20 sm:text-4xl xl:size-24 xl:text-5xl">
								01
							</span>
							<div className="flex flex-col gap-3">
								<h4 className="font-bold sm:text-3xl xl:text-2xl">INVESTIGACIÓN</h4>
								<p className="font-secundary sm:text-2xl xl:text-xl">
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
								<h4 className="font-bold sm:text-3xl xl:text-2xl">ITEREACIÓN</h4>
								<p className="font-secundary sm:text-2xl xl:text-xl">
									Refinamos basándonos en feedback y pruebas de usabilidad.
								</p>
							</div>
						</li>
						<li className="flex gap-4">
							<span className="w-13 h-13 rounded-xl bg-blackText shrink-0 text-foreground flex items-center text-xl font-bold justify-center sm:w-20 sm:h-20 sm:text-4xl xl:size-24 xl:text-5xl">
								03
							</span>
							<div className="flex flex-col gap-3">
								<h4 className="font-bold sm:text-3xl xl:text-2xl">CONCEPTO</h4>
								<p className="font-secundary sm:text-2xl xl:text-xl">
									Definimos la arquitectura de información y el flujo de usuario ideal.
								</p>
							</div>
						</li>
						<li className="flex gap-4">
							<span className="w-13 h-13 rounded-xl bg-blackText shrink-0 text-foreground flex items-center text-xl font-bold justify-center sm:w-20 sm:h-20 sm:text-4xl xl:size-24 xl:text-5xl">
								04
							</span>
							<div className="flex flex-col gap-3">
								<h4 className="font-bold sm:text-3xl xl:text-2xl">DISEÑO</h4>
								<p className="font-secundary sm:text-2xl xl:text-xl">
									Creamos interfaces visuales que reflejan tu identidad y objetivos.
								</p>
							</div>
						</li>
					</ul>
				</section>

				<section className="mt-30">
					<article className="xl:flex xl:justify-between">
						<h3 className="uppercase text-xl text-center text-blackText font-semibold mt-10 sm:text-4xl lg:text-5xl lg:mt-16 xl:text-start xl:text-4xl xl:w-3/6">
							Definimos la línea gráfica y lA ESENCIA DE TU NEGOCIO
						</h3>
						<p className="font-secundary mt-4 font-medium text-blackText sm:text-3xl sm:mt-8 lg:mt-16 xl:text-2xl xl:w-3/7">
							Un diseño coherente, una funcionalidad centrada en los objetivos y una
							interfaz intuitiva es lo que debería tener cada sitio web que pretenda
							representarte en el mundo digital.
						</p>
					</article>
					<div className="flex flex-col h-auto gap-2 mt-10 xl:flex-row">
						<div className="bg-gray-400 col-span-2 row-span-4 rounded-2xl">
							<Image
								src={"/prototypes/galoHero.jpg"}
								width={1600}
								height={700}
								alt=""
								className="object-cover rounded-2xl"
							/>
						</div>
						<section className="flex flex-col gap-2">
							<div className=" col-span-2 row-span-2 rounded-2xl">
								<Image
									src={"/prototypes/galoFrame.jpg"}
									width={900}
									height={700}
									alt=""
									className="object-cover rounded-2xl"
								/>
							</div>
							<section className="flex gap-2">
								<div className="col-span-1 row-span-3 rounded-2xl relative overflow-hidden">
									<Image
										src={"/prototypes/clothesWebsite.jpg"}
										width={800}
										height={700}
										alt=""
										className="object-cover rounded-2xl"
									/>
								</div>
								<div className="bg-gray-400 col-span-1 row-span-3 rounded-2xl">
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
						<h3 className="font-semibold text-blackText text-center text-xl sm:text-4xl lg:text-5xl lg:mt-16 xl:text-start xl:text-4xl xl:w-3/6">
							ENFOCAMOS LA EXPERIENCIA EN EL USUARIO
						</h3>
						<p className="font-secundary mt-4 font-medium text-blackText sm:text-3xl sm:mt-8 lg:mt-16 xl:text-2xl xl:w-3/7">
							Centramos nuestras ideas en el usuario final, ponemos las necesidades,
							expectativas y comportamientos de las personas al frente de cada decisión
							visual y funcional. Todo se optimiza para ofrecer navegación intuitiva,
							accesible y satisfactoria. Queremos ofrecer una experiencia fluida que
							reduzca la fricción e incremente la confianza.
						</p>
					</article>
					<div className="flex flex-col mt-22 gap-1 sm:flex-row sm:flex-wrap justify-center sm:gap-x-6 sm:gap-y-4">
						<div className="bg-blackText h-72 rounded-2xl p-6 mb-2 relative sm:max-w-80 lg:h-80 ">
							<Image
								src={"/prototypes/galoTime.png"}
								width={150}
								height={130}
								alt=""
								className="absolute -top-12 right-0"
							/>
							<h4 className="font-semibold mt-20 text-center uppercase text-goldbackground text-lg lg:text-xl lg:mt-16">
								Tiempo de permanencia
							</h4>
							<p className="text-foreground text-center mt-4 text-sm text-balance lg:text-base">
								Un diseño cautivador y contenido relevante prolongan el tiempo de
								permanencia, transformando simples visitas en exploraciones profundas que
								fortalecen la relación con tu marca.
							</p>
						</div>
						<div className="bg-blackText h-72 rounded-2xl p-6 mb-2 relative sm:max-w-80 lg:h-80 ">
							<Image
								src={"/prototypes/galoPerformance.png"}
								width={150}
								height={130}
								alt=""
								className="absolute -top-12 right-0"
							/>
							<h4 className="font-semibold mt-20 text-center uppercase text-goldbackground text-lg lg:text-xl lg:mt-16">
								Rendimiento
							</h4>
							<p className="text-foreground text-center mt-4 text-sm lg:text-base">
								Rendimiento óptimo significa cargas instantáneas y transiciones fluidas;
								cada segundo ahorrado reduce la frustración, impulsa conversiones y mejora
								significativamente tu posicionamiento en buscadores.
							</p>
						</div>
						<div className="bg-blackText h-72 rounded-2xl p-6 relative sm:max-w-80 lg:h-80">
							<Image
								src={"/prototypes/galoAccessibility.png"}
								width={150}
								height={130}
								alt=""
								className="absolute -top-12 right-0"
							/>
							<h4 className="font-semibold mt-20 text-center uppercase text-goldbackground text-lg lg:text-xl lg:mt-16 ">
								Accesibilidad
							</h4>
							<p className="text-foreground text-center mt-4 text-sm lg:text-base">
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
				<h2 className="text-2xl font-semibold mt-4 text-center text-blackText sm:text-4xl lg:text-5xl lg:mt-16">
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

				<div className="flex flex-col xl:flex-row xl:gap-10 xl:mt-30">
					<article className="shrink-0 text-blackText flex flex-col gap-4 mt-10 items-center min-h-[311px] bg-[#D9D9D9] p-8 rounded-2xl xl:w-3/5 xl:mt-0">
						<h2 className="text-2xl font-bold uppercase text-center w-64 sm:text-4xl sm:w-80 xl:w-full">
							Transformamos tu <br /> visión en ruta
						</h2>
						<p className="sm:text-2xl">
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

				<p className="ml-auto text-right right-0 text-blackText font-secundary mt-10 font-medium w-8/10 sm:text-2xl xl:w-6/10">
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
