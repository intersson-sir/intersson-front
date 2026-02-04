/* eslint-disable react/no-unknown-property */
'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { forwardRef, useMemo, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 uv = vUv * uScale;
  float tOffset = uSpeed * uTime;
  uv.y += 0.03 * sin(8.0 * uv.x - tOffset);

  // Усиливаем контраст паттерна для лучшей видимости
  float pattern = 0.5 + 0.5 * sin(4.0 * (uv.x + uv.y + cos(3.0 * uv.x + 4.0 * uv.y) + 0.5 * tOffset));
  
  // Делаем эффект более "объемным"
  vec3 col = uColor * (pattern * 1.5); 
  col -= rnd / 20.0 * uNoiseIntensity;
  
  gl_FragColor = vec4(col, 1.0);
}
`

const SilkPlane = forwardRef((props: any, _ref: any) => {
  const { viewport } = useThree()
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  useFrame(state => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={props.uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
})
SilkPlane.displayName = 'SilkPlane'

export default function Silk({
  speed = 5,
  scale = 1,
  color = '#7B7481',
  noiseIntensity = 1.5
}) {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity }
    }),
    [speed, scale, color, noiseIntensity]
  )

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      <Canvas dpr={[1, 2]}>
        <SilkPlane uniforms={uniforms} />
      </Canvas>
    </div>
  )
}
