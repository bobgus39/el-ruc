import useIntersectionObserver from '../hooks/useIntersectionObserver'

const PASOS = [
  {
    num: '01',
    icon: '🌾',
    title: 'La selección',
    desc: 'Todo empieza eligiendo la harina adecuada. Trabajamos con harinas de molinos tradicionales, sin blanquear, con toda su fibra y sabor intactos.',
    detail: 'Harina de fuerza, centeno, espelta y trigo integral según la elaboración del día.',
  },
  {
    num: '02',
    icon: '💧',
    title: 'El fermento',
    desc: 'Nuestra masa madre lleva activa desde el primer día que abrimos el obrador. Cada mañana la refrescamos con agua y harina. Ella hace el resto.',
    detail: 'Fermentación lenta de 12 a 24 horas para desarrollar aromas y mejorar la digestibilidad.',
  },
  {
    num: '03',
    icon: '🙌',
    title: 'El amasado',
    desc: 'A mano. Siempre a mano. Notamos la textura, la temperatura, la elasticidad. La máquina no siente. Nosotros sí.',
    detail: 'El amasado manual permite detectar el punto exacto de la masa y adaptarse a cada día.',
  },
  {
    num: '04',
    icon: '⏱️',
    title: 'El reposo',
    desc: 'La paciencia es el ingrediente más difícil de conseguir en la industria. Aquí la tenemos. Los panes reposan en frío para desarrollar sabor.',
    detail: 'El frío controla la fermentación y crea los aromas complejos del buen pan artesanal.',
  },
  {
    num: '05',
    icon: '🔥',
    title: 'El horno',
    desc: 'El momento de la verdad. El horno de piedra a alta temperatura crea la corteza crujiente que distingue el pan artesanal del industrial.',
    detail: 'Cocción en horno de piedra a 250°C con vapor al inicio para máxima expansión y corteza perfecta.',
  },
  {
    num: '06',
    icon: '❤️',
    title: 'El resultado',
    desc: 'Cada pieza que sale del horno es única. La miga abierta, el aroma, la corteza que suena al partirla. Eso es lo que llevamos a tu mesa.',
    detail: 'Sin conservantes, sin aditivos. Solo harina, agua, sal y el tiempo que las cosas necesitan.',
  },
]

const HELADOS_PROCESO = [
  { emoji: '🍓', title: 'Fruta de temporada', desc: 'Compramos la fruta en el mercado local cada semana según lo que hay en temporada.' },
  { emoji: '🥛', title: 'Leche fresca', desc: 'Usamos leche fresca de proximidad, no en polvo ni UHT. La diferencia se nota.' },
  { emoji: '⚗️', title: 'Sin colorantes', desc: 'El color viene de la fruta. El sabor, también. Sin artificios.' },
  { emoji: '🌡️', title: 'Maduración en frío', desc: 'La mezcla reposa en frío antes de mantecar. Así los sabores se integran mejor.' },
]

export default function Obrador() {
  const sectionRef = useIntersectionObserver('visible', { threshold: 0.08 })

  return (
    <section
      id="obrador"
      ref={sectionRef}
      className="fade-section py-24 md:py-32 bg-ruc-warm"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">El proceso</p>
          <h2 className="section-title">El obrador</h2>
          <p className="text-ruc-chocolate/65 font-body text-lg max-w-2xl mx-auto mt-4">
            Aquí no hay nada precocinado. Cada producto tiene su tiempo,
            su proceso y sus manos. Esto es lo que hay detrás de lo que comes.
          </p>
        </div>

        {/* Pan timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-4xl">🍞</span>
            <h3 className="font-display text-2xl md:text-3xl text-ruc-brown font-semibold">
              Cómo hacemos el pan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PASOS.map((paso, i) => (
              <div
                key={paso.num}
                className="relative bg-white rounded-2xl p-6 border border-ruc-tan/20
                           card-hover overflow-hidden"
              >
                {/* Background number */}
                <span className="absolute top-2 right-4 font-display text-7xl font-bold
                                 text-ruc-beige select-none leading-none">
                  {paso.num}
                </span>
                <div className="relative z-10">
                  <span className="text-3xl mb-3 block">{paso.icon}</span>
                  <h4 className="font-display font-semibold text-ruc-brown text-lg mb-2">
                    {paso.title}
                  </h4>
                  <p className="text-ruc-chocolate/70 font-body text-sm leading-relaxed mb-3">
                    {paso.desc}
                  </p>
                  <p className="text-ruc-honey font-body text-xs font-semibold leading-relaxed
                                border-t border-ruc-beige pt-3">
                    ↳ {paso.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pizza section */}
        <div className="bg-gradient-to-r from-ruc-brown to-ruc-chocolate rounded-3xl
                        p-8 md:p-12 text-white mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-5xl block mb-4">🍕</span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                La masa de pizza: nuestra religión
              </h3>
              <p className="text-ruc-cream/80 font-body leading-relaxed mb-4">
                La masa de pizza de El Ruc no es una masa cualquiera. Partimos de nuestra
                masa madre, añadimos harina de fuerza italiana tipo 00 y dejamos fermentar
                en frío durante 48 horas mínimo.
              </p>
              <p className="text-ruc-cream/80 font-body leading-relaxed">
                El resultado es una masa ligera, con burbujas de aire, de bordes altos y
                crujientes, con ese sabor a pan de calidad que distingue la pizza artesanal
                de cualquier otra cosa.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Fermentación', value: '48h' },
                { label: 'Temperatura', value: '250°C' },
                { label: 'Harina', value: 'Tipo 00' },
                { label: 'Base', value: 'Masa madre' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white/10 rounded-2xl p-5 text-center">
                  <p className="font-display text-3xl font-bold text-ruc-honey mb-1">{value}</p>
                  <p className="text-ruc-cream/60 font-body text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Helados section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🍦</span>
            <h3 className="font-display text-2xl md:text-3xl text-ruc-brown font-semibold">
              Helados: el sabor de la fruta de verdad
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HELADOS_PROCESO.map(item => (
              <div key={item.title} className="bg-ruc-herb/10 rounded-2xl p-6 text-center card-hover">
                <span className="text-4xl block mb-3">{item.emoji}</span>
                <h4 className="font-display font-semibold text-ruc-brown text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-ruc-chocolate/65 font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
