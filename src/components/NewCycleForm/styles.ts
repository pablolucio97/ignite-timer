import styled from "styled-components"

export const FormContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
color: ${(props) => props.theme["gray-100"]};
font-size: 1.125 rem;
font-weight: bold;
flex-wrap: wrap;
`

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    `

export const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme["gray-100"]};
    margin: 0 1rem;
    
    &:focus{
        border-bottom: 2px solid ${(props) => props.theme["green-500"]};
    }

    &::placeholder{
        color: ${(props) => props.theme["gray-500"]};
    }

    `

export const TaskInput = styled(BaseInput)`
    flex: 1;
    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`
