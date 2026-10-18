/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Old multi-page URLs now live as sections on the home page.
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: false },
      { source: '/services', destination: '/#services', permanent: false },
      { source: '/contact', destination: '/#contact', permanent: false },
      { source: '/projects', destination: '/#work', permanent: false },
      { source: '/projects/:slug*', destination: '/#work', permanent: false },
    ];
  },
};

export default nextConfig;
