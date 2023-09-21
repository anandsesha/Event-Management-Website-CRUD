const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true, maxlength: 20 },
    host: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    event_category: { type: [String], required: true }, // An event can have multiple categories
    location: { type: String, required: true },
    likes: { type: Number, default: 0 },
    remarks: [{ type: Schema.Types.ObjectId, ref: 'Remark' }], //Multiple remarks made on this event (use ONE-MANY association)
  },
  { timestamps: true }
);

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
