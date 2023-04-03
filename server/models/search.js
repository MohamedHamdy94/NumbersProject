import mongoose from 'mongoose';

const searchSchema = new mongoose.Schema(
  {
    carrier: { type: String , default:''},
    country_code: { type: String , default:''},
    country_name: { type: String , default:''},
    country_prefix: { type: String , default:''},
    international_format: { type: String , default:'' },
    line_type: { type: String , default:''},
    local_format: { type: String , default:''},
    location: { type: String, default: ''},
    number: { type: String, required: true },
    valid: { type: Boolean, default: true },
     number_id:{type:mongoose.Schema.Types.ObjectId,ref:"Numbers"}
  },
  {
    timestamps: true,
  }
);
const SearchResult = mongoose.model('SearchResult', searchSchema);
export default SearchResult;
