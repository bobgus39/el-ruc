const BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api'

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export async function getProductos() {
  const items = await request('/productos')
  // Agrupa por categoría
  return items.reduce((acc, item) => {
    const cat = item.categoria?.toLowerCase() ?? 'otros'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(item)
    return acc
  }, {})
}

export async function getProductosByCategoria(categoria) {
  return request(`/productos?categoria=${categoria}`)
}

export async function enviarEncargo(data) {
  return request('/encargos', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
