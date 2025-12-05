"use client"
import Lottie from "lottie-react";
import animationData from "../../../../public/lottie/title.json";

export default function HomeTitle() {
    return (
        <figure className="mt-6 w-full xl:w-4/6">
            <Lottie animationData={animationData} autoplay loop={false} rendererSettings={{progressiveLoad: true}} />
        </figure>
    )
}