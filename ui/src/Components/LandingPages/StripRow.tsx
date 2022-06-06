import React, { ReactNode } from 'react'

interface Props {
    bg_img: string;
    children?: React.ReactNode;
}

const StripRow = (props: Props) => {

    const bg_strip = {
        backgroundImage: `url(${props.bg_img})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat"
    };

    return (
        <div style={{...container, ...bg_strip}}>
            {props.children}
        </div>
    )
}

const container = {
    padding: "30px 0",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
} as const;

export default StripRow