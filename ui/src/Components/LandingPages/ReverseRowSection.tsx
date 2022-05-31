import React from 'react'

interface Props {
    items: {right: React.ReactNode, left: React.ReactNode}[];
    innerWidth?: number;
    leftPosition?: string;
}

const ReverseRowSection = (props: Props) => {
  return (
    <div style={container}>
        <div style={inner_container}>
          {props.items.map((item: any, index: number) => {
              // const 
              return (<div style={{...row, ...{backgroundColor: (!(index % 2)) ? "#eee" : "#fff"}}}>
                        <div key={index} style={{flexDirection: (index % 2) ? 'row-reverse' : 'row', width: props.innerWidth ? `${props.innerWidth}px` : "100%"}}>
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
  padding: "40px 0"
}  as const;

const row_item = {
  width: '50%'
} as const

export default ReverseRowSection