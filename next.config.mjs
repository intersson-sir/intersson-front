import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'intersson.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'intersson.com',
        pathname: '/**',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeDimensions',
                    active: false
                  }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      }
    )

    return config
  }
}

export default withNextIntl(nextConfig)
