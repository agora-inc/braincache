import React, { useState, createContext, useEffect } from 'react'


const ResponsiveContext = createContext({});

interface WindowData {
    width: number;
    height: number;
}

const windowValues = {
    width: window.innerWidth, 
    height: window.innerHeight
}

const ResponsiveProvider = (props: any) => {
    const [windowSize, setWindowSize] = useState<WindowData>(windowValues);

    useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowSize({
            width: window.innerWidth, 
            height: window.innerHeight
        })
      });
    
      return () => {
        window.removeEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth, 
                height: window.innerHeight
            })
        });
      };
    }, [])
    


    
    const test: any = { one: "ONE", two: "TWO" };
    return(
        <ResponsiveContext.Provider value={windowSize}>
            {props.children}
        </ResponsiveContext.Provider>
    );
};

export { ResponsiveContext, ResponsiveProvider };
// export { ResponsiveProvider };