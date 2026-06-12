import { useEffect, useRef, useState } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const STATS = [
  { value: 15, suffix: '+', label: 'Años en Ibi' },
  { value: 30, suffix: '+', label: 'Variedades de pan' },
  { value: 20, suffix: '', label: 'Sabores de helado' },
  { value: 100, suffix: '%', label: 'Artesanal' },
]

function AnimatedCounter({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 35)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function SobreNosotros() {
  const sectionRef = useIntersectionObserver('visible', { threshold: 0.15 })
  const [statsActive, setStatsActive] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="fade-section py-24 md:py-32 bg-ruc-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Nuestra historia</p>
          <h2 className="section-title">El alma de El Ruc</h2>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Image side */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-ruc-honey/30" />
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br
                         from-ruc-brown to-ruc-chocolate flex items-center justify-center"
            >
              <div className="text-center text-ruc-cream/60 p-8">
                <div className="text-8xl mb-4">🏡</div>
                <p className="font-display text-xl italic">El obrador de El Ruc</p>
                <p className="text-sm mt-2 font-body">C. Jaén, 35 · Ibi, Alicante</p>
              </div>
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ruc-brown/40 to-transparent" />
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-5 -right-5 bg-ruc-honey text-white
                            rounded-2xl px-5 py-3 shadow-xl">
              <p className="font-display font-bold text-xl leading-none">Desde</p>
              <p className="font-display font-bold text-3xl leading-none">enero 2026</p>
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-ruc-brown font-semibold mb-4 leading-snug">
                Un obrador con raíces profundas en Ibi
              </h3>
              <p className="text-ruc-chocolate/75 font-body leading-relaxed text-base md:text-lg">
                El Ruc nació del amor por el buen pan y la cocina de siempre. Lo que empezó como
                un pequeño obrador familiar en el corazón de Ibi se ha convertido en el lugar al
                que vuelves cuando quieres saber que algo está hecho de verdad.
              </p>
            </div>
            <div>
              <p className="text-ruc-chocolate/75 font-body leading-relaxed text-base md:text-lg">
                Aquí no hay nada precocinado. Cada hogaza se amasa a mano con masa madre propia,
                cada pizza parte de una masa que ha fermentado durante horas, y cada helado
                se elabora con ingredientes naturales de temporada. El tiempo y la paciencia
                son ingredientes que no se pueden sustituir.
              </p>
            </div>
            <div>
              <p className="text-ruc-chocolate/75 font-body leading-relaxed text-base md:text-lg">
                Somos un negocio de pueblo, de los que conocen a sus clientes por el nombre.
                Trabajamos con productores locales siempre que podemos, y cada día abrimos
                el obrador con el mismo orgullo del primer día.
              </p>
            </div>

            {/* Values pills */}
            <div className="flex flex-wrap gap-3 mt-2">
              {['Masa madre propia', 'Ingredientes naturales', 'Sin conservantes', 'Hecho cada día'].map(v => (
                <span
                  key={v}
                  className="bg-ruc-beige text-ruc-brown font-body font-semibold text-sm
                             px-4 py-1.5 rounded-full border border-ruc-tan/50"
                >
                  ✓ {v}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-ruc-brown rounded-3xl p-8 md:p-10"
        >
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-ruc-honey mb-1">
                <AnimatedCounter target={value} suffix={suffix} active={statsActive} />
              </p>
              <p className="text-ruc-cream/70 font-body text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
