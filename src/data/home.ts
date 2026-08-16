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
	headline: 'Creamos y hacemos evolucionar la presencia digital de tu negocio.',
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
		{ value: 5, suffix: '+', label: 'Años creando soluciones web' },
		{ value: 98, suffix: '%', label: 'Clientes que nos recomiendan' },
	],
	countries: ['Chile'],
	quote: 'Somos una empresa dedicada al diseño y desarrollo de páginas web.',
	paragraphs: [
		'Creamos sitios corporativos, landing pages y tiendas online modernas, rápidas y fáciles de usar.',
		'También ofrecemos mantención, seguridad, soporte e integraciones para que cada web siga funcionando y creciendo.',
	],
} as const;
