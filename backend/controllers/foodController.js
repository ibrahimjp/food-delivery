import foodModel from '../models/foodModel.js'
import fs from 'fs'


// add food item

const addFood = async (req, res) => {
    const { name, description, originalPrice, discount, price, category, image } = req.body;

    if (!image) {
        return res.json({ success: false, message: "Image URL is required" });
    }

    const food = new foodModel({
        name,
        description,
        originalPrice,
        discount,
        price,
        category,
        image // this is the Cloudinary URL now
    });

    try {
        await food.save();
        console.log(food);
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding food" });
    }
};


//get data for a particular id and update 
const geteditFoodList = async (req, res) => {
    // console.log(req.params.id);
    try {
        const food = await foodModel.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }
        res.json({ success: true, data: food });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

//edit food item 
const editFood = async (req, res) => {
    const { id } = req.params;
    const { name, originalPrice, discount, description, price, category, image } = req.body;

    const updateData = {
        name,
        originalPrice,
        discount,
        description,
        price,
        category,
        ...(image && { image }) // only include if image exists
    };

    try {
        const updatedFood = await foodModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedFood) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        res.json({ success: true, data: updatedFood, message: "Food item updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// remove food item
const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {addFood,listFood,removeFood,editFood,geteditFoodList}