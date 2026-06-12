import useIntersectionObserver from '../hooks/useIntersectionObserver'

const HORARIOS_SEMANA = [
  { dia: 'Lunes',     apertura: 'Cerrado',      desc: '' },
  { dia: 'Martes',    apertura: '08:00 – 14:00', desc: '✦ Pan de masa madre' },
  { dia: 'Miércoles', apertura: '08:00 – 14:00', desc: '' },
  { dia: 'Jueves',    apertura: '08:00 – 14:00', desc: '' },
  { dia: 'Viernes',   apertura: '08:00 – 20:00', desc: '✦ Pan de masa madre · Pizza' },
  { dia: 'Sábado',    apertura: '08:00 – 20:00', desc: '✦ Pizza · Helados' },
  { dia: 'Domingo',   apertura: '09:00 – 14:00', desc: '✦ Bollería especial' },
]

const DISPONIBILIDAD = [
  { producto: 'Pan de masa madre', dias: 'Martes y viernes', nota: 'Elaboración nocturna. Disponible a partir de las 8h.' },
  { producto: 'Pizzas artesanales', dias: 'Viernes y sábado', nota: 'Masa preparada el día anterior. Horario de tarde.' },
  { producto: 'Helados caseros', dias: 'Todos los días (temporada)', nota: 'De abril a octubre. Fuera de temporada, solo por encargo.' },
  { producto: 'Bollería artesanal', dias: 'Lunes a sábado', nota: 'Recién salida del horno cada mañana antes de las 9h.' },
  { producto: 'Pan especial / encargo', dias: 'Cualquier día', nota: 'Con 48h de antelación mínima. Consultar disponibilidad.' },
]

export default function Horarios() {
  const sectionRef = useIntersectionObserver('visible', { threshold: 0.1 })
  const today = new Date().getDay() // 0=domingo, 1=lunes...

  const dayMap = [6, 0, 1, 2, 3, 4, 5] // mapear para coincidir con nuestro array

  return (
    <section
      id="horarios"
      ref={sectionRef}
      className="fade-section py-24 md:py-32 bg-ruc-cream"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Cuándo encontrarnos</p>
          <h2 className="section-title">Horarios y temporada</h2>
          <p className="text-ruc-chocolate/65 font-body text-lg mt-4 max-w-xl mx-auto">
            Cada producto tiene su momento. Aquí te contamos cuándo elaboramos cada cosa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Horario semanal */}
          <div>
            <h3 className="font-display text-xl text-ruc-brown font-semibold mb-6">
              🕐 Horario de apertura
            </h3>
            <div className="bg-white rounded-2xl overflow-hidden border border-ruc-tan/20 shadow-sm">
              {HORARIOS_SEMANA.map((h, i) => {
                const isToday = dayMap[i] === today % 7
                const isClosed = h.apertura === 'Cerrado'
                return (
                  <div
                    key={h.dia}
                    className={`flex items-center justify-between px-5 py-4 border-b last:border-0 border-ruc-beige
                                ${isToday ? 'bg-ruc-honey/8 border-l-4 border-l-ruc-honey' : ''}
                                ${isClosed ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="w-2 h-2 rounded-full bg-ruc-honey flex-shrink-0 animate-pulse" />
                      )}
                      <span className={`font-body font-semibold text-sm ${isToday ? 'text-ruc-honey' : 'text-ruc-brown'}`}>
                        {h.dia}
                        {isToday && <span className="text-xs font-normal ml-2 text-ruc-honey/70">← hoy</span>}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`font-body text-sm ${isClosed ? 'text-ruc-chocolate/40' : 'text-ruc-chocolate font-medium'}`}>
                        {h.apertura}
                      </span>
                      {h.desc && (
                        <p className="text-ruc-honey text-xs font-body mt-0.5">{h.desc}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Disponibilidad por producto */}
          <div>
            <h3 className="font-display text-xl text-ruc-brown font-semibold mb-6">
              📅 Disponibilidad por producto
            </h3>
            <div className="flex flex-col gap-4">
              {DISPONIBILIDAD.map(item => (
                <div
                  key={item.producto}
                  className="bg-white rounded-2xl p-5 border border-ruc-tan/20 card-hover"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h4 className="font-display font-semibold text-ruc-brown text-base">
                      {item.producto}
                    </h4>
                    <span className="bg-ruc-honey/15 text-ruc-honey text-xs font-semibold
                                     px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      {item.dias}
                    </span>
                  </div>
                  <p className="text-ruc-chocolate/60 font-body text-sm">{item.nota}</p>
                </div>
              ))}
            </div>

            {/* Temporada aviso */}
            <div className="mt-6 bg-ruc-herb/10 border border-ruc-herb/20 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🌿</span>
                <div>
                  <p className="font-display font-semibold text-ruc-herb text-base mb-1">
                    Productos de temporada
                  </p>
                  <p className="text-ruc-chocolate/65 font-body text-sm leading-relaxed">
                    Algunos sabores de helado, panes especiales y pizzas de temporada varían
                    según el mercado local. Sigue nuestro Instagram para ver las novedades
                    de cada semana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
