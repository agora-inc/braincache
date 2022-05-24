import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  AcademicMainCopy,
  BusinessMainCopy,
  TestimonialItem,
  TestimonialCopy,
} from "./constants";
import { useMediaQuery } from "./useMediaQuery";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

type ViewerType = "academic" | "business";

type TestimonialsProps = {
  mobile: boolean;
};

const Testimonials = ({ mobile }: TestimonialsProps) => {
  const [active, setActive] = useState(0);
  let interval: NodeJS.Timer;

  const classname = (name: string): string => {
    return `${name}${mobile ? " mobile" : ""}`;
  };

  const startAnimation = () => {
    interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 4000);
  };

  const stopAnimation = () => {
    clearInterval(interval);
  };

  useEffect(() => {
    startAnimation();
    return stopAnimation;
  }, []);

  useEffect(() => {
    if (!mobile) {
      return;
    }
    let parent = document.getElementById("testimonials");
    let child = document.getElementById(`testimonial-${active}`);
    if (!(parent && child)) {
      return;
    }
    parent.scrollBy({
      top: 0,
      left: active === 0 ? -parent.offsetWidth : child.offsetWidth,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <motion.div id="testimonials" className={classname("testimonials")}>
      {TestimonialCopy.map((t, i) => (
        <motion.div
          id={`testimonial-${i}`}
          className={classname("testimonial")}
          onMouseEnter={() => {
            stopAnimation();
            console.log(interval);
            setActive(i);
          }}
          onMouseLeave={startAnimation}
        >
          <motion.span
            className={classname("testimonial-text")}
            initial={{ opacity: 0 }}
            animate={{ opacity: active === i ? 0.9 : 0.5 }}
          >
            {t.text}
          </motion.span>
          <motion.div
            className={classname("testimonial-details")}
            initial={{ opacity: 0 }}
            animate={{ opacity: active === i ? 0.8 : 0 }}
          >
            <div className={classname("testimonial-line")}></div>
            <motion.div className={classname("testimonial-from")}>
              <span className={classname("testimonial-name")}>{t.name}</span>
              <span className={classname("testimonial-institution")}>
                {t.institution}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const App = () => {
  const [viewerType, setViewerType] = useState<ViewerType>("academic");
  const onMobile = useMediaQuery("(max-width: 600px)");

  const classname = (name: string): string => {
    return `${name}${onMobile ? " mobile" : ""}`;
  };

  const { scrollYProgress } = useViewportScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const mainCopy = (
    <>
      {(viewerType === "academic" ? AcademicMainCopy : BusinessMainCopy).map(
        (point) => (
          <h3 className={classname("secondary-text")}>{point}</h3>
        )
      )}
    </>
  );

  const typeSelector = (
    <motion.div
      className={classname("type-selector")}
      whileHover={{ scale: 1.02 }}
    >
      Are you{" "}
      <span
        className={`type-selector-option${
          viewerType === "academic" ? " active" : ""
        }`}
        onClick={() => setViewerType("academic")}
      >
        an academic
      </span>{" "}
      <span
        className={`type-selector-option${
          viewerType === "business" ? " active" : ""
        }`}
        onClick={() => setViewerType("business")}
      >
        a business
      </span>
    </motion.div>
  );

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
          style={{ opacity: headerOpacity }}
        >
          <Logo className={classname("header-logo")} />
          <div className={classname("header-name")}>Braincache!</div>
        </motion.a>
        {!onMobile && typeSelector}
        <motion.a
          className={classname("coming-soon")}
          href="https://airtable.com/shrhGt0giRGAY3yxA"
          // animate={{ rotate: "2deg" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          style={{ opacity: headerOpacity }}
        >
          Join the waitlist →
        </motion.a>
      </header>
      <div className={classname("main-content")}>
        {onMobile && typeSelector}
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
          {mainCopy}
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
      <Testimonials mobile={onMobile} />
    </motion.div>
  );
};

export default App;
