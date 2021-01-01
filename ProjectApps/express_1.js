const express = require('express')

const app = express()

// app.use('/login-page',(req, res, next) =>{
//     console.log("Welcome to login Page.")
// })
// app.use('/', (req, res, next) =>{

//     console.log('Welcome to the Home Page!!')
//     res.send('<h1>Welcome to the HOME PAGE!!</h1>')
// })
app.use('/users',(req, res, next) =>{
    console.log("Welcome to User Page.")
    
    res.send('<html><body><br><br><h3>Enter your Name: </h3><form action="/" method="POST" > <input type="text" placeholder="value" name="username"><button>Submit</button></form></body></html>')
})

app.use('/', (req, res, next) =>{
    res.send('<h1>Welcome to the HOME PAGE!!</h1>')
})


app.listen(3000)
