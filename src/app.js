//creamos las variables con los modulos requeridos.

const express = require('express');
const app = express();
const path = require('path');

//ponemos a escuchar al servidor.



//volvemos estatico el servidor.

const port = process.env.PORT || 3000;
app.listen(port, () =>console.log(`Servidor corriendo en el puerto ${port}`));
app.use(express.static('public'));

//redirigirmos rutas.

//ruta /home.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

//Ruta /ofertas. 

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, './views/ofertas.html'));
})

//ruta /tienda Oficiales.

app.get('/tienda-oficiales', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/tienda-oficiales.html'))
})

//ruta /vender

app.get('/vender', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/vender.html'))
})

//ruta /ayuda

app.get('/ayuda', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/ayuda.html'))
})

//tuta /crea tu cuenta

app.get('/crea-tu-cuenta', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/crea-tu-cuenta.html'))
})

//ruta /ingresa

app.get('/ingresa', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/ingresa.html'))
})

//ruta /mis compras

app.get('/mis-compras', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/mis-compras.html'))
})