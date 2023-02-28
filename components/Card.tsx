import { useLevel } from "@/contexts/LevelContext";
import React from "react";
import Loader from "./Loader";
import Review from "./Review";
import Upload from "./Upload";

const Card = () => {
    const {level} = useLevel()
    const getLevel = () => {
        switch(level) {
            case 0: return <Upload />
            case 1: return <Loader />
            case 2: return <Review />
            default: return <></>
        }
    }
	return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {getLevel()}
        </div>
    );
};

export default Card;
