export interface Project {
	title: string;
	category: string;
	type: string;
	description: string;
	tags: string[];
	tone: 'blue' | 'purple' | 'green';
	image: string;
	url: string;
}

export const projects: Project[] = [
	{
		title: 'Lands of Chile',
		category: 'Portafolio inmobiliario',
		type: 'Portal de proyectos',
		description: 'Sitio corporativo que reúne proyectos de parcelas ubicados en paisajes únicos de la Patagonia y el sur de Chile.',
		tags: ['Sitio corporativo', 'Catálogo de proyectos', 'Contacto'],
		tone: 'blue',
		image: '/images/projects/lands-of-chile.jpg',
		url: 'https://landsofchile.cl/',
	},
	{
		title: 'Loteo Río Quetro',
		category: 'Proyecto inmobiliario',
		type: 'Parcelación',
		description: 'Experiencia digital para presentar parcelas junto al Río Quetro, su entorno natural, ubicación y principales características.',
		tags: ['Landing page', 'Tour virtual', 'Formularios'],
		tone: 'green',
		image: '/images/projects/rio-quetro.jpg',
		url: 'https://www.loteorioquetro.cl/',
	},
	{
		title: 'Valle Lagunas',
		category: 'Proyecto inmobiliario',
		type: 'Parcelación',
		description: 'Sitio visual centrado en el paisaje patagónico, con información del proyecto, ubicación, alrededores y galería fotográfica.',
		tags: ['Diseño inmersivo', 'Galería', 'Contacto'],
		tone: 'purple',
		image: '/images/projects/valle-lagunas.jpg',
		url: 'https://www.vallelagunas.cl/',
	},
	{
		title: 'Mirador de Quetro',
		category: 'Proyecto inmobiliario',
		type: 'Parcelación',
		description: 'Presentación de un proyecto junto al Río Quetro, con vistas abiertas, vegetación nativa y acceso a información comercial.',
		tags: ['Sitio corporativo', 'Tour virtual', 'Galería'],
		tone: 'green',
		image: '/images/projects/mirador-quetro.jpg',
		url: 'https://www.miradordequetro.cl/',
	},
	{
		title: 'Mirador Valle Los Fósiles',
		category: 'Proyecto inmobiliario',
		type: 'Parcelación',
		description: 'Sitio dedicado a parcelas cercanas al Lago General Carrera, con información del entorno, accesos y atractivos de la zona.',
		tags: ['Landing page', 'Galería', 'Ubicación'],
		tone: 'blue',
		image: '/images/projects/valle-los-fosiles.jpg',
		url: 'https://miradorvallelosfosiles.cl/',
	},
	{
		title: 'Lago Monreal',
		category: 'Proyecto inmobiliario',
		type: 'Parcelación',
		description: 'Experiencia visual para un proyecto de parcelas entre bosque nativo y vistas privilegiadas al Lago Monreal, en Coyhaique.',
		tags: ['Sitio inmersivo', 'Video', 'Formulario'],
		tone: 'purple',
		image: '/images/projects/lago-monreal.jpg',
		url: 'https://lagomonreal.cl/',
	},
];
