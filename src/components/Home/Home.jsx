import React, { useMemo } from "react";
import banner from "../../assets/images/banner2.jpg";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import ViewRecipeImg from '../../assets/images/view.png'
import AddRecipeImg from '../../assets/images/add.png'
import GetRecipeImg from '../../assets/images/get.png'

function Home() {
  const navigate = useNavigate();

  const backgroundStyle = useMemo(() => {
    return { backgroundImage: `url(${banner})` };
  }, []);
  return (
    <div
      className="relative bg-cover bg-center min-h-[100vh] w-full flex items-center"
      style={backgroundStyle}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex font-montserrat justify-between w-full px-20">
        {/* <button
          className=" text-white bg-[#a16925] px-4 py-2 rounded transition duration-300 hover:scale-95"
          onClick={() => navigate("/recipeList")}
        >
          View Recipe
        </button> */}
        {/* <button
          className=" text-white bg-[#a16925] px-4 py-2 rounded transition duration-300 hover:scale-95 "
          onClick={() => navigate("/addRecipe")}
        >
          Add Recipe
        </button> */}
        <Card img={ViewRecipeImg} title={'view recipes'} btnTxt={'View Recipe'} navigate={() => navigate('/recipeList')} />
        {/* <Card img={GetRecipeImg} title={'Get Recipe'} btnTxt={'Get Recipe'} navigate={() => navigate('/get-recipe')} /> */}
        <Card img={AddRecipeImg} title={'Add recipe'} btnTxt={'Add Recipe'} navigate={() => navigate('/addRecipe')} />
      </div>
    </div>
  );
}

export default Home;
