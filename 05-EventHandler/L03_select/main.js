// ReactDOM
function App () {
    
    const handleChange1 = function () {
        console.log();
    }
    
    return  <button onChange={handleChange} >Button</button>;
    <>
    
    
    
    </>
}



const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
