import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Inicio',     href: '#inicio' },
  { label: 'Nosotros',   href: '#nosotros' },
  { label: 'Productos',  href: '#productos' },
  { label: 'Carta',      href: '#carta' },
  { label: 'El Obrador', href: '#obrador' },
  { label: 'Encargos',   href: '#encargos' },
  { label: 'Contacto',   href: '#contacto' },
]

function scrollTo(href, cb) {
  const el = document.getElementById(href.replace('#', ''))
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  cb?.()
}

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Cierra el menú si se redimensiona a desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 640) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Bloquea scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-ruc-cream/96 backdrop-blur-md shadow-[0_2px_20px_rgba(107,63,30,0.12)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">

          {/* Brand */}
          <button
            onClick={() => scrollTo('#inicio', () => setOpen(false))}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <span className="font-display text-2xl font-bold text-ruc-brown tracking-tight">
              El Ruc
            </span>
            <span className="hidden sm:block text-ruc-honey text-[10px] font-body font-semibold uppercase tracking-widest leading-none mt-0.5">
              Artesanal
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-ruc-brown/80 hover:text-ruc-honey font-body font-medium text-sm
                           px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-ruc-honey/10"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <button
            onClick={() => scrollTo('#encargos')}
            className="hidden sm:block btn-primary text-sm py-2 px-5 flex-shrink-0"
          >
            Hacer un encargo
          </button>

          {/* Hamburger — solo móvil */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className={`sm:hidden flex flex-col justify-center items-center w-10 h-10
                       rounded-xl transition-colors flex-shrink-0
                       ${open || scrolled ? 'hover:bg-ruc-beige' : 'hover:bg-white/20'}`}
          >
            {['top', 'mid', 'bot'].map((id, i) => (
              <span
                key={id}
                className={`block w-6 h-0.5 rounded-full transition-all duration-300
                  ${open ? 'bg-ruc-honey' : scrolled ? 'bg-ruc-brown' : 'bg-white'}
                  ${i === 0 ? (open ? 'rotate-45 translate-y-[7px]'  : '-translate-y-[5px]') : ''}
                  ${i === 1 ? (open ? 'opacity-0 scale-x-0'          : 'opacity-100')        : ''}
                  ${i === 2 ? (open ? '-rotate-45 -translate-y-[5px]' : 'translate-y-[5px]') : ''}
                `}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 sm:hidden bg-ruc-brown
                    shadow-2xl
                    transition-all duration-300 ease-out overflow-hidden
                    ${open ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col px-5 py-5 gap-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href, () => setOpen(false))}
              className="w-full text-left text-ruc-cream font-body font-semibold text-lg
                         py-3.5 px-5 rounded-xl hover:bg-white/10 active:bg-white/20
                         border-b border-white/10 last:border-0 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#encargos', () => setOpen(false))}
            className="mt-4 mb-2 w-full bg-ruc-honey text-white font-body font-semibold
                       text-base py-3.5 rounded-full hover:bg-ruc-mustard transition-colors
                       shadow-lg active:scale-95"
          >
            Hacer un encargo
          </button>
        </nav>
      </div>
    </>
  )
}
