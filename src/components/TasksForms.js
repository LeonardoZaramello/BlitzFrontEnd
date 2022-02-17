import React, { useEffect, useState } from "react";

function TasksForms() {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  return (
    <form>
      <label htmlFor="taskName">
        Task Name:
        <input
          type="text"
          id="taskName"
          value={ taskName }
          // onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          value={ description }
          // onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="status">
        Status:
        <select id="status" value={ status } 
        // onChange={ this.handleChange }
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <button
        type="button"
        // onClick={ this.handleSubmit }
      >
        Add task
      </button>
    </form>
  );
}

export default TasksForms;