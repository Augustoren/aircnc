const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const ProfileController = require("./controllers/ProfileController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

//Session routes
routes.post("/sessions", SessionController.store);

//Spot routes
routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);

//Profile routes
routes.get("/profile", ProfileController.show);

//Booking routes
routes.post("/spots/:spot_id/booking", BookingController.store);

module.exports = routes;
