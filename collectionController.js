import { Collection, getCollection } from "./collectionModel.js";

export const index = (req, res) => {
  getCollection((err, collections) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "collections retrieved successfully",
      data: collections,
    });
  });
};

export const create = (req, res) => {
  let collection = new Collection();
  collection.userId = req.body.userId;
  collection.wishList = req.body.wishList ? req.body.wishList : [];
  collection.completed = req.body.completed ? req.body.completed : [];

  collection.save((err) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "new collection created",
      data: collection,
    });
    console.log("Collection created");
  });
};

export const addToWishlist = (req, res) => {
  let filter = { userId: req.body.userId };
  let update = { $push: { wishList: req.body.wishList } };
  let options = { upsert: true, new: true };

  Collection.findOneAndUpdate(filter, update, options, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

export const addToCompleted = (req, res) => {
  let filter = { userId: req.body.userId };
  let update = { $push: { completed: req.body.completed } };
  let options = { upsert: true, new: true };

  Collection.findOneAndUpdate(filter, update, options, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
