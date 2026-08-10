export interface WebPlan {
	name: string;
	type: string;
	description: string;
	implementationPrice: string;
	renewalPrice: string;
	featuresTitle: string;
	features: string[];
}

export const webPlans: WebPlan[] = [
	{
		name: 'Pulso Landing',
		type: 'Landing esencial',
		description: 'Landing page profesional de una sola página y hasta 5 secciones, ideal para presentar servicios, información principal y canales de contacto.',
		implementationPrice: '$99.990',
		renewalPrice: '$79.990',
		featuresTitle: 'La renovación anual considera',
		features: [
			'Dominio desde $10.000 anuales',
			'Hosting administrado de 5 GB',
			'Certificado SSL',
			'1 correo corporativo',
			'Respaldo del sitio',
			'Soporte técnico básico',
			'Mantenimiento de la infraestructura',
		],
	},
	{
		name: 'Pulso Pro',
		type: 'Landing comercial',
		description: 'Landing page comercial de una sola página y hasta 8 secciones, con mayor espacio para presentar servicios, proyectos, testimonios y llamados a la acción.',
		implementationPrice: '$149.990',
		renewalPrice: '$79.990',
		featuresTitle: 'La renovación anual considera',
		features: [
			'Dominio desde $10.000 anuales',
			'Hosting administrado de 10 GB',
			'Certificado SSL',
			'Hasta 5 correos corporativos',
			'Respaldo del sitio',
			'Mantenimiento técnico',
			'Soporte técnico',
			'Una modificación menor durante el periodo contratado',
		],
	},
	{
		name: 'Pulso Premium',
		type: 'Sitio personalizado',
		description: 'Sitio web completamente personalizado, desarrollado de acuerdo con la identidad, estructura y necesidades específicas de cada negocio.',
		implementationPrice: '$199.990',
		renewalPrice: '$79.990',
		featuresTitle: 'La renovación anual considera',
		features: [
			'Dominio desde $10.000 anuales',
			'Hosting administrado de 15 GB',
			'Certificado SSL',
			'Hasta 10 correos corporativos',
			'Respaldo del sitio',
			'Mantenimiento técnico',
			'Soporte prioritario',
			'Hasta 30 minutos de modificaciones durante el periodo contratado',
		],
	},
];
