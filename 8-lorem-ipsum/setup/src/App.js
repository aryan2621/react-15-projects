import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    let amount = parseInt(count);
    e.preventDefault();
    if (count <= 0) {
      amount = 1;
    }
    if (count > 0) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsumn</h3>
      <form onSubmit={handleSubmit} className="lorem-from">
        <label htmlFor="amount">Paragraph:</label>
        <input
          type="number"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((t) => {
          return <p>{t}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
