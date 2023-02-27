import React, { ChangeEvent, useRef, useState } from "react";

const Upload = () => {
	const ref = useRef<HTMLInputElement>(null);
	const handleOnChange = (e: ChangeEvent) => {
		console.log(e);
	};
	return (
		<div className="flex flex-col">
			<h1> Upload your image</h1>
			<p>File should be Jpeg, Png...</p>
			<div className="border-4 border-dotted relative">
				<input
                    ref={ref}
					onChange={handleOnChange}
					className="w-full h-full opacity-0 absolute top-0 left-0"
					type="file"
					name=""
					id=""
				/>
				<p>Drag & Drop your image here</p>
			</div>
			<p>or</p>
            <button onClick={()=>ref.current?.click()}>Choose a file</button>
		</div>
	);
};

export default Upload;
