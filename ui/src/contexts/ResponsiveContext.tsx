import React, { useState, createContext, useEffect, useContext } from 'react'

const MOBILE_BREAKPOINT = 480;
const TABLET_BREAKPOINT = 960;

interface WindowData {
    width: number;
    height: number;
    isMobile: boolean;
    isLargeMobile: boolean;
}

const windowValues = {
    width: window.innerWidth, 
    height: window.innerHeight,
    isMobile: window.innerWidth < MOBILE_BREAKPOINT,
    isLargeMobile: window.innerWidth < TABLET_BREAKPOINT,
}

const ResponsiveContext = createContext(windowValues);

const useResponsiveContextData = () => useContext<WindowData>(ResponsiveContext)

const ResponsiveProvider = (props: any) => {

    const [windowSize, setWindowSize] = useState<WindowData>(windowValues);

    const addWindowListener = () => {
        window.addEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth, 
                height: window.innerHeight,
                isMobile: window.innerWidth < MOBILE_BREAKPOINT,
                isLargeMobile: window.innerWidth < TABLET_BREAKPOINT,
            })
        });

    }

    const removeWindowListener = () => {
        window.removeEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth, 
                height: window.innerHeight,
                isMobile: window.innerWidth < MOBILE_BREAKPOINT,
                isLargeMobile: window.innerWidth < TABLET_BREAKPOINT,
            })
        });
    }

    useEffect(() => {
      addWindowListener();    
      return () => removeWindowListener();
    }, [])
    
    return(
        <ResponsiveContext.Provider value={windowSize}>
            {props.children}
        </ResponsiveContext.Provider>
    );
};

export { ResponsiveProvider, useResponsiveContextData };
export type { WindowData };