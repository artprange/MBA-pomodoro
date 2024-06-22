import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 500px;
    height: 100px;
    border-radius: 8px;
    margin: 1rem;
    color: #fafafa;

    background-color: ${props => props.theme.primary}

    /*${props => {
        return css`
        background-color: ${buttonVariants[props.variant]}
        `
    } }*/
`