import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3> Register User </h3>
          <input placeholder="email..." />
          <input placeholder="password..." />
          <button> Create User </button>
        </div>
        <div> 
          <h3> Log in </h3>
          <input placeholder="email..." />
          <input placeholder="password..." />
          <button> Log in </button>
        </div>
      </header>
    </div>
  );
}

export default App;
