import express from "express"
import { addFood,listFood,removeFood,editFood,geteditFoodList } from "../controllers/foodController.js"


const foodRouter = express.Router();

// Image Storage Engine


foodRouter.post("/add",addFood)
foodRouter.get("/list",listFood)
foodRouter.get("/edit/:id", geteditFoodList);
foodRouter.put("/edit/:id",editFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;