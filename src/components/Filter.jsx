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
  margin-bottom: 7px;
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

class Filter extends Component {
  getFilterInputValue = (event) => {
    this.props.setFilterInputValue(event.target.value);
  };
  render() {
    return (
      <>
        <p>Фільтр по імені</p>
        <input
          onChange={this.getFilterInputValue}
          type="text"
          placeholder="Введіть назву"
        />
        <List>
          {this.props.FilteredItem.map((item) => (
            <Item>
              <input type="checkbox" checked={item.completed} />
              {item.text}
              <Button id={item.id} onClick={this.DeleteTask}>
                Delete
              </Button>
            </Item>
          ))}
        </List>
      </>
    );
  }
}
export default Filter;
