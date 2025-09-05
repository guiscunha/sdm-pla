const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];
let pedidos = [];

// Rutas para usuarios

app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send({ message: 'Usuario criado', usuario });
});

//rota para criar um pedido
app.post('/pedidos', (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.send({ message: 'Pedido criado', pedido });
});

// Rota para listar todos os pedidos e usuarios
app.get('/dados', (req, res) => {
    res.send(usuarios, pedidos);
});

// iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});