import useIntersectionObserver from '../hooks/useIntersectionObserver'

const ITEMS = [
  { emoji: '🍞', label: 'Hogaza de masa madre', bg: 'from-amber-700 to-amber-900', span: 'col-span-2 row-span-2' },
  { emoji: '🍕', label: 'Pizza artesanal', bg: 'from-red-700 to-red-900', span: '' },
  { emoji: '🍦', label: 'Helado de temporada', bg: 'from-emerald-700 to-emerald-900', span: '' },
  { emoji: '🥐', label: 'Bollería del obrador', bg: 'from-yellow-700 to-yellow-900', span: '' },
  { emoji: '🌾', label: 'El amasado', bg: 'from-ruc-brown to-ruc-chocolate', span: '' },
  { emoji: '🔥', label: 'El horno de piedra', bg: 'from-orange-700 to-orange-900', span: '' },
  { emoji: '🫒', label: 'Pan de aceitunas', bg: 'from-stone-600 to-stone-800', span: '' },
  { emoji: '🍓', label: 'Helado de fresa', bg: 'from-rose-600 to-rose-800', span: '' },
  { emoji: '🏡', label: 'El local', bg: 'from-ruc-herb to-teal-800', span: 'col-span-2' },
]

export default function Galeria() {
  const sectionRef = useIntersectionObserver('visible', { threshold: 0.08 })

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="fade-section py-24 md:py-32 bg-ruc-beige/40"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subtitle">Con nuestros propios ojos</p>
          <h2 className="section-title">Galería</h2>
          <p className="text-ruc-chocolate/60 font-body text-base mt-3">
            Una imagen vale más que mil palabras. Y un buen pan, más que mil imágenes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3 md:gap-4">
          {ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg}
                         ${item.span} group cursor-pointer`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                <span className="text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110">
                  {item.emoji}
                </span>
                <span className="text-white/0 group-hover:text-white/90 font-body text-sm
                                 font-semibold text-center transition-all duration-300
                                 translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </span>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-ruc-chocolate/50 font-body text-sm mb-4">
            Síguenos en Instagram para ver las novedades de cada semana
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500
                       text-white font-body font-semibold px-7 py-3 rounded-full
                       hover:opacity-90 transition-opacity shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @elruc_ibi
          </a>
        </div>
      </div>
    </section>
  )
}
