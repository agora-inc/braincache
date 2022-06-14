import React from "react";

import { useResponsiveContextData } from '../../contexts/ResponsiveContext'

interface Props {
  image: string;
  main_text: string;
  selling_points: string[];
}

const Hero = (props: Props) => {

  const { width } = useResponsiveContextData()

  const container_height = (width < 960) ? {minHeight: "600px"} : {minHeight: "750px"}

  const hero_title = (width < 480) ? 3 :
                        (width < 680) ? 4 :
                          (width < 992) ? 5 : 6;

  const hero_title_style = {
    fontSize: hero_title + "rem",
    lineHeight: (hero_title+1) + "rem"
  };

  const hero_bg = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div style={{ ...styles.hero_container, ...hero_bg, ...container_height }}>
      <div style={{padding: "0 40px"}}>
        <div style={styles.hero_section}>
          <div style={styles.hero_content}>
            <h1 style={{...styles.hero_title, ...hero_title_style}}>{props.main_text}</h1>
            <div style={styles.hero_selling_points}>
              {props.selling_points.map((sp: string) => (
                <p style={styles.hero_selling_point}>{sp}</p>
              ))}
            </div>
            <a
              style={styles.hero_cta}
              href="https://airtable.com/shrhGt0giRGAY3yxA"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero_container: {
    minHeight: "750px",
    // backgroundColor: "purple",
    justifyContent: "flex-end",
    alignItems: "center",
    // paddingBottom: "50px",
  },
  hero_section: {
    maxWidth: "1200px",
    // padding: "0 20px",
    width: "100%",
  },
  hero_content: {
    alignItems: "start",
    marginBottom: "70px",
  },
  hero_title: {
    color: "#fff",
    marginBottom: "20px",
    width: "60%",
    lineHeight: "57px",
  },
  hero_selling_points: {
    color: "#fff",
    marginBottom: "20px",
    maxWidth: "500px",
  },
  hero_selling_point: {
    fontSize: "20px",
  },
  hero_cta: {
    padding: "10px 40px",
    fontSize: "2.5rem",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "none",
    color: "#006ab1",
    backgroundColor: "#fff",
    textDecoration: "none",
  },
};

export default Hero;
