import { useState } from "react";
import { Icon } from "@iconify/react";

const ScrollToTopButton = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled: number = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="back-to-top-btn-container">
        <div className="container text-right">
          <button
            id="backToTop"
            className={`back-to-top ${!visible && `back-to-top-hide`}`}
            data-scroll="up"
            role="button"
            onClick={scrollToTop}
          >
            <Icon icon="iconoir:nav-arrow-up" fontSize={50} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ScrollToTopButton;
