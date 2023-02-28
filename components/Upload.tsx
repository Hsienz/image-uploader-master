import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { useLevel } from "@/contexts/LevelContext";
import { useImage } from "@/contexts/ImageContext";
const Upload = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { setLevel } = useLevel();
	const { setImage } = useImage();
	const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		setLevel((x) => x + 1);
		let formData = new FormData();
		formData.append("image", e.target.files[0]);
		const res = await fetch("/api/upload", {
			method: "POST",
			body: formData,
		}).then(res=>{
			setLevel( x => x+1 )
			res.json().then( res=>{
				setImage(res.filename)
			}).catch( err => {
				console.log(err)
			})
		}).catch(err=>{
			console.log(err)
			// setLevel( x => x-1 )
		}) 
		console.log(res)
	};
	return (
		<div className="container flex flex-col items-center max-w-sm gap-4">
			<h2> Upload your image</h2>
			<h3>File should be Jpeg, Png...</h3>
			<div className="relative w-full border-4 border-dashed aspect-[17/11] container flex flex-col justify-between items-center bg-bg border-pale_blue">
				<input
					ref={inputRef}
					onChange={handleOnChange}
					className="absolute top-0 left-0 w-full h-full opacity-0"
					type="file"
					name=""
					id=""
				/>
				<Image
					src="/assets/image.svg"
					alt=""
					width={100}
					height={100}
				/>
				<p>Drag & Drop your image here</p>
			</div>
			<p>or</p>
			<div>
				<button
					className="text-white text-xs rounded-[8px] px-[16px] py-[8px] transition-all duration-200 hover:brightness-125 bg-blue_1"
					onClick={(e) => {
						e.preventDefault();
						inputRef.current?.click();
					}}
				>
					Choose a file
				</button>
			</div>
		</div>
	);
};

export default Upload;
