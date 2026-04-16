import { useAlumnoContext } from "../context/AlumnoContext";

function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  return (
    <div>
      <h2>Resumen del perfil</h2>
      <p>Nombre: {alumno.nombre} </p>
      <p>Carrera: {alumno.carrera}</p>
      <p>Grupo: {alumno.grupo}</p>
      <p>Semestre: {alumno.semestre}</p>
    </div>
  );
}

export default PerfilResumen;