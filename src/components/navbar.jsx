import { Link } from "react-router-dom"

export const NavBar = () => {
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element){
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" onClick={() => scrollToSection('Perfil')} aria-current="page" to="/Perfil">
                <i className="fa-solid fa-code"></i>
                </Link>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item navbar-underline">
                            <Link className="nav-link" onClick={() => scrollToSection('Perfil')} aria-current="page" to="/Perfil">Perfil</Link>
                        </li>
                        <li className="nav-item navbar-underline">
                            <Link className="nav-link" onClick={() => scrollToSection('Proyectos')} to="/Proyectos">Proyectos</Link>
                        </li>
                        <li className="nav-item navbar-underline">
                            <Link className="nav-link" onClick={() => scrollToSection('Habilidades')} to="/Habilidades">Mis Habilidades</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}