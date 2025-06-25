import { generateNenoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/shortUrl.js";

export const createShortUrlWithoutUserService = (url)=>{
    const shortCode = generateNenoId(7);
    saveShortUrl(shortCode, url)
    return shortCode;
}

export const createShortUrlWithUserService = (url, userId)=>{
    const shortCode = generateNenoId(7);
    saveShortUrl(shortCode, url, userId)
    return shortCode;
}