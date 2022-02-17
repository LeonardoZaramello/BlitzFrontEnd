import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

function TaskCard({index, id, taskName, createdDate, status }) {
  return (
    <tr key={ index }>
      <td>{taskName}</td>
      <td>{createdDate}</td>
      <td>{status}</td>
      <td><Button>Edit</Button></td>
      <td><Button>Delete</Button></td>
    </tr>
  );
}

export default TaskCard;