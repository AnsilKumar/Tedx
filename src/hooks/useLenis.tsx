"use client"
import { useEffect } from "react"
import Lenis from "lenis" 

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}
