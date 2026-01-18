import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

const Button = ({ onClick, className, children, variant = 'primary', disabled = false }) => {
  return (
    <button
      className={cn(
        styles.button, 
        styles[variant], 
        className, 
        {
          [styles.disabled]: disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;