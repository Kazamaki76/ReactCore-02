function App() {
  const handleChange = function (event) {
    console.log(event); //event ={targer : {value: "b"} }
    console.log(event.target.value);
  };
  return <input onChange={handleChange} />;
}


const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
