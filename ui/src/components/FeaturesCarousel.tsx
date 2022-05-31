import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TestimonialItem = {
  text: string;
  name: string;
  institution: string;
};

const TestimonialCopy: TestimonialItem[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    name: "Famous professor",
    institution: "Prestigious university",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    name: "Very smart PhD student",
    institution: "Different prestigious university",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    name: "Ambitious entrepreneur",
    institution: "Fast-growing AI startup",
  },
];

type Props = {
  mobile: boolean;
};

export const FeaturesCarousel = ({ mobile }: Props) => {
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
