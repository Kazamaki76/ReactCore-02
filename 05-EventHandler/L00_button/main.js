// ReactDOM
function  App () {

    const handleClick = function() {
        console.log("clicked");
        alert("Hi");
    }
    return <button onClick={handleClick} >Button</button>;
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
