import React from "react";
import styled from "styled-components";
import { BsFillPenFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Container>
        <TodoCompo className="Todo">
          <First>
            <figure>
              <img src={user.picture} alt="" />
            </figure>
            <p>
              <b>{user.name}</b> commented...
            </p>
          </First>
          <Second>
            <p
              className={`${task.completed ? "completed" : ""}`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.task}
            </p>
            <div>
              <BsFillPenFill
                icon={BsFillPenFill}
                onClick={() => editTodo(task.id)}
                style={{ cursor: "pointer", fill: "aqua" }}
              />
              <BsFillTrash3Fill
                icon={BsFillTrash3Fill}
                onClick={() => deleteTodo(task.id)}
                style={{ cursor: "pointer", fill: "red" }}
              />
            </div>
          </Second>
        </TodoCompo>
      </Container>
    </>
  );
};

export default Todo;
const Container = styled.div``;
const TodoCompo = styled.div`
  transition: all 300ms ease;
  width: fit-content;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  border-radius: 1.25rem;
  padding: 1rem 2rem;
  figure {
    overflow: hidden;
    img {
      width: 40px;
      border-radius: 50%;
    }
  }
`;
const First = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Second = styled.div`
  width: 100%;
  // background-color: #7d7d7d;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0.75rem 1rem;
  div {
    display: flex;
    gap: 20px;
  }
`;
