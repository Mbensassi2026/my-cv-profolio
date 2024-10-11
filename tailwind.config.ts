// tailwind.config.js
const config = {
  content: [
    './src/**/*.tsx',
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',   // Blue primary color
        background: '#1E3A8A', // Blue background
        accent: '#333333',     // Dark gray for sub-containers
        grayText: '#fff',      // Text color set to white
        linkedin: '#0A66C2',
        instagram: '#E4405F',
        tiktok: '#000000',
        github: '#333333',
        email: '#EA4335',
      },
      backgroundImage: {
        'dot-pattern': "radial-gradient(circle, #007BFF 20%, transparent 20%)", // Dot pattern
      },
      backgroundSize: {
        'custom-dots': '10px 10px', // Size of the dot pattern grid
      }
    },
  },
  plugins: [],
};

export default config;
