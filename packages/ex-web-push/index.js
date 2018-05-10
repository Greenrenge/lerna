const webpush = require('web-push')

const publicVapidKey = 'BAukWgN_1n5tC_pcRqUD3YbkaOmJ7uETr64DyeO6Ob4MHMCSgff3HflQVmixaP5pEKKTbqAARl5UTVzii3PcYqY'
const privateVapidKey = '33v6MUYIDuKIt1KNCtD8-9_pl4QPnTPeNS9BPDO4HxI'

webpush.setVapidDetails('mailto:greenrenge@gmail.com', publicVapidKey, privateVapidKey)

const express = require('express')
const app = express()
app.use(require('body-parser').json())
app.post('/subscribe', async (req, res) => {
  const subscription = req.body
  res.status(201).json({})
  const payload = JSON.stringify({ title: 'test'})
  console.log(subscription)
  try {
    await webpush.sendNotification(subscription, payload)
  } catch (err) {
    console.error(err.stack)
  }
})
app.use(require('express-static')('./')) // for return index.html
app.listen(3000)