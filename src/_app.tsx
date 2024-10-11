import type { AppProps } from 'next/app';  // Import types from Next.js
import '../styles/globals.css';  // Ensure this points to your Tailwind CSS file

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
