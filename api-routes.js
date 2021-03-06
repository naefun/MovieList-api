import { Router } from "express";
import {
  index,
  create,
  addToWishlist,
  addToCompleted,
  addFavouriteGame,
  addFavouriteSeries,
  addFavouriteMovie,
  getUserCollection,
} from "./controller/collectionController.js";

let router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "working",
    message: "API is working",
  });
});

router.route("/collections").get(index).post(create);
router.route("/collection").get(getUserCollection);
router.route("/wishlist").post(addToWishlist);
router.route("/completed").post(addToCompleted);
router.route("/favourite/game").post(addFavouriteGame);
router.route("/favourite/series").post(addFavouriteSeries);
router.route("/favourite/movie").post(addFavouriteMovie);

export default router;
