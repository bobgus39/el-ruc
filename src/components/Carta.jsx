import { useState, useEffect } from 'react'
import { Tabs, Tab, Chip } from '@heroui/react'
import { getProductos } from '../services/api'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const FALLBACK = {
  panaderia: [
    { id: 1, nombre: 'Hogaza de masa madre (pequeña)', descripcion: 'Fermentación 24h, corteza dorada, miga abierta y alveolada.', precio: '4.50', alergenos: 'Gluten' },
    { id: 2, nombre: 'Hogaza de masa madre (grande)', descripcion: 'La misma receta, tamaño familiar. Para compartir.', precio: '7.50', alergenos: 'Gluten' },
    { id: 3, nombre: 'Pan de centeno integral', descripcion: 'Denso, nutritivo y con carácter. Ideal con embutidos.', precio: '3.90', alergenos: 'Gluten' },
    { id: 4, nombre: 'Barra artesanal', descripcion: 'La barra de siempre, hecha con tiempo y cariño.', precio: '1.20', alergenos: 'Gluten' },
    { id: 5, nombre: 'Pan de aceitunas', descripcion: 'Olivas de la comarca integradas en cada rebanada.', precio: '3.50', alergenos: 'Gluten' },
    { id: 6, nombre: 'Trenza de mantequilla', descripcion: 'Bollería de horno, tierna y aromática. Desayuno ideal.', precio: '2.20', alergenos: 'Gluten, Lácteos, Huevos' },
    { id: 7, nombre: 'Croissant artesanal', descripcion: 'Laminado a mano, mantequilla francesa. Hojaldrado perfecto.', precio: '1.80', alergenos: 'Gluten, Lácteos' },
    { id: 8, nombre: 'Focaccia de romero', descripcion: 'Esponjosa y aromática con aceite de oliva virgen extra.', precio: '2.80', alergenos: 'Gluten' },
  ],
  pizzas: [
    { id: 9, nombre: 'Margarita clásica', descripcion: 'Tomate natural, mozzarella fior di latte y albahaca fresca.', precio: '11.00', alergenos: 'Gluten, Lácteos' },
    { id: 10, nombre: 'Diavola', descripcion: 'Tomate, mozzarella y salami picante artesanal.', precio: '12.50', alergenos: 'Gluten, Lácteos' },
    { id: 11, nombre: 'Cuatro quesos', descripcion: 'Mozzarella, gorgonzola, parmesano y brie sobre base de crema.', precio: '13.50', alergenos: 'Gluten, Lácteos' },
    { id: 12, nombre: 'Pizza del obrador', descripcion: 'Especial de temporada. Ingredientes del mercado. Consulta disponibilidad.', precio: '13.00', alergenos: 'Gluten, Lácteos' },
    { id: 13, nombre: 'Vegana de temporada', descripcion: 'Sin queso, verduras asadas de temporada, base tomate y AOVE.', precio: '11.50', alergenos: 'Gluten' },
    { id: 14, nombre: 'Blanca con trufa', descripcion: 'Sin tomate, crema de trufa, rúcula, cherry y parmesano.', precio: '14.50', alergenos: 'Gluten, Lácteos' },
  ],
  helados: [
    { id: 15, nombre: 'Vainilla de Madagascar', descripcion: 'Clásica y cremosa. Elaborada con vaina de vainilla natural.', precio: '2.50', alergenos: 'Lácteos, Huevos' },
    { id: 16, nombre: 'Chocolate negro 70%', descripcion: 'Intenso y sedoso. Cacao de origen seleccionado.', precio: '2.50', alergenos: 'Lácteos, Huevos' },
    { id: 17, nombre: 'Limón de Alicante', descripcion: 'Sorbete intenso de limón de la comarca. Sin lactosa.', precio: '2.20', alergenos: 'Ninguno' },
    { id: 18, nombre: 'Turrón de Jijona', descripcion: 'Homenaje a nuestra tierra. Solo temporada navideña.', precio: '2.80', alergenos: 'Lácteos, Frutos secos' },
    { id: 19, nombre: 'Fresa y albahaca', descripcion: 'Combinación sorprendente con fresas de temporada.', precio: '2.50', alergenos: 'Lácteos' },
    { id: 20, nombre: 'Sandía sin azúcar', descripcion: 'Sorbete natural 100%, sin azúcares añadidos. Vegano.', precio: '2.20', alergenos: 'Ninguno' },
    { id: 21, nombre: 'Pistacho', descripcion: 'Cremoso y elegante. Con pistachos de primera calidad.', precio: '2.80', alergenos: 'Lácteos, Frutos secos' },
  ],
}

