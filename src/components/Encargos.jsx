import { useState } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { enviarEncargo } from '../services/api'

const PRODUCTOS_ENCARGO = [
  'Pan de masa madre (especial)',
  'Hogaza personalizada',
  'Pan sin gluten (consultar)',
  'Pizza para grupo / evento',
  'Tarta helada',
  'Helados para evento',
  'Bollería para desayuno de grupo',
  'Otro (describir en el mensaje)',
]

const fieldClass =
  'w-full bg-ruc-cream border border-ruc-tan/50 rounded-xl px-4 py-3 text-sm ' +
  'font-body text-ruc-chocolate placeholder-ruc-chocolate/35 ' +
  'focus:outline-none focus:border-ruc-honey focus:ring-2 focus:ring-ruc-honey/20 ' +
  'transition-colors duration-200'

const labelClass = 'block text-sm font-medium font-body text-ruc-brown mb-1.5'

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col">
      <label className={labelClass}>
        {label}{required && <span className="text-ruc-honey ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function Encargos() {
  const sectionRef = useIntersectionObserver('visible', { threshold: 0.1 })

  const [form, setForm] = useState({
    nombre: '', telefono: '', email: '',
    producto: '', cantidad: '', fecha: '', mensaje: '',
  })
  const [status, setStatus] = useState('idle')

  const set = (field) => (e) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.nombre || !form.telefono || !form.producto || !form.fecha) return
    setStatus('sending')
    try {
      await enviarEncargo(form)
      setStatus('ok')
      setForm({ nombre: '', telefono: '', email: '', producto: '', cantidad: '', fecha: '', mensaje: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="encargos"
      ref={sectionRef}
      className="fade-section py-24 md:py-32 bg-ruc-beige/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Info izquierda */}
          <div>
            <p className="section-subtitle">Personaliza tu pedido</p>
            <h2 className="section-title mb-6">Encargos y<br />pedidos especiales</h2>
            <p className="text-ruc-chocolate/70 font-body text-lg leading-relaxed mb-6">
              ¿Necesitas pan especial para un evento? ¿Una tarta helada para una celebración?
              ¿Pizzas para un grupo? Lo hacemos con el mismo mimo de siempre, solo que
              a medida para ti.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { emoji: '🍞', title: 'Pan para eventos', desc: 'Hogazas, barras y panes especiales para bodas, celebraciones o negocios de hostelería.' },
                { emoji: '🍕', title: 'Pizzas para grupos', desc: 'Para reuniones, cumpleaños o eventos. Consulta disponibilidad y cantidades.' },
                { emoji: '🍦', title: 'Tartas heladas', desc: 'Personalizadas con tus sabores favoritos. Con antelación mínima de 48h.' },
                { emoji: '🥐', title: 'Desayunos corporativos', desc: 'Surtido de bollería artesanal para reuniones, formaciones o eventos de empresa.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                  <div>
                    <h4 className="font-display font-semibold text-ruc-brown text-base mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-ruc-chocolate/65 font-body text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-ruc-honey/10 border border-ruc-honey/30 rounded-2xl p-5">
              <p className="text-ruc-brown font-body text-sm leading-relaxed">
                <strong className="font-semibold">⏰ Antelación mínima recomendada:</strong> 48h
                para encargos sencillos, 5–7 días para pedidos grandes o personalizados.
                Te llamamos para confirmar disponibilidad.
              </p>
            </div>
          </div>

          {/* Formulario derecha */}
          <div className="bg-white rounded-3xl p-7 md:p-9 shadow-xl shadow-ruc-brown/5 border border-ruc-tan/20">
            <h3 className="font-display text-xl text-ruc-brown font-semibold mb-6">
              Solicitar encargo
            </h3>

            {status === 'ok' ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="font-display text-xl text-ruc-brown font-semibold mb-2">
                  ¡Encargo recibido!
                </h4>
                <p className="text-ruc-chocolate/65 font-body">
                  Te llamamos en las próximas horas para confirmar los detalles. ¡Gracias!
                </p>
                <button onClick={() => setStatus('idle')} className="btn-primary mt-6 text-sm">
                  Hacer otro encargo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Nombre + Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nombre" required>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={set('nombre')}
                      required
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Teléfono" required>
                    <input
                      type="tel"
                      placeholder="6XX XXX XXX"
                      value={form.telefono}
                      onChange={set('telefono')}
                      required
                      className={fieldClass}
                    />
                  </Field>
                </div>

                {/* Email */}
                <Field label="Email (opcional)">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={set('email')}
                    className={fieldClass}
                  />
                </Field>

                {/* Producto */}
                <Field label="Producto / tipo de encargo" required>
                  <select
                    value={form.producto}
                    onChange={set('producto')}
                    required
                    className={fieldClass}
                  >
                    <option value="" disabled>¿Qué necesitas?</option>
                    {PRODUCTOS_ENCARGO.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </Field>

                {/* Cantidad + Fecha */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Cantidad">
                    <input
                      type="text"
                      placeholder="Ej: 2 hogazas"
                      value={form.cantidad}
                      onChange={set('cantidad')}
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Fecha de recogida" required>
                    <input
                      type="date"
                      value={form.fecha}
                      onChange={set('fecha')}
                      required
                      className={fieldClass}
                    />
                  </Field>
                </div>

                {/* Mensaje */}
                <Field label="Mensaje o detalles">
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos lo que necesitas, ingredientes especiales, alergias, personalización..."
                    value={form.mensaje}
                    onChange={set('mensaje')}
                    className={`${fieldClass} resize-none`}
                  />
                </Field>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-body">
                    Hubo un problema al enviar el encargo. Llámanos directamente o inténtalo de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar encargo →'}
                </button>

                <p className="text-center text-ruc-chocolate/40 text-xs font-body">
                  También puedes llamarnos directamente al{' '}
                  <a href="tel:+34600000000" className="text-ruc-honey hover:underline">
                    600 000 000
                  </a>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
