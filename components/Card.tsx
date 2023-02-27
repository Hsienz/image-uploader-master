import React from "react";
import Loader from "./Loader";
import Review from "./Review";
import Upload from "./Upload";

const Card = () => {
	return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Upload />
            <Loader />
            <Review />
        </div>
    );
};

export default Card;
