import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Nonaktifkan smooth scroll sementara
    document.documentElement.style.scrollBehavior = "auto";

    // Kembalikan posisi halaman ke atas
    window.scrollTo(0, 0);

    // Kembalikan pengaturan scroll sebelumnya
    document.documentElement.style.scrollBehavior = "";
  }, [pathname]);

  return null;
}

export default ScrollToTop;