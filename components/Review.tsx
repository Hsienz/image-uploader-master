import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useImage } from "@/contexts/ImageContext";
import { MoonLoader } from "react-spinners";
const Review = () => {
	const { image } = useImage();
	const inputRef = useRef<HTMLInputElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null)
	const [loaded, setLoaded] = useState(false);
	const copy = async () => {
		if (inputRef.current?.value)
			navigator.clipboard.writeText(inputRef.current?.value);
		buttonRef.current?.classList.add('!bg-green_1')
		setTimeout(()=>{
			buttonRef.current?.classList.remove('!bg-green_1')
		}, 3000)
	};
	return (
		<div className="container max-w-[400px] flex flex-col gap-[24px] items-center">
			<div className="flex items-center justify-center p-0 mx-auto rounded-full bg-green_1">
				<Image
					src="/assets/done_FILL0_wght700_GRAD0_opsz48.svg"
					alt=""
					width={64}
					height={64}
				/>
			</div>
			<h2>Uploaded Successfully</h2>
			<div className="relative w-full aspect-[17/11] flex items-center justify-center">
				{image && (
					<Link
						target="_blank"
						href={image}
						className={`relative w-full h-full`}
					>
						<Image
							src={image}
							alt=""
							fill={true}
							style={{ objectFit: "cover" }}
							onLoadingComplete={() => {
								setLoaded(true);
							}}
						/>
					</Link>
				)}
				{!loaded && <MoonLoader className={`moonLoader !absolute !m-auto`}></MoonLoader>}
			</div>
			<div className="flex border-2 rounded-[8px] border-gray_5 w-full h-12">
				<input
					ref={inputRef}
					type="text"
					className="w-full px-2 overflow-ellipsis text-[8px] leading-[12px]"
					name=""
					id=""
					value={image}
					disabled
				/>
				<button
					ref={buttonRef}
					onClick={copy}
					className="bg-blue_1 m-1 text-[8px] leading-[12px] rounded-[8px] px-[16px] py-[4px] text-white whitespace-nowrap"
				>
					Copy Link
				</button>
			</div>
		</div>
	);
};

export default Review;
