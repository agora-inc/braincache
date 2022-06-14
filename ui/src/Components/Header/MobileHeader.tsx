import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Spin as Hamburger } from "hamburger-react";

import { mobileHeight } from "../../dimensions";

import { ReactComponent as Logo } from "../../logo.svg";

const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);

  const open_menu = {
    left: isOpen ? 0 : -300,
  } as const;

  return (
    <div style={styles.mobile_header}>
      <div style={styles.header_container}>
        <Link to="/" style={styles.logo_container}>
          <Logo style={styles.logo} />
        </Link>
        <div style={styles.nav_container}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
        </div>
      </div>
      <div style={{ ...styles.mobile_navbar, ...open_menu }}>
        <nav>
          <Link style={styles.mobile_links} to="/" onClick={() => setOpen(false) }>
            Companies
          </Link>
          <Link style={styles.mobile_links} to="/experts" onClick={() => setOpen(false) }>
            Experts
          </Link>
        </nav>
      </div>
    </div>
  );
};

const styles = {
  mobile_header: {
    height: mobileHeight,
    alignItems: "center",
    justifyContent: "center",
    background: "#2d86c1",
    padding: "0px 20px",
  },
  header_container: {
    flexDirection: "row",
    maxWidth: "1200px",
    width: "100%",
  },
  logo_container: {
    width: "80px",
  },
  logo: {
    width: "100%",
    height: "auto",
  },
  nav_container: {
    flexGrow: 1,
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "row",
  },
  mobile_navbar: {
    position: "absolute",
    background: "#074269",
    top: mobileHeight,
    width: "300px",
    height: "100%",
    transition: "left 0.1s linear",
    //   padding: "0px 10px"
  },
  mobile_links: {
    display: "block",
    width: "100%",
    padding: "30px 0",
    fontSize: 20,
    textAlign: "center",
    borderBottom: "1px solid #0d3450",
    color: "#fff",
    textDecoration: "none",
    textTransform: "uppercase",
  },
} as const;

export default MobileHeader;
