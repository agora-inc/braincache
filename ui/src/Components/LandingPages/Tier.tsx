import React, {ReactNode} from 'react'

import Card from '../Core/Card'

interface Props {
    info: {
        icon: ReactNode;
        title: string;
        perks: string[];
        missingPerks: string[];
    };
}

const Tier = (props: Props) => {
    return (
        <Card>
            <div style={styles.header}>
                <div style={styles.icon}>{props.info.icon}</div>
                <div><h6 style={styles.title}>{props.info.title}</h6></div>
            </div>
            <div style={styles.separator}></div>
            <div>
                <ul style={styles.list}>
                    {props.info.perks.map((perk, index) => <li style={styles.perks} key={index}>{perk}</li>)}
                    {props.info.missingPerks.map((missingPerk, index) => <li style={styles.missing_perks} key={index}>{missingPerk}</li>)}
                </ul>
            </div>
        </Card>
    )
};

const styles = {
    header: {
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    icon: {
        width: 30,
        fontSize: 30,
        color: "#2d86c1"
    },
    title: {
        marginBottom: 0,
        marginLeft: 5,
        fontSize: 25
    },
    separator: {
        flexDirection: "row",
        height: 2,
        background: "#353a3d33",
        margin: "15px 0 25px",
        borderRadius: 2
    },
    list: {
        margin: 0,
        padding: 0,
        listStyleType: "none",
        textAlign: "center"
    },
    perks: {
        padding: "10px 0 0",
        fontSize: 13
    },
    missing_perks: {
        padding: "10px 0 0",
        fontSize: 13,
        color: "#59565f5e",
        textDecoration: "line-through"
    }
} as const;
export default Tier