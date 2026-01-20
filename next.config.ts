import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [new URL('https://api.microlink.io')],
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
