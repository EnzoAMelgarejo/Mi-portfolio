// El componente Perfil muestra información sobre un usuario, incluyendo su nombre, edad, presentación, enlaces de contacto (GitHub, LinkedIn, correo), y un botón para descargar su CV en formato PDF.
// Al hacer clic en el botón de descarga, se descarga el archivo CV que se encuentra en la ruta '/assets/cv.pdf'.

import { useTranslation } from 'react-i18next'
import cvPDF from '/assets/cv.pdf'
import styles from "../styles/profile.module.css"

export const Perfil = ({nombre, edad, presentacion}) => {
  const {t} = useTranslation()

  const downloadCv=()=>{
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = cvPDF;
    // Especificar el nombre del archivo para descargar
    link.download = 'cv.pdf';
    // Simular el clic en el enlace para iniciar la descarga
    link.click();
   }

  const contactos = {
    mail: 'enzomelgarejo@gmail.com',
    github: 'https://github.com/EnzoAMelgarejo',
    linkedin: 'https://www.linkedin.com/in/enzo-melgarejo-818862239/',
  }

  return (
    <>
      <h1 style={{textTransform: 'uppercase'}}>{t('sections.perfil')}</h1>
      <div className={styles.profile} id="Perfil">
       <div className={styles["profile-card"]}>
         <img src="/fotoCV.jpg" alt="Perfil" className={styles.pic}></img>
          <div className={styles["profile-card-content"]} data-text={nombre}>
            <h1>Full Stack Developer</h1>
            <h1>{nombre}</h1>
            <h1>{edad}{t('AÑOS')}</h1>
          </div>
       </div>
       <div className={styles.bio}>
        <h5>{t('Quien soy?')}</h5>
        <h5 style={{whiteSpace: "pre-line"}}>{presentacion}</h5>
        </div>
        <div className={styles.contacts}>
          <a href={contactos.github} rel="noopener noreferrer" target="_blank" className={styles["contact-btn"]}>
          <i className="fa-brands fa-github"></i>
          </a>
          <a href={contactos.linkedin} rel="noopener noreferrer" target="_blank" className={styles["contact-btn"]}>
          <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={`mailto:${contactos.mail}`} rel="noopener noreferrer" target="_blank" className={styles["contact-btn"]}>
          <i className="fa-solid fa-envelope"></i>
          </a>
          <button className={styles["contact-btn"]} onClick={downloadCv}>
          <i className="fa-solid fa-file-pdf"></i>
          </button>
        </div>
     </div>
    </>
  )
}