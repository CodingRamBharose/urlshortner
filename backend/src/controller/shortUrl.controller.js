import { createShortUrlWithoutUserService } from "../services/shortUrl.service.js";

export const createShortUrl = async (req,res)=>{
    const {url} = req.body;
    const shortCode = createShortUrlWithoutUserService(url);
    res.send(process.env.URL_PREFIX + shortCode);
}