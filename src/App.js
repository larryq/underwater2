import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF, useVideoTexture } from '@react-three/drei'
import { EffectComposer, Bloom, HueSaturation, BrightnessContrast, TiltShift2, WaterEffect, ToneMapping } from '@react-three/postprocessing'

export default function App() {
  return (
    <Canvas gl={{ antialias: false }} flat shadows camera={{ position: [0, 0, 8], fov: 35 }}>
      <color attach="background" args={['#353535']} />
      <fog attach="fog" args={['#353535', 5, 20]} />
      <ambientLight intensity={2.5} />
      <TreasureChest scale={0.45}></TreasureChest>
      <Caustics distance={100} intensity={15} angle={0.6} penumbra={1} position={[2, 5, 0]} />
      <AccumulativeShadows receiveShadow temporal frames={100} opacity={0.8} alphaTest={0.9} scale={12} position={[0, -0.5, 0]}>
        <RandomizedLight radius={4} ambient={0.5} position={[5, 8, -10]} bias={0.001} />
      </AccumulativeShadows>
      <Helmet position={[1.25, -.445, -1.15]} scale={0.35} rotation={[Math.PI/6,Math.PI,0.0]}></Helmet>
      <Fish position={[1.5, .225, 1]} scale={0.15}></Fish>
      <Fish position={[0.95, -0.30, 0]} scale={0.08} rotation={[Math.PI/12,Math.PI/1.5,0]}></Fish>
      <Fish position={[-1.5, 0.5, 0.5]} scale={0.10} rotation={[0,Math.PI,0.0]}></Fish>
      <Fish position={[-1.6, 0.6, 1]} scale={0.03} rotation={[0,Math.PI,0.0]}></Fish>
      <Fish position={[-1.7, 0.4, 1]} scale={0.02} rotation={[0,Math.PI,0.0]}></Fish>
      <Wheel position={[-1.5,-0.5,-0.5]} scale={0.21} rotation={[Math.PI/34,0,0]}></Wheel>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.51, 0]} scale={100}>
        <planeGeometry />
        <meshLambertMaterial color="#353535" />
      </mesh>
      <Environment preset="city" />
      <OrbitControls autoRotate autoRotateSpeed={0.9} enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} />
      <Postpro />
    </Canvas>
  )
}

function Postpro() {
  return (
    <EffectComposer disableNormalPass>
      {/* <HueSaturation saturation={-1} /> */}
      <BrightnessContrast brightness={0} contrast={0.25} />
      <WaterEffect factor={0.75} />
      <TiltShift2 samples={6} blur={0.5} />
      <Bloom mipmapBlur luminanceThreshold={0} intensity={8} />
      <ToneMapping />
    </EffectComposer>
  )
}

function Caustics(props) {
  const texture = useVideoTexture('/caustics.mp4')
  return <spotLight decay={0} map={texture} castShadow {...props} />
}



