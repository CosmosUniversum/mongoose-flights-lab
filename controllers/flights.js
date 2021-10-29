import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({}, function(err, flights){
    res.render('flights/index', {
      flights,
      title: 'All Flights'
    })
  })
}

export {
  index
}