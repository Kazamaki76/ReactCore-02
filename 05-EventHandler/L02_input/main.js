// ReactDOM
function App () {
    
    const handleChange = function (event) {
        console.log(event)
        // console.log
    }
    
    return <button onChange={handleChange}> <input/>
    </button>

}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
