import React, { useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';

function TaskCard({index, id, taskName, createdDate, status }) {

  return (
    <Card>
      <Card.Body>
        <Card.Title><h2 data-testid={`current-title-${index}`}> Task: {taskName} </h2></Card.Title>
        <Card.Text>
          <h5 data-testid={`current-date-${index}`}> Created date: {createdDate} </h5>
        </Card.Text>
        <Card.Text>
          <h5 data-testid={`current-status-${index}`}> Status: {status} </h5>
        </Card.Text>

        <Button data-testid={`edit-button-${index}`}>Editar</Button>
        <Button data-testid={`delete-button-${index}`}>Deletar</Button>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;