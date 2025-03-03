import * as THREE from "@react-three/fiber"

export default function Shader() {
    return (
        <div className="absolute top-0 left-0 pointer-events-none w-screen h-screen">
            <THREE.Canvas
            camera={{position: [0, 0, 3]}}
            style={{
                pointerEvents: "none"}}
            gl={{alpha: true}}
            >
                <ambientLight intensity={30}/>
            </THREE.Canvas>
        </div>
    )
}