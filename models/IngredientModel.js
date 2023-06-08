import mongoose from 'mongoose';

const { Schema } = mongoose;

const IngredientSchema = new Schema({
  recipe: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});


const Ingredient = mongoose.model('Ingredient', IngredientSchema);

export default Ingredient;
