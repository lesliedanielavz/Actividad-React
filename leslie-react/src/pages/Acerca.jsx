import lesPhoto from "./../assets/les.jpeg";
import "./../styles/Acerca.css";

function Acerca() {
  return (
    <div className="about">
      <h1>Acerca de mí</h1>
      <div className="profile">
        <img
          src={lesPhoto}
          alt="Leslie Daniela Valenzuela Zatarain"
        />
        <div className="info">
          <p><strong>Nombre:</strong> Leslie Daniela Valenzuela Zatarain</p>
          <p><strong>Edad:</strong> 22 años</p>
          <p><strong>Ubicación:</strong> Mazatlán, Sinaloa</p>
          <p><strong>Carrera:</strong> Ingeniería en Sistemas de Computación</p>
          <p> Me apasiona el desarrollo web, especialmente el diseño de interfaces y experiencias digitales. Disfruto combinar creatividad y tecnología para crear aplicaciones modernas, intuitivas y visualmente atractivas. Mi principal fortaleza es el diseño, donde busco siempre lograr un equilibrio entre estética y funcionalidad.
          </p>
        </div>
      </div>

      <h3 className="skills-title">  Habilidades</h3>
      <ul>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
          HTML5
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
          CSS3
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          JavaScript (ES6+)
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          React
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          Node.js
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
          Python
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
          SQL
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          Git
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="UI/UX Design" />
          UI/UX Design
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
          Figma
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" />
          Photoshop
        </li>
      </ul>

      <h3 className="objectives-title">Objetivos</h3>
      <p>
        Mi objetivo es convertirme en desarrolladora con enfoque en diseño, creando experiencias digitales atractivas, funcionales y centradas en el usuario. Busco seguir aprendiendo, innovar en cada proyecto y crecer profesionalmente dentro del mundo del desarrollo web.
      </p>
    </div>
  );
}
export default Acerca;