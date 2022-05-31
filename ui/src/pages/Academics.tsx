import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import { useMediaQuery } from "../useMediaQuery";
import { ReactComponent as Logo } from "../logo.svg";
import { FeaturesCarousel } from "../components/FeaturesCarousel/FeaturesCarousel";

import "../App.css";

export const Academics = () => {
  const onMobile = useMediaQuery("(max-width: 600px)");

  const classname = (name: string): string => {
    return `${name}${onMobile ? " mobile" : ""}`;
  };

  const { scrollYProgress } = useViewportScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <motion.div
      className={"App"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `url(${window.location.origin}/images/background.png)`,
      }}
    >
      <header className={"App-header"}>
        <motion.a
          className={classname("logo-and-name")}
          href="/"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          style={{ opacity: headerOpacity }}
        >
          <Logo className={classname("header-logo")} />
          <div className={classname("header-name")}>BrainAPI</div>
        </motion.a>
        <div>
          <motion.a className="switch-page-link" href="/companies">
            For companies
          </motion.a>
          <motion.a
            className={classname("coming-soon")}
            href="https://airtable.com/shrhGt0giRGAY3yxA"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the waitlist →
          </motion.a>
        </div>
      </header>
      <div className={classname("main-content")}>
        <motion.h1
          className={classname("main-text")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Connecting high-impact businesses to relevant experts in academia
        </motion.h1>
        <motion.div
          className={classname("secondary-text-container")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className={classname("secondary-text")}>
            Explore <em>short, non-binding</em> microconsulting opportunities
            across a wide range of companies
          </h3>
          <h3 className={classname("secondary-text")}>
            Commit a <em>few hours</em> a week and boost your income by{" "}
            <em>thousands</em>
          </h3>
          <h3 className={classname("secondary-text")}>
            Customise your profile and choose who can contact you
          </h3>
        </motion.div>
        <motion.a
          className={classname("main-button")}
          href="https://airtable.com/shrhGt0giRGAY3yxA"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2 },
          }}
          whileHover={{
            scale: 1.06,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          Join the waitlist →
        </motion.a>
      </div>
      <FeaturesCarousel mobile={onMobile} audience={"academics"} />
    </motion.div>
  );
};
