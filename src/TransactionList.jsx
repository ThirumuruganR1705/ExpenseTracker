import { Tooltip } from '@mui/material';
import React, { useContext , useEffect, useState } from 'react';
import Navbar from './NavBar';
import newContext from './NewContext';
import img from './prank.png';

function TransactionList() {
    const value = useContext(newContext);
    let [count,setCount]=value;

// useEffect(()=>{
//     // getCookie();

//     for(let i=0;i<1000;i++){
//         let n=i;
//         if(count.list[n]){
//             console.log(count.list[n].desc);
//         }
        
//     }
// })

    // let getCookie=()=>{
    //     for (let i=0;i<100;i++){
    //         let g1 = localStorage.getItem("desc"+i);
    //         if (g1){
    //             let g2 = g1.split("/");
    //             console.log(g2);
    //             for (let i=0;i<1000;i++){
    //                 let n=i;
    //                 if(count.list[i]){
    //                     if (!(count.list[n].desc === g2[0] ) && !(count.list[n].amount === g2[1])){
    //                         count.list.push({
    //                             key:Math.floor(Math.random()*1000),
    //                             desc:g2[0],
    //                             amount:g2[1]
    //                         })
    //                     }
    //                 }
    //             }
    //             console.log("added");
    //         }
    //     }
    //     // console.log(count.list[0].desc);
    // }


    
    // let demo=count.list;

    let remover=(e)=>{

        if ((eval(e.target.value))>=0){
            setCount({plus:count.plus - eval(e.target.value),minus:count.minus,list:count.list.filter(arr => arr.key !== eval(e.target.id)),shower:count.shower})
        }
        else if ((eval(e.target.value))<0) {
            setCount({plus:count.plus ,minus:count.minus - eval(e.target.value),list:count.list.filter(arr => arr.key !== eval(e.target.id)),shower:count.shower})
        }     

    }


    let demo = [...count.list].reverse();


    return ( 
        <div className='maintransaction'>

            <Navbar/>

            <div className='transactionList'>
            
                <h2 className='list-title'>History</h2>
                {demo.map((arr)=>(
                    <div key={Math.random()} className="list">
                        <div  className='btn-remove'><Tooltip title="Delete" arrow><button className='remover' id={arr.key} value={arr.amount} onClick={remover}>X</button></Tooltip></div>
                        <Tooltip title={arr.desc} placement="top" arrow><li className='list-item'>{arr.desc}</li></Tooltip>
                        <li className='list-item' id={arr.amount>0?"cash":"cash1"}>{arr.amount}</li>
                    </div>
                ))}

                { count.list.length===0 &&
                <div>
                    <div className='img'>
                        <img className='image' src={img} />
                        <span id='no'>No History</span>
                    </div>

                
                </div>}

            </div>
        </div>
     );
}

export default TransactionList;