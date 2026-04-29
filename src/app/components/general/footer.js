import Link from "next/link";

export default function Footer(params) {
	return (
		<footer className="flex flex-col bg-[#292929] pt-10 pb-10 xl:p-16 relative">
			<ul className="text-center flex flex-col gap-6 font-primary xl:text-start">
				<Link href={"/"} className="uppercase flex flex-col gap-2.5 text-2xl xl:text-3xl">
					Inicio
				</Link>
				<Link href={"/websites"} className="uppercase flex flex-col gap-2.5 text-2xl xl:text-3xl">
					Desarrollo Web
				</Link>
				<Link href={"/photos"} className="uppercase flex flex-col gap-2.5 text-2xl xl:text-3xl">
					Fotografia y Video
				</Link>
				<Link href={"/blog"} className="uppercase flex flex-col gap-2.5 text-2xl xl:text-3xl">
					Blog
				</Link>
				{/* <li>Desarrollo movil</li> */}
			</ul>

			<div className="mt-12 font-primary text-foreground xl:mt-0 xl:absolute xl:right-16 xl:top-16 xl:w-2/4">
				<h3 className="text-2xl uppercase font-bold text-center xl:text-5xl">
					“Hagamos de tu visión nuestro próximo proyecto.”
				</h3>
				<div className="flex gap-2 justify-center mt-4 xl:mt-12 xl:gap-8">
					<a
						href=""
						className="uppercase rounded-xl font-primary text-nowrap flex items-center justify-center text-sm flex-shrink-0 w-44 font-bold h-10 bg-foreground border-2 border-foreground text-blackText xl:text-lg xl:w-48 xl:h-14"
					>
						Portafolio Behance
					</a>
					<a
						href=""
						className="uppercase rounded-xl font-primary text-nowrap flex items-center justify-center text-sm flex-shrink-0 w-44 font-bold h-10 bg-blackText border-2 border-goldbackground text-goldbackground xl:text-lg xl:w-48 xl:h-14"
					>
						Habla con nosotros
					</a>
				</div>
			</div>
			{/* Redes sociales */}
			<ul className="flex gap-2 justify-center mt-8 mb-10 xl:absolute xl:bottom-16 xl:right-16">
				<a href="" className="w-11 h-11 rounded-full bg-foreground block p-2">
					<img className="w-full" src="/socialMediaIcons/facebook.svg" alt="facebook icon" />
				</a>
				<a className="w-11 h-11 rounded-full bg-foreground block p-2" href="">
					<img className="w-full"  src="/socialMediaIcons/instagram.svg" alt="facebook icon" />
				</a>
				<a className="w-11 h-11 rounded-full bg-foreground block p-2" href="">
					<img className="w-full" src="/socialMediaIcons/whatsapp.svg" alt="facebook icon" />
				</a>
				<a className="w-11 h-11 rounded-full bg-foreground block p-2" href="">
					<img className="w-full" src="/socialMediaIcons/mail.svg" alt="facebook icon" />
				</a>
			</ul>

			<span className="bg-white w-5/6 h-0.5 ml-auto mr-auto xl:w-full xl:mt-10"></span>

			<article className="flex flex-col items-center font-primary xl:items-start xl:w-full">
				<h3 className="text-2xl font-bold mt-4 xl:text-5xl">GALOS CASA CREATIVA</h3>
				<p className="text-gray-400 xl: xl:self-center xl:mt-4">Términos y Privacidad - Cookies</p>
			</article>
		</footer>
	);
}
