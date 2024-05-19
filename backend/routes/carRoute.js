import express, { Router } from "express";
import {
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";

const router = express.Router();
// router.get("/", async (req, res) => {
//   try {
//     const books = await Book.findAll(); // Retrieve all books from the database
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// router.get("/books", (req, res) => {
//   res.render("add_books");
// });

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/add_cars", (req, res) => {
  res.render("add_cars");
});

router.get("/cars", getCars);
router.get("/update/:id", getCarById);
router.post("/add_cars", addCar);
router.post("/update/:id", updateCar);
router.get("/delete/:id", deleteCar);

export default router;
