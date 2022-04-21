import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = {
  variant?: string;
  children?: React.ReactNode;
};

const Message: React.FunctionComponent<Props> = ({
  variant = 'info',
  children,
}) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
