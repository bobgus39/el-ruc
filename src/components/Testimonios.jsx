import { useState, useEffect, useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const REVIEWS = [
  {
    nombre: 'María García',
    poblacion: 'Ibi',
    producto: 'Pan de masa madre',
    texto: 'El mejor pan que he comido en mucho tiempo. Se nota que está hecho con cariño y con tiempo, no es un pan cualquiera. La corteza crujiente y la miga esponjosa son increíbles. Ya no compro pan en otro sitio.',
    estrellas: 5,
  },
  {
    nombre: 'Paco Martínez',
    poblacion: 'Alcoy',
    producto: 'Pizza artesanal',
    texto: 'Vine desde Alcoy recomendado por un amigo y mereció totalmente la pena. La pizza tiene una masa finísima por dentro y crujiente por fuera, se nota que fermenta de verdad. La de cuatro quesos, espectacular.',
    estrellas: 5,
  },
  {
    nombre: 'Laura i Jordi',
    poblacion: 'Ibi',
    producto: 'Tarta helada (boda)',
    texto: 'Encargamos la tarta helada para nuestra boda y superó todas las expectativas. El sabor, la presentación, la atención que nos dieron... Toda una experiencia. Los invitados no paraban de preguntar de dónde era.',
    estrellas: 5,
  },
  {
    nombre: 'Toni Pérez',
    poblacion: 'Tibi',
    producto: 'Bollería y desayunos',
    texto: 'Los sábados vengo con mis hijos a desayunar. Los croissants son una locura, y los niños se vuelven locos con los helados. Un rincón auténtico en Ibi donde se come de verdad.',
    estrellas: 5,
  },
  {
    nombre: 'Carmen López',
    poblacion: 'Ibi',
    producto: 'Hogaza de centeno',
    texto: 'Llevo dos años siendo clienta y no he encontrado nada igual en la comarca. Tienen un pan de centeno que es adictivo. El equipo es majísimo y siempre te recomiendan con honestidad qué está más fresco ese día.',
    estrellas: 5,
  },
  {
    nombre: 'Raúl i Begoña',
    poblacion: 'Banyeres de Mariola',
    producto: 'Pizza y helados',
    texto: 'Descubrimos El Ruc el verano pasado y desde entonces hemos vuelto mil veces. La combinación de pizza artesanal y helado casero de postre es imbatible. Un negocio de los que hacen pueblo.',
    estrellas: 5,
  },
]

function Estrellas({ n }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < n ? 'text-ruc-honey' : 'text-ruc-tan'}>★</span>
      ))}
    </div>
  )
}

export default function Testimonios() {
  const sectionRef = useIntersectionObserver('visible', { threshold: 0.1 })
  const [active, setActive]   = useState(0)
  const [paused, setPaused]   = useState(false)
  const intervalRef           = useRef(null)

  const count = REVIEWS.length

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setActive(a => (a + 1) % count)
    }, 4500)
    return () => clearInterval(intervalRef.current)
  }, [paused, count])

  const goTo = (i) => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 8000) }
  const prev  = () => goTo((active - 1 + count) % count)
  const next  = () => goTo((active + 1) % count)

  const review = REVIEWS[active]

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="fade-section py-24 md:py-32 bg-ruc-brown"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-ruc-honey font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
            El mejor ingrediente: vuestro cariño
          </h2>
        </div>

        {/* Carrusel */}
        <div
          className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12
                     border border-white/10"
        >
          {/* Quote mark */}
          <span className="font-display text-[8rem] text-ruc-honey/20 leading-none
                           absolute top-2 left-6 select-none">
            "
          </span>

          <div className="relative z-10">
            <Estrellas n={review.estrellas} />

            <p className="text-white/85 font-body text-lg md:text-xl leading-relaxed
                          my-6 italic font-light">
              "{review.texto}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-white font-body font-semibold text-base">
                  {review.nombre}
                </p>
                <p className="text-ruc-honey/70 font-body text-sm">
                  {review.poblacion} · {review.producto}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/20 text-white/60
                             hover:border-ruc-honey hover:text-ruc-honey transition-colors
                             flex items-center justify-center"
                  aria-label="Anterior"
                >
                  ←
                </button>
                <div className="flex gap-2">
                  {REVIEWS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === active ? 'bg-ruc-honey w-5' : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Ir a reseña ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/20 text-white/60
                             hover:border-ruc-honey hover:text-ruc-honey transition-colors
                             flex items-center justify-center"
                  aria-label="Siguiente"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Google rating */}
        <div className="text-center mt-10">
          <p className="text-ruc-cream/40 font-body text-sm">
            ⭐ 4.9 de 5 en Google · Más de 80 reseñas verificadas
          </p>
        </div>
      </div>
    </section>
  )
}
