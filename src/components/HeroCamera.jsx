import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react"

const HeroCamera = ({ children }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.5, delta);
    });

    return (
    <group>

    </group>
    )
}

export default HeroCamera