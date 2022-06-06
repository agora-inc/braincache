import React from "react";

interface Props {
  image: string;
  selling_points: string[];
  cta_action: Function;
}

const Hero = (props: Props) => {
  const hero_bg = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div style={{ ...styles.hero_container, ...hero_bg }}>
      <div style={styles.hero_section}>
        <div style={styles.hero_content}>
          <h1 style={styles.hero_title}>
            Connecting high-impact businesses to relevant experts in academia
          </h1>
          <div style={styles.hero_selling_points}>
            {props.selling_points.map((sp: string) => (
              <p style={styles.hero_selling_point}>{sp}</p>
            ))}
          </div>
          <button style={styles.hero_cta} onClick={(e) => props.cta_action(e)}>
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero_container: {
    minHeight: "750px",
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  hero_section: {
    maxWidth: "1200px",
    width: "100%",
  },
  hero_content: {
    alignItems: "start",
  },
  hero_title: {
    color: "#fff",
    marginBottom: "35px",
    width: "60%",
    lineHeight: "60px",
  },
  hero_selling_points: {
    color: "#fff",
    marginBottom: "30px",
    maxWidth: "500px",
  },
  hero_selling_point: {
    fontSize: "20px",
  },
  hero_cta: {
    padding: "10px 18px",
    fontSize: "1.5rem",
    borderRadius: "5px",
    border: "none",
    color: "#006ab1",
    cursor: "pointer",
  },
};

export default Hero;
