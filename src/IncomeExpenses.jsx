import React , {useState}from 'react';
import { useContext } from 'react';
import newContext from './NewContext';




function IncomeExpenses() {

    const value = useContext(newContext);
    
    let [count,setCount] = value;



    return ( 
        <div className='IncomeExpense'>
            <div className="Income">
                <h3>Total Income</h3>
                <span className='countEx'>{'\u20B9'}{count.plus}</span>
            </div>
            <div className="Expense">
                <h3>Total Expense</h3>
                <span className='countEx'>{'\u20B9'}{count.minus*(-1)}</span>
            </div>
        </div>
     );
}

export default IncomeExpenses;