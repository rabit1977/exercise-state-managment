import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const idRef = useRef(1);
  const [names, setNames] = useState([
    { id: idRef.current++, name: 'Andi' },
    { id: idRef.current++, name: 'Baki' },
  ]);
  const onAddName = () => {
    setNames([...names, { id: idRef.current++, name: inputRef.current.value }]);
    inputRef.current.value = '';
  };

  return (
    <div className='App'>
      {names.map((name) => (
        <div key={name.name}>
          {name.id}-{name.name}
        </div>
      ))}
      <input type='text' ref={inputRef} placeholder='make me use ref' />
      <button onClick={onAddName} className=''>
        Add Name
      </button>
    </div>
  );
}

export default App;
