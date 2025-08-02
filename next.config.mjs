// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverComponentsExternalPackages: ["mongoose"],
//   },
//   images: {
//     domains: ['lh3.googleusercontent.com'],
//   },
//   webpack(config) {
//     config.experiments = {
//       ...config.experiments,
//       topLevelAwait: true,
//     };
//     return config;
//   }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"], // External packages for server components
  },
  images: {
    domains: ["lh3.googleusercontent.com"], // Allow images from Google
  },
  webpack(config) {
    // Enable top-level await support
    config.experiments = {
      ...(config.experiments || {}),
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
