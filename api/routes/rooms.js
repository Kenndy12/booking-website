import express  from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin,deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getAllRoom);

//UPDATE ROOM AVAILABILITY
router.put("/availability/:id", updateRoomAvailability ,deleteRoom);

export default router;