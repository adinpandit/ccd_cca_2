import {useState} from "react";
import "./App.css";

function App(){
  // Stores the current counter value
  const[count,setCount]=useState(0);

  // Stores whether dark mode is enabled
  const[darkMode,setDarkMode]=useState(false);

  function increaseCount(){
    setCount(count+1)
  }

  function decreaseCount(){
    if(count > 0){
      setCount(count-1)
    }
  }

  function resetCount(){
    setCount(0)
  }

  function toggleDarkMode(){
    setDarkMode(!darkMode);
  }

  return(
    <main className={darkMode ? "app dark":"app light"}>
      <button className="theme-button" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <section className="counter-card">
        <h1>Counter App</h1>

        <p className="count">{count}</p>

        <div className="button-container">
          <button className="increase" onClick={increaseCount}>
            Increase
          </button>

          <button className="decrease" onClick={decreaseCount} disabled={count===0}>
            Decrease
          </button>

          <button className="reset" onClick={resetCount}>
            Reset
          </button>
        </div>
        {count===0 && (
          <p className="message">The counter cannot go below zero.</p>
        )}
      </section>
    </main>
  )
}
export default App;
