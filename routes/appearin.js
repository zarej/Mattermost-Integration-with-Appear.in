import express from 'express'
require('dotenv').config()

const router = express.Router()

router.post('/', (req, res) => {
  if (req.body.token !== process.env.TOKEN) {
    return res.status(401).json('Unauthorized')
  }
  console.log('Request body:', req.body)
  const team = process.env.TEAM || req.body.team_domain
  const room = req.body.text || team + '_' + req.body.channel_name
  let message = process.env.MESSAGE || 'Please click the button to join the meeting.'
  let buttonTxt = process.env.BUTTON || 'Join the meeting'
  req.body.room = room
  Object.keys(req.body).forEach(key => {
    message = message.replace(new RegExp('{{' + key + '}}', 'g'), req.body[key])
    buttonTxt = buttonTxt.replace(new RegExp('{{' + key + '}}', 'g'), req.body[key])
  })
  const response = {
    'response_type': 'in_channel',
    'attachments': [{
      'text': message,
      'actions': [{
        'name': buttonTxt,
        'integration': {
          'url': 'http://appear.in/' + room
        }
      }]
    }]
  }
  res.json(response)
})

export default router