export function TreasureChest(props) {
  const { nodes, materials } = useGLTF('/treasure_chest.glb')
  return (
<group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['oak top.001']}
        position={[0.173, -0.029, 0.013]}
        scale={[1, 1, 3.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['oak top']}
        position={[-1.214, 1.325, 0.013]}
        rotation={[0, 0, 2.292]}
        scale={[1, 1, 3.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1.geometry}
        material={materials.Material}
        position={[-0.132, -0.798, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.001']}
        position={[-1.106, -0.849, 2.503]}
        rotation={[-0.519, 0, 0]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1001.geometry}
        material={materials.Material}
        position={[0.277, -0.757, 2.688]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1002.geometry}
        material={materials['Material.002']}
        position={[0.693, -0.798, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1003.geometry}
        material={materials['Material.003']}
        position={[0.693, -0.573, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1004.geometry}
        material={materials['Material.004']}
        position={[0.277, -0.532, 2.688]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1005.geometry}
        material={materials['Material.004']}
        position={[-0.132, -0.573, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1006.geometry}
        material={materials['Material.005']}
        position={[0.693, -0.457, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1007.geometry}
        material={materials['Material.006']}
        position={[0.277, -0.416, 2.688]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1008.geometry}
        material={materials['Material.006']}
        position={[-0.132, -0.457, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1009.geometry}
        material={materials['Material.007']}
        position={[0.693, -0.344, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1010.geometry}
        material={materials['Material.008']}
        position={[0.277, -0.303, 2.688]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1011.geometry}
        material={materials['Material.008']}
        position={[-0.132, -0.344, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1012.geometry}
        material={materials['Material.009']}
        position={[0.693, -0.206, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1013.geometry}
        material={materials['Material.010']}
        position={[0.277, -0.165, 2.688]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1014.geometry}
        material={materials['Material.010']}
        position={[-0.132, -0.206, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1015.geometry}
        material={materials['Material.011']}
        position={[0.693, -0.058, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1016.geometry}
        material={materials['Material.012']}
        position={[0.277, -0.017, 2.688]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1017.geometry}
        material={materials['Material.012']}
        position={[-0.132, -0.058, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1018.geometry}
        material={materials['Material.013']}
        position={[0.693, 0.09, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1019.geometry}
        material={materials['Material.014']}
        position={[0.277, 0.131, 2.688]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1020.geometry}
        material={materials['Material.014']}
        position={[-0.132, 0.09, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1021.geometry}
        material={materials['Material.015']}
        position={[0.693, 0.228, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1022.geometry}
        material={materials['Material.016']}
        position={[0.277, 0.269, 2.688]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coinstack_1023.geometry}
        material={materials['Material.016']}
        position={[-0.132, 0.228, 2.724]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.diamond_1001.geometry}
        material={materials.diamond}
        position={[-0.049, 0.142, 0.652]}
        rotation={[2.479, 0.22, 0.165]}
        scale={0.181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gem001.geometry}
        material={materials['diamond.002']}
        position={[0.15, 0.233, 2.214]}
        rotation={[0.645, 0.445, 0.238]}
        scale={0.216}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj001.geometry}
        material={materials['diamond.001']}
        position={[0.144, 0.301, 1.152]}
        rotation={[0.793, 0.413, -0.071]}
        scale={0.237}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj002.geometry}
        material={materials['diamond.001']}
        position={[0.144, 0.301, -1.517]}
        rotation={[2.468, -0.261, -0.721]}
        scale={0.237}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj003.geometry}
        material={materials['diamond.001']}
        position={[0.72, 0.301, 0.215]}
        rotation={[2.354, -0.178, -0.414]}
        scale={0.173}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.diamond_1002.geometry}
        material={materials.diamond}
        position={[0.5, 0.142, 1.451]}
        rotation={[-1.637, -0.791, 0.378]}
        scale={0.181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gem002.geometry}
        material={materials['diamond.002']}
        position={[0.49, 0.233, -2.411]}
        rotation={[0.645, 0.445, 0.238]}
        scale={0.216}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gem003.geometry}
        material={materials['diamond.002']}
        position={[0.54, 0.233, -0.807]}
        rotation={[0.082, 0.061, 0.127]}
        scale={0.216}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.diamond_1003.geometry}
        material={materials.diamond}
        position={[0.5, 0.142, -1.662]}
        rotation={[2.362, 0.315, 0.681]}
        scale={0.181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj004.geometry}
        material={materials['diamond.001']}
        position={[0.687, 0.301, 2.142]}
        rotation={[0.194, 0.005, -0.131]}
        scale={0.237}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.diamond_1004.geometry}
        material={materials.diamond}
        position={[0.149, 0.142, -0.265]}
        rotation={[-0.945, -0.649, 1.996]}
        scale={0.142}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj005.geometry}
        material={materials['diamond.001']}
        position={[0.835, 0.301, 0.864]}
        rotation={[0.393, -1.479, 1.222]}
        scale={0.131}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.013']}
        position={[0.184, 0.265, 2.834]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj006.geometry}
        material={materials['diamond.001']}
        position={[0.045, 0.235, -0.71]}
        rotation={[0.964, -0.66, 0.829]}
        scale={0.131}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gem004.geometry}
        material={materials['diamond.002']}
        position={[0.008, 0.234, -2.727]}
        rotation={[2.497, 0.445, 0.238]}
        scale={0.134}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.diamond_1005.geometry}
        material={materials.diamond}
        position={[-0.49, -0.905, 0.652]}
        rotation={[2.55, 0.384, -0.07]}
        scale={0.181}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj007.geometry}
        material={materials['diamond.001']}
        position={[-0.538, -0.817, -1.517]}
        rotation={[1.177, -0.906, -2.688]}
        scale={0.167}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gem005.geometry}
        material={materials['diamond.002']}
        position={[-0.547, -0.803, 1.625]}
        rotation={[0.102, -0.01, -0.615]}
        scale={0.216}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dobj008.geometry}
        material={materials['diamond.001']}
        position={[1.41, -0.902, 1.152]}
        rotation={[-0.926, 0.494, 2.869]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gem006.geometry}
        material={materials['diamond.002']}
        position={[1.763, -0.939, 2.214]}
        rotation={[0.645, 0.445, 0.238]}
        scale={0.216}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.001']}
        position={[-0.339, -0.87, 3.486]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials['Material.001']}
        position={[0.698, -0.87, -3.438]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials['Material.001']}
        position={[-1.08, -0.87, -2.251]}
        rotation={[-Math.PI, 0.86, -Math.PI]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.diamond_1006.geometry}
        material={materials.diamond}
        position={[-1.107, -1.01, 0.652]}
        rotation={[2.229, 0.22, 0.165]}
        scale={0.181}
      />
    </group>
  )
}

export function Helmet(props) {
  const { nodes, materials } = useGLTF('/underwater_diver_helmet.glb')
  return (
<group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials.helmet}
        position={[0.155, 0.11, -0.208]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus003.geometry}
        material={materials.helmet}
        position={[-0.848, 0.336, -0.208]}
        rotation={[0, 0, 1.579]}
        scale={0.455}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.facemask}
        position={[-0.848, 0.345, -0.213]}
        rotation={[0, 0, -1.572]}
        scale={0.385}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.helmet}
        position={[-0.904, 0.316, -0.202]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.029, 0.394, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.helmet}
        position={[-0.904, 0.316, -0.202]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.029, 0.394, 0.029]}
      />
    </group>
  )
}


