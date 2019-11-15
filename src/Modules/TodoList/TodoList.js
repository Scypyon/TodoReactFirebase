import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoListFetchingDataAction } from "./TodoListFetchingDataAction";

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
  const [editMode, toggleEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState("");

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

  const deleteTask = id => {
    db.collection(email)
      .doc(id)
      .delete();
    dispatch(todoListFetchingDataAction(email));
  };

  const toggleStatus = (currentStatus, id, title) => {
    db.collection(email)
      .doc(id)
      .update({
        done: !currentStatus,
        title: title
      });
    dispatch(todoListFetchingDataAction(email));
  };

  const editTask = (currentStatus, id, title) => {
    db.collection(email)
      .doc(id)
      .update({
        done: currentStatus,
        title: title
      });
    dispatch(todoListFetchingDataAction(email));
    toggleEditMode(!editMode);
    setEditedTask("");
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
            <tr key={el.id}>
              <td>{i}.</td>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    onChange={e => setEditedTask(e.target.value)}
                  ></input>
                ) : (
                  el.title
                )}
              </td>
              <td onClick={() => editTask(el.done, el.id, editedTask)}>edit</td>
              <td onClick={() => toggleStatus(el.done, el.id, el.title)}>
                {el.done ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="fas fa-thumbs-down"></i>
                )}
              </td>
              <td onClick={() => deleteTask(el.id)}>X</td>
            </tr>
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
