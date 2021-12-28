/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ['page.tsx', 'page.ts'],
  i18n: { locales: ['ja'], defaultLocale: 'ja' },
  images: {
    domains: ['firebasestorage.googleapis.com', 'pbs.twimg.com'],
  },
  reactStrictMode: true,
};
