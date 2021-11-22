const withVideos = require('next-videos');

const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'imgix.ranker.com',
      'rennlist.com',
      'www.autozeitung.de',
      'images.cdn.circlesix.co',
      'i0.wp.com',
      'd39a3h63xew422.cloudfront.net',
      'res.cloudinary.com',
      'www.autozeitung.de',
      'upload.wikimedia.org',
    ],
  },
};
module.exports = withVideos(nextConfig);
