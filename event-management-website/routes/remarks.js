var Event = require('../models/event');
var Remark = require('../models/remark');
const express = require('express');
const router = express.Router();

/* -----Handle Likes for each Remark ----- */
router.get('/:remarkid/remarkLike', async (req, res, next) => {
  var remarkID = req.params.remarkid;
  var updatedRemark = await Remark.findByIdAndUpdate(remarkID, {
    $inc: { likes: 1 },
  });
  res.redirect('/events/' + updatedRemark.eventId);
});

/* -----Edit (Update) comments----- */

/* -----1: GET an update form for a comment----- */
router.get('/:remarkid/edit', async (req, res, next) => {
  var remarkID = req.params.remarkid;
  console.log(remarkID);

  var oneRemarkObj = await Remark.findById(remarkID);
  console.log(oneRemarkObj);
  res.render('updateRemarkForm', { oneRemarkObj });
});
/* -----2: Store the updated remark in DB and display updated remark in UI----- */
router.post('/:remarkid', async (req, res, next) => {
  var remarkID = req.params.remarkid;
  let updatedRemark = await Remark.findByIdAndUpdate(remarkID, req.body, {
    new: true,
  });
  res.redirect('/events/' + updatedRemark.eventId);
});

/* -----Delete remark----- */
router.get('/:remarkid/delete', async (req, res, next) => {
  var remarkid = req.params.remarkid;
  var deletedRemark = await Remark.findByIdAndRemove(remarkid);
  var updatedEvent = await Event.findByIdAndUpdate(deletedRemark.eventId, {
    $pull: { remarks: deletedRemark._id },
  });
  res.redirect('/events/' + deletedRemark.eventId);
});

module.exports = router;
