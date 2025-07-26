const { firefox} = require('playwright');  
//module.exports= {Gopage};// Si se quiere testear se debe exportar
async function Gopage() {
  const browser = await firefox.launch({ headless: false });// Abre firefox con interfaz.el headless desactivado
  const page = await (await browser.newContext()).newPage();// crea el contexto y la pagina
  await page.goto('https://duckduckgo.com');                   // Navega a la página
};

Gopage(); 