import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch('/names.json')
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedName, setSelectedName] = useState(null);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);
  useEffect(() => {
    if (selectedName) {
      fetch(`/${selectedName}.json`)
        .then((response) => response.json())
        .then((data) => setSelectedNameDetails(data));
    }
  }, [selectedName]);

  return (
    <div>
      Names:{' '}
      {names.map((name) => (
        <button onClick={() => setSelectedName(name)}>{name}</button>
      ))}
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}

export default App;
