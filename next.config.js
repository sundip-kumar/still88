/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
          remotePatterns: [
            {
                      protocol: 'http',
                      hostname: '3.141.1.117',
                      port: '',
                      pathname: '/wp-content/uploads/**',
            },
                ],
    },
}

module.exports = nextConfig
