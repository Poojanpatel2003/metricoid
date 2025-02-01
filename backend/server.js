const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));
const userSchema = new mongoose.Schema({
  name: String,
  skills: [String],
  Hobbies: [String],
  Passions: [String],
  academicBackground: String,
});
const User = mongoose.model("User", userSchema);
app.get("/api/user", async (req, res) => {
  const user = await User.findOne();
  res.json(user);
});
app.post('/api/user',async(req,res)=>{
    try {
        const user=new User(req.body);
        await user.save();
        res.json(201).json({message:"added successfully",user})
    } catch (error) {
        console.log(error);
        res.json(201).json({message:"failed to add"})
    }
})
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is runnig on ${port}`));
