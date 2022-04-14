import React from "react";
import { motion } from "framer-motion";

import { useMediaQuery } from "./useMediaQuery";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

const App = () => {
  const onMobile = useMediaQuery("(max-width: 600px)");

  const classname = (name: string): string => {
    return `${name}${onMobile ? " mobile" : ""}`;
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="App-header">
        <motion.a
          className="logo-and-name"
          href="/"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo className={classname("header-logo")} />
          <div className={classname("header-name")}>Braincache</div>
        </motion.a>
        <motion.a
          className={classname("coming-soon")}
          href="https://airtable.com/shrhGt0giRGAY3yxA"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          Coming soon
        </motion.a>
      </header>
      <div className={classname("main-content")}>
        <motion.h1
          className={classname("main-text")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: onMobile ? 30 : 50,
            fontSize: onMobile ? 28 : 44,
            lineHeight: onMobile ? "26px" : "42px",
          }}
        >
          Connecting high-impact businesses to relevant experts in academia
        </motion.h1>
        <motion.h3
          className={classname("secondary-text")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Are you an academic interested in exploring microconsulting
          opportunities?
        </motion.h3>
        <motion.h3
          className={classname("secondary-text")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Are you a business looking to leverage world-leading academic
          expertise?
        </motion.h3>
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
    </motion.div>
  );
};

export default App;
