import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
// import { useSmoothScroll } from "hooks";

function MyApp({ Component, pageProps }: AppProps) {
  // useSmoothScroll();
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

