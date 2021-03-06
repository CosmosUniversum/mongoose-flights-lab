import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({}, function(err, flights){
    res.render('flights/index', {
      flights,
      title: 'All Flights'
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new')
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {
      flight
    })
  })
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err){
    if(err) {
      return res.redirect('/flights/new')
    }
    res.redirect(`/flights/${flight._id}`)
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`flights/${flight._id}`)
    })
  })
}

export {
  index,
  newFlight as new,
  show,
  create,
  createTicket
}