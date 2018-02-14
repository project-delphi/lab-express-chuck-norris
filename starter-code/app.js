const express = require('express')
const app = express()
var path = require('path');
const Chuck  = require('chucknorris-io')
const client = new Chuck()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('layout', {
  })
})


app.get('/random', (req, res) => {
// Retrieve a random chuck joke
  client.getRandomJoke()
    .then((response) => {
      // use the response here
      res.render('joke', { joke : response.value
      })
    }).catch((err) => {
      console.log(err)
    })
})

app.get('/categories', (req, res) => {
  client.getJokeCategories()
    .then((response)=>  {
      // use the response here
      res.render('categories', { categories: response
      })
    })
    .catch((err)=> {
      // handle error
    })
})


app.get('/search', (req, res) => {
  client.getRandomJoke('dev')
  .then((response) => {
    // use the response here
  }).catch((err) => {
    // handle error
  });


  res.render('', {
  })
})





app.get('/search', (req, res) => {
  res.render('', {
  })
})

app.listen('3000','localhost',()=>{console.log('listening on 3000')})