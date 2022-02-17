import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskTableHead from "../components/TaskTableHead";

function Home () {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then((response) => response.json())
      .then((tasks) => {
        setTasks(tasks);
        console.log(tasks);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Task List</h1>

      { isLoading ? <h1>Carregando...</h1>
      : (
        <table>
          <TaskTableHead />
          {tasks.map(({ _id, taskName, createdDate, status }, index) => (
            <TaskCard
              key={_id}
              index={index}
              id={_id}
              taskName={taskName}
              createdDate={createdDate}
              status={status}
            />
          ))}
        </table>
      )}
    </div>
  );
}

export default Home;