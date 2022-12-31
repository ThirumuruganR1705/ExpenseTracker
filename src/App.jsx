import React, { useState } from 'react';
import newContext from './NewContext';
import Home from './Home';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import Login from './Login';
import Register from './Register';
import './index.css';
import Demo from './Demo';

function App() {

    let [count,setCount]=useState({plus:0,minus:0,list:[],shower:"one"});

    return ( 
        <newContext.Provider value={[count,setCount]}>
            <div className='main'>
                <div>
                    {count.shower==="one" && <Home/>}
                    {count.shower==="two" && <AddTransaction/>}
                    {count.shower==="three" && <TransactionList/>}
                    {count.shower==="four" && <Login/>}
                    {count.shower==="five" && <Register/>}
                    {count.shower==="ten" && <Demo/>}
                </div>
            </div>
        </newContext.Provider>
     );
}

export default App;