const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.use(express.urlencoded( { default: false}))

const port = 8080;

let movies = [{
    id: 1,
    name: "Leo",
    year: "2020"
}, {
    id: 2,
    name: "James Bond",
    year: "2002"
}]


function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    console.log('bearerHeader ', bearerHeader)
    if( typeof bearerHeader !== "undefined" ) {
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.post('/api/login', (req, res) => {
    
    jwt.sign({user: req.body}, 'secretkey', (err, token) => {
        res.json({
            token: token
        });
    });
});

app.get('/api/movies', verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if(err) {
            res.sendStatus(403); //forbidden error
        } else {
            res.json(movies);
        }
    });
});


app.listen(port, ()=> {
    console.log("listening on port " + port);
});

