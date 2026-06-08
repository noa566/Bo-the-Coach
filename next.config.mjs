/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Silence the protobufjs "Critical dependency" warning emitted via
      // the Firestore SDK on the server. It's harmless and well-known.
      config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        { module: /node_modules\/@protobufjs\/inquire/ },
      ];
    }
    return config;
  },
};

export default nextConfig;
