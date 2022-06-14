import React, { ReactNode } from "react";

interface IconValueItemProps {
  icon: ReactNode;
  header: string;
  description: string[];
  alignment?: "left" | "center" | "right";
  background?: "string";
  iconColor?: "string";
}

const IconValueItem = (props: IconValueItemProps) => {
  return (
    <div style={styles.item_container}>
      <div>
        <div style={styles.icon_container}>{props.icon}</div>
        <div style={styles.header_container}>
          <h5>{props.header}</h5>
        </div>
      </div>
      <div>
        {props.description.map((d: string, key: number) => (
          <p key={key} style={styles.desc}>{d}</p>
        ))}
      </div>
    </div>
  );
};

const styles = {
  item_container: {
    justifyContent: "space-between",
    textAlign: "center",
    width: "100%",
    border: ".1px solid #00000026",
    borderRadius: 3,
    minHeight: 300,
    boxSizing: "border-box",
    padding: "20px",
    flexGrow: 1,
  },
  icon_container: {
    marginBottom: "10px",
  },
  header_container: {
    marginBottom: "10px",
  },
  desc: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#757575",
  },
} as const;

export default IconValueItem;
