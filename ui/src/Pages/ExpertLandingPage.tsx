import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useResponsiveContextData } from "../contexts/ResponsiveContext";
import Hero from "../Components/LandingPages/Hero";
import IconValueGrid from "../Components/LandingPages/IconValueGrid";
import ReverseRowSection from "../Components/LandingPages/ReverseRowSection";
import TierSection from "../Components/LandingPages/TierSection";
import StripRow from "../Components/LandingPages/StripRow";
import { rowPadding } from "../dimensions";
import hero_bg from "../assets/hero_background2.jpg";
import online_meeting from "../assets/online_meeting.jpg";
import professor_reading from "../assets/professor_reading.jpg";
import scientists from "../assets/scientists.jpg";
import study from "../assets/study.jpg";
import strip_bg from "../assets/strip_bg.jpg";

const styles = {
  section_container: {
    padding: rowPadding,
  },
  center_elements: {
    textAlign: "center",
  },
  icon: {
    fontSize: "5.5rem",
    color: "#2d86c1",
  },
  perks_row: {
    width: "300px",
    alignSelf: "center",
  },
  image: {
    maxWidth: "350px",
    height: "auto",
  },
  strip_header: {
    fontSize: 35,
    marginBottom: 25,
    color: "#fff",
  },
  strip_subheader: {
    fontSize: 15,
    color: "#fff",
    marginBottom: 25,
    maxWidth: 300,
    textAlign: "center",
  },
  strip_action: {
    background: "#fff",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: 5,
  },
} as const;

const dummy_data = [
  {
    icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />,
    header: "Create your profile",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
  },
  {
    icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />,
    header: "Connect with relevant businesses",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
  },
  {
    icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />,
    header: "Help solve interesting problems",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
  },
  {
    icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />,
    header: "Get rewarded",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
  },
];

const ExpertLandingPage = () => {
  return (
    <div style={{ width: "100%" }}>
      <Hero
        image={hero_bg}
        selling_points={[
          "Explore non-binding microconsulting opportunities across a range of companies",
          "Commit a few hours per week and boost your income by thousands",
          "We take care of all the paperwork - so you can focus on what matters",
        ]}
        cta_action={() => {}}
      />
      <div style={styles.section_container}>
        <div style={styles.center_elements}>
          <h4>
            Enrich your academic research by engaging with real-world problems
          </h4>
        </div>
        <IconValueGrid items={dummy_data} />
      </div>
      {/* <TierSection /> */}
      {/* <ReverseRowSection
        items={reverseRowData}
        innerWidth={1000}
        leftPosition={"center"}
      /> */}
      {/* <StripRow bg_img={strip_bg}>
        <h1 style={styles.strip_header}>Hello World</h1>
        <p style={styles.strip_subheader}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <a style={styles.strip_action} href="#">
          Find an Expert
        </a>
      </StripRow> */}
    </div>
  );
};

export default ExpertLandingPage;
