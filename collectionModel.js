import mongoose from "mongoose";

let collectionSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  wishList: [String],
  completed: [String],
});

export let Collection = mongoose.model("collection", collectionSchema);

export let getCollection = (callback, limit) => {
  Collection.find(callback).limit(limit);
};
