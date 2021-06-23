/* eslint-disable no-undef */

module.exports = {
  images: {domains: ['res.cloudinary.com']},
  target: 'serverless',
  eslint: {
    // Warning: Allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff2|woff)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });
    return config;
  },
};
