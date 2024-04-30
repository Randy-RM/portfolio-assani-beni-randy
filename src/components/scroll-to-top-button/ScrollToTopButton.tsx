import { Icon } from "@iconify/react";
import * as React from "react";
import { MouseEventHandler, useState } from "react";

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

  const scrollToTop: MouseEventHandler = (event) => {
    event.preventDefault;
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
      <div className="container back-to-top-btn-container">
        <button
          id="backToTop"
          className={`back-to-top ${!visible && `back-to-top-hide`}`}
          data-scroll="up"
          role="button"
          onClick={(event) => scrollToTop(event)}
        >
          <Icon icon="iconoir:nav-arrow-up" fontSize={50} />
        </button>
      </div>
    </>
  );
};

export default ScrollToTopButton;
