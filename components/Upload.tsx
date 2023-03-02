import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { useLevel } from "@/contexts/LevelContext";
import { useImage } from "@/contexts/ImageContext";
import storage from "@/lib/firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
const Upload = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { setLevel } = useLevel();
	const { setImage } = useImage();
	const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		setLevel((level) => level + 1);
		try {
			for (let i = 0; i < e.target.files?.length; i++) {
				const file = e.target.files[i];
				const ext = file.name.split(".").pop();
				if (ext != "png" && ext != "jpg" && ext != "jpeg")
					throw "Only accept png, jpg, jpeg file.";
				const newFilename = uuidv4() + "." + ext;
				const imageRef = ref(storage, newFilename);
				uploadBytes(imageRef, file).then((snapshot) => {
					getDownloadURL(imageRef).then((url) => {
						setImage(url);
					});
					setLevel((level) => level + 1);
				});
			}
		} catch (e) {
			console.log(e);
			setLevel((level) => level - 1);
		}
	};
	return (
		<div className="container flex flex-col items-center max-w-[400px] gap-4">
			<h2>Upload your image</h2>
			<h3>File should be Jpeg, Png...</h3>
			<div className="relative w-full border-4 border-dashed aspect-[17/11] container flex flex-col justify-between items-center bg-bg border-pale_blue">
				<input
					ref={inputRef}
					onChange={handleOnChange}
					className="absolute top-0 left-0 w-full h-full opacity-0"
					type="file"
					accept="image/jpeg, image/png"
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
