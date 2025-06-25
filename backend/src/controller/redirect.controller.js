import { getShortUrlByCode } from '../dao/shortUrl.js';

export const redirectFromShortUrl = async (req, res) => {
    const { shortCode } = req.params;
    try {
        const url = await getShortUrlByCode(shortCode);
        if (!url) {
            return res.status(404).send('Short URL not found');
        }
        url.clickCount += 1;
        await url.save();
        res.redirect(url.originalUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}