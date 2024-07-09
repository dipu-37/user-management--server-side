const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json());

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoon', email: 'sabnoon@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('Users Management server is running now')
});

app.get('/users', (req, res) =>{
    res.send(users);
})

app.post('/users',(req, res) =>{
    console.log('Received user:', req.body);
    const newuser =req.body;
    newuser.id = users.length + 1;
    users.push(newuser);
    res.send(newuser);
})
app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})