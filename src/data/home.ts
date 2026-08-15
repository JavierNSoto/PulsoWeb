import { whatsappLinks } from './site';

export const home = {
	assets: {
		// Replace these paths when the final supplied assets are available.
		logo: '/images/logo-pulsoweb-horizontal.png',
		video: '/assets/hero.mp4',
		poster: '/images/hero-desarrollo-web.webp',
	},
	name: ['Diseñamos', 'Web'],
	availability: 'Disponible para nuevos proyectos',
	location: 'Chile / remoto',
	headline: 'Experiencias digitales con pulso, propósito y precisión.',
	technologies: ['Diseño web', 'Sitios corporativos', 'Tiendas online', 'Diseño responsive'],
	links: {
		projects: '/proyectos',
		contact: whatsappLinks.general,
		social: [
			{ label: 'Instagram', href: 'https://instagram.com' },
		],
	},
	stats: [
		{ value: 30, suffix: '+', label: 'Proyectos publicados' },
		{ value: 5, suffix: '+', label: 'Años creando web' },
		{ value: 98, suffix: '%', label: 'Clientes que recomiendan' },
	],
	countries: ['Chile'],
	quote: 'Una buena web no solo se ve bien. Hace que una marca se sienta imposible de ignorar.',
	paragraphs: [
		'Diseñamos y desarrollamos experiencias digitales para negocios que entienden que su presencia online debe trabajar con la misma intención que su marca.',
		'Desde la estrategia hasta el último detalle de interacción, combinamos claridad, tecnología y una mirada editorial para construir sitios que dejan huella.',
	],
} as const;
