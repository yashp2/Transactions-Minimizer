import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './Components/Users/Users';
import Transactions from './Components/Transactions/Transactions';

function App() {
  const [udata , updateudata] = useState([
    {
      name:"yash",
      uid:"9145135230@upi"
    },
    {
      name:"shubham",
      uid:"9145135231@upi"
    },
    {
      name:"kushal",
      uid:"9145135232@upi"
    },
  ]);
  return (
    <div className="App">
      {/* <Users udata = {udata} updateudata={updateudata} /> */}
      <Transactions />
    </div>
  );
}

export default App;
