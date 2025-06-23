import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true, index: true },
  clickCount: { type: Number, default: 0 },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

});

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);

export default ShortUrl;
