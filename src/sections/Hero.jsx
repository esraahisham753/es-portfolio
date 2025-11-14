import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { HackerRoom } from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from '../constants'
import Target from "../components/Target"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube"
import Rings from "../components/Rings"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  console.log(sizes);

  return (
    <section className="min-h-screen mt-24 w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col c-space gap-3">
            <p className="text-white sm:text-3xl text-2xl font-generalsans font-medium text-center">Hi, I'm Esraa <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">Software Engineer | Coding, books & coffee!</p>
        </div>

        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                  <HeroCamera isMobile={isMobile}>
                    <HackerRoom 
                    scale={sizes.deskScale} 
                    position={sizes.deskPosition}
                    rotation={[0, -Math.PI, 0]}
                    />
                  </HeroCamera>
                  <group>
                    <ReactLogo position={sizes.reactLogoPosition}/>
                    <Rings position={sizes.ringPosition}/>
                  </group>
                  <ambientLight intensity={1}/>
                  <directionalLight intensity={0.5} position={[10, 10, 10]}/>
                </Suspense>
            </Canvas>
        </div>

        <div className="absolute bottom-7 right-0 left-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
    </section>
  )
}

export default Hero