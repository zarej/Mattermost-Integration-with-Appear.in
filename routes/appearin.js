import express from 'express'
require('dotenv').config()

const router = express.Router()

router.post('/', (req, res) => {
  if (req.body.token !== process.env.TOKEN) {
    res.status(401).json('Unauthorized')
  }
  console.log('Request body:', req.body)
  const team = process.env.TEAM || req.body.team_domain
  const room = req.body.text || team + '_' + req.body.channel_name
  const message = process.env.MESSAGE || 'Please click to join the call.'
  res.json({'response_type': 'in_channel', 'text': '[' + message + '](http://appear.in/' + room + ')'})
})

export default router
