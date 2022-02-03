import logo from './logo.svg';
import './App.css';
import TableContainer from './components/TableContainer'
import {useState} from 'react'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Update props</button>
      <TableContainer count={`count prop is  ${count}`}/>
    </div>
  );
}

export default App;
