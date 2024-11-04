import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  recipes: [{id: 1, text: 'hello1'},{id: 2, text: 'hello2'}],
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      const recipe = {
        id: nanoid(),
        text: action.payload,
      }
      state.recipes.push(recipe)
    },
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload)
    }
  },
})

export const { addRecipe, removeRecipe } = recipeSlice.actions

export default recipeSlice.reducer