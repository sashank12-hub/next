// module.exports = () => {
//   return {
//     reactStrictMode: true,
//     webpack5: true,
//     webpack: (config) => {
//       config.resolve.fallback = { fs: false };

//       return config;
//     },
//   };
// };

   module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

  

