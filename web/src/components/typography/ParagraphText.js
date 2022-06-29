import React from 'react';
import { ParagraphTextStyles } from '../../styles/typography/ParagraphTextStyles';

const ParagraphText = ({ children, ...props }) => (
  <ParagraphTextStyles {...props}>{children}</ParagraphTextStyles>
);

export default ParagraphText;
