'use client';

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
      />
    </Canvas>
  );
} 