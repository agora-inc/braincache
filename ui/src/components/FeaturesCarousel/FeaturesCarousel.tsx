import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./features-carousel.css";

const features = {
  companies: [
    "Search for the specific expertise your company needs",
    "Select a profile from our database of relevant experts",
    "Reach out to book an initial consultation",
  ],
  academics: [
    "Create your profile, fix your rates, and set your visibility",
    "Get contacted by companies, first contact via text",
    "Deliver insights and solve problems using our interactive tools",
  ],
};

type Props = {
  mobile: boolean;
  audience: "academics" | "companies";
};

export const FeaturesCarousel = ({ mobile, audience }: Props) => {
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
    let parent = document.getElementById("features");
    let child = document.getElementById(`feature-${active}`);
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
    <motion.div id="features" className={classname("features")}>
      {features[audience].map((f, i) => (
        <motion.div
          id={`feature-${i}`}
          className={classname("feature")}
          onMouseEnter={() => {
            stopAnimation();
            console.log(interval);
            setActive(i);
          }}
          onMouseLeave={startAnimation}
        >
          <motion.div
            className={classname("feature-step")}
            initial={{ opacity: 0 }}
            animate={{ opacity: active === i ? 0.8 : 0 }}
          >
            <span>Step {i + 1}</span>
            <div className={classname("feature-line")}></div>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: active === i ? 0.9 : 0.5 }}
          >
            {f}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};
