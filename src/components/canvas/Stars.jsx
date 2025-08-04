import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useMemo, useRef } from "react";

const Stars = (props) => {
  const ref = useRef();
  
  // Reduce particles for better performance - from 5000 to 2000
  const sphere = useMemo(() => 
    random.inSphere(new Float32Array(2000), { radius: 1.2 }), 
    []
  );

  // Throttle frame updates for better performance
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20; // Slower rotation
      ref.current.rotation.y -= delta / 30; // Slower rotation
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // Limit device pixel ratio for performance
        performance={{ min: 0.5 }} // Performance mode
        frameloop="demand" // Only render when needed
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
