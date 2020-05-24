import React, { FC } from 'react'

export interface ButtonProps extends Partial<typeof defaultProps> {
    className?: string;
    size?: string;
    type?: string;
    style?: string;
}

const defaultProps = {}

const Button: FC<ButtonProps> = (props) => { }