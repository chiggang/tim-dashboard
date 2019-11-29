import React from 'react';
import { Paper } from '@material-ui/core';
import Draggable from 'react-draggable';

// 다이얼로그를 드래그하여 이동함
export const draggableDialog = props => {
  return (
    <Draggable
      bounds="parent"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
};

export default { draggableDialog };
