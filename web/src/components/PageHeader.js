import React from 'react';
import { PageHeaderStyles } from '../styles/PageHeaderStyles';
import ParagraphText from './typography/ParagraphText';
import { SectionTitle } from './typography/Title';

const PageHeader = ({ title, description, className, children }) => (
  <div className={className}>
    <PageHeaderStyles>
      <SectionTitle>{title}</SectionTitle>
      <ParagraphText>{description}</ParagraphText>
      {children}
    </PageHeaderStyles>
  </div>
);

export default PageHeader;
