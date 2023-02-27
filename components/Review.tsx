import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Review = () => {
	return (
		<div className="container max-w-sm flex flex-col gap-[24px] items-center">
			<div className="flex items-center justify-center p-0 mx-auto rounded-full bg-green_1">
                <Image src='/assets/done_FILL0_wght700_GRAD0_opsz48.svg' alt="" width={64} height={64}/>
			</div>
			<h2>Uploaded Successfully</h2>
            <input type="text" className="w-full" name="" id="" value="test" disabled/>
		</div>
	);
};

export default Review;
