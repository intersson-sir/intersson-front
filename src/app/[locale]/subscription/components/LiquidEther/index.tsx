'use client'

import './LiquidEther.css'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export interface LiquidEtherProps {
  mouseForce?: number
  cursorSize?: number
  isViscous?: boolean
  viscous?: number
  iterationsViscous?: number
  iterationsPoisson?: number
  dt?: number
  BFECC?: boolean
  resolution?: number
  isBounce?: boolean
  colors?: string[]
  style?: React.CSSProperties
  className?: string
  autoDemo?: boolean
  autoSpeed?: number
  autoIntensity?: number
  takeoverDuration?: number
  autoResumeDelay?: number
  autoRampDuration?: number
  color0?: string
  color1?: string
  color2?: string
}

const defaultColors = ['#5227FF', '#FF9FFC', '#B19EEF']

export default function LiquidEther({
  colors = defaultColors,
  style = {},
  className = ''
}: LiquidEtherProps): React.ReactElement {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.Camera | null>(null)

  useEffect(() => {
    if (!mountRef.current) {
      return
    }

    // Create scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Create camera
    const camera = new THREE.Camera()
    cameraRef.current = camera

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(new THREE.Color(0x00_00_00), 0)
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    )
    mountRef.current.append(renderer.domElement)
    rendererRef.current = renderer

    // Create gradient geometry
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color0;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          vec2 uv = vUv;
          float wave = sin(uv.x * 3.0 + time) * sin(uv.y * 3.0 + time * 0.8) * 0.5 + 0.5;
          vec3 col = mix(color0, color1, uv.x);
          col = mix(col, color2, uv.y);
          col = mix(col, color2, wave * 0.3);
          gl_FragColor = vec4(col, 0.3 + wave * 0.2);
        }
      `,
      uniforms: {
        time: { value: 0 },
        color0: { value: new THREE.Color(colors[0]) },
        color1: { value: new THREE.Color(colors[1]) },
        color2: { value: new THREE.Color(colors[2]) }
      },
      transparent: true
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.005
      material.uniforms.time.value = time
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !renderer) {
        return
      }
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      )
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      if (mountRef.current && renderer.domElement.parentNode) {
        renderer.domElement.remove()
      }
    }
  }, [colors])

  return (
    <div
      ref={mountRef}
      className={`liquid-ether-container ${className || ''}`}
      style={style}
    />
  )
}
