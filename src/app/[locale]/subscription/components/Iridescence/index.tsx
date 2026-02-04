'use client'

import './Iridescence.css'

import { useEffect, useRef } from 'react'

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`

interface IridescenceProps {
  color?: [number, number, number]
  speed?: number
  amplitude?: number
  mouseReact?: boolean
  style?: React.CSSProperties
  className?: string
}

export default function Iridescence({
  color = [1, 1, 1],
  speed = 1,
  amplitude = 0.1,
  mouseReact = true,
  style,
  className = '',
  ...rest
}: IridescenceProps) {
  const ctnDom = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0.5, y: 0.5 })
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const glRef = useRef<WebGLRenderingContext | null>(null)
  const programRef = useRef<WebGLProgram | null>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (!ctnDom.current) {
      return
    }

    const ctn = ctnDom.current
    const canvas = document.createElement('canvas')
    canvasRef.current = canvas
    const glContext =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!glContext) {
      return
    }
    const gl = glContext as WebGLRenderingContext
    glRef.current = gl

    gl.clearColor(1, 1, 1, 1)

    // Compile shader
    function createShader(
      gl: WebGLRenderingContext,
      type: number,
      source: string
    ) {
      const shader = gl.createShader(type)
      if (!shader) {
        return null
      }
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    // Create program
    const vShader = createShader(gl, gl.VERTEX_SHADER, vertexShader)
    const fShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader)
    if (!vShader || !fShader) {
      return
    }

    const program = gl.createProgram()
    if (!program) {
      return
    }
    programRef.current = program

    gl.attachShader(program, vShader)
    gl.attachShader(program, fShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }

    gl.useProgram(program)

    // Create geometry (full-screen triangle)
    const positions = new Float32Array([-1, -1, 3, -1, -1, 3])
    const uvs = new Float32Array([0, 0, 2, 0, 0, 2])

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    const positionLoc = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

    const uvBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW)

    const uvLoc = gl.getAttribLocation(program, 'uv')
    gl.enableVertexAttribArray(uvLoc)
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0)

    // Get uniform locations
    const uTimeLoc = gl.getUniformLocation(program, 'uTime')
    const uColorLoc = gl.getUniformLocation(program, 'uColor')
    const uResolutionLoc = gl.getUniformLocation(program, 'uResolution')
    const uMouseLoc = gl.getUniformLocation(program, 'uMouse')
    const uAmplitudeLoc = gl.getUniformLocation(program, 'uAmplitude')
    const uSpeedLoc = gl.getUniformLocation(program, 'uSpeed')

    // Set initial uniforms
    gl.uniform3f(uColorLoc, color[0], color[1], color[2])
    gl.uniform2f(uMouseLoc, mousePos.current.x, mousePos.current.y)
    gl.uniform1f(uAmplitudeLoc, amplitude)
    gl.uniform1f(uSpeedLoc, speed)

    function resize() {
      if (!canvas || !gl || !programRef.current) {
        return
      }
      const scale = 1
      canvas.width = ctn.offsetWidth * scale
      canvas.height = ctn.offsetHeight * scale
      canvas.style.width = `${ctn.offsetWidth}px`
      canvas.style.height = `${ctn.offsetHeight}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform3f(
        uResolutionLoc,
        canvas.width,
        canvas.height,
        canvas.width / canvas.height
      )
    }

    window.addEventListener('resize', resize)
    resize()

    function update(t: number) {
      if (!gl || !programRef.current) {
        return
      }
      animationIdRef.current = requestAnimationFrame(update)
      gl.uniform1f(uTimeLoc, t * 0.001)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    animationIdRef.current = requestAnimationFrame(update)
    ctn.append(canvas)

    function handleMouseMove(e: MouseEvent) {
      if (!gl || !programRef.current) {
        return
      }
      const rect = ctn.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = 1 - (e.clientY - rect.top) / rect.height
      mousePos.current = { x, y }
      gl.uniform2f(uMouseLoc, x, y)
    }

    if (mouseReact) {
      ctn.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      window.removeEventListener('resize', resize)
      if (mouseReact) {
        ctn.removeEventListener('mousemove', handleMouseMove)
      }
      if (canvas && canvas.parentNode) {
        canvas.remove()
      }
      const loseContext = gl.getExtension('WEBGL_lose_context')
      if (loseContext) {
        loseContext.loseContext()
      }
    }
  }, [color, speed, amplitude, mouseReact])

  return (
    <div
      ref={ctnDom}
      className={`iridescence-container ${className}`}
      style={style}
      {...rest}
    />
  )
}
