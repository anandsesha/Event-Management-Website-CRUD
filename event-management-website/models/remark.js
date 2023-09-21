const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var remarkSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    likes: { type: Number, default: 0 },
    eventId: { type: Schema.Types.ObjectId, ref: 'Event' }, //will be associated to one of the events(use ONE-MANY association)
  },
  { timestamps: true }
);

var Remark = mongoose.model('Remark', remarkSchema);

module.exports = Remark;
