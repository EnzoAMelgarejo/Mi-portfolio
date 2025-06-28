// Componente principal de la aplicación que estructura las secciones de mi portfolio.
// Este componente importa y renderiza otros componentes como:
// - NavBar: Barra de navegación para moverse entre las secciones.
// - Perfil: Muestra información personal como el nombre, la edad y una presentación.
// - Proyectos: Muestra los proyectos que he desarrollado.
// - Habilidades: Presenta las habilidades técnicas que tengo como desarrollador.
// - Footer: Pie de página con información adicional.
// Además, maneja el estado para el nombre, edad y presentación usando useState, lo que permite actualizar estos valores de forma dinámica si fuera necesario.

import { NavBar } from "./components/navbar"
import { Perfil } from "./components/perfil"
import { Proyectos } from "./components/proyectos"
import { Habilidades } from "./components/habilidades"
import { Footer } from "./components/footer"
import { useState } from "react"

export const PortfolioApp = () => {
  const nombreBase ='Enzo'
  const edadBase = '22 '
  const presentacionBase = `¡Hola! Soy Enzo, Fullstack Developer Junior
 Soy un apasionado de la tecnología con experiencia en el desarrollo de aplicaciones web utilizando tecnologías como JavaScript, React, Node.js, y bases de datos. Mi enfoque es crear soluciones dinámicas y eficientes tanto en el frontend como en el backend.

 Mi objetivo es continuar creciendo como desarrollador y contribuir en proyectos que hagan la diferencia. Siempre estoy en busca de nuevos desafíos que me permitan mejorar mis habilidades y aportar con creatividad y soluciones sólidas.`
  
  const [nombre, setNombre] = useState(nombreBase)
  const [edad, setEdad] = useState(edadBase)
  const [presentacion, setPresentacion] = useState(presentacionBase)

  return (
    <>
    <div className="app fadeIn">
      <NavBar />
      <div className="main-content">
        <Perfil nombre={nombre} edad={edad} presentacion={presentacion}/>
        <Proyectos />
        <Habilidades />
      </div>
      <Footer />
    </div>
    </>
  )
}