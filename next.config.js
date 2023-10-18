/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost'],
		remotePatterns: [
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
				hostname: 'og-image.vercel.app'
			}
		],
		formats: ['image/avif', 'image/webp'],
		dangerouslyAllowSVG: true
	}
}

module.exports = nextConfig