const TAB_CONFIG = [
  { key: 'panaderia', label: 'Panadería', emoji: '🍞', color: 'bg-amber-100 text-amber-900' },
  { key: 'pizzas',    label: 'Pizzas',    emoji: '🍕', color: 'bg-red-100 text-red-900' },
  { key: 'helados',   label: 'Helados',   emoji: '🍦', color: 'bg-green-100 text-green-900' },
]

function ProductCard({ item, color }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-ruc-tan/20 card-hover flex flex-col gap-3">
      <div className="flex justify-between items-start gap-3">
        <h4 className="font-display font-semibold text-ruc-brown text-base leading-snug flex-1">
          {item.nombre}
        </h4>
        <span className="font-body font-bold text-ruc-honey text-lg whitespace-nowrap">
          {parseFloat(item.precio).toFixed(2)} €
        </span>
      </div>
      <p className="text-ruc-chocolate/65 font-body text-sm leading-relaxed flex-1">
        {item.descripcion}
      </p>
      {item.alergenos && item.alergenos !== 'Ninguno' && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-ruc-beige">
          <span className="text-xs text-ruc-chocolate/40 font-body">Alérgenos:</span>
          {item.alergenos.split(',').map(a => (
            <Chip key={a.trim()} size="sm" variant="flat" className={`text-xs ${color}`}>
              {a.trim()}
            </Chip>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Carta() {
  const [selected, setSelected]   = useState('panaderia')
  const [productos, setProductos] = useState(FALLBACK)
  const [loading, setLoading]     = useState(false)
  const sectionRef = useIntersectionObserver('visible', { threshold: 0.08 })

  useEffect(() => {
    setLoading(true)
    getProductos()
      .then(data => {
        if (data && Object.keys(data).length > 0) setProductos(data)
      })
      .catch(() => {/* usa fallback */})
      .finally(() => setLoading(false))
  }, [])

  const tabInfo = TAB_CONFIG.find(t => t.key === selected)
  const items   = productos[selected] ?? []

  return (
    <section
      id="carta"
      ref={sectionRef}
      className="fade-section py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subtitle">Lo que te espera</p>
          <h2 className="section-title">Carta completa</h2>
          <p className="text-ruc-chocolate/60 font-body text-base mt-4 max-w-xl mx-auto">
            Precios actualizados. Los productos de temporada pueden variar.
            Consulta disponibilidad en el local.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-1">
          <Tabs
            selectedKey={selected}
            onSelectionChange={setSelected}
            variant="underlined"
            classNames={{
              base: '',
              tabList: 'gap-6 border-b border-ruc-tan/30 pb-0',
              tab: 'font-body font-semibold text-sm pb-3 text-ruc-brown/60 data-[selected=true]:text-ruc-honey',
              cursor: 'bg-ruc-honey h-0.5',
            }}
          >
            {TAB_CONFIG.map(t => (
              <Tab
                key={t.key}
                title={
                  <span className="flex items-center gap-2">
                    {t.emoji} {t.label}
                  </span>
                }
              />
            ))}
          </Tabs>
        </div>

        {/* Product grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-ruc-beige/50 rounded-2xl h-36 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map(item => (
              <ProductCard key={item.id} item={item} color={tabInfo?.color ?? ''} />
            ))}
          </div>
        )}

        {/* Alérgenos disclaimer */}
        <p className="text-center text-ruc-chocolate/40 text-xs font-body mt-8">
          ℹ️ Si tienes alergias o intolerancias, consulta con nuestro equipo antes de pedir.
          Elaboramos en un obrador donde se manipulan frutos secos, gluten y lácteos.
        </p>
      </div>
    </section>
  )
}
