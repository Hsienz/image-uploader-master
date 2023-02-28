import Card from "./Card"
import ImageProvider from "../contexts/ImageContext";
import LevelProvider from "../contexts/LevelContext";
const CardWrapper = () => {
    return (
        <ImageProvider>
            <LevelProvider>
                <Card />
            </LevelProvider>
        </ImageProvider>
    )
}

export default CardWrapper