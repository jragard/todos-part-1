import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';



class TodoItem extends Component {


  
render() {
    
  return (
    <React.Fragment>
      <li className={this.props.checked ? "completed" : ""}>
        <div className="view">
							<input className="toggle" type="checkbox" checked={this.props.checked}/>
							<label>{this.props.value}</label>
							<button className="destroy"></button>
		    </div>
      </li>
    </React.Fragment>
    );
  }
  }

class TodoList extends Component {

 
  render() {
    return (


      <React.Fragment>
        <ul className="todo-list">
        {this.props.todos.map( todo => <TodoItem key={todo.id} value={todo.title} checked={todo.completed} /> )}
        </ul>
      </React.Fragment>
    )
  }

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: todoList, text: ''}
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
    console.log(this.state.text);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.text.length) {
      return;
    }
    
    
    this.setState(prevState => ({
      todos: [...prevState.todos, this.state.text],
      text: ''
    }));
  }

  render() { 

    return (
      <React.Fragment>
        <section className="todoapp">
        
          <header className="header">
            <h1>todos</h1>
            <form onSubmit={this.handleSubmit}>
              <input
               placeholder="What needs to be done?"
                className="new-todo"
                onChange={this.handleChange}
                autofocus
              />
            </form>
          </header>

        <section className="main">
           <TodoList todos={this.state.todos} />
        </section>

        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed">Clear completed</button>
        </footer>

        
        </section>
      </React.Fragment>


      
    );
  };

  


}

export default App;
























{/* <React.fragment>
      <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
				    <input class="new-todo" placeholder="What needs to be done?" autofocus>
          </header>
      </section>

    </React.fragment>  */}