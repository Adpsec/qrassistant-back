// Importar módulos
const express = require('express');
const multer = require('multer');
const excelHelper = require('./helpers/excelHelper');

// Crear instancia de Express
const app = express();

// Configurar multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint POST para subir archivo Excel
app.post('/upload', upload.single('excel'), (req, res) => {
  try {
    // Leer archivo Excel
    const buffer = req.file.buffer;
    const excelData = excelHelper.readExcel(buffer);

    // Almacenar JSON en array
    const dataArray = [];
    dataArray.push(excelData);

    // Enviar respuesta
    res.status(200).json({ data: dataArray });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al procesar archivo');
  }
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});