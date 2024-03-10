import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import{
  Decal,Float, OrbitControls,Preload,useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader';
import { MeshStandardMaterial } from "three";

const Ball = (props) => {
 
   const [decal]=useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.26}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
         <Decal
        position={[0,0,1]}
        rotation={[2*Math.PI,0,6.25]}
        flatShading
        map={decal}/></mesh>
    </Float>
  )
}

const BallCanvas=({icon})=>{
  return(
    <Canvas
    frameloop='demand'
    gl={{perserverDrawingBuffer:true, alpha:true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload/>

    </Canvas>
  )
}
export default BallCanvas