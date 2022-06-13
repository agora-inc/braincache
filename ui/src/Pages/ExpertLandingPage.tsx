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
    color: "#2d86c1",
    background: "#e2e9f1",
    width: "35px",
    height: "35px",
    padding: "15px",
    borderRadius: "50%",
    margin: "auto",
  },
  perks_row: {
    width: "300px",
    alignSelf: "center",
  },
  image: {
    maxWidth: "350px",
    height: "auto",
  },
  bottom_section: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: `${2 * rowPadding}px ${rowPadding}px`,
    backgroundColor: "#ebedf5",
  },
  bottom_section_text: {
    width: "60%",
    fontSize: 40,
  },
  bottom_section_cta_container: {},
  bottom_section_cta: {
    fontSize: 24,
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    backgroundColor: "black",
    padding: "10px 35px",
    borderRadius: 5,
  },
} as const;

const dummy_data = [
  {
    icon: <FontAwesomeIcon icon="address-card" style={styles.icon} />,
    header: "1. Create your profile",
    description: [
      "Join as a gold, platinum or diamond expert depending on your experience",
      "Add information about your research expertise and interests",
      "Set your availability and contact preferences",
    ],
  },
  {
    icon: <FontAwesomeIcon icon="envelope" style={styles.icon} />,
    header: "2. Connect with relevant businesses",
    description: [
      "Answer questions through messaging",
      "join a video call",
      "or get hired for a 10-hour mission",
    ],
  },
  {
    icon: <FontAwesomeIcon icon="sitemap" style={styles.icon} />,
    header: "3. Solve interesting problems",
    description: [
      "Apply your unique expertise to interesting real-world problems",
    ],
  },
  {
    icon: <FontAwesomeIcon icon="coins" style={styles.icon} />,
    header: "4. Get rewarded",
    description: [
      "Get paid after every successful mission",
      "Complete more missions to boost your expert rank and increase your rewards!",
    ],
  },
];

const ExpertLandingPage = () => {
  return (
    <div style={{ width: "100%" }}>
      <Hero
        image={hero_bg}
        main_text="Connect with relevant companies to boost your income and energise your research"
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
      <div style={styles.bottom_section}>
        <div style={styles.bottom_section_text}>
          Are you an academic in a STEM field that wants to explore the world of
          microconsulting without having to waste time and energy on finding
          clients and doing paperwork?
        </div>
        <div style={styles.bottom_section_cta_container}>
          <a style={styles.bottom_section_cta} href="/">
            Register today
          </a>
        </div>
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
