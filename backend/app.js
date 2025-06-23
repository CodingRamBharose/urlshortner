import express from "express"
import dotenv from "dotenv"
import { nanoid  } from "nanoid";
import connectDB from "./src/config/db.config.js";
import urlschema from "./src/models/shorturl.model.js";


dotenv.config();
connectDB(); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    

const PORT = process.env.PORT || 3000;

app.post('/api/create', (req,res)=>{
    const {url} = req.body;
    console.log(url);
    const shortUrl = new urlschema({
        originalUrl: url,
        shortCode: nanoid(7),
    });
    shortUrl.save()
    res.send(nanoid(7));
})

app.get('/:shortCode', async (req, res) => {
    const { shortCode } = req.params;
    try {
        const url = await urlschema.findOne({ shortCode });
        if (!url) {
            return res.status(404).send('URL not found');
        }
        url.clickCount += 1;
        await url.save();
        res.redirect(url.originalUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(PORT, ()=>{
    console.log(`server running on port http://localhost:${PORT}`);
})