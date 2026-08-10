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
	{ label: 'Inicio', href: '/#inicio' },
	{ label: 'Página Web', href: '/#pagina-web' },
	{ label: 'Proyectos', href: '/proyectos' },
] as const;

// Reemplazar por el número real en formato internacional, sin símbolos ni espacios.
export const whatsappUrl = 'https://wa.me/';
