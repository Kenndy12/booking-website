import express  from "express";
import { createHotel, deleteHotel, getAllHotel, countByCity, getHotel, updateHotel, countByType, getHotelRooms } from "../controller/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin,deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getAllHotel);

//GET COUNT BY CITY
router.get("/countByCity", countByCity);

//GET COUNT BY TYPE
router.get("/countByType", countByType);

//GET ROOM
router.get("/room/:id", getHotelRooms);

export default router;