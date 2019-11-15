import styled from "styled-components";

export const TodoWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const TodoTable = styled.table`
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 70vw;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
    color: white;
  }
`;

export const InputButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 65vw 5vw;
`;

export const InputAddTask = styled.input`
  width: 65vw;
  height: 1.5vw;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  border: 0.05vw solid #4caf50;
`;

export const ButtonAddTask = styled.button`
  width: 5vw;
  height: 1.6vw;
  background-color: #4caf50;
  color: white;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
`;
