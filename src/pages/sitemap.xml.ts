import type { APIRoute } from 'astro';

const routes = [
	'/',
	'/proyectos',
	'/servicios/mantencion-web',
	'/servicios/seguridad-web',
	'/servicios/integracion-whatsapp',
];

export const GET: APIRoute = ({ site }) => {
	const baseUrl = site ?? new URL('https://pulsoweb.cl');
	const urls = routes
		.map((route) => `<url><loc>${new URL(route, baseUrl).toString()}</loc></url>`)
		.join('');
	const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
