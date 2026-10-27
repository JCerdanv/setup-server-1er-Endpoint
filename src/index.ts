// jncv (dia 11s)
// Setup del Servidor y Primer Endpoint

// import express, { Request, Response } from 'express';
// import express from 'express';

import express from 'express';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON (buena práctica enrutando datos en formato JSON)
app.use(express.json());

// endpoint
// GET /api/status
app.get('/api/status', (req, res) => {
  res.status(200).json({
    status: "Servidor en línea",
    version: "1.0.0"
  });
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`🔍 Verifica el estado en http://localhost:${PORT}/api/status`);
});

// jncv (dia 11scd scr) fin