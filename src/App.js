import { useState } from "react";


function App() {
  //state, function to update state
  const [counter, setCounter] = useState(0) 
  //DO NOT EVER MODIFY STATE DIRECTLY
  //ex. counter = 10, it will throw the virtual DOM out of sync. 
  
  //Name things appropriately, remember to use set[name] as the second item in the array. setCounter is a function that modifies the counter in this case

  //Concept: State, state is the data in your application that changes, and is tracked, you need the DOM to reflect that change
  const increment = ()=>{
    setCounter(currentValue => currentValue + 1)
  }

  const decrement = ()=>{
    if (counter === 0){return}
    setCounter(currentValue => currentValue - 1)
  }
  
  const me = 'Esteban'
  return (
    <div className="App">
        <h1>Count: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decerement</button>
    </div>
  );
}

export default App;
