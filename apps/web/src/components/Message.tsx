import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = {
  variant: string;
  children?: React.ReactNode;
};

const Message: React.FunctionComponent<Props> = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
