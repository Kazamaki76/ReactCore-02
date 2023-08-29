
// 1FC App 
function App() {
    // 2 Handle Logic #1 
    // state:number= 0 ;
    // const array = React.useState(0)
    // console.log(array); 
    // console.log(array); 
        
    const [state, setState] = React.useState(10);
    console.log(state);

    let n = 10;

    function handleIncrease() {
        // console.log("increase") ; 
        setState(state + 1) ;
    }

    function handleDecrease() {
        
        setState(state - 1) ;
    }



    function handleReset() {
        setState(state * 0) ;
    }

    // 3 Return of #1 => UI
    return ( 
        
    <div className="container"> 
    <button onClick ={handleIncrease}>increase</button>  
    <span> {state} </span> 
    <button onClick ={handleDecrease}>decrease</button>  
    
    <button onClick ={handleReset}>Reset</button>  
    </div> 
    
    );
}


//react DOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);

//  1FC :App
// function Counter () {

// }


// function App() {
//     const [isDark, setIsDark] = React.useState(false);

//     function handleToggle() {
//         setIsDark(!isDark);
//     }
//     console.log(isDark ? 'Dark' : 'Light');
//     return (
//         <div>
//             {/* HardCode */}
//             {/* <h3> Light-Mode </h3>
//             <h3> Dark-Mode </h3> */}

//             {/* Condition Render Tag */}
//             {/* {isDark ? <h3>Dark</h3> : <h3>Light</h3>} */}

//             {/* Condition Render String */}
//             {/* <h3>{isDark ? 'Dark' : 'Light'} </h3> */}

//             {/* {isDark ? <h3 className='dark'>Dark</h3> : <h3 className='light'>Light</h3>} */}

//             <h3 className={`${isDark ? 'dark' : 'light'}`}> {isDark ? 'Dark' : 'Light'}</h3>
//             <button onClick={handleToggle}> Toggle mode </button>
//         </div>
//     );
// }

// // ReactDOM
// const domRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(domRoot);
// root.render(<App />);