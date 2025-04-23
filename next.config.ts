import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['home.loc'],
  productionBrowserSourceMaps: true,
}

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
})

export default withNextIntl(nextConfig)
