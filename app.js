const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')

// Engine 
app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/pulic'))

app.get('/', (req, res, next) => {
    res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})