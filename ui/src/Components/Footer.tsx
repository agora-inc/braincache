import React from 'react'

import MoraFlexibleGrid from "./Core/MoraFlexibleGrid";

import { useResponsiveContextData } from "../contexts/ResponsiveContext";

import { rowPadding } from "../dimensions";

import logo from "../logo.svg";

const Footer = () => {

  const {width} = useResponsiveContextData()  

  const footer_column_1 = 
    <div style={styles.top_footer_section}>
        <img src={logo} style={styles.img} />   
    </div>

  const footer_column_2 = 
    <div style={styles.top_footer_section}>
        <h6>Footer Header</h6>
        <ul style={styles.footer_links}>
          <li style={styles.footer_link}>Footer Link</li>
          <li style={styles.footer_link}>Footer Link</li>
          <li style={styles.footer_link}>Footer Link</li>
          <li style={styles.footer_link}>Footer Link</li>
        </ul>
    </div>

  const footer_column_3 = 
    <div style={styles.top_footer_section}>
        <h6>Footer Header</h6>
        <ul style={styles.footer_links}>
          <li style={styles.footer_link}>Footer Link</li>
          <li style={styles.footer_link}>Footer Link</li>
          <li style={styles.footer_link}>Footer Link</li>
          <li style={styles.footer_link}>Footer Link</li>
        </ul>
    </div>

  const footer_column_4 = 
    <div style={styles.top_footer_section}>
        <h6>Footer Header</h6>
        <ul style={styles.footer_links}>
          <li style={styles.footer_link}>Footer Link</li>
          <li style={styles.footer_link}>Footer Link</li>
          <li style={styles.footer_link}>Footer Link</li>
          <li style={styles.footer_link}>Footer Link</li>
        </ul>
    </div>


  return (
    <div style={styles.container}>
      <div style={styles.inner_footer}>
        <div style={styles.top_footer}>
          <MoraFlexibleGrid
            windowWidth={width}
            gridBreakpoints={[{ screenSize: 1200, columns: 4 }, { screenSize: 800, columns: 2 }]}
            gap={0}
            childElements={[footer_column_1, footer_column_2, footer_column_3, footer_column_4]}
          />
        </div>
        <div style={styles.bottom_footer}>
          <div style={styles.bottom_footer_section}><p style={styles.text}>All rights reserved</p></div>
          <div style={styles.bottom_footer_section}>
            <ul style={styles.bottom_footer_links}>
              <li style={styles.bottom_footer_link}>Terms & Conditions</li>
              <li style={styles.bottom_footer_link}>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1782b6',
    paddingTop: rowPadding*2,
    paddingBottom: rowPadding,
  },
  inner_footer: {
    maxWidth: '1200px',
    width: "100%",
    color: "#fff"
  },
  top_footer: {
    flexDirection: 'row',
    paddingBottom: 25
  },
  top_footer_section: {
    width: '100%'
  },
  footer_links: {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  },
  footer_link: {
    paddingBottom: 5,
    fontSize: 16
  },
  img:{
    width: 80,
    height: "auto",
    margin: "auto"
  },
  bottom_footer: {
    flexDirection: 'row',
    borderTop: '1px solid #fff',
    paddingTop: 25
  },
  bottom_footer_section: {
    width: '50%',
  },
  text: {
    fontSize: 11
  },
  bottom_footer_links: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'end',
    margin: 0
  },
  bottom_footer_link: {
    marginLeft: 10,
    fontSize: 11
  } 
}as const;


export default Footer