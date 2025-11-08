import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { HackerRoom } from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
  const x = useControls('hackerroom', {
    positionX: {
      min: -10,
      max: 10,
      value: 0
    },
    positionY: {
      min: -10,
      max: 10,
      value: 0
    },
    positionZ: {
      min: -10,
      max: 10,
      value: 0
    },
    rotationX: {
      min: -10,
      max: 10,
      value: 2.5
    },
    rotationY: {
      min: -10,
      max: 10,
      value: 2.5
    },
    rotationZ: {
      min: -10,
      max: 10,
      value: 2.5
    },
    scale: {
      min: 0.1,
      max: 10,
      value: 0.1
    }  
  });

  const isSmall = useMediaQuery({maxWidth})

  return (
    <section className="min-h-screen mt-24 w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col c-space gap-3">
            <p className="text-white sm:text-3xl text-2xl font-generalsans font-medium text-center">Hi, I'm Esraa <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">Software Engineer | Coding, books & coffee lover! Sharing tech blogs!</p>
        </div>

        <div className="w-full h-full absolute inset-0">
            <Leva />
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                  <HackerRoom 
                    scale={0.1} 
                    position={[2, -8, 2]}
                    rotation={[0, -Math.PI, 0]}
                  />
                  <ambientLight intensity={1}/>
                  <directionalLight intensity={0.5} position={[10, 10, 10]}/>
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero