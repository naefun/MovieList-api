import { Router } from "express";
import {
  index,
  create,
  addToWishlist,
  addToCompleted,
} from "./collectionController.js";

let router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "working",
    message: "API is working",
  });
});

router.route("/collections").get(index).post(create);
router.route("/wishlist").post(addToWishlist);
router.route("/completed").post(addToCompleted);

export default router;
