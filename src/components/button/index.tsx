import React, { FC } from 'react'
import classnames from 'classnames';

type Size = 'lg' | 'sm';

type Type = 'primary' | 'default' | 'danger' | 'link';

export interface ButtonProps extends Partial<typeof defaultProps & Omit<NativeProps, 'size'>> {
  className?: string;
  size?: Size;
  // type?: Type;
  style?: React.CSSProperties;
  // disabled?: boolean;
  href?: string;
  autoFocus?: boolean;
}

type NativeProps = React.InputHTMLAttributes<HTMLElement> & React.AreaHTMLAttributes<HTMLElement>

const defaultProps: {
  disabled: boolean;
  type: Type,
} = {
  disabled: false,
  type: 'primary'
}

const Button: FC<ButtonProps> = (props) => {
  const { children, size, type, disabled, href, className, autoFocus, ...restProps } = props
  const classes = classnames(
    'btn',
    className,
    {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      'disabled': (type === 'link') && disabled,
    }
  )
  if (type === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >{children}</a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >{children}</button>
    )
  }
}

Button.defaultProps = defaultProps;

export default Button;