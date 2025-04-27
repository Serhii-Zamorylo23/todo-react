import { Component } from "react";
import styled from "styled-components";

const Item=styled.li`
    display: flex;
    width: 550px;
    height: 50px;
    border: 1px solid black;
    column-gap: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px 5px 0;
`
const List=styled.ul`
  padding-left: 0;
`
const Button=styled.button`
  width: 180px;
  height: 40px;
  background: #09bd09;
  border: none;
  border-radius: 5px;
  color: white;
  transition-duration: 0.3s;
  &:hover{
    background: purple;
    transition-duration: 0.5s;
  }
`
class TodoList extends Component {
  DeleteTask=(event)=>{
    this.props.Delete(event.target.id)
  }
  changeCheckbox = (event, id) => {
    console.log(id)
    this.props.changedCheckbox(id); 
  };
  render() {
    return (
      <List>
        {this.props.tasks.map((task) => (
          <Item >
            <input type="checkbox" checked={task.completed} onChange={(e) => this.changeCheckbox(e, task.id)} id={task.id}/> 
            {task.text}
            <Button id={task.id} onClick={this.DeleteTask}>Delete</Button>
          </Item>
        ))}
      </List>
    );
  }
}
export default TodoList;
