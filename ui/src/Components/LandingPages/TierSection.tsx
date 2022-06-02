import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {useResponsiveContextData} from '../../contexts/ResponsiveContext'
import {rowPadding} from '../../dimensions'

import MoraFlexibleGrid from '../Core/MoraFlexibleGrid'
import Tier from './Tier'

const TierSection = () => {

    const {width} = useResponsiveContextData()

    const bronzeTier = {
        icon: <FontAwesomeIcon icon="coffee" />,
        title: "One",
        perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four", "Perk Five"],
        missingPerks: ["Missing Perk One", "Missing Perk Two", "Missing Perk Three", "Missing Perk Four", "Missing Perk Five"]
    }

    const goldTier = {
        icon: <FontAwesomeIcon icon="coffee" />,
        title: "Two",
        perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four", "Perk Five"],
        missingPerks: ["Missing Perk One", "Missing Perk Two", "Missing Perk Three", "Missing Perk Four", "Missing Perk Five"]
    }

    const platinumTier = {
        icon: <FontAwesomeIcon icon="coffee" />,
        title: "Three",
        perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four", "Perk Five"],
        missingPerks: ["Missing Perk One", "Missing Perk Two", "Missing Perk Three", "Missing Perk Four", "Missing Perk Five"]
    }

    const tiers = [
        <Tier info={bronzeTier} />,
        <Tier info={goldTier} />,
        <Tier info={platinumTier} />
    ];

    return (
        <div style={styles.container}>
            <div style={styles.inner_container}>
                <MoraFlexibleGrid
                    childElements={tiers}
                    windowWidth={width}
                    gap={20}
                    align={"center"}
                    justify={"center"}
                    gridBreakpoints={[{screenSize: 1200, columns: 3}, {screenSize: 800, columns: 2}]}
                />
            </div>
        </div>
    )
}

const styles = {
    container: {
        padding: rowPadding
    },
    inner_container: {
        width: "100%",
        maxWidth: 1200,
        alignSelf: "center"
    }
 } as const;

export default TierSection