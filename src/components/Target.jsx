import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei"
import { useRef } from "react";
import gsap from "gsap";

const Target = (props) => {
  const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf");
  const ref = useRef();

  useGSAP(() => {
    gsap.to(ref.current.position, {
        y: ref.current.position.y + 0.5,
        duration: 3,
        repeat: -1,
        yoyo: true
    });
  });

  return (
    <mesh {...props} ref={ref} rotation={[0, Math.PI / 5, 0]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Target