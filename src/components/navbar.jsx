// Componente de la barra de navegación que permite al usuario desplazarse a diferentes secciones de la página.
// Utiliza el componente `Link` de `react-router-dom` para la navegación, aunque el desplazamiento entre secciones se maneja con un evento `onClick`.
// El comportamiento de desplazamiento es suave (smooth) gracias a la función `scrollToSection`.


import { Link } from "react-router-dom"
import styles from "../styles/nav.module.css"

export const NavBar = () => {
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element){
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

  return (
    <>
        <nav className={`navbar navbar-expand-lg bg-dark border-bottom border-body ${styles.stickyNav}`} data-bs-theme="dark">
  <div className="container-fluid">
    <Link
      className={`navbar-brand ${styles.brand}`}
      onClick={() => scrollToSection("Perfil")}
      to="/Perfil"
    >
      <i className="fa-solid fa-code"></i>
    </Link>
    <button
      className="navbar-toggler ms-auto"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className={`nav-item ${styles.underline}`}>
          <Link className={`nav-link ${styles.link}`} onClick={() => scrollToSection("Perfil")} to="/Perfil">
            Perfil
          </Link>
        </li>
        <li className={`nav-item ${styles.underline}`}>
          <Link className={`nav-link ${styles.link}`} onClick={() => scrollToSection("Proyectos")} to="/Proyectos">
            Proyectos
          </Link>
        </li>
        <li className={`nav-item ${styles.underline}`}>
          <Link className={`nav-link ${styles.link}`} onClick={() => scrollToSection("Habilidades")} to="/Habilidades">
            Mis Habilidades
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}