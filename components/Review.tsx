import React,{useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { useImage } from "@/contexts/ImageContext";
import { useRouter } from "next/router";

const Review = () => {
	const { image } = useImage();
	const { basePath } = useRouter();
    const inputRef = useRef<HTMLInputElement>(null)
    const copy = () => {
        if( inputRef.current?.value )
            navigator.clipboard.writeText(inputRef.current?.value)
    }
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
			<Link
				target="_blank"
				href={`./tmp/${image}`}
				className="relative w-full aspect-[17/11]"
			>
				<Image
					src={`./tmp/${image}`}
					alt=""
					fill={true}
					style={{ objectFit: "cover" }}
				/>
			</Link>
			<div className="flex border-2 border-gray_6">
				<input
                    ref={inputRef}
					type="text"
					className="w-full px-2 overflow-ellipsis"
					name=""
					id=""
					value={`${basePath}/tmp/${image}`}
					disabled
				/>
                <button onClick={copy} className="bg-blue_1 rounded-[8px] px-[8px] py-[4px] text-white">Copy</button>
			</div>
		</div>
	);
};

export default Review;
