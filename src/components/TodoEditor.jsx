import { Component } from "react";
import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 420px;
  height: 150px;
  display: block;
  padding-left: 10px;
  padding-top: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 400px;
  height: 80px;
  border: 2px solid #716e6e90;
  border-radius: 10px;
`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #09bd09;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 7px;
  transition-duration: 0.3s;
  &:hover{
    background: purple;
    transition-duration: 0.5s;
  }
`;
class TodoEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
    };
  }
  getValueInput = (event) => {
    event.preventDefault();
    const ValueInput = event.target.elements.input.value;
    this.setState({ textValue: ValueInput}, () => {
      this.props.addTasks(this.state.textValue);
    });
    event.target.elements.input.value=""
  };

  render() {
    return (
      <Form onSubmit={this.getValueInput}>
        <Input name="input" />
        <Button>Create</Button>
      </Form>
    );
  }
}
export default TodoEditor;
