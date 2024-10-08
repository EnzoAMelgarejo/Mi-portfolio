import cvPDF from '/assets/cv.pdf'

export const Perfil = ({nombre, edad, presentacion}) => {
  
  const desacrgarCv=()=>{
    console.log("funciona el btn descargar CV")
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
      <h1>PERFIL</h1>
      <div className="perfil" id="Perfil">
       <div className="perfil-card">
         <img src="/FotoCv.jpg" alt="Perfil" className="foto"></img>
          <div className="perfil-card-content" data-text={nombre}>
            <h1>FullStackDeveloper</h1>
            <h1>{nombre}</h1>
            <h1>{edad}AÑOS</h1>
          </div>
       </div>
       <div className="presentacion">
        <h5>Quien soy?</h5>
        <h5>{presentacion}</h5>
        </div>
        <div className="contacts">
          <a href={contactos.github} rel="noopener noreferrer" target="_blank" className="contact-button">
          <i className="fa-brands fa-github"></i>
          </a>
          <a href={contactos.linkedin} rel="noopener noreferrer" target="_blank" className="contact-button">
          <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={`mailto:${contactos.mail}`} rel="noopener noreferrer" target="_blank" className="contact-button">
          <i className="fa-solid fa-envelope"></i>
          </a>
          <button className="contact-button" onClick={desacrgarCv}>
          <i className="fa-solid fa-file-pdf"></i>
          </button>
        </div>
     </div>
    </>
  )
}