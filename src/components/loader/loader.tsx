import { motion } from "framer-motion";
import * as React from "react";
import { useTranslation } from "react-i18next";

const Loader = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="starting-loader-page font-secondary-color">
      <div>
        <span className="starting-loader"></span>
      </div>
      <motion.p
        className="text-center font-w-extra-thin font-big-hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          delay: 0.2,
          easeInOut: "linear",
          duration: 1,
          // bounce: 0.6,
        }}
      >
        {t(`greetings`)}
      </motion.p>
    </div>
  );
};

export default Loader;
