import * as THREE from "three";

import vert from "./example.vert";
import frag from "./example.frag";

export const ExampleMaterial = new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: 0 },
    },
    vertexShader: vert,
    fragmentShader: frag,
    transparent: true,
})
