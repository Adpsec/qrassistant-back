// Importar módulos
const xlsx = require('xlsx');

// Definir función para leer archivo Excel
function readExcel(buffer) {
  const workbook = xlsx.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  return data;
}

// Exportar función
module.exports = { readExcel };