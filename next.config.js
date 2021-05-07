module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./lib/generate-sitemap");
    }

    return config;
  },
  images: {
    deviceSizes: [600, 960, 1280, 1920],
  },
};
