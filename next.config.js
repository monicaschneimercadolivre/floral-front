/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: true,
  node: {
    net: 'empty',
  },
  webpack: (config) => {
    //var node_dir = __dirname + '/node_modules';
    config.resolve.fallback = { fs: false }
    // config.resolve.alias ={
    //   ...config.resolve.alias,
    //   'stompjs': node_dir + '/stompjs/lib/stomp.js' }

    return config;
  },
  images: {
    domains: ['localhost'],
    loader: 'default'
  },
}

module.exports = nextConfig
