const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});