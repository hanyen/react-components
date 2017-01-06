// TODO

//1. Create a component
//to create a React component you just write a function (with a capitalized name by convention) that returns JSX. 
//The JSX should represent the intended HTML of the rendered component.
  // var App = () => (
  // <div>Some cliche </div> //JSX
  // );
//2. Render the component to the page
//To render a React component you use ReactDOM.render(componentInstance, DOMElement). 
//JSX returns a component instance when you wrap a component in an HTML tag. 
//Thus, to render the component App created above:
  // ReactDOM.render(<App />, document.getElementById("app"));

// React gives you a way to pass data into components, making them more dynamic and reusable. When creating a component, you can expect an argument to be passed in, typically called props. When creating an instance of this component, you can pass in these props using a syntax similar to passing properties into HTML elements.
// Note that inside of JSX, you can write JavaScript expressions inside of curly braces.

/*var GroceryList = (props) => (
    <ul>
      <li>{props.list[0]}</li>
      <li>{props.list[1]}</li>
      <li>{props.list[2]}</li>
    </ul>
);

var Milk = () => (
  <li>milk</li>  
);

var Bread = () => (
  <li>bread</li>
);

var App = () => (
  <div>
    <h2>Grocery list</h2>
    <GroceryList list={['Milk', 'Bread', 'Cheese']}/>
  </div>
);*/

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false,
    };
  }

  onListItemClick() {
    this.setState( {
      done: !this.state.done
      }
    );

  }

  //onlistitem hover
  onListItemHover() {
    this.setState( {
      hover: !this.state.hover
      }
    );
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return(
      <li style={style} onMouseOver={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.list}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.list.map(list =>
      <GroceryListItem list={list} />
    )}
  </ul>
);
var data = ['Milk', 'Bread', 'Cheese'];

ReactDOM.render(<GroceryList list={data}/>, document.getElementById("groceryList"));

/*
// React components come with built-in support for many user events.
// https://facebook.github.io/react/docs/events.html#supported-events

var TodoList = (props) => {

  // This function will be called when the first `<li>` below is clicked
  // Notice that event handling functions receive an `event` object
  // We want to define it where it has access to `props`

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement
  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
}

// Here we are creating an instance of the `TodoList` component <TodoList ... />
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> 
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
*/
