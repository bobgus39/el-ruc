import Hero          from '../components/Hero'
import SobreNosotros from '../components/SobreNosotros'
import Productos      from '../components/Productos'
import Carta          from '../components/Carta'
import Obrador        from '../components/Obrador'
import Encargos       from '../components/Encargos'
import Horarios       from '../components/Horarios'
import Testimonios    from '../components/Testimonios'
import Galeria        from '../components/Galeria'
import Contacto       from '../components/Contacto'
import Footer         from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <SobreNosotros />
      <Productos />
      <Carta />
      <Obrador />
      <Encargos />
      <Horarios />
      <Testimonios />
      <Galeria />
      <Contacto />
      <Footer />
    </>
  )
}
