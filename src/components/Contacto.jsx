import useIntersectionObserver from '../hooks/useIntersectionObserver'

const REDES = [
  {
    name: 'Instagram',
    handle: '@elruc_ibi',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Facebook',
    handle: 'El Ruc Ibi',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: 'from-blue-600 to-blue-800',
  },
]

export default function Contacto() {
  const sectionRef = useIntersectionObserver('visible', { threshold: 0.08 })

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="fade-section py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Estamos aquí</p>
          <h2 className="section-title">Contacto y ubicación</h2>
          <p className="text-ruc-chocolate/60 font-body text-lg mt-4 max-w-xl mx-auto">
            Ven a visitarnos. El aroma del pan recién hecho ya te irá guiando.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-ruc-tan/20 h-[400px] lg:h-auto">
            <iframe
              title="Ubicación El Ruc"
              src="https://maps.google.com/maps?q=Calle+Ja%C3%A9n+35+Ibi+Alicante&t=&z=17&ie=UTF8&iwloc=&output=embed&hl=es"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-7">

            {/* Dirección */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-ruc-honey/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-ruc-honey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-ruc-brown text-lg mb-1">Dirección</p>
                <p className="text-ruc-chocolate/70 font-body text-base">
                  C. Jaén, 35<br />
                  03440 Ibi, Alicante
                </p>
                <a
                  href="https://maps.google.com/?q=C.+Jaén+35+03440+Ibi+Alicante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ruc-honey font-body text-sm font-semibold hover:underline mt-1 block"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-ruc-honey/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-ruc-honey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-ruc-brown text-lg mb-1">Teléfono</p>
                <a href="tel:+34600000000" className="text-ruc-chocolate/70 font-body text-base hover:text-ruc-honey transition-colors">
                  600 000 000
                </a>
                <p className="text-ruc-chocolate/40 font-body text-sm mt-0.5">
                  Lun–Sáb · Horario comercial
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-ruc-honey/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-ruc-honey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-ruc-brown text-lg mb-1">Email</p>
                <a href="mailto:hola@elruc.es" className="text-ruc-chocolate/70 font-body text-base hover:text-ruc-honey transition-colors">
                  hola@elruc.es
                </a>
                <p className="text-ruc-chocolate/40 font-body text-sm mt-0.5">
                  Respondemos en 24h laborables
                </p>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <p className="font-display font-semibold text-ruc-brown text-lg mb-4">Síguenos</p>
              <div className="flex gap-3">
                {REDES.map(red => (
                  <a
                    key={red.name}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 bg-gradient-to-r ${red.color}
                               text-white font-body font-semibold text-sm
                               px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-md`}
                  >
                    {red.icon}
                    <span>{red.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Horario resumido */}
            <div className="bg-ruc-cream rounded-2xl p-5 border border-ruc-tan/20">
              <p className="font-display font-semibold text-ruc-brown text-base mb-3">
                🕐 Horario rápido
              </p>
              <div className="grid grid-cols-2 gap-y-2 text-sm font-body">
                {[
                  ['Mar – Jue', '08:00 – 14:00'],
                  ['Viernes', '08:00 – 20:00'],
                  ['Sábado', '08:00 – 20:00'],
                  ['Domingo', '09:00 – 14:00'],
                  ['Lunes', 'Cerrado'],
                ].map(([d, h]) => (
                  <>
                    <span key={d} className="text-ruc-chocolate/60">{d}</span>
                    <span key={h} className={`font-medium ${h === 'Cerrado' ? 'text-ruc-chocolate/30' : 'text-ruc-brown'}`}>
                      {h}
                    </span>
                  </>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
