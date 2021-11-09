const withVideos = require('next-videos');

const nextConfig = {
  images: {
    domains: [
      'imgix.ranker.com',
      'rennlist.com',
      ' www.autozeitung.de',
      'images.cdn.circlesix.co',
      'i0.wp.com',
      'd39a3h63xew422.cloudfront.net',
      'res.cloudinary.com',
      'www.autozeitung.de',
    ],
  },
};
module.exports = withVideos(nextConfig);
