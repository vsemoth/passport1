const express = require('express')
const expressLayout =  require('express-ejs-layouts')

const app = express()
const port = 5000

// Set Templating Engine
app.use(expressLayout)
app.use('view engine', 'ejs')

// Static File
app.use(app.router);
routes.initialize(app);
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Navigation
app.get('', (req, res) => {
  res.render('index.ejs')
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))