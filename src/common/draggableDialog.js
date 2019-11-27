import React from 'react';
import { Paper } from '@material-ui/core';
import Draggable from 'react-draggable';

// 
export const draggableDialog = props => {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
};

export default { draggableDialog };
