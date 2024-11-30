import React, { useState } from "react";
import { addRecipe } from "../../features/recipe/recipeSlice";
import { useDispatch } from "react-redux";

function AddRecipe() {
  const [input, setInput] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [image, setImage] = useState(null);
  const [inputServings, setInputServings] = useState(0);
  const [inputreadyIn, setInputReadyIn] = useState(0);
  const [inputinstructions, setInputInstructions] = useState("");
  const [inputingredients, setInputIngredients] = useState("");
  const [showPopup, setShowPopup] = useState(false)
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage(reader.result); // Update the state with the Base64 URL
      });
      reader.readAsDataURL(file); // Convert the image to a Base64 URL
    }
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(
        addRecipe({
          title: input,
          description: inputDescription,
          imageUrl: image,
          servings: inputServings,
          readyIn: inputreadyIn,
          instructions: inputinstructions.split("\n"),
          ingredients: inputingredients.split("\n"),
        })
      );
      setInput("");
      setInputDescription("");
      setInputServings("");
      setInputReadyIn("");
      setInputInstructions("")
      setInputIngredients("")
      setImage(null)
      setShowPopup(true)
      setTimeout(() => {
        setShowPopup(false)
      }, 3000);
    }
  };

  return (
    <>
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col space-y-6 w-full mx-auto p-[72px] bg-gray-900 shadow-lg min-h-screen"
      >
        <h2 className="text-[45px] font-bold text-[#a16925] mb-8 text-center uppercase font-montserrat">
          Add a Recipe
        </h2>

        <div className="w-[50%] mx-auto">
          <label className="block text-white font-semibold">Title:</label>
          <input
            type="text"
            className="bg-gray-700 rounded border border-gray-600 text-gray-100 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400 w-full mb-5"
            placeholder="Enter a Recipe Title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <label className="block text-white font-semibold">Servings:</label>
          <input
            type="number"
            className="bg-gray-700 rounded border border-gray-600 text-gray-100 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400 w-full mb-5"
            placeholder="Enter number of Servings"
            value={inputServings}
            onChange={(e) => setInputServings(e.target.value)}
            required
          />
          <label className="block text-white font-semibold">
            Ready in minutes:
          </label>
          <input
            type="number"
            className="bg-gray-700 rounded border border-gray-600 text-gray-100 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400 w-full mb-5"
            placeholder="Enter Time Ready in minutes"
            value={inputreadyIn}
            onChange={(e) => setInputReadyIn(e.target.value)}
            required
          />
          <label className="block text-white font-semibold">Ingredients:</label>
          <textarea
            type="text"
            className="bg-gray-700 rounded border border-gray-600 text-gray-100 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400 w-full mb-5"
            placeholder="Enter Ingredients in points"
            value={inputingredients}
            onChange={(e) => setInputIngredients(e.target.value)}
            required
          />
          <label className="block text-white font-semibold">
            Instructions:
          </label>
          <textarea
            type="text"
            className="bg-gray-700 rounded border border-gray-600 text-gray-100 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400 w-full mb-5"
            placeholder="Enter Instructions in points"
            value={inputinstructions}
            onChange={(e) => setInputInstructions(e.target.value)}
            required
          />
          <label className="block text-white font-semibold">Summary:</label>
          <textarea
            type="text"
            className="bg-gray-700 rounded border border-gray-600 text-gray-100 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400 w-full mb-5"
            placeholder="Enter a Recipe Summary"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
            required
          />
          <label className="block text-white font-semibold">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-gray-700 rounded border border-gray-600 text-gray-100 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out w-full mb-5"
          />

          {image && (
            <div className="mt-4">
              <img
                src={image}
                alt="Recipe Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-[#a16925] text-white  py-3 px-6 rounded-lg shadow hover:bg- transition duration-200 ease-in-out w-full"
          >
            Add Recipe
          </button>
          {showPopup &&
            <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
              Recipe added successfully!
            </div>
          }
        </div>
      </form>
    </>
  );
}

export default AddRecipe;
