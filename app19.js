const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.get('/' , (req, res) => {
  res.render('index')
})
app.get('/:page' , (req, res) => {
  console.log('req.params.page',req.params.page)
  const clickpage = req.params.page
  res.render('show', {page : clickpage})
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})