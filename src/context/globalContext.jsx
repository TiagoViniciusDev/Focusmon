import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    //Mostra ou não a parte de trás da carta
    const [flip, setFlip] = useState(false)

    const value = {
        flip, setFlip
    }

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}