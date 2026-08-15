export interface WebPlan {
	name: string;
	type: string;
	description: string;
	featuresTitle: string;
	features: string[];
	cta: string;
}

export const webPlans: WebPlan[] = [
	{
		name: 'Páginas Web',
		type: 'Presencia digital',
		description: 'Para empresas, profesionales y emprendimientos que necesiten presencia digital.',
		featuresTitle: 'Este servicio puede incluir',
		features: [
			'Landing pages',
			'Sitios corporativos',
			'Sitios para servicios profesionales',
			'Portafolios',
			'Sitios institucionales',
			'Formularios de contacto',
			'Integración con WhatsApp',
			'Diseño responsive',
			'SEO técnico básico',
			'Dominio y publicación como parte de la propuesta, cuando corresponda',
		],
		cta: 'Cotizar Página Web',
	},
	{
		name: 'Ecommerce',
		type: 'Ventas online',
		description: 'Para negocios que necesiten vender productos o servicios online.',
		featuresTitle: 'Este servicio puede contemplar',
		features: [
			'Tienda online',
			'Catálogo de productos',
			'Carrito de compras',
			'Medios de pago',
			'Gestión de pedidos',
			'Integración con WhatsApp',
			'Configuración de despacho',
			'Diseño responsive',
			'Capacitación básica para administrar la tienda',
		],
		cta: 'Cotizar Ecommerce',
	},
	{
		name: 'Proyecto a medida',
		type: 'Solución personalizada',
		description: 'Para negocios que requieren una experiencia digital diseñada alrededor de objetivos específicos.',
		featuresTitle: 'Este servicio puede contemplar',
		features: ['Estrategia digital', 'Diseño UX / UI', 'Desarrollo personalizado', 'Integraciones', 'Soporte de lanzamiento'],
		cta: 'Cotizar proyecto',
	},
];
