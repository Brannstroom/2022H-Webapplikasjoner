import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import Food from './components/Food';
import Alert from './components/Alert';
import { useState } from 'react';

const food = ['Pizza', 'Hamburger', 'Coke'];

const App = () => {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <Wrapper>
      <MyComponent title="It Works" />
      <Food food={food} />
      <Alert handleChange={handleChange} state={inputValue} />
      <p>{inputValue}</p>
    </Wrapper>
  );
};

export default App;
