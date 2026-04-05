import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // যখনই পাথ বা ইউআরএল চেঞ্জ হবে, উইন্ডো স্ক্রল হয়ে উপরে চলে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // এটি স্ক্রিনে কিছু দেখাবে না
};

export default ScrollToTop;
