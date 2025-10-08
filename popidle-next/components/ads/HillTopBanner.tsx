'use client'

import { useEffect } from 'react'

export default function HillTopBannerScript() {
  useEffect(() => {
    const src = process.env.NEXT_PUBLIC_HILLTOPBANNERSCRIPT_SRC
    if (!src) return

    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.referrerPolicy = 'no-referrer-when-downgrade'

    const target = document.scripts[document.scripts.length - 1] || document.body
    target.parentNode?.insertBefore(script, target)

    return () => {
      script.remove()
    }
  }, [])

  return null
}
