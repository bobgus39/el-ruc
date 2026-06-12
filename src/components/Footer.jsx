const NAV_LINKS = [
  { label: 'Inicio',      href: '#inicio' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Productos',   href: '#productos' },
  { label: 'Carta',       href: '#carta' },
  { label: 'El Obrador',  href: '#obrador' },
  { label: 'Encargos',    href: '#encargos' },
  { label: 'Horarios',    href: '#horarios' },
  { label: 'Contacto',    href: '#contacto' },
]

const scrollTo = (href) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ruc-chocolate text-ruc-cream/70 font-body">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-bold text-ruc-cream mb-2">El Ruc</h3>
            <p className="text-ruc-honey font-semibold text-xs uppercase tracking-widest mb-4">
              Artesanal · Ibi · Alicante
            </p>
            <p className="text-sm leading-relaxed text-ruc-cream/60 mb-5">
              Panadería artesanal, pizzas caseras y helados naturales.
              Hecho con harina, fuego y mucho cariño desde 2009.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                            hover:bg-ruc-honey/80 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                            hover:bg-blue-600/80 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-ruc-cream font-semibold text-sm uppercase tracking-widest mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-ruc-cream/60 hover:text-ruc-honey transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-ruc-cream font-semibold text-sm uppercase tracking-widest mb-5">
              Productos
            </h4>
            <ul className="space-y-2.5 text-sm text-ruc-cream/60">
              {['Pan de masa madre', 'Hogazas artesanales', 'Bollería del obrador',
                'Pizzas caseras', 'Helados naturales', 'Tartas heladas'].map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-ruc-cream font-semibold text-sm uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <address className="not-italic space-y-3 text-sm text-ruc-cream/60">
              <p>📍 C. Jaén, 35<br />03440 Ibi, Alicante</p>
              <p>
                📞{' '}
                <a href="tel:+34600000000" className="hover:text-ruc-honey transition-colors">
                  600 000 000
                </a>
              </p>
              <p>
                ✉️{' '}
                <a href="mailto:hola@elruc.es" className="hover:text-ruc-honey transition-colors">
                  hola@elruc.es
                </a>
              </p>
              <p className="text-xs text-ruc-cream/40 leading-relaxed pt-1">
                Mar–Jue: 8h–14h<br />
                Vie–Sáb: 8h–20h<br />
                Dom: 9h–14h · Lun: Cerrado
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between
                        items-center gap-4 text-xs text-ruc-cream/30">
          <p>© {year} El Ruc · Todos los derechos reservados</p>
          <div className="flex gap-5">
            <button className="hover:text-ruc-cream/60 transition-colors">Aviso legal</button>
            <button className="hover:text-ruc-cream/60 transition-colors">Política de privacidad</button>
            <button className="hover:text-ruc-cream/60 transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
