import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const resposne = await (await fetch(`${url}${id}`)).json();
        if (resposne.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: ins,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = resposne.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            ingredients,
            ins,
            glass,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">Not Existsed</h2>;
  }
  const { name, image, category, info, glass, ins, ingredients } = cocktail;
  return (
    <div>
      <section className="cocktail-section section">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt="" />
          <div className="drink-info">
            <p>
              <span className="drink-data">Name:</span>
              {name}
            </p>
            <p>
              <span className="drink-data">Category :</span>
              {category}
            </p>{" "}
            <p>
              <span className="drink-data">Information:</span>
              {info}
            </p>{" "}
            <p>
              <span className="drink-data">Glass:</span>
              {glass}
            </p>
            <p>
              <span className="drink-data">Instructions:</span>
              {ins}
            </p>
            <p>
              <span className="drink-data">
                {ingredients.map((i) => {
                  return i ? <span>{i}</span> : null;
                })}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCocktail;
