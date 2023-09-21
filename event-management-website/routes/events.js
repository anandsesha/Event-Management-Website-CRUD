var express = require('express');
var router = express.Router();
var Event = require('../models/event');
var Remark = require('../models/remark');

/* Display all events in db in a  list. Any button of form where /articles is used this router takes care */
router.get('/', async (req, res, next) => {
  var allEventsArray = await Event.find({});
  console.log(allEventsArray);
  res.render('events', { allEventsArray });
});

/* Give the client a form to add an event */
router.get('/new', function (req, res, next) {
  res.render('createNewEvent');
});

// Store data coming from form in DB and show in Events List page.
// (Hence it will do  a post request on `/` and also in createNewEvent.ejs we give action="/events" which is `/`)
router.post('/', async (req, res, next) => {
  //   req.body.tags = req.body.tags.trim().split(' ');
  console.log(req.body);
  let newEvent = await Event.create(req.body);
  res.redirect('/events');
});

/* ------------- Display single Event details ------------- */
router.get('/:eventid', async (req, res, next) => {
  console.log(req.body);
  var eventId = req.params.eventid;
  var singleEventObj = await Event.findById(eventId).populate('remarks').exec();
  //using the eventId you have found all the remarks in that event as shown below
  var allRemarks = await Remark.find({ eventId: eventId });
  // console.log(allComments);
  res.render('singleEventDetails', { singleEventObj });
});

/* ------------- Handle Likes for single Event  ------------- */
router.get('/:eventid/eventLikes', async (req, res, next) => {
  var eventId = req.params.eventid;
  await Event.findByIdAndUpdate(eventId, { $inc: { likes: 1 } });
  res.redirect('/events/' + eventId);
});

/* ------------- Edit(update) for single Event  ------------- */
router.get('/:eventid/edit', async (req, res, next) => {
  var eventId = req.params.eventid;
  var singleEventObj = await Event.findById(eventId);
  res.render('eventUpdateform', { singleEventObj });
});

router.post('/:eventid/update', async (req, res, next) => {
  var eventID = req.params.eventid;
  var updatedEvent = await Event.findByIdAndUpdate(eventID, req.body, {
    new: true,
  });
  res.redirect('/events');
});

/* ------------- Delete for a single Event  ------------- */
router.get('/:eventid/delete', async (req, res, next) => {
  var eventID = req.params.eventid;
  var deletedEvent = await Event.findByIdAndRemove(eventID);
  await Remark.deleteMany({ eventId: deletedEvent.id });
  res.redirect('/events');
});

/* ------------- (Filter) display events by category  ------------- */
router.get('/category/:categoryName', async (req, res, next) => {
  try {
    var category = req.params.categoryName;
    var allEventsArray = await Event.find({ event_category: category });
    res.render('events', { allEventsArray, selectedCategory: category });
  } catch (error) {
    res.render('noEventsPage');
  }
});

/* -----Add (CREATE) remarks for a single Event----- */
router.post('/:eventid/remarks', async (req, res, next) => {
  var eventID = req.params.eventid;
  req.body.eventId = eventID;
  let oneRemark = await Remark.create(req.body);
  // now cross-reference remark to Event table
  let updatedEvent = await Event.findByIdAndUpdate(eventID, {
    $push: { remarks: oneRemark._id },
  });
  res.redirect('/events/' + eventID);
});

/* -----List all the remarks for a single Event----- */
router.get('/:eventid', async (req, res, next) => {
  var eventID = req.params.eventid;
  var singleEventObj = await Event.findById(eventID).populate('remarks').exec();
  var allRemarks = await Remark.find({ eventId: eventID });
  console.log(allRemarks);
  res.render('singleEventDetails', { singleEventObj });
});

/* ------------- Handle Likes for single REMARK  ------------- */
router.get('/:eventid/remarkLike', async (req, res, next) => {
  var eventID = req.params.eventid;
  console.log(req.body);
  // let oneRemark = await Remark.findByIdAndUpdate(remarkid, {
  //   $inc: { likes: 1 },
  // });
  res.redirect('/events/' + eventID);
});

// Likes, update and Delete for each remark is done inside separate router -> refer remarks.js

module.exports = router;
