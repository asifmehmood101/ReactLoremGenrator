import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const CheckNumber = (number) => {
    if (number === 0) {
      return 1;
    } else {
      return count;
    }
  };
  //On submit btn
  const HandleSubmit = (e) => {
    e.preventDefault();

    const amount = parseInt(count);
    const result = data.slice(0, CheckNumber(amount));
    setText(result);
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum</h3>
      <form className='lorem-form' onSubmit={HandleSubmit}>
        <label htmlFor='amount'>Paragraph:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          onChange={(e) => setCount(e.target.value)}
          value={count}
        />
        <button type='submit' className='btn'>
          Genrate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
