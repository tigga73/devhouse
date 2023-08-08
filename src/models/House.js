import { Schema, model } from 'mongoose';

const HouseSchema = new Schema(
  {
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    staus: Boolean,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

HouseSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3300/files/${this.thumbnail}`;
});

export default model('House', HouseSchema);