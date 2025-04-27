import "./App.css";
import { Component } from "react";
import TodoEditor from "./components/TodoEditor";
import TodoJson from "./todo.json";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Info from "./components/Info";
class App extends Component {
  constructor(props) {
    super(props);
    const initialTodos = TodoJson;
    this.state = {
      todos: initialTodos,
      filter: [],
      idCount:4
    };
  }
  addNewTask = (newTas) =>{
    const newTask=JSON.parse(JSON.stringify({id:`id-${this.state.idCount++}`, text: newTas,completed:null}))
    this.setState((prev) => ({
      todos: [...prev.todos,newTask],
    }))
  }
  delete =(taskToDelete) =>{
    this.setState((prev) => ({
      todos: prev.todos.filter((task) => task.id !== taskToDelete)
    }));
  }
  setFilterInputValue=(inputValue)=>{
    this.setState((prev)=>({
      filter:prev.todos.filter((task)=>task.text.includes(inputValue.trim())),
    }
  ))
  }
  changedCheckbox = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map(todo =>
        todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
        
      )
    }));
  };
  render() {
    return (
      <>
        <Info statistic={this.state.todos}/>
        <TodoEditor addTasks={this.addNewTask} />
        <Filter setFilterInputValue={this.setFilterInputValue} FilteredItem={this.state.filter}/>
        <TodoList tasks={this.state.todos} Delete={this.delete} changedCheckbox={this.changedCheckbox}/>
      </>
    );
  }
}
export default App;
