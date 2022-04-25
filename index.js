const express = require('express');
const app = express();
const port = 3000;
// Middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        "User": "Viniciu",
        "Idade": "22"
    })
})

app.post('/user', (req, res) => {
    const {id} = req.body;

    res.json(id)
})

let name = 'Qualquer coisa';
app.put('/infos', (req, res) => {
    name = req.body;

    res.json(name)
})

app.delete("/remove:id", (req, res) => {
    
    const id = req.params.id;
    res.send(`Usuario ${id} Deletado com sucesso!`)
})

app.listen(port, () => console.log(`Server is runing in port:${port}`))