const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const useRoutes  = require("./userRoutes");
const app = express();


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('MongoDB connected'))
    .catch(err => console.log(err));

    app.use('/api/user',useRoutes)

    const PORT = process.env.PORT || 7860;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost${PORT}`);
    
})