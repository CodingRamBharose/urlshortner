import urlschema from '../models/shortUrl.model.js';

export const saveShortUrl = async (shortCode, originalUrl, userId) => {
    const shortUrl = new urlschema({
        originalUrl: originalUrl,
        shortCode: shortCode,
    });
    if (userId) {
        shortUrl.user_Id = userId;
    }
    await shortUrl.save();
}


export const getShortUrlByCode = async (shortCode) => {
    try {
        const url = await urlschema.findOne({ shortCode });
        return url;
    } catch (error) {
        console.error('Error fetching short URL:', error);
        throw error;
    }
}