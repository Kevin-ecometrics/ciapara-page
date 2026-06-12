'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const expo = [0.16, 1, 0.3, 1] as const

const PAINTINGS = [
  'linear-gradient(145deg, #7a2e1e 0%, #c4562a 40%, #e8885a 70%, #7a2e1e 100%)',
  'linear-gradient(145deg, #14213d 0%, #2d4a8a 45%, #1a3060 75%, #0d1629 100%)',
  'linear-gradient(145deg, #3a4c2e 0%, #5e7e48 40%, #82a066 65%, #3a4c2e 100%)',
  'linear-gradient(145deg, #8a6018 0%, #c49030 45%, #d4aa50 70%, #8a6018 100%)',
  'linear-gradient(145deg, #4e1626 0%, #7e2440 45%, #9a3255 70%, #3a0e1c 100%)',
  'linear-gradient(145deg, #222226 0%, #424248 40%, #585860 65%, #1e1e22 100%)',
  'linear-gradient(145deg, #1a3a3a 0%, #2e6060 45%, #3a7878 70%, #0d2020 100%)',
  'linear-gradient(145deg, #3a2e1a 0%, #7a5c2e 45%, #a87c40 70%, #2a1e0e 100%)',
  'linear-gradient(145deg, #2a1a3a 0%, #5e3a7a 45%, #8a5a9a 70%, #1a0e2a 100%)',
  'linear-gradient(145deg, #3a1a1a 0%, #7a3a2a 45%, #a05040 70%, #2a0e0e 100%)',
]

// Each image enters from a different direction for a film-strip feel
const ENTER_FROM = [
  { x: '4%',  y: '0%'  },
  { x: '-4%', y: '0%'  },
  { x: '0%',  y: '3%'  },
  { x: '0%',  y: '-3%' },
  { x: '3%',  y: '2%'  },
  { x: '-3%', y: '-2%' },
  { x: '4%',  y: '-2%' },
  { x: '-4%', y: '2%'  },
  { x: '0%',  y: '3%'  },
  { x: '3%',  y: '-3%' },
]

const INTRO_KEY = 'ciapara_intro'

export default function IntroAnimation() {
  const [visible, setVisible] = useState(false)
  const [phase, setPhase] = useState<'name' | 'photos'>('name')
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) return
    sessionStorage.setItem(INTRO_KEY, '1')
    setVisible(true)
  }, [])

  useEffect(() => {
    if (!visible) return
    const prevent = (e: TouchEvent) => e.preventDefault()
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.addEventListener('touchmove', prevent, { passive: false })
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', prevent)
    }
  }, [visible])

  useEffect(() => {
    const t = setTimeout(() => setPhase('photos'), 2400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (phase !== 'photos') return
    const t = setTimeout(() => {
      if (photoIndex < PAINTINGS.length - 1) {
        setPhotoIndex(i => i + 1)
      } else {
        setVisible(false)
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
      }
    }, 200)
    return () => clearTimeout(t)
  }, [phase, photoIndex])

  const from = ENTER_FROM[photoIndex]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: expo }}
        >
          <AnimatePresence>
            {phase === 'name' && (
              <motion.div
                key="name"
                className="absolute inset-0 flex flex-col items-center justify-center"
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: expo }}
              >
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-white font-bold tracking-tight leading-[0.88]"
                    style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.0, ease: expo, delay: 0.1 }}
                  >
                    ENRIQUE
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-white font-bold tracking-tight leading-[0.88]"
                    style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.0, ease: expo, delay: 0.25 }}
                  >
                    CIAPARA
                  </motion.span>
                </div>
                <motion.div
                  className="w-16 h-px bg-white/30 mt-6 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, ease: expo, delay: 0.7 }}
                />
              </motion.div>
            )}

            {phase === 'photos' && (
              <motion.div
                key={`photo-${photoIndex}`}
                className="absolute inset-0"
                style={{ background: PAINTINGS[photoIndex] }}
                initial={{ opacity: 0, x: from.x, y: from.y, scale: 1.06 }}
                animate={{ opacity: 1, x: '0%', y: '0%', scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  opacity:  { duration: 0.12, ease: 'easeOut' },
                  x:        { duration: 0.28, ease: expo },
                  y:        { duration: 0.28, ease: expo },
                  scale:    { duration: 0.32, ease: expo },
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
