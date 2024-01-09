/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'og-image.vercel.app',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'apod.nasa.gov',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'www.youtube.com',
				port: ''
			}
		],
		formats: ['image/avif', 'image/webp'],
		dangerouslyAllowSVG: true
	}
}

module.exports = nextConfig
