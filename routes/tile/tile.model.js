'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TileSchema = new Schema({
  createdAt: {
    default: Date.now,
    type: Date
  },
  url: String,
  x: Number,
  y: Number,
  size: Number,
  votes: [
    {
      bee: Boolean,
      parasite: Boolean,
      bad: Boolean,
      ip_address: String,
      ponder_time: Number,
      timestamp: {
        default: Date.now,
        type: Date
      }
    }
  ]
});

TileSchema.pre('save', function (next) {
  this.updatedAt = new Date();

  next();
});

module.exports = mongoose.model('Tile', TileSchema);
