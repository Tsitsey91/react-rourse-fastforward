
//React Components = functions returning JSX, which we use to 
// tell React(and eventually the browser) what should appear on the
//screen

function App() {
  return (
    //JSX code 
    <div>
      <h1>My Todos</h1>
      <div className="card">
        <h2>TITLE</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

//we export it, to make it available outside of this file
export default App;
