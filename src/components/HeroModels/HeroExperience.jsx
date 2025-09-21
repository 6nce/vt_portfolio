import React from 'react'
import { Canvas } from '@react-three/fiber'
import Spline from '@splinetool/react-spline';

const HeroExperience = () => {
  return (
    <Spline scene="https://prod.spline.design/Uc51nrR7bv4qrhVj/scene.splinecode" />
    // <Canvas camera={{position:[0,0,15], fov: 45}}>
    //     <ambientLight intensity={0.2} color="#1a1a40"/>
    //     <directionalLight position={5,5,5} intensity={1}/>

    //     <mesh>
    //     <boxGeometry args={[1,1,1]} />
    //     <meshStandardMaterial color="blue" />
    //     </mesh>
    // </Canvas>
  )
}

export default HeroExperience