import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export type ButtonProps = {
  variant?: 'primary' | 'inverted' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  onClick?: () => void;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant = 'primary', backgroundColor, size, children, ...props }: ButtonProps) => {
  const mode = `storybook-button--${variant}`;
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={variant !== 'inverted' ? {backgroundColor} : undefined}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'inverted', 'secondary']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: undefined,
  variant: 'primary',
  size: 'medium',
  onClick: undefined,
};
