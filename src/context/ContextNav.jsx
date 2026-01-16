import React, { createContext, use, useEffect, useState } from 'react'
import { useLocation } from 'react-router'



export const navContext = createContext()
export const navColorContext = createContext()

const ContextNav = ({children}) => {

    const [navOpen, setNavOpen] = useState(false)
    const [navColor, setNavColor] = useState('white')

    const locate = useLocation().pathname
    // console.log(locate);
    
    useEffect(() => {
        if (locate == "/legacy" || locate === "/empire") {
          setNavColor("black");
        } else {
          setNavColor("white");
        }
    }, [locate]);
    

  return (
    <div>
        
            <navColorContext.Provider value={[navColor, setNavColor]}>
              <navContext.Provider value={[navOpen,setNavOpen]}>
              {children}
              </navContext.Provider>
            </navColorContext.Provider>
       
    </div>
  )
}

export default ContextNav