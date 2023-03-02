import React from "react";
import { BarLoader } from "react-spinners";
const Loader = () => {
	return (
		<div className="container flex flex-col max-w-[400px] gap-8">
			<h2>Uploading...</h2>
			<BarLoader width={"100%"} speedMultiplier={0.5} className="barLoader"/>
		</div>
	);
};

export default Loader;
