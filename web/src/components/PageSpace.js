import React from 'react';
import { PageSpaceStyles } from '../styles/PageSpaceStyles';

const PageSpace = ({ children, top, bottom }) => (
  <PageSpaceStyles top={top} bottom={bottom}>
    {children}
  </PageSpaceStyles>
);

export default PageSpace;
