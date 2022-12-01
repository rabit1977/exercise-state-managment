import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [names, setNames] = useState([]);
  const onAddName = () => {
    setNames([...names, inputRef.current.value]);
    inputRef.current.value = '';
  };

  return (
    <div className='App'>
      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
      <input type='text' ref={inputRef} placeholder='make me use ref' />
      <button onClick={onAddName} className=''>
        Add Name
      </button>
    </div>
  );
}

export default App;
