import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useImage } from "@/contexts/ImageContext";
import { useRouter } from "next/router";

const Review = () => {
	const { image } = useImage();
    const {basePath} = useRouter()
	return (
		<div className="container max-w-sm flex flex-col gap-[24px] items-center">
			<div className="flex items-center justify-center p-0 mx-auto rounded-full bg-green_1">
				<Image
					src="/assets/done_FILL0_wght700_GRAD0_opsz48.svg"
					alt=""
					width={64}
					height={64}
				/>
			</div>
			<h2>Uploaded Successfully</h2>
			<Link target="_blank" href={`./uploads/${image}`} className="relative w-full aspect-[17/11]">
				<Image
					src={`/uploads/${image}`}
					alt=""
                    fill={true}
                    style={{objectFit:'cover'}}
				/>
			</Link>
			<input
				type="text"
				className="w-full"
				name=""
				id=""
				value={`${basePath}/uploads/${image}`}
				disabled
			/>
		</div>
	);
};

export default Review;
