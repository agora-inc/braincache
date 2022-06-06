import React from 'react'
import { ReactComponent as Logo } from "../../logo.svg";

const FullHeader = () => {
    
    return (
        <div style={styles.header}>
        <div style={styles.header_container}>
            <div style={styles.logo_container}>
                <Logo style={styles.logo} />
            </div>
            <div style={styles.nav_container}>
            <nav style={styles.navbar}>
                <li style={styles.navbar_links}>Companies</li>
                <li style={styles.navbar_links}>Experts</li>
            </nav>
            </div>
        </div>
        </div>
    );
};

const styles = {
  header: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    padding: "20px 10px",
    alignItems: "center"
  },
  header_container: {
    flexDirection: "row",
    maxWidth: "1200px",
    width: "100%"
  },
  logo_container: {
    width: "100px"
  },
  logo: {
    width: "100%",
    height: "auto"
  },
  nav_container: {
    flexGrow: 1,
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "row"
  },
  navbar: {
    display: "flex", 
  },
  navbar_links: {
    color: "#fff",
    fontSize: "1.5rem",
    listStyleType: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: "20px"
  },
} as const

export default FullHeader