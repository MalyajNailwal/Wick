'use client';

import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Text, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const TyreSystem = ({ position = [0, 0, 0] }: { position?: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Tire */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial 
          color={hovered ? '#0ea5e9' : '#1a1a1a'}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>

      {/* Rim */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
        <meshStandardMaterial 
          color="#c0c0c0"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Brake disc */}
      <mesh position={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
        <meshStandardMaterial 
          color="#8B5A2B"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Pressure sensor indicator */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.3, 0.2, 0.1]} />
        <meshStandardMaterial 
          color={hovered ? '#10b981' : '#3b82f6'}
          emissive={hovered ? '#10b981' : '#3b82f6'}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

const CarModel = () => {
  const { size } = useThree();
  const isMobile = size.width < 768;

  return (
    <>
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      <Environment preset="city" />
      
      {/* Main vehicle body (simplified) */}
      <group position={[0, 0, 0]}>
        {/* Truck cabin */}
        <mesh position={[0, 1, 2]}>
          <boxGeometry args={[3, 2, 2]} />
          <meshStandardMaterial 
            color="#2563eb"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Truck body */}
        <mesh position={[0, 0.5, -1]}>
          <boxGeometry args={[3, 1, 4]} />
          <meshStandardMaterial 
            color="#1e40af"
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>

        {/* Tyre Rakhshak Systems on each wheel */}
        <TyreSystem position={[-1.2, -0.5, 1]} />
        <TyreSystem position={[1.2, -0.5, 1]} />
        <TyreSystem position={[-1.2, -0.5, -1]} />
        <TyreSystem position={[1.2, -0.5, -1]} />
        
        {/* Additional back wheels for HCV */}
        <TyreSystem position={[-1.2, -0.5, -2.5]} />
        <TyreSystem position={[1.2, -0.5, -2.5]} />
      </group>

      {/* Floating text */}
      <Text
        position={[0, 3, 0]}
        fontSize={isMobile ? 0.3 : 0.5}
        color="#1e40af"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        ATES - Automatic Tyre
      </Text>
      
      <Text
        position={[0, 2.4, 0]}
        fontSize={isMobile ? 0.3 : 0.5}
        color="#1e40af"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        Equalisation System
      </Text>

      {/* Contact shadows */}
      <ContactShadows 
        position={[0, -1, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={1} 
        far={10} 
        resolution={256} 
        color="#000000" 
      />
    </>
  );
};

export default CarModel;
