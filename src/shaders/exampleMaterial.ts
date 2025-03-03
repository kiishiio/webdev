import * as THREE from "three";

import exampleVertex from "./example.vert";
import exampleFragment from "./example.frag";

export const ShutterMaterial = new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: 0 },
    },
    vertexShader: exampleVertex,
    fragmentShader: exampleFragment,
    transparent: true,
})