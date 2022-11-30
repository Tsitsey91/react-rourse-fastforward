
//React Components = functions returning JSX, which we use to 
// tell React(and eventually the browser) what should appear on the
//screen

import Todo from "./components/Todo";

function App() {
  return (
    //JSX code 
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Master React'/>
      <Todo text='Mop the floor' />
     </div>
  );
}

//we export it, to make it available outside of this file
export default App;
