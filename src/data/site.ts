export const services = [
	{
		title: 'Mantención web',
		description: 'Tu sitio siempre actualizado, respaldado y funcionando.',
		href: '/servicios/mantencion-web',
		icon: 'refresh',
	},
	{
		title: 'Seguridad web',
		description: 'Protección y monitoreo continuo para tu plataforma.',
		href: '/servicios/seguridad-web',
		icon: 'shield',
	},
	{
		title: 'Integración con WhatsApp',
		description: 'Convierte visitas en conversaciones de forma inmediata.',
		href: '/servicios/integracion-whatsapp',
		icon: 'message',
	},
] as const;

export const navigation = [
	{ label: 'Inicio', href: '/#home' },
	{ label: 'Nosotros', href: '/#about' },
	{ label: 'Trabajos', href: '/#work' },
	{ label: 'Servicios', href: '/#services' },
	{ label: 'Planes', href: '/#plans' },
	{ label: 'FAQ', href: '/#faq' },
] as const;

export const contactEmail = 'contacto@pulsoweb.cl';
export const whatsappNumber = '56998796837';
export const whatsappDisplay = '+56 9 9879 6837';

export const getWhatsappUrl = (message: string) =>
	`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsappLinks = {
	general: getWhatsappUrl('Hola PulsoWeb, quiero conversar sobre un proyecto digital.'),
	website: getWhatsappUrl('Hola PulsoWeb, quiero cotizar una página web para mi negocio.'),
	ecommerce: getWhatsappUrl('Hola PulsoWeb, quiero cotizar un ecommerce para mi negocio.'),
} as const;
