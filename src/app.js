const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// static takes the path to where we want to go
// static : it does not change
// dynamic: change the webpages

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('' , (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})

app.get('/html', (req, res) => {
    res.render('html', {
        title: 'Html'
    })
})

app.get('/css', (req, res) => {
    res.render('css', {
        title: 'Css'
    })
})

app.get('/javascript', (req, res) => {
   res.render('javascript', {
       title: 'JavaScript'
   })
})



app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page Not Found'
    })
})

app.listen(3000 , () => {
    console.log('Server is up on port 3000')
})