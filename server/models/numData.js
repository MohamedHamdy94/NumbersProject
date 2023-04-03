import mongoose from 'mongoose';

const numSchema = new mongoose.Schema(
  {
    carrier: { type: String, required: true },
    country_code: { type: String, required: true },
    country_name: { type: String, required: true },
    country_prefix: { type: String, required: true },
    international_format: { type: String, required: true },
    line_type: { type: String, required: true },
    local_format: { type: Number, required: true },
    location: { type: String, required: true },
    number: { type: Number, required: true, unique: true },
    valid: { type: Boolean, default: true },
  },

);
const Numbers = mongoose.model('Numbers', numSchema);
export default Numbers;
