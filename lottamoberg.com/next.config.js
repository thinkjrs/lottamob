/* eslint-disable no-undef */

module.exports = {
  images: {domains: ['res.cloudinary.com']},
  target: 'serverless',
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
