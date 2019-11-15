import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoListFetchingDataAction } from "./TodoListFetchingDataAction";

import TodoTask from "Modules/TodoTask/TodoTask";

import { db } from "firebase.js";

import {
  TodoWrapper,
  TodoTable,
  InputAddTask,
  ButtonAddTask,
  InputButtonWrapper
} from "shared/TodoListStyles";

export default function TodoList() {
  const [newTask, setNewTask] = useState();

  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  const email = localStorage.getItem("email");

  useEffect(() => {
    dispatch(todoListFetchingDataAction(email));
  }, [dispatch]);

  const addTask = () => {
    db.collection(email).add({
      done: false,
      title: newTask
    });
    setNewTask("");
    dispatch(todoListFetchingDataAction(email));
  };

  return (
    <TodoWrapper>
      <TodoTable>
        <tr>
          <th>LP.</th>
          <th>Title</th>
          <th>edit</th>
          <th>done</th>
          <th>delete</th>
        </tr>
        {!todoList.isFetching &&
          todoList.tasks.map((el, i) => (
            <TodoTask key={el.id} el={el} lp={i}></TodoTask>
          ))}
      </TodoTable>
      <InputButtonWrapper>
        <InputAddTask
          type="text"
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
        ></InputAddTask>
        <ButtonAddTask onClick={() => addTask()}>Add</ButtonAddTask>
      </InputButtonWrapper>
    </TodoWrapper>
  );
}
