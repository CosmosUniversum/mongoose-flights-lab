import { Router } from 'express'
const router = Router()

// localhost:3000/flights
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
