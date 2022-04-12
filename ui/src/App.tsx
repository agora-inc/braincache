import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
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
          whileHover={{ scale: 1.1 }}
        >
          <div className="header-logo"></div>
          <div className="header-name">Name</div>
        </motion.a>
        <motion.a className="coming-soon" href="/" whileHover={{ scale: 1.1 }}>
          Coming soon
        </motion.a>
      </header>
      <div className="main-content">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Connecting high-impact businesses to relevant experts in academia
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Are you an academic interested in exploring microconsulting
          opportunities?
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Are you a business looking to leverage world-leading academic
          expertise?
        </motion.h3>
        <motion.a
          className="main-button"
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          Join the waitlist →
        </motion.a>
      </div>
    </motion.div>
  );
};

export default App;
