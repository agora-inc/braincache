import React, { ReactNode } from "react";

import { useResponsiveContextData } from "../../contexts/ResponsiveContext";

import MoraFlexibleGrid from "../Core/MoraFlexibleGrid";
import IconValueItem from "./IconValueItem";

interface Props {
  items: { icon: ReactNode; header: string; description: string[] }[];
  background?: "string";
}

const IconValueGrid = (props: Props) => {
  const { width } = useResponsiveContextData();

  const row = {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0",
    alignItems: "center",
  } as const;

  const container = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: "1200px",
  } as const;

  return (
    <div style={row}>
      <div style={container}>
        <MoraFlexibleGrid
          childElements={props.items.map((item) => (
            <IconValueItem
              icon={item.icon}
              header={item.header}
              description={item.description}
            />
          ))}
          windowWidth={width}
          gap={20}
          align={"center"}
          justify={"center"}
          gridBreakpoints={[
            { screenSize: 1200, columns: 4 },
            { screenSize: 800, columns: 2 },
          ]}
        />
      </div>
    </div>
  );
};

export default IconValueGrid;