export function Fish(props) {
  const { nodes, materials } = useGLTF('/fish.glb')
  return (
<group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['fish body - wave']}
        position={[0.173, -0.029, 0.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['eyeball white']}
        position={[1.02, 0.276, 1.006]}
        scale={0.263}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['eye iris']}
        position={[1.02, 0.276, 1.232]}
        scale={[0.105, 0.105, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials['eyeball white']}
        position={[-0.673, 0.276, 1.006]}
        scale={0.263}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials['eye iris']}
        position={[-0.673, 0.276, 1.232]}
        scale={[0.105, 0.105, 0.06]}
      />
    </group>
  )
}

  export function Wheel(props) {
    const { nodes, materials } = useGLTF('/boat_wheel.glb')
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={materials.wheel}
          position={[0.057, 0.087, -0.03]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.spoke}
          position={[0.057, 0.087, -1.397]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.107, 1.328, 0.122]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.spoke}
          position={[1.018, 0.062, -1.001]}
          rotation={[1.589, -0.044, 0.781]}
          scale={[0.107, 1.328, 0.122]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.spoke}
          position={[1.423, 0.062, -0.031]}
          rotation={[1.615, -0.019, 1.571]}
          scale={[0.107, 1.328, 0.122]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.spoke}
          position={[1.023, 0.062, 0.936]}
          rotation={[1.615, 0.018, 2.357]}
          scale={[0.107, 1.328, 0.122]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.spoke}
          position={[0.048, 0.062, 1.336]}
          rotation={[1.589, 0.044, -3.135]}
          scale={[0.107, 1.328, 0.122]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.spoke}
          position={[-0.915, 0.062, 0.929]}
          rotation={[1.552, 0.044, -2.349]}
          scale={[0.107, 1.328, 0.122]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.spoke}
          position={[-1.309, 0.062, -0.04]}
          rotation={[1.527, 0.018, -1.563]}
          scale={[0.107, 1.328, 0.122]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.spoke}
          position={[-0.902, 0.062, -1.003]}
          rotation={[1.527, -0.018, -0.779]}
          scale={[0.107, 1.328, 0.122]}
        />
      </group>
    )
  }
