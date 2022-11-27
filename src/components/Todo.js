
// The component/function has to start with capital letter
//so that when we call it as an html element, it can be 
// differentiated from the built-in html elements

//The function parameter (we name "props" because this concept of React 
//is named that way...but we can name it whatever we want)
//is a JS object which contains all the attributes added in the html
//element(they are available as key/value pairs)
function Todo(props) {
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn">Delete</button>
            </div>
        </div>
        )
}

export default Todo