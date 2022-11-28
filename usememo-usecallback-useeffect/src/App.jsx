import { useCallback, useMemo, useState } from 'react';
import './App.css';

function SortedList({ list, sortFunc }) {
  console.log('srotedList render');
  const sortedList = useMemo(() => {
    console.log('Running sort');
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>{sortedList.join('')}</div>;
}

function App() {
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(['John', 'Johns', 'George', 'Ringo']);
  // const sortedNames = [...names].sort();
  // const sortedNames = useMemo(() => [...names].sort(), [names]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const countTotal = count1 + count2;

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);
  return (
    <>
      <div className='App'>
        {' '}
        Total: {total} of {numbers.length}
      </div>
      <div>Names: {names.join(', ')}</div>
      {/* <div>sortedNames: {sortedNames.join(', ')}</div> */}
      <SortedList list={names} sortFunc={sortFunc} />
      <button onClick={() => setCount1(count1 + 1)}> Count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}> Count2: {count2}</button>
      <div>{countTotal}</div>
    </>
  );
}

export default App;
