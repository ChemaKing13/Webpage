const express = require('express'); 
const path = require('path'); 
const { toUnicode } = require('punycode');

const PORT = 3001; 

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

//Middleware to serve up static assets from the public folder
app.use(express.static('public')); 

//This view route is a GET route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
}); 

//Revista22
app.get('/revista22', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista22/index.html'))
});

//Revista21
app.get('/revista21', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista21/index.html'))
});

//Revista20
app.get('/revista20', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista20/index.html'))
}); 

//Revista19
app.get('/revista19', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista19/index.html'))
}); 

//Revista18
app.get('/revista18', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista18/index.html'))
}); 

//Revista17
app.get('/revista17', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista17/index.html'))
}); 

//Revista16
app.get('/revista16', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista16/index.html'))
});

//Revista15
app.get('/revista15', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista15/index.html'))
}); 

//Revista14
app.get('/revista14', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista14/index.html'))
}); 

//Revista13
app.get('/revista13', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista13/index.html'))
});

//Revista12
app.get('/revista12', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista12/index.html'))
});

//Revista10
app.get('/revista10', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista10/index.html'))
});

//Revista9
app.get('/revista9', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista9/index.html'))
});

//Revista8
app.get('/revista8', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista8/index.html'))
});

//Revista7
app.get('/revista7', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista7/index.html'))
});


//Revista6
app.get('/revista6', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/revista6/index.html'))
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

