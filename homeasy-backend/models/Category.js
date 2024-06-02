import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
    },
  ],
});

const Category = mongoose.model('Category', CategorySchema);
export default Category;
