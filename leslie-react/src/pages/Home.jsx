import "./../styles/Home.css";
import PerfilResumen from "../components/PerfilResumen";

function Home() {
  return (
    <div className="home">
      <h1>Hola, Soy Leslie</h1>
      
      <p>
        Soy una desarrolladora enfocada en el diseño y la creación de aplicaciones web modernas. Me especializo en construir interfaces atractivas y experiencias de usuario intuitivas.
      </p>

    
      <PerfilResumen />

    </div>
  );
}

export default Home;