import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import { useMediaQuery } from "../useMediaQuery";
import { ReactComponent as Logo } from "../logo.svg";
import { FeaturesCarousel } from "../components/FeaturesCarousel";

import "../App.css";

export const Academics = () => {
  const onMobile = useMediaQuery("(max-width: 600px)");

  const classname = (name: string): string => {
    return `${name}${onMobile ? " mobile" : ""}`;
  };

  //   const { scrollYProgress } = useViewportScroll();
  //   const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  //   const typeSelector = (
  //     <motion.div
  //       className={classname("type-selector")}
  //       whileHover={{ scale: 1.02 }}
  //     >
  //       Are you{" "}
  //       <span
  //         className={`type-selector-option${
  //           viewerType === "academic" ? " active" : ""
  //         }`}
  //         onClick={() => setViewerType("academic")}
  //       >
  //         an academic
  //       </span>{" "}
  //       <span
  //         className={`type-selector-option${
  //           viewerType === "business" ? " active" : ""
  //         }`}
  //         onClick={() => setViewerType("business")}
  //       >
  //         a business
  //       </span>
  //     </motion.div>
  //   );

  return (
    <motion.div
      className={"App"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `url(${window.location.origin}/images/background-3.png)`,
      }}
    >
      <header className={"App-header"}>
        <motion.a
          className={classname("logo-and-name")}
          href="/"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          //   style={{ opacity: headerOpacity }}
        >
          <Logo className={classname("header-logo")} />
          <div className={classname("header-name")}>BrainAPI</div>
        </motion.a>
        {/* {!onMobile && typeSelector} */}
        <div>
          <motion.a className="switch-page-link" href="/companies">
            For companies
          </motion.a>
          <motion.a
            className={classname("coming-soon")}
            href="https://airtable.com/shrhGt0giRGAY3yxA"
            // animate={{ rotate: "2deg" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            //   style={{ opacity: headerOpacity }}
          >
            Join the waitlist →
          </motion.a>
        </div>
      </header>
      <div className={classname("main-content")}>
        {/* {onMobile && typeSelector} */}
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
          initial={{ opacity: 0, rotate: "-1deg" }}
          animate={{
            opacity: 1,
            rotate: "-3deg",
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
      <FeaturesCarousel mobile={onMobile} />
    </motion.div>
  );
};
