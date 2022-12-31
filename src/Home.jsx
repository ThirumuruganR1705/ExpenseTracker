import React, { useContext } from 'react';
import IncomeExpenses from './IncomeExpenses';
import Navbar from './NavBar';
import newContext from './NewContext';

function Home() {

    let [count,setCount] = useContext(newContext);

    let balance = count.plus + count.minus;

    return ( 
        <div>
            <Navbar/>
            <div className='subHome'>
            
            <div className='home'>
                <div className="tot-balance">
                    <h3>Total Balance</h3>
                    <h5><span className='rupee'>{'\u20B9'}</span>{balance}</h5>
                </div>
                <IncomeExpenses/>
            </div>
            </div>
        </div>
     );
}

export default Home;