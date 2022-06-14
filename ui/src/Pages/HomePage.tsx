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
  const [showModal, setShowModal] = useState(false);

  const dummy_data = [
    {
      icon: <FontAwesomeIcon icon="search" style={styles.icon} />,
      header: "Search",
      description: [
        "Search our database of experts. We have a network of academics which includes researchers and top professors.",
      ],
    },
    {
      icon: <FontAwesomeIcon icon="calendar" style={styles.icon} />,
      header: "Schedule",
      description: [
        "Once you have identified your expert(s). You can schedule a quick chat to discuss important details to help you decide.",
      ],
    },
    {
      icon: <FontAwesomeIcon icon="handshake" style={styles.icon} />,
      header: "Start",
      description: [
        "We provide a standard NDA which gets the legal work out the way allowing you to focus on your problems with an academic expert.",
      ],
    },
  ];

  const perks_item_1 = (
    <div style={styles.perks_row}>
      <h3>Why BrainAPI?</h3>
      <p>
        BrainAPI is a platform that connects Startups, consultancies and other
        companies with academic experts.
      </p>
      <p>
        Our platform is easy to use and designed to connect you quickly with our
        passionate experts.
      </p>
    </div>
  );
  const perks_item_2 = (
    <div style={styles.perks_row}>
      <h3>How does BrainAPI help?</h3>
      <p>
        You start by searching for an expert. We provide a customized list with
        the different tiers of experts available.
      </p>
      <p>
        You can choose from our Gold (top 5%), Platinum (top 1%) or Diamond (top
        0.1%) experts.
      </p>
      <p>
        It's super easy to book someone with using BrainAPI, we even provide
        standard NDAs to allow you to focus on your problem.
      </p>
    </div>
  );
  const perks_item_3 = (
    <div style={styles.perks_row}>
      <h3>Who are BrainAPI experts?</h3>
      <p>
        We are a network of academic experts in fields such as Computer Science,
        Math, AI, ML & Natural Sciences.
      </p>
      <p>
        We have a very robust application process to ensure that all experts
        have experience in high-quality work.
      </p>
    </div>
  );
  const perks_item_4 = (
    <div style={styles.perks_row}>
      <h3>Ready to start?</h3>
      <p>Sign up to our waitlist to be the first to use out platform</p>
      <button style={styles.row_button} onClick={(e) => console.log(e)}>
        Join waitlist
      </button>
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
        main_text="Connecting high-impact businesses to relevant experts in academia"
        selling_points={[
          "Finding a world-class expert has never been easier",
          "Sign up now to get early access",
        ]}
      />
      <div style={styles.section_container}>
        <div style={styles.center_elements}>
          <h3>It is so easy to get started</h3>
        </div>
        <div style={styles.center_elements}>
          <p style={styles.para_width}>
            A simple 3 step process gets you a world-class expert quickly so you
            can focus on doing the things that need to get done
          </p>
        </div>
        <IconValueGrid items={dummy_data} />
      </div>
      {/* <TierSection /> */}
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
        <button style={styles.strip_action}>Find an Expert</button>
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
    alignItems: "center",
  },
  para_width: {
    maxWidth: "500px",
    fontSize: "1.4rem",
  },
  icon: {
    // fontSize: "1.5rem",
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
  row_button: {
    padding: "10px 18px",
    fontSize: "1.5rem",
    borderRadius: "5px",
    border: "none",
    color: "#006ab1",
    cursor: "pointer",
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
