import React from 'react';
import { buttonType } from '../../constants/buttonTypes';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';

const Button = ({ children, tag, variant = buttonType.primary, ...props }) => (
  <ButtonStyles variant={variant} as={tag} {...props}>
    {children}
  </ButtonStyles>
);

export default Button;
