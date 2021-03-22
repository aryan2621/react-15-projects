import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchterm } = useGlobalContext();
  const serachCocktail = () => {
    setSearchterm(searchValue.current.value);
  };
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchValue = React.useRef("");
  return (
    <div>
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Search your favourite </label>
            <input type="text" ref={searchValue} onChange={serachCocktail} />
          </div>
        </form>
      </section>
    </div>
  );
};

export default SearchForm;
