'use client'

import { useRef, useEffect } from 'react'
import { Renderer, Program, Mesh, Triangle } from 'ogl'
import './DarkVeil.css'

const vertex = `
attribute vec2 position;
void main(){
    gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `
precision highp float;
uniform vec2 uResolution;
uniform float uTime;

void main(){
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    float color = 0.05 + 0.05 * sin(uv.x * 10.0 + uTime);
    gl_FragColor = vec4(vec3(color), 1.0);
}
`

export default function DarkVeil() {
  const ref = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if (!ref.current) return
    const canvas = ref.current
    const parent = canvas.parentElement
    if (!parent) return

    try {
      const renderer = new Renderer({
        dpr: 1,
        canvas,
        alpha: true
      })

      const gl = renderer.gl
      const geometry = new Triangle(gl)
      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: [0, 0] }
        }
      })

      const mesh = new Mesh(gl, { geometry, program })

      const resize = () => {
        const w = parent.clientWidth
        const h = parent.clientHeight
        if (w === 0 || h === 0) return
        renderer.setSize(w, h)
        program.uniforms.uResolution.value = [w, h]
      }

      window.addEventListener('resize', resize)
      resize()

      let rafId: number
      const loop = (t: number) => {
        program.uniforms.uTime.value = t * 0.001
        renderer.render({ scene: mesh })
        rafId = requestAnimationFrame(loop)
      }
      rafId = requestAnimationFrame(loop)

      return () => {
        cancelAnimationFrame(rafId)
        window.removeEventListener('resize', resize)
        const loseContext = gl.getExtension('WEBGL_lose_context')
        if (loseContext) loseContext.loseContext()
      }
    } catch (e) {
      console.error('DarkVeil error:', e)
    }
  }, [])

  return <canvas ref={ref} className="darkveil-canvas" />
}
