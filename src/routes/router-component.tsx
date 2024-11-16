import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const RouterComponent: React.FC<Props> = ({ children }) => {
  return <BrowserRouter basename="/">{children}</BrowserRouter>;
};

export default RouterComponent;
