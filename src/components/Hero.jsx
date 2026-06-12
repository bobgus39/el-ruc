import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef    = useRef(null)
  const subRef      = useRef(null)
  const ctaRef      = useRef(null)
  const badgeRef    = useRef(null)

  useEffect(() => {
    const els = [badgeRef, titleRef, subRef, ctaRef]
    els.forEach((ref, i) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(28px)'
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 200 + i * 180)
    })
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-ruc-chocolate via-ruc-brown to-ruc-mustard" />
      <div className="absolute inset-0 bg-gradient-to-t from-ruc-chocolate/60 via-transparent to-transparent" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-ruc-honey/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-ruc-mustard/15 blur-[100px] pointer-events-none" />

      {/* Decorative bread icon */}
      <div className="absolute top-24 right-8 md:right-16 lg:right-32 text-ruc-honey/20 text-9xl pointer-events-none select-none font-display">
        🌾
      </div>
      <div className="absolute bottom-16 left-8 md:left-16 text-ruc-honey/15 text-7xl pointer-events-none select-none">
        🫒
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">

        {/* Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 mb-6">
          <span className="h-px w-8 bg-ruc-honey/60" />
          <span className="text-ruc-honey font-body font-semibold text-xs uppercase tracking-[0.25em]">
            Ibi · Alicante · Desde siempre
          </span>
          <span className="h-px w-8 bg-ruc-honey/60" />
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                     text-white font-bold leading-[1.08] mb-6"
        >
          Hecho con harina,
          <br />
          <span className="text-ruc-honey italic">fuego</span> y mucho cariño.
        </h1>

        {/* Sub-claim */}
        <p
          ref={subRef}
          className="text-ruc-cream/80 font-body text-lg md:text-xl lg:text-2xl
                     max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Pan de masa madre, pizzas artesanales y helados caseros.
          El sabor de siempre, en el corazón de Ibi.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-16 sm:pb-0"
        >
          <button
            onClick={() => scrollTo('carta')}
            className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
          >
            Ver la carta
          </button>
          <button
            onClick={() => scrollTo('contacto')}
            className="border-2 border-white/60 text-white font-semibold text-base
                       px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200
                       w-full sm:w-auto active:scale-95"
          >
            Cómo llegar →
          </button>
        </div>

      </div>

      {/* Scroll indicator — fuera del contenedor, anclado al fondo de la sección */}
      <div className="hidden md:flex absolute bottom-20 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10">
        <span className="text-ruc-cream/40 text-xs font-body uppercase tracking-widest">
          Descubre
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-ruc-cream/40 to-transparent animate-bounce" />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 50 1440 40 L1440 80 L0 80 Z"
            fill="#FAF3E0"
          />
        </svg>
      </div>
    </section>
  )
}
