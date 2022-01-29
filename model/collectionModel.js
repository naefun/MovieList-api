import mongoose from "mongoose";

let collectionSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  favourite: {
    game: { type: String },
    series: { type: String },
    movie: { type: String },
  },
  wishList: [String],
  completed: [String],
});

export let Collection = mongoose.model("collection", collectionSchema);

export let getCollection = (callback, limit) => {
  Collection.find(callback).limit(limit);
};
