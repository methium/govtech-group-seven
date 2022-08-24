const express  = require('express')
const { urlencoded, json } = require('body-parser');

const app = express()

const port = 3004

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/confirmation', (req, res) => {
  const reqMessage = (req.body && req.body.message) || ''

  let next
  let nextMessage

  switch(reqMessage.toLowerCase()) {
    case 'yes': {
      next = '/localhost:3001/item'
      nextMessage = 'What is the next item?'
    }
    case 'no': {
      next = '/localhost:3005/result'
      nextMessage = null
    }
    default: {
      next = '/localhost:3004/confirmation'
      nextMessage = 'Are there more items?'
    }
  }
  
  res.json({ next, message: nextMessage })
})

app.listen(port, () => {
  console.log(`Confirmation app listening on port ${port}`)
})

