import React from 'react'

import {useResponsiveContextData} from '../../contexts/ResponsiveContext'

interface Props {
    items: {right: React.ReactNode, left: React.ReactNode}[];
    innerWidth?: number;
    leftPosition?: string;
}

const ReverseRowSection = (props: Props) => {

  const {width} = useResponsiveContextData()

  const column_container = {
    maxWidth: props.innerWidth ? `${props.innerWidth}px` : "100%", 
    width: "100%",
    alignItems: "center"
  } as const;

  const row_item = {
    width: (width < 768) ? "100%" : "50%"
  } as const

  return (
    <div style={container}>
        <div style={inner_container}>
          {props.items.map((item: any, index: number) => {
              // const 
              return (<div key={index} style={{...row, ...{backgroundColor: (!(index % 2)) ? "#F9FAFF" : "#fff"}}}>
                        <div key={index} style={{...column_container, ...{flexDirection: (width < 768) ? "column" : (index % 2) ? "row-reverse" : "row"}}}>
                          <div style={{...row_item, ...{justifyContent: (props.leftPosition) ? props.leftPosition : "start"}}}>{item.left}</div>
                          <div style={row_item}>{item.right}</div>
                        </div>
                      </div>);
          })}
        </div>
    </div>
  )
}

const container = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}  as const;

const inner_container = {
  flexDirection: 'column',
  width: "100%"
}  as const;

const row = {
  alignItems: "center",
  padding: "40px 20px"
}  as const;

export default ReverseRowSection