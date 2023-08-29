import './index.css';
import React, { useState } from 'react';
import { createRoot } from 'react-dom';




import Item from "./components/Item.jsx"
// React
    // function Item() {
    //     return<h1> ITEM</h1>
    // }

function App() {
    const [email, setEmail] = useState()
    
    
    function handleChangeEmail(event) {
        console.log(event.target.value);

        setEmail(event.target.value)

    }

    return (
        <div className= "app">
            <h1>Sign up </h1>
            <form className='form__register' >  
                <input 
                type='email' 
                placeholder='email'
                onChange={handleChangeEmail}/> 

                <input type='password' placeholder='password'/>
                <input type='password'placeholder='confirm password'/>
                <button> Sign up with Email </button>
            </form>
            
        </div>
    );
}

// ReactDOM

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

