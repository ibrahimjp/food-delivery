import foodModel from '../models/foodModel.js'
import fs from 'fs'


// add food item

const addFood = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        originalPrice:req.body.originalPrice,
        discount:req.body.discount,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        console.log(food);
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

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
const editFood = async (req,res) => {
    try {
        const { id } = req.params;
        const { name, originalPrice, discount, description, price, category } = req.body;
        const image = req.file ? req.file.filename : null;
    
        const updateData = {
          name,
          originalPrice,
          discount,
          description,
          price,
          category,
        };
    
        if (image) {
          updateData.image = image;
        }
    
        const updatedFood = await foodModel.findByIdAndUpdate(id, updateData, { new: true });
    
        if (!updatedFood) {
          return res.status(404).json({ success: false, message: "Food item not found" });
        }
    
        res.json({ success: true, data: updatedFood, message: "Food item updated successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
      }
}
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