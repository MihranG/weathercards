import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

const ErrorComponent: FC<{ errorMessage: string }> = ({ errorMessage }) => {
  return (
    <div className="error_wrapper">
      <Typography variant="h4" color="error">
        {errorMessage}
      </Typography>
    </div>
  );
};

export default ErrorComponent;
