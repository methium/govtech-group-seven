const express = require('express')
const redis = require('redis')
const app = express()
const port = 3001

const client = redis.createClient({
  url: 'redis://127.0.0.1:6379',
})
await client.connect()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * query params:
 * item: string
 */
app.post('/item', (req, res) => {
  // get current items
  const currItems = await client.get("bot") || []
  currItems.push({
    item: req.query.item,
    price: 0.0,
    names: []
  })
  // add to redis
  client.set("bot", currItems)
  res.send('http://localhost:3000/price')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})