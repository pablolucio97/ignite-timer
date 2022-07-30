import styled, { css } from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonProps {
    variant: ButtonVariants
}

const buttonVariants = {
    primary: 'blue',
    secondary: 'yellow',
    danger: 'red',
    success: 'green',
}

export const Container = styled.button<ButtonProps>`
min-width: 120px;
height: 40px;

display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.primary};

/* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }} */
`