// ข้อ 1
function App () {

    const  [ state, setState] = React.useState(false);
    console.log(state);

    function handleClick() {
        setState(state) ;
    }
    return (
        <div className="container ">
            <button className={`${!state ? "hidden" : "show" }`} onClick={handleClick}>Click to hide me </button>
            <span> {state} </span> 
        </div>
    )
}
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);


// เฉลย ข้อ 123
// function App() {
//     // State
//     const [isShow, setIsShow] = React.useState(true);

//     // Render
//     const handleClick = () => setIsShow(!isShow);

//     // #1
//     // return <div>{isShow && <button onClick={handleClick}>Click to hide me</button>}</div>;

//     // #2
//     // return (
//     //     <div>
//     //         <button onClick={handleClick}>Click to hide text</button>
//     //         {isShow ? <h3>Text</h3> : ''}
//     //     </div>
//     // );

//     // #3
//     // return (
//     //     <div>
//     //         <button onClick={handleClick}>{isShow ? 'Hide' : 'Show'}</button>
//     //         {isShow ? <h3>Text</h3> : ''}
//     //     </div>
//     // );

//     // แถม

//     if (isShow) {
//         // isLoading == true => render Spinner
//         return (
//             <div>
//                 <button onClick={handleClick}>Hide</button>
//                 <h1>Text</h1>
//             </div>
//         );
//     }

//     return (
//         // isLoading == false ==> render App
//         <div>
//             <button onClick={handleClick}>Show</button>
//         </div>
//     );
// }

// // ReactDOM
// const domRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(domRoot);
// root.render(<App />);