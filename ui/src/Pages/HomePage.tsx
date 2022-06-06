import React, { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useResponsiveContextData } from "../contexts/ResponsiveContext";

import Hero from "../Components/LandingPages/Hero";
import IconValueGrid from "../Components/LandingPages/IconValueGrid";
import ReverseRowSection from "../Components/LandingPages/ReverseRowSection";
import TierSection from "../Components/LandingPages/TierSection";
import StripRow from "../Components/LandingPages/StripRow";

import Modal from "../Components/Core/Modal";

import { rowPadding } from "../dimensions";

import hero_bg from "../assets/hero_background2.jpg";
import online_meeting from "../assets/online_meeting.jpg";
import professor_reading from "../assets/professor_reading.jpg";
import scientists from "../assets/scientists.jpg";
import study from "../assets/study.jpg";
import strip_bg from "../assets/strip_bg.jpg";

const HomePage = () => {
  const [showModal, setShowModal] = useState(true);

  const dummy_data = [
    {
      icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />,
      header: "This is the first",
      description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />,
      header: "This is the second",
      description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />,
      header: "This is the third",
      description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ];

  const perks_item_1 = (
    <div style={styles.perks_row}>
      <h3>One</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
  );
  const perks_item_2 = (
    <div style={styles.perks_row}>
      <h3>One</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
  );
  const perks_item_3 = (
    <div style={styles.perks_row}>
      <h3>One</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
  );
  const perks_item_4 = (
    <div style={styles.perks_row}>
      <h3>One</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
  );

  const reverseRowData = [
    { text: perks_item_1, image: online_meeting },
    { text: perks_item_2, image: professor_reading },
    { text: perks_item_3, image: scientists },
    { text: perks_item_4, image: study },
  ].map((data) => {
    return {
      left: <>{data.text}</>,
      right: (
        <>
          <img src={data.image} style={styles.image} />
        </>
      ),
    };
  });

  const toggleModal = (e: React.MouseEvent) => {
    console.log("YES");
    setShowModal(!showModal);
  };

  return (
    <div style={{ width: "100%" }}>
      <Modal show={showModal} close={toggleModal}>
        <h1>TEST</h1>
      </Modal>
      <Hero
        image={hero_bg}
        selling_points={[
          "Lorem ipsum dolor sit amet",
          "consectetur adipiscing elit",
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ]}
        cta_action={toggleModal}
      />
      <div style={styles.section_container}>
        <div style={styles.center_elements}>
          <h3>It is so easy to get started</h3>
        </div>
        <div style={styles.center_elements}>
          <h6>It is so easy to get started</h6>
        </div>
        <IconValueGrid items={dummy_data} />
      </div>
      <TierSection />
      <ReverseRowSection
        items={reverseRowData}
        innerWidth={1000}
        leftPosition={"center"}
      />
      <StripRow bg_img={strip_bg}>
        <h1 style={styles.strip_header}>Hello World</h1>
        <p style={styles.strip_subheader}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <a style={styles.strip_action} href="#">
          Find an Expert
        </a>
      </StripRow>
    </div>
  );
};

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

export default HomePage;
