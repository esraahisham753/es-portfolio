import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import reactModelUrl from '../assets/models/react.glb?url'

const ReactLogo = (props) => {
  const modelUrl = reactModelUrl
  // debug: log which URL the component attempts to load (check browser console)
  console.log('[ReactLogo] loading model:', modelUrl)
  const { nodes, materials } = useGLTF(modelUrl)
  return (
    <Float  floatIntensity={1}>
      <group position={[8, 8, 0]} {...props} scale={0.005} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload(reactModelUrl)

export default ReactLogo;
