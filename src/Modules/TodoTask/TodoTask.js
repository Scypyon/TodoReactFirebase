import React, { useState } from "react";
import { db } from "firebase.js";
import { useDispatch } from "react-redux";

import { todoListFetchingDataAction } from "Modules/TodoList/TodoListFetchingDataAction";

export default function TodoTask({ el, lp }) {
  const [editMode, toggleEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState("");

  const dispatch = useDispatch();

  const email = localStorage.getItem("email");
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

  const editTask = (currentStatus, id) => {
    toggleEditMode(!editMode);
    db.collection(email)
      .doc(id)
      .update({
        done: currentStatus,
        title: editedTask
      });
    if (editMode) {
      dispatch(todoListFetchingDataAction(email));
      setEditedTask("");
    }
  };
  return (
    <tr>
      <td>{lp + 1}.</td>
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
      <td onClick={() => editTask(el.done, el.id)}>
        {editMode ? "save" : "edit"}
      </td>
      <td onClick={() => toggleStatus(el.done, el.id, el.title)}>
        {el.done ? (
          <i className="fas fa-thumbs-up"></i>
        ) : (
          <i className="fas fa-thumbs-down"></i>
        )}
      </td>
      <td onClick={() => deleteTask(el.id)}>X</td>
    </tr>
  );
}
