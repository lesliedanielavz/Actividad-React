import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from './../assets/vite.svg'
import heroImg from './../assets/hero.png'
import './../App.css'
import { Contador } from '../Contador'
import PerfilResumen from "../components/PerfilResumen";

// MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(nombre, apellido, edad) {
  return { nombre, apellido, edad };
}

const rows = [
  createData('Sergio', 'Valenzuela Chang', 33),
  createData('Beatriz', 'Zatarain Tostado', 30), 
  createData('Ana Gabriela', 'Rodriguez Valenzuela', 17),
  createData('Maria', 'Chang Sanchez', 56),
  createData('Leslie Daniela', 'Valenzuela Zatarain', 15),
];

function Tablas() {
  const [count, setCount] = useState(0)

  return (
    <section id="center">
      <h1>Tablas</h1>

      <PerfilResumen />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Contador />

      <h2>Tabla de Personas</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell align="right">Edad</TableCell>
              <TableCell align="right">Estado</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.nombre}
                sx={{
                  backgroundColor: row.edad < 18 ? '#ffebee' : 'inherit',
                }}
              >
                <TableCell sx={{ color: row.edad < 18 ? 'red' : 'inherit' }}>
                  {row.nombre}
                </TableCell>

                <TableCell sx={{ color: row.edad < 18 ? 'red' : 'inherit' }}>
                  {row.apellido}
                </TableCell>

                <TableCell align="right">
                  {row.edad}
                </TableCell>

                <TableCell align="right">
                  {row.edad < 18 ? 'Menor de edad' : 'Mayor de edad'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </section>
  )
}

export default Tablas;