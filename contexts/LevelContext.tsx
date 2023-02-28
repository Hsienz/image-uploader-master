import React, { createContext, useContext, useState } from "react"

interface Context {
    level: number
    setLevel: React.Dispatch<React.SetStateAction<number>>
}

interface Props {
    children: JSX.Element
}

const LevelContext = createContext<Context>({
    level: 0,
    setLevel: () => {}
})

const LevelProvider:React.FC<Props> = ({children}) => { 
    const [level, setLevel] = useState(0)
    return (
        <LevelContext.Provider value={{level, setLevel}}>
            {children}
        </LevelContext.Provider>
    )
}

export default LevelProvider
export const useLevel = () => useContext(LevelContext)