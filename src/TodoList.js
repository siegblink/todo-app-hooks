import React from 'react';
import { Delete } from '@material-ui/icons';
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core';

const TodoList = ({ todos, deleteTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={todo} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TodoList;
