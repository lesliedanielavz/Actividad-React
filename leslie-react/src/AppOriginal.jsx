import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Contador } from './Contador'

// 👉 IMPORTS DE MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// 👉 FUNCIÓN COMO EL EJEMPLO DE MUI (adaptada)
function createData(nombre, apellido, edad) {
  return { nombre, apellido, edad };
}

// 👉 ARRAY (con menores)
const rows = [
  createData('Sergio', 'Valenzuela Chang', 33),
  createData('Beatriz', 'Zatarain Tostado', 30), 
  createData('Ana Gabriela', 'Rodriguez Valenzuela', 17), // menor
  createData('Maria', 'Chang Sanchez', 56),
  createData('Leslie Daniela', 'Vaenzuela Zatarain', 15), // menor
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <Contador />

        {/* 👇 TABLA */}
        <h2>Tabla de Personas</h2>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            
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
                    '&:last-child td, &:last-child th': { border: 0 }
                  }}
                >
                  <TableCell
                    sx={{ color: row.edad < 18 ? 'red' : 'inherit' }}
                  >
                    {row.nombre}
                  </TableCell>

                  <TableCell
                    sx={{ color: row.edad < 18 ? 'red' : 'inherit' }}
                  >
                    {row.apellido}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{
                      color: row.edad < 18 ? 'red' : 'inherit',
                      fontWeight: row.edad < 18 ? 'bold' : 'normal'
                    }}
                  >
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

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Documentation</h2>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
