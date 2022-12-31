import React ,{useState} from 'react';
import { useContext } from 'react';
import Navbar from './NavBar';
import newContext from './NewContext';

function AddTransaction() {

    const value= useContext(newContext);
    let [count,setCount]=value;
    let siNo = 0;

    let setCookie=(e,f)=>{
        let randNo = Math.floor(Math.random()*100);
        localStorage.setItem("desc"+randNo,e+"/"+f);
        
    }

    let SubmitHandler=(e)=>{
        e.preventDefault();
        // setAmount(e.target[1].value);
        if ((e.target[0].value!=="")&&(e.target[1].value!=="")){
            if (e.target[1].value>0){
                setCount({plus:count.plus+(eval(e.target[1].value)),minus:count.minus,list:count.list,shower:count.shower});
            }
            else{
                setCount({plus:count.plus,minus:count.minus+(eval(e.target[1].value)),list:count.list,shower:count.shower});
            }

            
    
            count.list.push({
                key:Math.floor((Math.random()*1000)),
                desc:e.target[0].value,
                amount:e.target[1].value
            });

            setCookie(e.target[0].value,e.target[1].value);

            e.target[0].value="";
            e.target[1].value="";

        }
    }

    return ( 
        <div className='addTransaction'>
            <div>
                <Navbar/>
            </div>
            <div className='add-content mt-6'>
                <h3 className="add-head">New Transaction</h3>
                <form onSubmit={SubmitHandler} className="add">
                    <div className='desc'>
                        <h5 className='desc-title text-base'>Description</h5>
                        <input placeholder='Description' className='desc-in text-lg'/>
                 </div>
                    <div className='amount'>
                        <h5 className='amount-title text-base'>Amount</h5>
                        <input className='amount-in text-lg' type='number' name='amount' placeholder='Enter Amount Here'/>
                        <span className="note">Please Enter Amount In Negative if expense </span>
                    </div>
                    <div className='btn h-8'><button className='submit text-base' >Add</button></div>
                </form>
            </div>
        </div>
     );
}

export default AddTransaction;