import React from 'react'

interface Props {
  image: string;
  cta_action: Function;
}

const Hero = (props: Props) => {

  const hero_bg = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  }
  

  return (
    <div style={{...styles.hero_container, ...hero_bg}}>
      <div style={styles.hero_section}>
        <div style={styles.hero_content}>
          <h1 style={styles.hero_title}>Some Title</h1>
          <p style={styles.hero_strapline}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button style={styles.hero_cta}>Register</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  hero_container: {
    minHeight: "750px",
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center"
  },
  hero_section: {
    maxWidth: "1200px",
    width: "100%",
  },
  hero_content: {
    alignItems: "start"
  },
  hero_title: {
    color: "#fff",
    marginBottom: "35px"
  },
  hero_strapline: {
    color: "#fff",
    marginBottom: "30px",
    maxWidth: "300px"
  },
  hero_cta: {
    padding: "10px 18px",
    fontSize: "1.5rem",
    borderRadius: "5px",
    border: "none",
    color: "#006ab1",
    cursor: "pointer"
  }
}

export default Hero