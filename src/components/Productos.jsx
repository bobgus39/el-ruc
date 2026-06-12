import { useState } from 'react'
import { Tabs, Tab } from '@heroui/react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const CATEGORIAS = [
  {
    key: 'panaderia',
    label: 'Panadería',
    emoji: '🍞',
    desc: 'Pan de masa madre, hogazas, barras y bollería elaborados cada día con fermentación lenta.',
    color: 'from-amber-800 to-ruc-brown',
    accent: 'bg-amber-100 text-amber-800',
    items: [
      { name: 'Hogaza de masa madre', desc: 'Fermentación de 24h, corteza crujiente y miga abierta. La reina del obrador.' },
      { name: 'Pan de centeno integral', desc: 'Intenso y nutritivo, elaborado con centeno de molino tradicional.' },
      { name: 'Barra artesanal', desc: 'Crujiente por fuera, tierna por dentro. El pan del día a día.' },
      { name: 'Pan de aceitunas', desc: 'Olivas de la comarca en cada mordisco. Perfecto con queso local.' },
      { name: 'Trenza de mantequilla', desc: 'Bollería artesanal con mantequilla de calidad. Desayuno de lujo.' },
      { name: 'Focaccia de romero', desc: 'Esponjosa, aceitosa y aromática. Inspiración mediterránea.' },
    ],
  },
  {
    key: 'pizzas',
    label: 'Pizzas',
    emoji: '🍕',
    desc: 'Masa de fermentación lenta, tomate natural y los mejores ingredientes de temporada.',
    color: 'from-red-800 to-red-600',
    accent: 'bg-red-100 text-red-800',
    items: [
      { name: 'Margarita clásica', desc: 'Tomate natural, mozzarella fresca y albahaca. La sencillez perfecta.' },
      { name: 'Cuatro quesos', desc: 'Mozzarella, gorgonzola, parmesano y brie. Un festival de sabores.' },
      { name: 'Pizza del obrador', desc: 'La especial de temporada: ingredientes del mercado local. Pregunta hoy.' },
      { name: 'Diavola', desc: 'Tomate, mozzarella y salami picante. Para los que saben lo que quieren.' },
      { name: 'Vegana de temporada', desc: 'Verduras de temporada asadas, sin queso. Ligera y sabrosa.' },
      { name: 'Blanca con trufa', desc: 'Sin tomate, crema de trufa, rúcula y parmesano. Fin de semana.' },
    ],
  },
  {
    key: 'helados',
    label: 'Helados',
    emoji: '🍦',
    desc: 'Elaborados artesanalmente con frutas naturales, leche fresca y sin colorantes artificiales.',
    color: 'from-ruc-herb to-teal-600',
    accent: 'bg-green-100 text-green-800',
    items: [
      { name: 'Vainilla de Madagascar', desc: 'La clásica de siempre, con vainilla auténtica. Cremosa y elegante.' },
      { name: 'Limón de Alicante', desc: 'Intensamente cítrico, elaborado con limones de la comarca. Refrescante.' },
      { name: 'Chocolate negro 70%', desc: 'Para los amantes del chocolate de verdad. Potente y sedoso.' },
      { name: 'Turrón de Jijona', desc: 'Un homenaje a nuestra tierra. Solo en temporada navideña.' },
      { name: 'Fresa y albahaca', desc: 'La combinación que sorprende y enamora. Fruta de temporada.' },
      { name: 'Sandía sin azúcar', desc: 'Refrescante y natural. Opción saludable para el verano.' },
    ],
  },
]

export default function Productos() {
  const [selected, setSelected] = useState('panaderia')
  const sectionRef = useIntersectionObserver('visible', { threshold: 0.1 })

  const cat = CATEGORIAS.find(c => c.key === selected)

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="fade-section py-24 md:py-32 bg-ruc-beige/50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subtitle">Lo que hacemos</p>
          <h2 className="section-title">Nuestros productos</h2>
          <p className="text-ruc-chocolate/65 font-body text-lg max-w-2xl mx-auto mt-4">
            Tres categorías, una filosofía: ingredientes reales, manos que trabajan
            y el tiempo necesario para hacerlo bien.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <Tabs
            selectedKey={selected}
            onSelectionChange={setSelected}
            variant="light"
            classNames={{
              base: 'bg-ruc-cream rounded-2xl p-1.5 shadow-sm border border-ruc-tan/30',
              tabList: 'gap-1',
              tab: 'px-5 py-2.5 font-body font-semibold text-sm rounded-xl text-ruc-brown/70 data-[selected=true]:bg-ruc-honey data-[selected=true]:text-white transition-all',
              cursor: 'hidden',
            }}
          >
            {CATEGORIAS.map(c => (
              <Tab
                key={c.key}
                title={
                  <span className="flex items-center gap-2">
                    <span>{c.emoji}</span>
                    <span className="hidden sm:inline">{c.label}</span>
                  </span>
                }
              />
            ))}
          </Tabs>
        </div>

        {/* Category content */}
        {cat && (
          <div key={cat.key} style={{ animation: 'fadeIn 0.4s ease' }}>
            {/* Category header */}
            <div className={`rounded-3xl bg-gradient-to-r ${cat.color} p-8 md:p-10 mb-8 text-white`}>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-6xl">{cat.emoji}</span>
                <div>
                  <h3 className="font-display text-3xl font-semibold mb-2">{cat.label}</h3>
                  <p className="text-white/80 font-body text-base max-w-lg">{cat.desc}</p>
                </div>
              </div>
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.items.map((item, i) => (
                <div
                  key={item.name}
                  className="bg-ruc-cream rounded-2xl p-6 border border-ruc-tan/30
                             card-hover cursor-default"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${cat.accent}`}>
                    {cat.label}
                  </span>
                  <h4 className="font-display text-lg font-semibold text-ruc-brown mb-2">
                    {item.name}
                  </h4>
                  <p className="text-ruc-chocolate/65 font-body text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('carta')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-primary"
          >
            Ver carta completa con precios →
          </button>
        </div>
      </div>
    </section>
  )
}
