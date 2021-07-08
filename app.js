const express = require('express');
const app = express();
app.use(express.static('public'));


//app.listen(3000, ()=>{console.log('Servidor funcionando en puerto 3000');});    //--> Para correrlo en mi compu 
app.listen(process.env.PORT || 3000, function() {console.log('Servidor corriendo en el puerto 3000'); }) //
//app.get('/',(req, res) => { res.json({success: true})})const PORT=process.env.PORT || 3000 app.listen(PORT, () => console.log('escuchando en ' + PORT)) //

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/sale', (req,res)=>{
    res.sendFile(__dirname + '/views/sale.html');
});
