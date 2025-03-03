import React, { useEffect } from "react";

const Core: React.FC = () => {
    useEffect(() => {
        console.info("devicePixelRatio: " + window.devicePixelRatio);
    })
    return (
        <>
            <div className="text-[2rem] justify-center text-center font-black text-white w-screen h-screen">
                lorem ipsum
            </div>
        </>
    )
}

export default Core;