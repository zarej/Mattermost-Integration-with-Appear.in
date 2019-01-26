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
  let message = process.env.MESSAGE || 'Join the meeting.'
  let subMessage = process.env.SUB_MESSAGE || 'Meeting room created.'
  req.body.room = room
  Object.keys(req.body).forEach(key => {
    message = message.replace(new RegExp('{{' + key + '}}', 'g'), req.body[key])
    subMessage = subMessage.replace(new RegExp('{{' + key + '}}', 'g'), req.body[key])
  })
  const response = {
    'response_type': 'in_channel',
    'attachments': [{
      'author_name': 'jitsi',
      'author_icon': 'http://is3.mzstatic.com/image/thumb/Purple128/v4/33/0f/99/330f99b7-4e02-4990-ab79-d3440c4237be/source/512x512bb.jpg',
      'title': message,
      'title_link': 'https://meet.jit.si/' + room,
      'text': subMessage,
      'color': '#ff0000'
    }]
  }
  res.json(response)
})

export default router
