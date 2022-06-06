import React, {ReactNode} from 'react'

interface IconValueItemProps {
    icon: ReactNode;
    header: string;
    description: string;
    alignment?: 'left' | 'center' | 'right';
    background?: 'string';
    iconColor?: 'string';
};

const IconValueItem = (props: IconValueItemProps) => {
  return (
    <div style={styles.item_container}>
        <div style={styles.icon_container}>{props.icon}</div>
        <div style={styles.header_container}><h5>{props.header}</h5></div>
        <div><p>{props.description}</p></div>
    </div>
  )
}

const styles = {
  item_container: {
    textAlign: "center",
    width: "100%",
    border: "1px solid #00000026",
    borderRadius: 2,
    minHeight: 300,
    justifyContent: "center"
  },
  icon_container: {
    marginBottom: "20px"
  },
  header_container: {
    marginBottom: "20px"
  }
} as const;

export default IconValueItem