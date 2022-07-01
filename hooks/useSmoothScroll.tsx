import { useEffect } from "react";
import { useRouter } from "next/router";

const setSmoothScroll: Function = (isSmooth: boolean = true) => {
  document.documentElement.style.scrollBehavior = isSmooth ? "smooth" : "auto";
};

const useSmoothScroll = () => {
  const router = useRouter();

  useEffect(() => {
    setSmoothScroll();

    router.events.on("routeChangeStart", () => setSmoothScroll(false));
    router.events.on("routeChangeComplete", () => setSmoothScroll());
    router.events.on("routeChangeError", () => setSmoothScroll());

    return () => {
      router.events.off("routeChangeStart", () => setSmoothScroll(false));
      router.events.off("routeChangeComplete", () => setSmoothScroll());
      router.events.off("routeChangeError", () => setSmoothScroll());
    };
  }, [router]);
};

export default useSmoothScroll;
