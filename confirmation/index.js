const express  = require('express')
const { urlencoded, json } = require('body-parser');

const app = express()

const port = 3003

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/confirmation', (req, res) => {
  const reqMessage = req.body && req.body.message

  let next
  let nextMessage
  switch(reqMessage) {
    case 'yes': {
      next = '/item'
      nextMessage = 'What is the next item?'
    }
    case 'no': {
      next = '/result'
      nextMessage = null
    }
    default: {
      next = '/confirmation'
      nextMessage = 'Are there more items?'
    }
  }
  
  res.json({ next, message: nextMessage })
})

app.listen(port, () => {
  console.log(`Confirmation app listening on port ${port}`)
})

