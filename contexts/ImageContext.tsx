import { createContext, useContext, useState } from "react";
import React from "react";

interface Context {
    image: string
    setImage: React.Dispatch<React.SetStateAction<string>>
}


interface Props {
    children: JSX.Element
}

const ImageContext = createContext<Context>({
    image:"",
    setImage: () => {}
})

const ImageProvider:React.FC<Props> = ({children}) => {
    const [image, setImage] = useState("")
    return (
        <ImageContext.Provider value={{image, setImage}}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageProvider
export const useImage = () => useContext(ImageContext)
