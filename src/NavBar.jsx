import React,{useState} from 'react';
import Header from './Header';
import { useContext } from 'react';
import newContext from './NewContext';
import $ from 'jquery';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';

function Navbar() {

    let value = useContext(newContext);

    let [count,setCount]= value;

    let [closer,setCloser] = useState("open")

    let openMenu=()=>{
        setCloser("close");
    }

    $(document).ready(function(){
        $(".menu-toggle").click(function(){
            $(this).hide();
            $(".menu-close").show();
            $("#men").slideDown();
        });
    })
    $(document).ready(function(){
        $(".menu-close").click(function(){
            $(this).hide();
            $(".menu-toggle").show();
            $("#men").slideUp();
        });
    })

    let closeMenu=()=>{
        setCloser("open");
    }

    return ( 
        <>
        {<div className='navbar'>
                    <Header/>                    

                    <ul  id="men">
                        <li className='menu-item' id={closer} onClick={()=>setCount({plus:count.plus,minus:count.minus,list:count.list,shower:"one"})}>Home</li>
                        <li className='menu-item' id={closer} onClick={()=>setCount({plus:count.plus,minus:count.minus,list:count.list,shower:"two"})}>Add Transaction</li>
                        <li className='menu-item' id={closer} onClick={()=>setCount({plus:count.plus,minus:count.minus,list:count.list,shower:"three"})}>History</li>
                        <li className='menu-item' id={closer} onClick={()=>setCount({plus:count.plus,minus:count.minus,list:count.list,shower:"two"})}>About</li>
                        <li className='menu-item' id={closer} onClick={()=>setCount({plus:count.plus,minus:count.minus,list:count.list,shower:"two"})}>Feedback</li>
                    </ul>
                    <div className='menu'>
                        <li className='menu-toggle'  onClick={openMenu}><i className="fa-solid fa-bars"></i></li>
                        <li className='menu-close'  onClick={closeMenu}><i className="fa-solid fa-xmark"></i></li>
                        {/* { <button className='menu-item'>Sign Out</button> } */}
                    </div>
        </div>}
        </>
     );
}

export default Navbar;