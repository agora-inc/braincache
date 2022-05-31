import React, { useContext, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {useResponsiveContextData} from '../contexts/ResponsiveContext'

import Hero from '../Components/LandingPages/Hero'
import IconValueGrid from '../Components/LandingPages/IconValueGrid'
import ReverseRowSection from '../Components/LandingPages/ReverseRowSection'

import {rowPadding} from '../dimensions'

import hero_bg from "../assets/hero_background2.jpg";
import online_meeting from "../assets/online_meeting.jpg";
import professor_reading from "../assets/professor_reading.jpg";
import scientists from "../assets/scientists.jpg";
import study from "../assets/study.jpg";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)

  const dummy_data = [
    {icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />, header: "This is the first", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />, header: "This is the second", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {icon: <FontAwesomeIcon icon="coffee" style={styles.icon} />, header: "This is the third", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
  ];

  const perks_item_1 = <div style={styles.perks_row}><h3>One</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div>;
  const perks_item_2 = <div style={styles.perks_row}><h3>One</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div>;
  const perks_item_3 = <div style={styles.perks_row}><h3>One</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div>;
  const perks_item_4 = <div style={styles.perks_row}><h3>One</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div>;

  const reverseRowData = [
    {text: perks_item_1, image: online_meeting}, 
    {text: perks_item_2, image: professor_reading}, 
    {text: perks_item_3, image: scientists},
    {text: perks_item_4, image: study}
  ].map(data => { 
    return {left: <>{data.text}</>, right:<><img src={data.image} style={styles.image} /></>} 
  });  
  
  return (
    <div>
      <Hero image={hero_bg} cta_action={() => {}} />
      <div style={styles.section_container}>
        <div style={styles.center_elements}><h3>It is so easy to get started</h3></div>
        <div style={styles.center_elements}><h6>It is so easy to get started</h6></div>
        <IconValueGrid items={dummy_data} />
      </div>
      <ReverseRowSection items={reverseRowData} innerWidth={1200} leftPosition={"center"} />
    </div>
  )
}

const styles = {
  section_container: {
    padding: `${rowPadding}px 0px`
  },
  center_elements: {
    textAlign: "center"
  },
  icon: {
    fontSize: "5.5rem",
    color: "#2d86c1"
  },
  perks_row: {
    width: "300px",
    alignSelf: "center"
  },
  image: {
    width: "350px",
    height: "auto"
  }
} as const;

export default HomePage
