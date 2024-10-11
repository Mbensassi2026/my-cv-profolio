/** @type {import('next').NextConfig} */
const config = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',  // Allow external images from GitHub
          port: '',
          pathname: '/u/**',  // Wildcard to allow GitHub profile images
        },
      ],
    },
    env: {
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,  // Add GitHub token to the environment
    },
  };
  
  export default config;
  