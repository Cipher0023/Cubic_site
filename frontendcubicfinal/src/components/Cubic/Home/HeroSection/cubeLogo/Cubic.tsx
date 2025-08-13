"use client";
import React, { Suspense, useRef } from "react"; // Importe useRef
import { Canvas, useFrame } from "@react-three/fiber"; // Importe useFrame
import { Environment } from "@react-three/drei";
import * as THREE from "three"; // Importe THREE para tipagem (opcional, mas bom)

type Props = object;

export function Cubic({}: Props) {
  return (
    <div className="w-full h-full">
      <Canvas className="" camera={{ position: [2.5, 2.5, 2.5], fov: 30 }}>
        <Suspense fallback={null}>
          {" "}
          {/* Adicione um fallback para Suspense */}
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  // 1. Crie uma referência para o mesh
  const meshRef = useRef<THREE.Mesh>(null!); // Usando ! para indicar que será inicializado

  // 2. Use o hook useFrame para animar
  useFrame((state, delta) => {
    // state: contém informações sobre o estado da renderização (tempo, clock, etc.)
    // delta: tempo em segundos desde o último frame - útil para animações suaves

    if (meshRef.current) {
      // Rotaciona o cubo ao redor do eixo Y
      meshRef.current.rotation.y += delta * 0.35; // Ajuste o 0.5 para mudar a velocidade

      // Você pode rotacionar em outros eixos também:
      // meshRef.current.rotation.x += delta * 0.2;
      // meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Luz ambiente suave */}
      <ambientLight intensity={0.25} />
      {/* Luz direcional azulada, 45° acima e 45° para a direita */}
      <directionalLight
        position={[0.507, 2.5, -0.107]}
        intensity={2}
        color="#d2f6fa"
        castShadow
      />

      {/* 3. Atribua a ref ao mesh */}
      <mesh ref={meshRef}>
        <meshStandardMaterial color={[1, 1, 1]} />{" "}
        {/* Adicionei uma cor para ver melhor */}
        <boxGeometry />
      </mesh>
    </group>
  );
}
