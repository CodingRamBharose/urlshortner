import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/config/db.config.js";
import shorturl from "./src/routes/shortUrl.routes.js";
import { redirectFromShortUrl } from "./src/controller/redirect.controller.js";


dotenv.config();
connectDB(); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    

const PORT = process.env.PORT || 3000;

app.use('/api/create', shorturl)

app.get('/:shortCode', redirectFromShortUrl);

app.listen(PORT, ()=>{
    console.log(`server running on port http://localhost:${PORT}`);
})